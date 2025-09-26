"use client";
import Image from "next/image";
import Link from "next/link";

export default function RoleSection() {
  return (
    <div className="min-h-screen w-full bg-white flex flex-col items-center justify-center px-6 py-20 -mt-16">
      <div className="w-full max-w-4xl flex flex-col items-center">
        <Image
          src="/images/image 7.png"
          alt="logo"
          height={147}
          width={60}
          className="w-[147px] h-[60px] mt-20 mb-8"
        />
        {/* Header */}
        <div className="text-center mb-16 max-w-xl">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Who Are You?
          </h1>
          <p className="text-gray-600 font-semibold">
            Choose the option that best describes you so we can tailor your
            experience.
          </p>
        </div>

        {/* Role Selection Cards */}
        <div className="flex flex-col sm:flex-row gap-8 w-full max-w-2xl">
          {/* Client Card */}
          <Link href="/registration/user-type">
            <div className="group flex-1 border-2 border-primary-100 rounded-2xl p-8 text-center hover:border-primary-200 hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
              <div className="mb-6">
                <Image
                  src="https://api.builder.io/api/v1/image/assets/TEMP/729133f7390c7af09ab8c35f66bb281914c999d1?width=630"
                  alt="Client illustration"
                  width={500}
                  height={500}
                  className="w-full h-auto max-w-48 mx-auto"
                />
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                I am a Client
              </h2>
              <p className="text-gray-600 text-sm">
                Discover services & track progress effortlessly.
              </p>
            </div>
          </Link>
          <Link href="/registration/user-type">
            <div className="group flex-1 bg-white border-2 border-gray-200 rounded-2xl p-8 text-center hover:border-primary-200 hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
              <div className="mb-6">
                <Image
                  src="https://api.builder.io/api/v1/image/assets/TEMP/4e1e1944bf5e8eb12a8376cf4c3c380a0e227b99?width=630"
                  alt="Business owner illustration"
                  width={500}
                  height={500}
                  className="w-full h-auto max-w-48 mx-auto"
                />
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                I am a Business Owner
              </h2>
              <p className="text-gray-600 text-sm">
                Manage jobs, staff & clients with ease.
              </p>
            </div>
          </Link>
          {/* Business Owner Card */}
        </div>

        {/* Optional back link */}
        <div className="mt-12">
          <Link
            href="/"
            className="text-gray-500 hover:text-gray-700 text-sm transition-colors"
          >
            ← Back to homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
// "use client";
// import React, { useState } from "react";
// import {
//   Eye,
//   EyeOff,
//   Mail,
//   User,
//   Lock,
//   ArrowRight,
//   RefreshCw,
// } from "lucide-react";

// // Types
// interface RegisterFormData {
//   first_name: string;
//   last_name: string;
//   email: string;
//   password: string;
//   password_confirmation: string;
//   terms: boolean;
// }

// interface OTPFormData {
//   otp: string;
// }

// interface APIResponse {
//   success: boolean;
//   message: string;
//   data?: any;
// }

// interface FormErrors {
//   first_name?: string;
//   last_name?: string;
//   email?: string;
//   password?: string;
//   password_confirmation?: string;
//   terms?: string;
//   otp?: string;
// }

// // API Service
// class RegistrationAPI {
//   private static baseURL = "https://apitest.softvencefsd.xyz/api";

//   private static async fetchAPI(
//     endpoint: string,
//     data: FormData,
//   ): Promise<APIResponse> {
//     try {
//       const response = await fetch(`${this.baseURL}${endpoint}`, {
//         method: "POST",
//         body: data,
//       });

//       const result = await response.json();

//       return {
//         success: response.ok,
//         message:
//           result.message || (response.ok ? "Success" : "An error occurred"),
//         data: result,
//       };
//     } catch (error) {
//       return {
//         success: false,
//         message: "Network error. Please check your connection.",
//         data: null,
//       };
//     }
//   }

//   static async register(formData: RegisterFormData): Promise<APIResponse> {
//     const data = new FormData();
//     data.append("first_name", formData.first_name);
//     data.append("last_name", formData.last_name);
//     data.append("email", formData.email);
//     data.append("password", formData.password);
//     data.append("password_confirmation", formData.password_confirmation);
//     data.append("terms", formData.terms.toString());

//     return this.fetchAPI("/register", data);
//   }

//   static async resendOTP(email: string): Promise<APIResponse> {
//     const data = new FormData();
//     data.append("email", email);

//     return this.fetchAPI("/resend_otp", data);
//   }

//   static async verifyOTP(email: string, otp: string): Promise<APIResponse> {
//     const data = new FormData();
//     data.append("email", email);
//     data.append("otp", otp);

//     return this.fetchAPI("/verify_otp", data);
//   }
// }

// // Validation functions
// const validateEmail = (email: string): boolean => {
//   const emailRegex = /^\S+@\S+$/i;
//   return emailRegex.test(email);
// };

// const validateOTP = (otp: string): boolean => {
//   const otpRegex = /^\d{6}$/;
//   return otpRegex.test(otp);
// };

// // Main Component
// export default function RegistrationProcess() {
//   const [currentStep, setCurrentStep] = useState<"register" | "verify">(
//     "register",
//   );
//   const [userEmail, setUserEmail] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [message, setMessage] = useState<{
//     type: "success" | "error";
//     text: string;
//   } | null>(null);
//   const [resendCooldown, setResendCooldown] = useState(0);

//   // Form state
//   const [registerFormData, setRegisterFormData] = useState<RegisterFormData>({
//     first_name: "",
//     last_name: "",
//     email: "",
//     password: "",
//     password_confirmation: "",
//     terms: false,
//   });

//   const [otpFormData, setOtpFormData] = useState<OTPFormData>({
//     otp: "",
//   });

//   const [errors, setErrors] = useState<FormErrors>({});

//   // Validation functions
//   const validateRegisterForm = (): boolean => {
//     const newErrors: FormErrors = {};

//     if (!registerFormData.first_name.trim()) {
//       newErrors.first_name = "First name is required";
//     }

//     if (!registerFormData.last_name.trim()) {
//       newErrors.last_name = "Last name is required";
//     }

//     if (!registerFormData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!validateEmail(registerFormData.email)) {
//       newErrors.email = "Invalid email address";
//     }

//     if (!registerFormData.password) {
//       newErrors.password = "Password is required";
//     } else if (registerFormData.password.length < 8) {
//       newErrors.password = "Password must be at least 8 characters";
//     }

//     if (!registerFormData.password_confirmation) {
//       newErrors.password_confirmation = "Please confirm your password";
//     } else if (
//       registerFormData.password !== registerFormData.password_confirmation
//     ) {
//       newErrors.password_confirmation = "Passwords do not match";
//     }

//     if (!registerFormData.terms) {
//       newErrors.terms = "You must accept the terms";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const validateOTPForm = (): boolean => {
//     const newErrors: FormErrors = {};

//     if (!otpFormData.otp) {
//       newErrors.otp = "OTP is required";
//     } else if (!validateOTP(otpFormData.otp)) {
//       newErrors.otp = "OTP must be 6 digits";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // Handle form input changes
//   const handleRegisterInputChange = (
//     field: keyof RegisterFormData,
//     value: string | boolean,
//   ) => {
//     setRegisterFormData((prev) => ({
//       ...prev,
//       [field]: value,
//     }));

//     // Clear error for this field when user starts typing
//     if (errors[field as keyof FormErrors]) {
//       setErrors((prev) => ({
//         ...prev,
//         [field]: undefined,
//       }));
//     }
//   };

//   const handleOTPInputChange = (value: string) => {
//     // Only allow numeric input and limit to 6 characters
//     const numericValue = value.replace(/\D/g, "").slice(0, 6);
//     setOtpFormData({ otp: numericValue });

//     // Clear error when user starts typing
//     if (errors.otp) {
//       setErrors((prev) => ({
//         ...prev,
//         otp: undefined,
//       }));
//     }
//   };

//   // Handle Registration
//   const handleRegister = async () => {
//     if (!validateRegisterForm()) {
//       return;
//     }

//     setIsLoading(true);
//     setMessage(null);

//     const result = await RegistrationAPI.register(registerFormData);

//     if (result.success) {
//       setUserEmail(registerFormData.email);
//       setCurrentStep("verify");
//       setMessage({
//         type: "success",
//         text: "Registration successful! Please check your email for OTP.",
//       });
//     } else {
//       setMessage({ type: "error", text: result.message });
//     }

//     setIsLoading(false);
//   };

//   // Handle OTP Verification
//   const handleVerifyOTP = async () => {
//     if (!validateOTPForm()) {
//       return;
//     }

//     setIsLoading(true);
//     setMessage(null);

//     const result = await RegistrationAPI.verifyOTP(userEmail, otpFormData.otp);

//     if (result.success) {
//       setMessage({
//         type: "success",
//         text: "Email verified successfully! Registration completed.",
//       });
//       // Here you could redirect to dashboard or login page
//       setTimeout(() => {
//         alert("Registration completed successfully! You can now login.");
//       }, 1000);
//     } else {
//       setMessage({ type: "error", text: result.message });
//     }

//     setIsLoading(false);
//   };

//   // Handle Resend OTP
//   const handleResendOTP = async () => {
//     if (resendCooldown > 0) return;

//     setIsLoading(true);
//     const result = await RegistrationAPI.resendOTP(userEmail);

//     if (result.success) {
//       setMessage({ type: "success", text: "OTP resent successfully!" });
//       setResendCooldown(60);
//       const interval = setInterval(() => {
//         setResendCooldown((prev) => {
//           if (prev <= 1) {
//             clearInterval(interval);
//             return 0;
//           }
//           return prev - 1;
//         });
//       }, 1000);
//     } else {
//       setMessage({ type: "error", text: result.message });
//     }

//     setIsLoading(false);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
//       <div className="w-full max-w-md">
//         {/* Progress Indicator */}
//         <div className="mb-8">
//           <div className="flex items-center justify-center space-x-4 mb-4">
//             <div
//               className={`w-10 h-10 rounded-full flex items-center justify-center ${
//                 currentStep === "register"
//                   ? "bg-blue-600 text-white"
//                   : "bg-green-600 text-white"
//               }`}
//             >
//               <User className="w-5 h-5" />
//             </div>
//             <div
//               className={`w-16 h-1 ${
//                 currentStep === "verify" ? "bg-blue-600" : "bg-gray-300"
//               }`}
//             ></div>
//             <div
//               className={`w-10 h-10 rounded-full flex items-center justify-center ${
//                 currentStep === "verify"
//                   ? "bg-blue-600 text-white"
//                   : "bg-gray-300 text-gray-500"
//               }`}
//             >
//               <Mail className="w-5 h-5" />
//             </div>
//           </div>
//           <div className="text-center">
//             <h2 className="text-2xl font-bold text-gray-900">
//               {currentStep === "register" ? "Create Account" : "Verify Email"}
//             </h2>
//             <p className="text-gray-600 mt-1">
//               {currentStep === "register"
//                 ? "Join us today"
//                 : "Enter the OTP sent to your email"}
//             </p>
//           </div>
//         </div>

//         {/* Message Display */}
//         {message && (
//           <div
//             className={`mb-6 p-4 rounded-lg ${
//               message.type === "success"
//                 ? "bg-green-50 text-green-800 border border-green-200"
//                 : "bg-red-50 text-red-800 border border-red-200"
//             }`}
//           >
//             {message.text}
//           </div>
//         )}

//         {/* Registration Form */}
//         {currentStep === "register" && (
//           <div className="bg-white rounded-xl shadow-lg p-8">
//             <div className="space-y-6">
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     First Name
//                   </label>
//                   <input
//                     type="text"
//                     value={registerFormData.first_name}
//                     onChange={(e) =>
//                       handleRegisterInputChange("first_name", e.target.value)
//                     }
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     placeholder="John"
//                   />
//                   {errors.first_name && (
//                     <p className="text-red-500 text-sm mt-1">
//                       {errors.first_name}
//                     </p>
//                   )}
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Last Name
//                   </label>
//                   <input
//                     type="text"
//                     value={registerFormData.last_name}
//                     onChange={(e) =>
//                       handleRegisterInputChange("last_name", e.target.value)
//                     }
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     placeholder="Doe"
//                   />
//                   {errors.last_name && (
//                     <p className="text-red-500 text-sm mt-1">
//                       {errors.last_name}
//                     </p>
//                   )}
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   value={registerFormData.email}
//                   onChange={(e) =>
//                     handleRegisterInputChange("email", e.target.value)
//                   }
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   placeholder="john@example.com"
//                 />
//                 {errors.email && (
//                   <p className="text-red-500 text-sm mt-1">{errors.email}</p>
//                 )}
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Password
//                 </label>
//                 <div className="relative">
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     value={registerFormData.password}
//                     onChange={(e) =>
//                       handleRegisterInputChange("password", e.target.value)
//                     }
//                     className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     placeholder="••••••••"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
//                   >
//                     {showPassword ? (
//                       <EyeOff className="w-5 h-5" />
//                     ) : (
//                       <Eye className="w-5 h-5" />
//                     )}
//                   </button>
//                 </div>
//                 {errors.password && (
//                   <p className="text-red-500 text-sm mt-1">{errors.password}</p>
//                 )}
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Confirm Password
//                 </label>
//                 <div className="relative">
//                   <input
//                     type={showConfirmPassword ? "text" : "password"}
//                     value={registerFormData.password_confirmation}
//                     onChange={(e) =>
//                       handleRegisterInputChange(
//                         "password_confirmation",
//                         e.target.value,
//                       )
//                     }
//                     className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     placeholder="••••••••"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                     className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
//                   >
//                     {showConfirmPassword ? (
//                       <EyeOff className="w-5 h-5" />
//                     ) : (
//                       <Eye className="w-5 h-5" />
//                     )}
//                   </button>
//                 </div>
//                 {errors.password_confirmation && (
//                   <p className="text-red-500 text-sm mt-1">
//                     {errors.password_confirmation}
//                   </p>
//                 )}
//               </div>

//               <div className="flex items-start space-x-3">
//                 <input
//                   type="checkbox"
//                   checked={registerFormData.terms}
//                   onChange={(e) =>
//                     handleRegisterInputChange("terms", e.target.checked)
//                   }
//                   className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
//                 />
//                 <label className="text-sm text-gray-600">
//                   I agree to the{" "}
//                   <a href="#" className="text-blue-600 hover:underline">
//                     Terms of Service
//                   </a>{" "}
//                   and{" "}
//                   <a href="#" className="text-blue-600 hover:underline">
//                     Privacy Policy
//                   </a>
//                 </label>
//               </div>
//               {errors.terms && (
//                 <p className="text-red-500 text-sm">{errors.terms}</p>
//               )}

//               <button
//                 type="button"
//                 onClick={handleRegister}
//                 disabled={isLoading}
//                 className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
//               >
//                 {isLoading ? (
//                   <>
//                     <RefreshCw className="w-5 h-5 animate-spin" />
//                     <span>Creating Account...</span>
//                   </>
//                 ) : (
//                   <>
//                     <span>Create Account</span>
//                     <ArrowRight className="w-5 h-5" />
//                   </>
//                 )}
//               </button>
//             </div>
//           </div>
//         )}

//         {/* OTP Verification Form */}
//         {currentStep === "verify" && (
//           <div className="bg-white rounded-xl shadow-lg p-8">
//             <div className="text-center mb-6">
//               <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Mail className="w-8 h-8 text-blue-600" />
//               </div>
//               <p className="text-gray-600">
//                 We've sent a verification code to
//                 <br />
//                 <span className="font-semibold text-gray-900">{userEmail}</span>
//               </p>
//             </div>

//             <div className="space-y-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Verification Code
//                 </label>
//                 <input
//                   type="text"
//                   value={otpFormData.otp}
//                   onChange={(e) => handleOTPInputChange(e.target.value)}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center text-lg tracking-widest"
//                   placeholder="000000"
//                   maxLength={6}
//                 />
//                 {errors.otp && (
//                   <p className="text-red-500 text-sm mt-1">{errors.otp}</p>
//                 )}
//               </div>

//               <button
//                 type="button"
//                 onClick={handleVerifyOTP}
//                 disabled={isLoading}
//                 className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
//               >
//                 {isLoading ? (
//                   <>
//                     <RefreshCw className="w-5 h-5 animate-spin" />
//                     <span>Verifying...</span>
//                   </>
//                 ) : (
//                   <>
//                     <span>Verify Email</span>
//                     <ArrowRight className="w-5 h-5" />
//                   </>
//                 )}
//               </button>

//               <div className="text-center">
//                 <p className="text-gray-600 text-sm">
//                   Didn't receive the code?{" "}
//                   <button
//                     type="button"
//                     onClick={handleResendOTP}
//                     disabled={resendCooldown > 0 || isLoading}
//                     className="text-blue-600 hover:underline disabled:text-gray-400 disabled:no-underline"
//                   >
//                     {resendCooldown > 0
//                       ? `Resend in ${resendCooldown}s`
//                       : "Resend Code"}
//                   </button>
//                 </p>
//               </div>

//               <div className="text-center">
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setCurrentStep("register");
//                     setMessage(null);
//                     setErrors({});
//                   }}
//                   className="text-gray-500 hover:text-gray-700 text-sm"
//                 >
//                   ← Back to Registration
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
