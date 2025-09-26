import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div className="min-h-screen bg-white flex -mt-16 items-center justify-center px-6 py-8">
      <div className="w-full max-w-md space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <Image
            src="/images/Group.png"
            height={200}
            width={200}
            alt="user creating successful logo"
            className="mx-auto"
          />
          <h1 className="text-3xl font-bold text-gray-800">
            Account Created Successfully
          </h1>
          <p className="text-gray-600">
            Your account is set up! Just verify your email to get started.
          </p>
        </div>

        {/* Verify Button */}
        <Link href="/login">
          <button
            type="submit"
            className="w-full bg-primary hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-[11px] px-4 rounded-lg transition-all shadow-md shadow-primary/20"
          >
            Go To Login
          </button>
        </Link>
      </div>
    </div>
  );
}
