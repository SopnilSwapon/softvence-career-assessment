import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import Image from 'next/image'

export default function Services() {
  return (
    <div className="flex flex-row justify-between gap-16 items-center py-5 md:px-22 px-8">
     <Card className="w-full border-0 border-r-1 border-gray-100 shadow-none text-black">
      <CardHeader>
        <div className='w-[33px] h-[33px] mb-4 bg-[#ecfceb] flex items-center justify-center rounded-md'>

        <Image
        src="/images/appointment-02-stroke-rounded 1.png"
        alt="appointment logo"
        height={100}
        width={100}
        className='w-[24px] h-[24px]'
        />
        </div>
        <CardTitle className='text-[18px]'>Easy Service Booking</CardTitle>
        <CardDescription className='text-[14px]'>
          Streamlined booking process for clients with service catalogs and availability.
        </CardDescription>
      </CardHeader>
    </Card>
     <Card className="w-full border-0 border-r-1 border-gray-100 shadow-none text-black">
      <CardHeader>
        <div className='w-[33px] h-[33px] mb-4 bg-[#ecfceb] flex items-center justify-center rounded-md'>

        <Image
        src="/images/gps-01-solid-standard 1.png"
        alt="appointment logo"
        height={100}
        width={100}
        className='w-[24px] h-[24px]'
        />
        </div>
        <CardTitle className='text-[18px]'>Real-Time Tracking</CardTitle>
        <CardDescription className='text-[14px]'>
          Monitor job progress, employee hours, and project timelines with live updates.
        </CardDescription>
      </CardHeader>
    </Card>
     <Card className="w-full border-0 border-r-1 border-gray-100 shadow-none text-black">
      <CardHeader>
        <div className='w-[33px] h-[33px] mb-4 bg-[#ecfceb] flex items-center justify-center rounded-md'>

        <Image
        src=""
        alt="appointment logo"
        height={100}
        width={100}
        className='w-[24px] h-[24px]'
        />
        </div>
        <CardTitle className='text-[18px]'>Easy Service Booking</CardTitle>
        <CardDescription className='text-[14px]'>
          Streamlined booking process for clients with service catalogs and availability.
        </CardDescription>
      </CardHeader>
    </Card>
     <Card className="w-full border-0 border-r-1 border-gray-100 shadow-none text-black">
      <CardHeader>
        <div className='w-[33px] h-[33px] mb-4 bg-[#ecfceb] flex items-center justify-center rounded-md'>

        <Image
        src="/images/appointment-02-stroke-rounded 1.png"
        alt="appointment logo"
        height={100}
        width={100}
        className='w-[24px] h-[24px]'
        />
        </div>
        <CardTitle className='text-[18px]'>Easy Service Booking</CardTitle>
        <CardDescription className='text-[14px]'>
          Streamlined booking process for clients with service catalogs and availability.
        </CardDescription>
      </CardHeader>
    </Card>
        </div>
  )
}
