import React from "react";

export default function Services() {
  return (
    <>
      <section
        className="code-section bg-gradient-to-b from-white to-[#F8FAFC] py-16 lg:py-24"
        id="snk86lc"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <!-- Section Header --> */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] text-white rounded-full px-5 py-2 mb-6 shadow-lg shadow-[#3B82F6]/20">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                ></path>
              </svg>
              <span className="text-sm font-semibold">Our Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2937] mb-4 leading-tight font-heading">
              All
              <span className="bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] bg-clip-text text-transparent pl-2 lg:pl-4">
                Naphtech Services
              </span>
            </h2>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
              From professional programming to office skills and language
              training — everything you need to succeed
            </p>
          </div>

          {/* <!-- Services Grid --> */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6 scroll-reveal translate-y-12 transition-all duration-700 ease-out">
            {/* <!-- Card 1: COC Training --> */}
            <a
              href="/programs/coc-training"
              className="group relative bg-white rounded-2xl border-2 border-[#E5E7EB] p-6 hover:shadow-xl hover:shadow-[#1E3A8A]/10 hover:border-[#1E3A8A]/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-[#1E3A8A] text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl">
                POPULAR
              </div>
              <div className="w-14 h-14 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#1F2937] mb-2 group-hover:text-[#1E3A8A] transition-colors">
                COC Training
              </h3>
              <p className="text-[#6B7280] text-sm mb-3">
                TVET Certificate of Competency — National certification
                recognized across Ethiopia
              </p>
              <div className="flex items-center gap-2 text-[#1E3A8A] text-sm font-semibold">
                <span>Get Certified</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </div>
            </a>

            {/* <!-- Card 2: Full-Stack Development --> */}
            <a
              href="/programs/full-stack-development"
              className="group bg-white rounded-2xl border-2 border-[#E5E7EB] p-6 hover:shadow-xl hover:shadow-[#1E3A8A]/10 hover:border-[#3B82F6]/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#3B82F6] to-[#1E3A8A] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  ></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#1F2937] mb-2 group-hover:text-[#1E3A8A] transition-colors">
                Full-Stack Programming
              </h3>
              <p className="text-[#6B7280] text-sm mb-3">
                Master frontend &amp; backend development — HTML, CSS,
                JavaScript, React, Node.js
              </p>
              <div className="flex items-center gap-2 text-[#3B82F6] text-sm font-semibold">
                <span>Learn More</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </div>
            </a>

            {/* <!-- Card 3: Excel & Office --> */}
            <a
              href="/programs"
              className="group bg-white rounded-2xl border-2 border-[#E5E7EB] p-6 hover:shadow-xl hover:shadow-[#1E3A8A]/10 hover:border-[#10B981]/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                  ></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#1F2937] mb-2 group-hover:text-[#1E3A8A] transition-colors">
                Excel &amp; Office Skills
              </h3>
              <p className="text-[#6B7280] text-sm mb-3">
                Microsoft Excel, Word, PowerPoint — essential skills for any
                career
              </p>
              <div className="flex items-center gap-2 text-[#10B981] text-sm font-semibold">
                <span>Learn More</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </div>
            </a>

            {/* <!-- Card 4: English Language --> */}
            <a
              href="/programs/english-language"
              className="group bg-white rounded-2xl border-2 border-[#E5E7EB] p-6 hover:shadow-xl hover:shadow-[#1E3A8A]/10 hover:border-[#F59E0B]/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#F59E0B] to-[#D97706] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                  ></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#1F2937] mb-2 group-hover:text-[#1E3A8A] transition-colors">
                English Language
              </h3>
              <p className="text-[#6B7280] text-sm mb-3">
                Spoken English, Business English, Academic English for all
                levels
              </p>
              <div className="flex items-center gap-2 text-[#F59E0B] text-sm font-semibold">
                <span>Learn More</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </div>
            </a>

            {/* <!-- Card 5: AI & Prompt Engineering --> */}
            <a
              href="/programs/ai-prompt-engineering"
              className="group bg-white rounded-2xl border-2 border-[#E5E7EB] p-6 hover:shadow-xl hover:shadow-[#1E3A8A]/10 hover:border-[#8B5CF6]/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#1F2937] mb-2 group-hover:text-[#1E3A8A] transition-colors">
                AI &amp; Prompt Engineering
              </h3>
              <p className="text-[#6B7280] text-sm mb-3">
                Learn to use AI tools effectively — ChatGPT, Midjourney &amp;
                more
              </p>
              <div className="flex items-center gap-2 text-[#8B5CF6] text-sm font-semibold">
                <span>Learn More</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </div>
            </a>

            {/* <!-- Card 6: Mobile App Development --> */}
            <a
              href="/programs/mobile-app-development"
              className="group bg-white rounded-2xl border-2 border-[#E5E7EB] p-6 hover:shadow-xl hover:shadow-[#1E3A8A]/10 hover:border-[#EC4899]/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#EC4899] to-[#DB2777] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#1F2937] mb-2 group-hover:text-[#1E3A8A] transition-colors">
                Mobile App Development
              </h3>
              <p className="text-[#6B7280] text-sm mb-3">
                Build iOS &amp; Android apps with React Native &amp; Flutter
              </p>
              <div className="flex items-center gap-2 text-[#EC4899] text-sm font-semibold">
                <span>Learn More</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </div>
            </a>

            {/* <!-- Card 7: Backend/Database --> */}
            <a
              href="/programs"
              className="group bg-white rounded-2xl border-2 border-[#E5E7EB] p-6 hover:shadow-xl hover:shadow-[#1E3A8A]/10 hover:border-[#06B6D4]/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#06B6D4] to-[#0891B2] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                  ></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#1F2937] mb-2 group-hover:text-[#1E3A8A] transition-colors">
                Backend &amp; Databases
              </h3>
              <p className="text-[#6B7280] text-sm mb-3">
                Python, PHP, MySQL, MongoDB — server-side development essentials
              </p>
              <div className="flex items-center gap-2 text-[#06B6D4] text-sm font-semibold">
                <span>Learn More</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </div>
            </a>

            {/* <!-- Card 8: Professional Skills --> */}
            <a
              href="/programs"
              className="group bg-white rounded-2xl border-2 border-[#E5E7EB] p-6 hover:shadow-xl hover:shadow-[#1E3A8A]/10 hover:border-[#EF4444]/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#EF4444] to-[#DC2626] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#1F2937] mb-2 group-hover:text-[#1E3A8A] transition-colors">
                Professional Skills
              </h3>
              <p className="text-[#6B7280] text-sm mb-3">
                Job preparation, interview skills, CV writing &amp; career
                guidance
              </p>
              <div className="flex items-center gap-2 text-[#EF4444] text-sm font-semibold">
                <span>Learn More</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </div>
            </a>
          </div>

          {/* <!-- Bottom Stats Banner --> */}
          <div className="mt-24 bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] rounded-2xl p-8 lg:p-10 text-white">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl lg:text-4xl font-bold mb-1">8+</div>
                <div className="text-white/80 text-sm">Training Programs</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold mb-1">500+</div>
                <div className="text-white/80 text-sm">Students Trained</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold mb-1">95%</div>
                <div className="text-white/80 text-sm">
                  Certification Pass Rate
                </div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold mb-1">1</div>
                <div className="text-white/80 text-sm">Campuses</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
