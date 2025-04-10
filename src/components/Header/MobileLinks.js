import Link from "next/link";

function MobileLinks() {
  return (
    <nav className="flex flex-col items-center justify-center gap-7 text-lg text-red-500">
      <Link href="#" className="">
        Home
      </Link>
      <Link href="#" className="">
        About
      </Link>
      <Link href="#" className="">
        Portfolio
      </Link>
      <Link href="#" className="">
        Clients
      </Link>
      <Link href="#" className="">
        Blog
      </Link>
      <Link href="#" className="">
        Contact
      </Link>
    </nav>
  );
}

export default MobileLinks;
