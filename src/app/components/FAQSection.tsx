'use client';

import ExpandableList from "./ExpandableList";

const FAQSection = () => {
  const faqItems = [
    {
      id: 'faq-1',
      question: 'Is the app free to use?',
      answer: 'Yes! We offer a free plan for individuals and small teams. Paid plans unlock more features for scaling businesses.',
      isExpanded: true
    },
    {
      id: 'faq-2',
      question: 'Can I assign multiple employees to one job?',
      answer: 'Absolutely! You can assign multiple team members to a single job and track their individual progress and time contributions.'
    },
    {
      id: 'faq-3',
      question: 'Does it work on both mobile and desktop?',
      answer: 'Yes, ScapeSync is available on iOS, Android, and through our web platform, ensuring you can manage your business from anywhere.'
    },
    {
      id: 'faq-4',
      question: 'Is GPS tracking always on?',
      answer: 'GPS tracking is only active during work hours and can be controlled by employees. We prioritize privacy while ensuring accurate job tracking.'
    }
  ]

  return (
    <section className="relative w-full text-black py-16 sm:py-20 md:py-24">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <img 
          src="/images/img_ellipse_29.png" 
          alt="" 
          className="absolute top-0 left-0 w-[180px] sm:w-[200px] md:w-[246px] h-auto"
        />
        <img 
          src="/images/img_ellipse_30.png" 
          alt="" 
          className="absolute top-[200px] sm:top-[300px] md:top-[400px] right-0 w-[150px] sm:w-[180px] md:w-[210px] h-auto"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-[38px] sm:leading-[48px] md:leading-[57px] mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-base font-normal leading-base">
            Quick answers to help you get the most out of our app.
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-[1200px] mx-auto">
          <ExpandableList
            items={faqItems}
            allowMultiple={false}
            className=""
          />
        </div>
      </div>
    </section>
  )
}

export default FAQSection