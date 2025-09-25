import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0F3B34] text-white" id="footer">
      <div className="relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-start  py-[100px]">
            <Image
              src="https://api.builder.io/api/v1/image/assets/TEMP/9589d55488e80c6f1aa997c9acb158e820eddaad?width=414"
              alt="ScapeSync"
              height={400}
              width={400}
              className="h-12 w-auto"
            />
            <p className="text-[#CFD8D6] max-w-md">
              Your all-in-one platform for job scheduling, employee management,
              and client service built to keep your business running smoothly
              from anywhere.
            </p>

            <div className="flex flex-col items-start gap-4">
              <div className="flex items-center gap-4">
                <a
                  aria-label="App Store"
                  href="#app-store"
                  className="inline-flex items-center gap-3 rounded-md border border-primary-700/80 px-4 py-3"
                >
                  <svg
                    width="28"
                    height="34"
                    viewBox="0 0 28 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                  >
                    <path
                      d="M23.281 17.888c.016-1.255.35-2.486.97-3.578a8.1 8.1 0 012.58-2.667c-.68-.97-1.578-1.77-2.621-2.333a7.79 7.79 0 00-3.391-.913c-2.53-.266-4.983 1.51-6.272 1.51-1.314 0-3.299-1.486-5.437-1.442a7.6 7.6 0 00-3.91 1.165 7.76 7.76 0 00-2.828 2.938c-2.914 5.037-.74 12.44 2.05 16.512 1.396 1.994 3.028 4.221 5.164 4.142 2.09-.086 2.871-1.33 5.393-1.33 2.499 0 3.232 1.33 5.411 1.28 2.242-.036 3.655-2.039 5.002-4.052a14.9 14.9 0 001.288-4.652 6.85 6.85 0 01-3.197-3.648 7.47 7.47 0 01-.001-3.912z"
                      fill="currentColor"
                    />
                    <path
                      d="M19.165 5.718c1.222-1.466 1.825-3.349 1.679-5.251-1.868.196-3.594 1.087-4.833 2.497a7.05 7.05 0 00-1.366 2.357 7.33 7.33 0 00-.357 2.7 6.6 6.6 0 003.703-.592 6.63 6.63 0 001.174-1.711z"
                      fill="currentColor"
                    />
                  </svg>
                  <div className="leading-none">
                    <div className="text-xs">Download on the</div>
                    <div className="text-xl font-semibold">App Store</div>
                  </div>
                </a>
                <a
                  aria-label="Google Play"
                  href="#google-play"
                  className="inline-flex items-center gap-3 rounded-md border border-primary-700/80 px-4 py-3"
                >
                  <svg
                    width="29"
                    height="33"
                    viewBox="0 0 29 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                  >
                    <path
                      d="M13.717 16.052L.807 29.911c.001.003.001.006.002.009.397 1.505 1.755 2.613 3.368 2.613.645 0 1.25-.176 1.769-.485l.04-.025 14.531-8.481-6.8-7.49z"
                      fill="#EA4335"
                    />
                    <path
                      d="M26.777 13.692l-.012-.008-6.273-3.678-7.068 6.362 7.093 7.172 6.24-3.642c1.094-.598 1.837-1.765 1.837-3.11 0-1.337-.732-2.497-1.817-3.096z"
                      fill="#FBBC04"
                    />
                    <path
                      d="M.806 3.607A4.51 4.51 0 000 4.514V29.005c0 .314.041.618.12.906L13.48 16.407.806 3.607z"
                      fill="#4285F4"
                    />
                    <path
                      d="M13.812 16.759l6.681-6.756L5.98 1.49A3.63 3.63 0 004.178.987C2.565.987 1.204 2.097.808 3.603c0 .001-.001.003-.001.004l13.005 13.152z"
                      fill="#34A853"
                    />
                  </svg>
                  <div className="leading-none">
                    <div className="text-xs">Download on the</div>
                    <div className="text-xl font-semibold">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="flex gap-6 opacity-90 mb-6">
            <a aria-label="YouTube" href="#" className="hover:opacity-100">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.761 7.2s-.235-1.655-.957-2.381C21.89 3.862 20.869 3.858 20.4 3.802 17.044 3.558 12.005 3.558 12.005 3.558h-.01S6.956 3.558 3.6 3.802c-.469.056-1.49.06-2.404 1.017C.474 5.545.244 7.2.244 7.2S0 9.145 0 11.086v1.819c0 1.94.239 3.886.239 3.886s.234 1.655.952 2.381c.914.956 2.114.924 2.648 1.027C5.761 20.381 12 20.438 12 20.438s5.044-.01 8.4-.249c.469-.056 1.491-.061 2.405-.018.722-.726.957-2.381.957-2.381s.239-1.941.239-3.886v-1.819c0-1.94-.239-3.886-.239-3.886zM9.52 15.113V8.367l6.483 3.385-6.483 3.361z"
                  fill="white"
                />
              </svg>
            </a>
            <a aria-label="X" href="#" className="hover:opacity-100">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.326 1.904h3.374l-7.37 8.423L23 21.79h-6.789l-5.317-6.952-6.084 6.952H1.434l7.883-9.01L1 1.904h6.961l4.806 6.354 5.559-6.354zm-1.184 17.867h1.87L6.945 3.817H4.94L17.142 19.77z"
                  fill="white"
                />
              </svg>
            </a>
            <a aria-label="Facebook" href="#" className="hover:opacity-100">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0C5.373 0 0 5.373 0 12c0 5.628 3.875 10.35 9.101 11.647V15.667H6.627V12h2.474v-1.58c0-4.084 1.85-5.977 5.86-5.977.76 0 2.072.15 2.608.299v3.324c-.283-.03-.775-.044-1.386-.044-1.967 0-2.727.745-2.727 2.683V12h3.92l-.673 3.667h-3.246v8.245C19.396 23.195 24 18.135 24 12 24 5.373 18.627 0 12 0z"
                  fill="white"
                />
              </svg>
            </a>
            <a aria-label="Instagram" href="#" className="hover:opacity-100">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2.161c3.206 0 3.586.014 4.847.07 1.172.052 1.805.249 2.227.413.558.215.961.477 1.378.894.422.422.68.82.896 1.378.164.422.361 1.06.413 2.227.056 1.266.07 1.646.07 4.847 0 3.205-.014 3.585-.07 4.846-.052 1.172-.249 1.805-.413 2.227-.215.558-.478.961-.895 1.378a3.42 3.42 0 01-1.524.895c-.578.214-1.216.41-2.383.462-1.266.056-1.646.07-4.846.07-3.206 0-3.586-.014-4.847-.07-1.172-.052-1.805-.249-2.227-.413a3.42 3.42 0 01-1.378-.895 3.42 3.42 0 01-.895-1.524c-.164-.578-.361-1.216-.413-2.383C2.184 15.572 2.17 15.192 2.17 11.99c0-3.206.014-3.585.07-4.846.052-1.172.248-1.805.412-2.227.215-.558.478-.961.895-1.378.423-.422.821-.68 1.379-.896.558-.214 1.195-.41 2.362-.462 1.261-.056 1.64-.07 4.847-.07zM12 0C8.742 0 8.334.014 7.055.07 5.78.127 4.903.333 4.144.628a4.82 4.82 0 00-2.127 1.387A4.82 4.82 0 00.629 4.14C.333 4.903.127 5.775.07 7.05.014 8.334 0 8.742 0 12c0 3.258.014 3.666.07 4.945.057 1.275.263 2.151.559 2.911.31.793.718 1.463 1.388 2.129a4.82 4.82 0 002.127 1.128c.793.31 1.665.516 2.94.572C8.33 23.981 8.738 23.995 11.996 23.995c3.258 0 3.666-.014 4.946-.07 1.275-.056 2.151-.262 2.911-.558a4.82 4.82 0 002.129-1.388 4.82 4.82 0 001.128-2.127c.31-.793.516-1.665.572-2.94.056-1.28.07-1.688.07-4.946 0-3.258-.014-3.666-.07-4.945-.056-1.275-.262-2.151-.558-2.911A4.82 4.82 0 0021.985 2.016 4.82 4.82 0 0019.858.887c-.793-.31-1.665-.516-2.94-.572C15.66.014 15.252 0 11.995 0z"
                  fill="white"
                />
                <path
                  d="M12 5.836A6.165 6.165 0 105.836 12 6.165 6.165 0 0012 5.836zm0 10.162A3.998 3.998 0 118.002 12 3.998 3.998 0 0112 15.998z"
                  fill="white"
                />
                <circle cx="18.408" cy="5.592" r="1.439" fill="white" />
              </svg>
            </a>
          </div>
        </div>
        <div className="border-t border-white/20">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-4 text-center text-sm text-white/80">
            © 2021-2025, ScapeSync. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
