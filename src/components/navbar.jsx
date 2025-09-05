"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // ========== Scroll Animation ==========
    const animatedElements = document.querySelectorAll(".scroll-animate");

    const animateObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    animatedElements.forEach((el) => animateObserver.observe(el));

    // ========== Active Nav Highlight ==========
    const sections = document.querySelectorAll("section");

    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");

            // remove active from all links first
            document.querySelectorAll("nav a[href^='#']").forEach((link) => {
              link.classList.remove("active");
            });

            // add active only to the current link
            document
              .querySelectorAll(`nav a[href="#${id}"]`)
              .forEach((link) => link.classList.add("active"));

            // hide mobile menu when navigating
            setMenuOpen(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => navObserver.observe(section));

    // cleanup on unmount
    return () => {
      animatedElements.forEach((el) => animateObserver.unobserve(el));
      sections.forEach((section) => navObserver.unobserve(section));
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 min-w-screen bg-black shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex-shrink-0">
            <a href="#home-section" className="text-2xl font-bold text-white">
              Zainab.
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {["home", "about", "experience", "skills", "projects", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}-section`}
                className="relative text-white pb-1 transition-colors duration-300 after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#ffbd39] after:-translate-x-1/2 after:transition-all after:duration-300 hover:after:w-full [&.active]:text-[#ffbd39] [&.active]:after:w-full"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <div className="flex flex-col space-y-2">
            {["home", "about", "experience", "skills", "projects", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}-section`}
                className="relative text-white pb-1 border-b border-transparent hover:border-[#ffbd39]"
                onClick={() => setMenuOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
