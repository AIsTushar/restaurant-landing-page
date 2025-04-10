"use client";

import { useState } from "react";
import Links from "./Links";
import Logo from "./Logo";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div class="flex h-20 items-center justify-between px-7 lg:h-28 lg:px-56">
      <div className="flex items-center gap-12">
        <Logo />
        <Links />
      </div>

      <button className="hidden bg-yellow-500 px-6 py-2.5 font-semibold uppercase lg:block">
        Book a table
      </button>

      {/* Hamburger */}

      <button
        className="relative flex h-6 w-6 items-center justify-center lg:hidden"
        onClick={handleClick}
      >
        <span
          className={`absolute h-0.5 w-6 rounded bg-black transition-all duration-300 dark:bg-white ${isOpen ? "rotate-45" : "-translate-y-2"}`}
        />

        <span
          className={`absolute h-0.5 w-6 rounded bg-black transition-all duration-300 dark:bg-white ${isOpen ? "opacity-0" : "opacity-100"}`}
        />

        <span
          className={`absolute h-0.5 w-6 rounded bg-black transition-all duration-300 dark:bg-white ${isOpen ? "-rotate-45" : "translate-y-2"}`}
        />
      </button>
    </div>
  );
}

export default Header;
