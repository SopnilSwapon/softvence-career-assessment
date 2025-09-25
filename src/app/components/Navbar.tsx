import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-between items-center md:px-30 px-8 py-5">
      <Image
        src="/images/image 7.png"
        alt="logo"
        height={147}
        width={60}
        className="w-[147px] h-[60px]"
      />
      <Link href="/login">
        <button
          className="w-[142px] h-[46px] cursor-pointer flex flex-row justify-start items-center px-[26px] py-[10px] 
         rounded-lg shadow-[0px_8px_16px_0px_rgba(57,164,50,0.24)] font-bold bg-[rgba(59,163,52,1)] text-white"
        >
          Get Started
        </button>
      </Link>
    </div>
  );
}
