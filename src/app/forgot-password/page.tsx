"use client";
import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface ForgotPasswordResponse {
  message: string;
  data: { status: boolean };
  [key: string]: unknown;
}
export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const navigate = useRouter();

  const validateEmail = (email: string) => {
    return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    if (!email || !validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post<ForgotPasswordResponse>(
        "https://apitest.softvencefsd.xyz/api/forgot-password",
        {
          email,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      const data: ForgotPasswordResponse = response.data;
      if (data.status === 201) {
        setSuccessMessage(
          data.message || "Password reset link sent to your email.",
        );
        localStorage.setItem("forgetting-email", email);
        navigate.push("/forgot-password/new-password"); // Redirect to new password page with email
      } else {
        setError(
          (data && (data as ForgotPasswordResponse).message) ||
            "Failed to send reset link. Please try again.",
        );
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col -mt-16">
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-8">
        <div className="w-full max-w-md space-y-8">
          {/* Back Button */}
          <Link
            href="/login"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-700"
          >
            <ChevronLeft size={18} />
            Back
          </Link>

          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-gray-800">
              Forgot your password?
            </h1>
            <p className="text-gray-600">
              Please enter the email address associated with your account, and
              we will email you a link to reset your password.
            </p>
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          {successMessage && (
            <p className="text-green-500 text-sm text-center">
              {successMessage}
            </p>
          )}

          {/* Reset Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                disabled={loading}
              />
            </div>

            {/* Reset Button */}
            <button
              type="submit"
              className="w-full bg-primary hover:brightness-110 text-white font-semibold py-3 px-4 rounded-lg transition-all shadow-md shadow-primary/20"
              disabled={loading}
            >
              {loading ? "Sending..." : "Reset Password"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
