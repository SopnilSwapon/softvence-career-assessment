'use client';
import Image from 'next/image';
import List from './common.tsx/List';
import Button from './common.tsx/Button';

const HeroSection = () => {
  const handleGetStarted = () => {
    // Handle get started action
    const downloadSection = document.getElementById('download')
    if (downloadSection) {
      downloadSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <Image
          src="/images/img_ellipse_24.png"
          alt="background"
          width={238}
          height={678}
          className="absolute left-0 top-0 w-[119px] sm:w-[159px] md:w-[179px] lg:w-[238px] h-auto"
        />
        <Image
          src="/images/img_ellipse_26.png"
          alt="background"
          width={826}
          height={1100}
          className="absolute right-0 top-[28px] w-[413px] sm:w-[550px] md:w-[660px] lg:w-[826px] h-auto"
        />
        <Image
          src="/images/img_vector_7621.svg"
          alt="decorative"
          width={414}
          height={18}
          className="absolute left-[149px] sm:left-[199px] md:left-[249px] lg:left-[298px] top-[179px] sm:top-[239px] md:top-[289px] lg:top-[359px] w-[207px] sm:w-[276px] md:w-[331px] lg:w-[414px] h-auto"
        />
      </div>

      <div className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="flex justify-between items-center py-5 w-full max-w-[1202px] mx-auto">
          <Image
            src="/images/img_image_7.png"
            alt="ScapeSync Logo"
            width={146}
            height={60}
            className="w-[73px] sm:w-[98px] md:w-[117px] lg:w-[146px] h-auto"
          />

          <Button
            text="Get Started"
            text_font_size="text-[16px]"
            text_font_weight="font-bold"
            text_line_height="leading-[19px]"
            text_color="text-white"
            text_text_transform="capitalize"
            fill_background_color="#3ba334"
            effect_box_shadow="0px 8px 16px #39a4323d"
            border_border_radius="rounded-[8px]"
            padding="py-3 px-[26px]"
            onClick={handleGetStarted}
            layout_width="auto"
            position="relative"
            margin=""
            variant="primary"
            size="medium"
            className=""
          />
        </header>

        {/* Hero Content */}
        <div className="flex flex-col lg:flex-row items-start justify-between pt-[170px] sm:pt-[140px] md:pt-[120px] lg:pt-[190px] pb-[100px] sm:pb-[120px] md:pb-[140px] lg:pb-[160px]">
          {/* Left Content */}
          <div className="w-full lg:w-[42%] mb-12 lg:mb-0">
            <h1 className="text-[42px] sm:text-[56px] md:text-[67px] lg:text-[84px] font-bold leading-[46px] sm:leading-[61px] md:leading-[73px] lg:leading-[92px] text-[#212b36] font-['Public_Sans'] mb-8 sm:mb-10 md:mb-12 lg:mb-16">
              All Your Jobs <br />
              One Smart App
            </h1>
            
            <p className="text-[14px] sm:text-[15px] md:text-[15px] lg:text-[16px] font-normal leading-[20px] sm:leading-[22px] md:leading-[23px] lg:leading-[24px] text-[#637381] font-['Public_Sans'] mb-8 sm:mb-10 md:mb-12 lg:mb-16 max-w-[400px]">
              Built for business owners, employees, and clients streamline job scheduling, service tracking, and team management in one powerful app.
            </p>

            {/* App Store Buttons */}
            <List gap="gap-[18px]" className="flex-col sm:flex-row">
              <div className="flex items-center gap-3 border border-[#abdaa9] rounded-[6px] bg-white p-1 w-[140px]">
                <Image
                  src="/images/img_apple.svg"
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
                  src="/images/img_playstore.svg"
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
            </List>
          </div>

          {/* Right Content - Phone Image */}
          <div className="w-full lg:w-[58%] flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                src="/images/img_ellipse_26.png"
                alt="phone background"
                width={826}
                height={1100}
                className="w-[413px] sm:w-[550px] md:w-[660px] lg:w-[826px] h-auto"
              />
            </div>
          </div>
        </div>

        {/* Build for Everyone Section */}
        <div className="relative flex justify-end items-start mb-[100px] sm:mb-[120px] md:mb-[140px] lg:mb-[160px]">
          <div className="relative w-full max-w-[550px] text-center">
            <Image
              src="/images/img_frame_2147227474.svg"
              alt="decorative"
              width={240}
              height={10}
              className="absolute right-[50px] top-[53px] w-[120px] sm:w-[160px] md:w-[192px] lg:w-[240px] h-auto"
            />
            <h2 className="text-[24px] sm:text-[32px] md:text-[38px] lg:text-[48px] font-bold leading-[29px] sm:leading-[38px] md:leading-[46px] lg:leading-[57px] text-[#212b36] font-['Public_Sans'] mb-3">
              Build for Everyone
            </h2>
            <p className="text-[12px] sm:text-[13px] md:text-[13px] lg:text-[14px] font-normal leading-[18px] sm:leading-[19px] md:leading-[20px] lg:leading-[21px] text-[#637381] font-['Public_Sans']">
              Whether you are booking services, managing tasks, or running operations, we have designed the perfect experience for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection