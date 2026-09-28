"use client";

import { useState } from "react";
import { navItems } from "@/data/nav";
import { profile } from "@/data/profile";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 sm:px-6">
        {/* Traffic-light style dots, purely decorative */}
        <div className="hidden items-center gap-1.5 sm:flex" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-pink" />
          <span className="h-2.5 w-2.5 rounded-full bg-blue-soft" />
          <span className="h-2.5 w-2.5 rounded-full bg-silver" />
        </div>

        <a
          href="#home"
          className="rounded-sm border border-ink/30 bg-white px-2 py-1 font-mono text-[11px] text-ink/70 sm:mr-auto"
        >
          {profile.siteUrl}
        </a>

        {/* Desktop nav */}
        <nav
          aria-label="Primary"
          className="ml-auto hidden items-center gap-6 md:flex"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="link-underline font-mono text-xs uppercase tracking-[0.12em] text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="ml-auto flex h-9 w-9 flex-col items-center justify-center gap-1.5 border border-ink bg-white md:hidden"
        >
          <span className="sr-only">
            {isOpen ? "Close menu" : "Open menu"}
          </span>
          <span
            className={`block h-0.5 w-5 bg-ink transition-transform ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-ink transition-opacity ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-ink transition-transform ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu panel */}
      <nav
        id="mobile-menu"
        aria-label="Mobile"
        className={`overflow-hidden border-t border-ink bg-white transition-[max-height] duration-300 md:hidden ${
          isOpen ? "max-h-96" : "invisible max-h-0 border-t-0"
        }`}
      >
        <ul className="flex flex-col divide-y divide-ink/10">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={closeMenu}
                className="block px-6 py-4 font-mono text-sm uppercase tracking-[0.12em] text-ink"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
