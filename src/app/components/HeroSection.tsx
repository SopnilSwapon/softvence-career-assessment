import Image from 'next/image';

const HeroSection = () => {

  return (
    <section className="relative w-full md:pl-30 pl-8">

      <div className="relative w-full max-w-[1440px] mx-auto">

        {/* Hero Content */}
        <div className="flex flex-col sm:flex-row items-start justify-between">
          {/* Left Content */}
          <div className="w-full pt-10 md:pt-27 lg:w-[42%] mb-12 lg:mb-0">
            <h1 className="text-[42px] sm:text-[56px] md:text-[67px] lg:text-[84px] font-bold leading-[46px] sm:leading-[61px] md:leading-[73px] lg:leading-[92px] text-[#212b36] font-['Public_Sans'] mb-2 md:mb-4">
              All Your Jobs <br />
              One Smart App
            </h1>
            
            <p className="text-[14px] sm:text-[15px] md:text-[15px] lg:text-[16px] font-normal leading-[20px] sm:leading-[22px] md:leading-[23px] lg:leading-[24px] text-[#637381] font-['Public_Sans'] mb-4 md:mb-16 max-w-[400px]">
              Built for business owners, employees, and clients streamline job scheduling, service tracking, and team management in one powerful app.
            </p>

            {/* App Store Buttons */}
            <div className='flex-col sm:flex-row gap-4 flex'>

              <div className="flex items-center gap-3 border border-[#abdaa9] rounded-[6px] bg-white p-1 w-[140px]">
                <Image
                  src="/images/Apple.png"
                  alt="Apple"
                  width={22}
                  height={26}
                  className="w-[22px] h-[26px]"
                />
                <div className="flex flex-col">
                  <span className="text-[9px] font-normal leading-[11px] text-[#212b36] font-['Public_Sans']">
                    Download on the
                  </span>
                  <span className="text-[18px] font-semibold leading-[22px] text-[#212b36] font-['Public_Sans']">
                    App Store
                  </span>
                </div>
              </div>
              
              <div className="flex items-center gap-3 border border-[#abdaa9] rounded-[6px] bg-white p-1 w-[160px]">
                <Image
                  src="/images/Playstore.png"
                  alt="Google Play"
                  width={22}
                  height={26}
                  className="w-[22px] h-[26px]"
                />
                <div className="flex flex-col">
                  <span className="text-[9px] font-normal leading-[11px] text-[#212b36] font-['Public_Sans']">
                    Download on the
                  </span>
                  <span className="text-[18px] font-semibold leading-[22px] text-[#212b36] font-['Public_Sans']">
                    Google Play
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Image */}
          <div className="w-full lg:w-[58%] pt-3 flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                src="/images/Rectangle 161124256@2x.png"
                alt="phone background"
                width={826}
                height={1100}
                className="w-[413px] sm:w-[550px] md:w-[660px] lg:w-[826px] h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection