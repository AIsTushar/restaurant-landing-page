import Links from "./Links";
import Logo from "./Logo";
import Link from "next/link";

function Header() {
  return (
    <div class="flex h-28 items-center justify-between px-56">
      <div className="flex items-center gap-12">
        <Logo />
        <Links />
      </div>
      <button className="bg-yellow-500 px-6 py-2.5 font-semibold uppercase">
        Book a table
      </button>
    </div>
  );
}

export default Header;
