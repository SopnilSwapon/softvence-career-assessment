import Image from "next/image";

function Testimonials() {
  const testimonials = [
    {
        img: "/images/Ellipse 452 (2).png",
      name: "Farzana H.",
      role: "Owner, CleanPro Services",
      quote:
        "This app completely changed the way we manage our team. Assigning jobs takes minutes, and we never miss an update.",
    },
    {
                img: "/images/Ellipse 452 (3).png",
      name: "Ahmed R.",
      role: "Technician",
      quote:
        "I love how easy it is to see my daily tasks and track my time. It makes my job stress-free.",
    },
    {
                img: "/images/Ellipse 452 (4).png",
      name: "Rafiq M.",
      role: "Homeowner",
      quote:
        "As a client, I love being able to see exactly when my service is on the way. No calls, no guessing — just clear updates.",
    },
  ];
  return (
    <section id="testimonials" className="max-w-[1200px] mx-auto px-6 lg:px-8 py-24">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
          What Our Users Are Saying
        </h2>
        <p className="text-gray-600 mt-4">
          Real stories from clients, employees, and business owners who use our
          app every day.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="rounded-2xl bg-white p-6 shadow-[0_16px_32px_-4px_rgba(146,171,145,0.10)]"
          >
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-primary/15 text-primary flex items-center justify-center font-semibold">
               <Image
               src={t.img}
               alt={t.name}
               height={100}
               width={100}
               className="w-[50px] h-[50px] rounded-full"
               />
              </div>
              <div>
                <div className="font-semibold text-gray-800">{t.name}</div>
                <div className="text-sm text-gray-600">{t.role}</div>
              </div>
            </div>
            <p className="mt-5 text-gray-600">{t.quote}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;