import Image from "next/image";

function AudienceSection() {
  return (
    <section
      className="max-w-[1200px] mx-auto px-6 text-gray-800 lg:px-8 py-20 space-y-20"
    >
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold">
          Build for Everyone
        </h2>
        <p className="mt-2">
          Whether you are booking services, managing tasks, or running
          operations, we have designed the perfect experience for you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <span className="inline-flex border border-[#3ba334] rounded-full px-3 py-1 text-sm font-semibold text-[#3ba334]">
            Users
          </span>
          <h3 className="mt-6 text-2xl font-bold text-blue-gray-900">
            Book services, track progress and stay updated
          </h3>
          <p className="mt-4 text-gray-600 text-lg">
            Easily schedule appointments, get real-time updates, and enjoy a
            smooth, transparent service experience.
          </p>
          <ul className="mt-6 space-y-4">
            <li className="pl-6 border-l-4 border-primary text-gray-800">
              Book services in seconds
            </li>
            <li className="pl-6 border-l-4 border-primary/70 text-gray-800">
              Track real-time job updates
            </li>
            <li className="pl-6 border-l-4 border-primary/40 text-gray-800">
              Schedule appointments at your convenience
            </li>
          </ul>
        </div>
        <div className="relative">
          <Image
            src="https://api.builder.io/api/v1/image/assets/TEMP/60d1f2a3770b414a7f89deeafe9b8b431e6bf40c?width=1220"
            alt="App screenshots"
            width={1220}
            height={200}
            className="w-full rounded-2xl"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1 relative">
          <Image
            src="https://api.builder.io/api/v1/image/assets/TEMP/aa4a2252b4983e69983e76f896d2b75114fafc6b?width=1220"
            alt="Dashboard"
            width={200}
            height={200}
            className="w-full rounded-2xl "
          />
        </div>
        <div className="order-1 lg:order-2 text-center lg:text-left">
          <span className="inline-flex rounded-full border border-[#3ba334] px-3 py-1 text-sm font-semibold text-[#3ba334]">
            Business Owners
          </span>
          <h3 className="mt-6 text-2xl font-bold text-blue-gray-900">
            Assign jobs, monitor performance, and streamline operations.
          </h3>
          <p className="mt-4 text-gray-600 text-lg">
            Gain full control of your workforce with real-time tracking, smart
            scheduling, and service management in one app.
          </p>
          <ul className="mt-6 space-y-4">
            <li className="pl-6 border-l-4 border-primary text-gray-800">
              Assign jobs to the right team member
            </li>
            <li className="pl-6 border-l-4 border-primary/70 text-gray-800">
              Monitor performance in real time
            </li>
            <li className="pl-6 border-l-4 border-primary/40 text-gray-800">
              Manage clients and services seamlessly
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <span className="inline-flex border border-[#3ba334] rounded-full px-3 py-1 text-sm font-semibold text-[#3ba334]">
            Employees
          </span>
          <h3 className="mt-6 text-2xl font-bold text-blue-gray-900">
            See tasks, track time, and navigate routes with ease.
          </h3>
          <p className="mt-4 text-gray-600 text-lg">
            Everything you need to manage your workday from job assignments to
            optimized routes and time logging.
          </p>
          <ul className="mt-6 space-y-4">
            <li className="pl-6 border-l-4 border-primary text-gray-800">
              Assign jobs to the right team member
            </li>
            <li className="pl-6 border-l-4 border-primary/70 text-gray-800">
              Monitor performance in real time
            </li>
            <li className="pl-6 border-l-4 border-primary/40 text-gray-800">
              Manage clients and services seamlessly
            </li>
          </ul>
        </div>
        <div className="relative">
          <Image
            src="https://api.builder.io/api/v1/image/assets/TEMP/717d1b350c22e0fa29f4793fc09fcdc50d9d258c?width=1220"
            alt="Mobile app"
               width={200}
            height={200}
            className="w-full rounded-2xl "
          />
        </div>
      </div>
    </section>
  );
}

export default AudienceSection;