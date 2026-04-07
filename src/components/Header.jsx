import React from "react";

export default function Header() {
  return (
    <>
      <header
        id="global-header"
        className="code-section fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* <!-- Logo --> */}
            <a href="/" data-logo="" className="flex items-center">
              <img
                src="https://assets.ls-assets.com/uploads/a4760528-5203-4a76-b611-9f57eecf3b2c/b93b2705-0afe-452f-a2d6-445c4fb14642.webp?w=200"
                alt="Naphtech College Logo"
                className="h-10 lg:h-12 w-auto"
              />
            </a>

            {/* <!-- Desktop Navigation --> */}
            <nav className="hidden lg:flex items-center gap-8">
              <a
                href="/programs"
                className="text-gray-600 hover:text-[#1E3A8A] font-medium transition-colors"
              >
                Programs
              </a>
              <a
                href="/about"
                className="text-gray-600 hover:text-[#1E3A8A] font-medium transition-colors"
              >
                About Us
              </a>
              <a
                href="/success-stories"
                className="text-gray-600 hover:text-[#1E3A8A] font-medium transition-colors"
              >
                Success Stories
              </a>
              <a
                href="/contact"
                className="text-gray-600 hover:text-[#1E3A8A] font-medium transition-colors"
              >
                Contact
              </a>
              <a
                href="/admissions"
                className="ml-4 px-6 py-2.5 bg-[#1E3A8A] hover:bg-[#1E40AF] text-white font-semibold rounded-lg transition-colors"
              >
                Apply Now
              </a>
            </nav>

            {/* <!-- Mobile Menu Button --> */}
            <button
              id="mobile-menu-btn"
              className="lg:hidden p-2 text-gray-700 hover:text-[#1E3A8A]"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* <!-- Mobile Navigation --> */}
        <div
          id="mobile-menu"
          className="lg:hidden hidden bg-white border-t border-gray-100"
        >
          <nav className="px-4 py-4 space-y-1">
            <a
              href="/programs"
              className="block px-4 py-3 text-gray-700 hover:text-[#1E3A8A] hover:bg-gray-50 rounded-lg font-medium"
            >
              Programs
            </a>
            <a
              href="/about"
              className="block px-4 py-3 text-gray-700 hover:text-[#1E3A8A] hover:bg-gray-50 rounded-lg font-medium"
            >
              About Us
            </a>
            <a
              href="/success-stories"
              className="block px-4 py-3 text-gray-700 hover:text-[#1E3A8A] hover:bg-gray-50 rounded-lg font-medium"
            >
              Success Stories
            </a>
            <a
              href="/contact"
              className="block px-4 py-3 text-gray-700 hover:text-[#1E3A8A] hover:bg-gray-50 rounded-lg font-medium"
            >
              Contact
            </a>
            <a
              href="/admissions"
              className="block mt-4 px-4 py-3 bg-[#1E3A8A] hover:bg-[#1E40AF] text-white font-semibold text-center rounded-lg"
            >
              Apply Now
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
