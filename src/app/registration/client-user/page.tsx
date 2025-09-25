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
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="md:min-w-[480px] min-w-[300px]">
        <CardHeader>
          <CardTitle className="text-2xl">Create your Account</CardTitle>
          <CardDescription>When sports Meets smart Tech.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="first_name">First name</Label>
                <Input id="first-name" placeholder="Max" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last_name">Last name</Label>
                <Input id="last-name" placeholder="Robinson" required />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Confirm Password</Label>
              <Input id="confirm_password" type="confirm-password" />
            </div>
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                name="terms"
                className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label className="text-sm text-gray-600">
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
            <Button type="submit" className="w-full">
              Create an account
            </Button>
          </div>
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
