
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

function FAQ() {
  return (
    <section
      id="faq"
      className="max-w-[1200px] mx-auto px-6 lg:px-0 my-10 lg:my-[165px]"
    >
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 mt-4">
          Quick answers to help you get the most out of our app.
        </p>
      </div>
      <div className="mt-16 w-fulls">
        <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
          <AccordionItem
            value="item-1"
            className="rounded-xl border border-primary/20 mb-4"
          >
            <AccordionTrigger className="px-4 hover:no-underline py-6 text-left">
              Is the app free to use?
            </AccordionTrigger>
            <AccordionContent className="pl-10 pb-6 pr-4 text-gray-600 mt-4">
              Yes! We offer a free plan for individuals and small teams. Paid
              plans unlock more features for scaling businesses.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className="rounded-xl border border-primary/20 mb-4"
          >
            <AccordionTrigger className="px-4 hover:no-underline py-6 text-left">
              Can I assign multiple employees to one job?
            </AccordionTrigger>
            <AccordionContent className="pl-10 pb-6 pr-4 text-gray-600 mt-4">
              Absolutely. Create jobs and assign multiple team members with
              roles and time tracking.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-3"
            className="rounded-xl border border-primary/20 mb-4"
          >
            <AccordionTrigger className="px-4 hover:no-underline py-6 text-left">
              Does it work on mobile and desktop?
            </AccordionTrigger>
            <AccordionContent className="pl-10 pb-6 pr-4 text-gray-600 mt-4">
              Yes, access your dashboard on desktop and our mobile apps for iOS
              and Android.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-4"
            className="rounded-xl !border border-primary/20 mb-4"
          >
            <AccordionTrigger className="px-4 hover:no-underline py-6 text-left">
              Is GPS tracking always on?
            </AccordionTrigger>
            <AccordionContent className="pl-10 pb-6 pr-4 text-gray-600 mt-4">
              Location permissions are transparent and configurable. Tracking is
              only active during jobs.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}

export default FAQ;