"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface RegisterFormData {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  password_confirmation: string;
  terms: boolean;
}

export default function Page() {
  const router = useRouter();
  const { handleSubmit, register } = useForm<RegisterFormData>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const onSubmit: SubmitHandler<RegisterFormData> = async (data) => {
    setError(null);
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("first_name", data.first_name);
      formData.append("last_name", data.last_name);
      formData.append("email", data.email);
      formData.append("password", data.password);
      formData.append("password_confirmation", data.password_confirmation);
      formData.append("terms", String(data.terms));

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const res: { status: number; data: any } = await axios.post(
        "https://apitest.softvencefsd.xyz/api/register",
        formData,
      );

      // Axios automatically parses JSON response
      const payload = res.data;

      if (res.status !== 200 && res.status !== 201) {
        throw new Error(payload?.message || "Registration failed");
      }

      // Save email for OTP verification
      localStorage.setItem("registering-email", data.email);

      // Redirect to email verification page
      router.push("/registration/email-verification");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error("Registration error:", err);
      setError(
        err.response?.data?.message || err.message || "Something went wrong",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="md:min-w-[480px] min-w-[300px]">
        <CardHeader>
          <CardTitle className="text-2xl">Create your Account</CardTitle>
          <CardDescription>When sports Meets smart Tech.</CardDescription>
        </CardHeader>
        <CardContent>
          {error && (
            <div className="mb-3 p-3 bg-red-50 text-red-600 rounded border border-red-200">
              {error}
            </div>
          )}
          <form id="register" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="first_name">First name</Label>
                  <Input
                    id="first_name"
                    placeholder="Max"
                    required
                    {...register("first_name", { required: true })}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="last_name">Last name</Label>
                  <Input
                    id="last_name"
                    placeholder="Robinson"
                    required
                    {...register("last_name", { required: true })}
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  {...register("email", { required: true })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  required
                  {...register("password", { required: true })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password_confirmation">Confirm Password</Label>
                <Input
                  id="password_confirmation"
                  type="password"
                  required
                  {...register("password_confirmation", { required: true })}
                />
              </div>
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  {...register("terms")}
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to the{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Privacy Policy
                  </a>
                </label>
              </div>
              <Button
                type="submit"
                id="register"
                className="w-full"
                disabled={loading}
              >
                {loading ? "Registering..." : "Create an account"}
              </Button>
            </div>
          </form>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href={"/login"} className="underline">
              Login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
