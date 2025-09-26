"use client";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft } from "lucide-react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function EmailVerification() {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [loadingVerify, setLoadingVerify] = useState(false);
  const [loadingResend, setLoadingResend] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const email = localStorage.getItem("registering-email");
  const navigate = useRouter();

  const handleInputChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // 🔹 Resend OTP
  const handleResendCode = async () => {
    setError(null);
    setSuccessMessage(null);
    setLoadingResend(true);

    try {
      const formData = new FormData();
      formData.append("email", email! || "");

      const response = await axios.post(
        "https://apitest.softvencefsd.xyz/api/resend_otp",
        formData,
      );

      const data = response.data as {
        success?: boolean;
        message?: string;
        status: number;
      };

      if (data.status === 201) {
        setSuccessMessage(data.message || "OTP sent successfully!");
        setCode(["", "", "", "", "", ""]);
      } else {
        setError(data.message || "Failed to resend OTP. Please try again.");
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error("Resend OTP error:", err);
      setError(
        err.response?.data?.message ||
          "An unexpected error occurred. Please try again later.",
      );
    } finally {
      setLoadingResend(false);
    }
  };

  // 🔹 Verify OTP
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    const verificationCode = code.join("");
    if (verificationCode.length !== 6) {
      setError("Please enter the 6-digit verification code.");
      return;
    }

    setLoadingVerify(true);
    try {
      const formData = new FormData();
      formData.append("email", email || "");
      formData.append("otp", verificationCode);

      const response = await axios.post(
        "https://apitest.softvencefsd.xyz/api/verify_otp",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      const data = response.data as { status: boolean; message?: string };

      if (data.status) {
        localStorage.removeItem("registering-email");
        navigate.push("/registration/register-success");
      } else {
        setError(data.message || "OTP verification failed. Please try again.");
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error("Verify OTP error:", err);
      setError(
        err.response?.data?.message ||
          "An unexpected error occurred. Please try again later.",
      );
    } finally {
      setLoadingVerify(false);
    }
  };

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  return (
    <div className="min-h-screen bg-white flex -mt-16 items-center justify-center px-6 py-8">
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
            Please check your email!
          </h1>
          <p className="text-gray-600">
            We have emailed a 6-digit confirmation code to {email}, please enter
            the code in below box to verify your email.
          </p>
        </div>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        {successMessage && (
          <p className="text-green-500 text-sm text-center">{successMessage}</p>
        )}

        {/* Verification Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Code Input */}
          <div className="flex justify-center gap-3">
            {code.map((digit, index) => (
              <input
                key={index}
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleInputChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-14 h-14 text-center text-lg font-medium border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                disabled={loadingVerify}
              />
            ))}
          </div>

          {/* Verify Button */}
          <button
            type="submit"
            disabled={code.join("").length !== 6 || loadingVerify}
            className="w-full bg-primary hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition-all shadow-md shadow-primary/20"
          >
            {loadingVerify ? "Verifying..." : "Verify"}
          </button>

          {/* Resend Code */}
          <div className="text-center text-sm">
            <span className="text-gray-600">Do not have a code? </span>
            <button
              type="button"
              onClick={handleResendCode}
              className="font-semibold text-primary hover:text-primary-700 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loadingResend}
            >
              {loadingResend ? "Resending..." : "Resend code"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
