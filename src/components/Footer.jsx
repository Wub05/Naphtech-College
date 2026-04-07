import React from "react";

export default function Footer() {
  return (
    <>
      <footer
        id="global-footer"
        className="code-section bg-[#0F172A] pt-16 lg:pt-20 pb-8"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <!-- Main Footer Content -->  */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-white/10">
            {/* <!-- Column 1: About --> */}
            <div className="sm:col-span-2 lg:col-span-1">
              <a href="/" className="inline-block mb-6">
                <img
                  src="https://assets.ls-assets.com/uploads/a4760528-5203-4a76-b611-9f57eecf3b2c/b93b2705-0afe-452f-a2d6-445c4fb14642.webp?w=200"
                  alt="Naphtech College Logo"
                  className="h-12 w-auto"
                />
              </a>
              <p className="text-[#9CA3AF] mb-6 leading-relaxed">
                Naphtech Computer and COC Training Center — Empowering future
                tech professionals with practical skills and industry-recognized
                certifications.
              </p>
              {/* <!-- Social Links --> */}
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-[#3B82F6] rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-[#3B82F6] rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-[#3B82F6] rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-[#3B82F6] rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* <!-- Column 2: Quick Links --> */}
            <div>
              <h4 className="text-white font-bold text-lg mb-5">Programs</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/programs/full-stack-development"
                    className="text-[#9CA3AF] hover:text-white transition-colors duration-200"
                  >
                    Full-Stack Development
                  </a>
                </li>
                <li>
                  <a
                    href="/programs/frontend-development"
                    className="text-[#9CA3AF] hover:text-white transition-colors duration-200"
                  >
                    Frontend Development
                  </a>
                </li>
                <li>
                  <a
                    href="/programs/ai-prompt-engineering"
                    className="text-[#9CA3AF] hover:text-white transition-colors duration-200"
                  >
                    AI &amp; Prompt Engineering
                  </a>
                </li>
                <li>
                  <a
                    href="/programs/mobile-app-development"
                    className="text-[#9CA3AF] hover:text-white transition-colors duration-200"
                  >
                    Mobile App Development
                  </a>
                </li>
                <li>
                  <a
                    href="/programs/coc-training"
                    className="text-[#9CA3AF] hover:text-white transition-colors duration-200"
                  >
                    COC Training
                  </a>
                </li>
                <li>
                  <a
                    href="/programs/english-language"
                    className="text-[#9CA3AF] hover:text-white transition-colors duration-200"
                  >
                    English Programs
                  </a>
                </li>
              </ul>
            </div>

            {/* <!-- Column 3: Company --> */}
            <div>
              <h4 className="text-white font-bold text-lg mb-5">Company</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/about"
                    className="text-[#9CA3AF] hover:text-white transition-colors duration-200"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/why-choose-us"
                    className="text-[#9CA3AF] hover:text-white transition-colors duration-200"
                  >
                    Why Choose Us
                  </a>
                </li>
                <li>
                  <a
                    href="/success-stories"
                    className="text-[#9CA3AF] hover:text-white transition-colors duration-200"
                  >
                    Success Stories
                  </a>
                </li>
                <li>
                  <a
                    href="/career-support"
                    className="text-[#9CA3AF] hover:text-white transition-colors duration-200"
                  >
                    Career Support
                  </a>
                </li>
                <li>
                  <a
                    href="/blog"
                    className="text-[#9CA3AF] hover:text-white transition-colors duration-200"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="/faq"
                    className="text-[#9CA3AF] hover:text-white transition-colors duration-200"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* <!-- Column 4: Contact --> */}
            <div>
              <h4 className="text-white font-bold text-lg mb-5">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[#3B82F6] flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  <div className="text-[#9CA3AF]">
                    <span className="text-white font-medium">
                      Bale Robe Campus
                    </span>
                    <br />
                    Bale Robe, Oromia, Ethiopia
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[#3B82F6] flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  <div className="text-[#9CA3AF]">
                    <span className="text-white font-medium">
                      Bale Goba Campus
                    </span>
                    <br />
                    Bale Goba, Oromia, Ethiopia
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[#3B82F6] flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <a
                    href="mailto:info@naphtechcollege.com"
                    className="text-[#9CA3AF] hover:text-white transition-colors duration-200"
                  >
                    info@naphtechcollege.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* <!-- Bottom Bar --> */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[#6B7280] text-sm text-center sm:text-left">
              © 2026 Naphtech College. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-[#6B7280] hover:text-white text-sm transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-[#6B7280] hover:text-white text-sm transition-colors duration-200"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
