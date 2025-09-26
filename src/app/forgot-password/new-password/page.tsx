"use client";
import { useState, useRef, useEffect } from "react";
import { Eye, EyeOff, ChevronLeft } from "lucide-react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface VerifyOtpResponse {
  token?: string;
  message?: string;
  [key: string]: unknown;
}
export default function Page() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const otpInputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const [token, setToken] = useState(
    "pgHUpTTvTuLJHwRfaAORKBECNeKg1dbctPyYSBQs",
  );
  const [otpVerified, setOtpVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null); // <-- store email in state
  const navigate = useRouter();

  // localStorage in client only
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedEmail = localStorage.getItem("forgetting-email");
      setEmail(storedEmail);
      if (!storedEmail) {
        setError("Email not found. Please go back to forgot password page.");
      }
    }
  }, []);

  const validateEmail = (email: string) =>
    /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

  const handleOtpInputChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 5) {
        otpInputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpInputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);
    const verificationOtp = otp.join("");

    if (!email || !validateEmail(email)) {
      setError("Email is required for verification.");
      return;
    }

    if (verificationOtp.length !== 6) {
      setError("Please enter the 6-digit OTP.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post<VerifyOtpResponse>(
        "https://apitest.softvencefsd.xyz/api/forgot-verify-otp",
        { email, otp: verificationOtp },
      );

      setToken(response.data?.token || "");
      setSuccessMessage(response.data?.message || "OTP verified successfully!");
      setOtpVerified(true);
      navigate.push("/forgot-password/reset-success");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.response?.data?.message || "OTP verification failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitNewPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    if (!password || !confirmPassword) {
      setError("New password and confirm password are required.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post<{ message?: string }>(
        "https://apitest.softvencefsd.xyz/api/reset-password",
        { password, password_confirmation: confirmPassword, token },
      );

      setSuccessMessage(
        response.data?.message || "Password updated successfully!",
      );
      navigate.push("/login");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to update password.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!otpVerified) {
      otpInputRefs.current[0]?.focus();
    }
  }, [otpVerified]);

  return (
    <div className="min-h-screen bg-white flex -mt-16 items-center justify-center px-6 py-8">
      <div className="w-full max-w-md space-y-8">
        {/* Back Button */}
        {!otpVerified && (
          <Link
            href="/forgot-password"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-700"
          >
            <ChevronLeft size={18} />
            Back
          </Link>
        )}

        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-800 mx-auto text-center">
            {otpVerified ? "Set New Password" : "Verify OTP"}
          </h1>
          <p className="text-gray-600 text-center">
            {otpVerified
              ? "Please enter your new password below."
              : `We've sent an OTP to ${
                  email || "your email"
                }. Please enter the code to verify.`}
          </p>
        </div>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        {successMessage && (
          <p className="text-green-500 text-sm text-center">{successMessage}</p>
        )}

        {!otpVerified ? (
          <form onSubmit={handleVerifyOtp} className="space-y-6">
            {/* OTP Input */}
            <div className="flex justify-center gap-3">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => {
                    otpInputRefs.current[index] = el;
                  }}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpInputChange(index, e.target.value)}
                  onKeyDown={(e) => handleOtpKeyDown(index, e)}
                  className="w-14 h-14 text-center text-lg font-medium border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  disabled={loading}
                />
              ))}
            </div>

            {/* Verify OTP Button */}
            <button
              type="submit"
              disabled={otp.join("").length !== 6 || loading}
              className="w-full bg-primary hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition-all shadow-md shadow-primary/20"
            >
              {loading ? "Verifying OTP..." : "Verify OTP"}
            </button>
          </form>
        ) : (
          <form onSubmit={handleSubmitNewPassword} className="space-y-6">
            {/* New Password Field */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="New password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-4 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                disabled={loading}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-500 hover:text-gray-700"
                disabled={loading}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Confirm Password Field */}
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full px-3 py-4 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                disabled={loading}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-500 hover:text-gray-700"
                disabled={loading}
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Update Button */}
            <button
              type="submit"
              className="w-full bg-primary hover:brightness-110 text-white font-semibold py-3 px-4 rounded-lg transition-all shadow-md shadow-primary/20"
              disabled={loading}
            >
              {loading ? "Updating Password..." : "Update Password"}
            </button>
          </form>
        )}
        <Link
          href="/login"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-700"
        >
          <ChevronLeft size={18} />
          Back
        </Link>
      </div>
    </div>
  );
}
