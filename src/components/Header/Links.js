import Link from "next/link";

function Links() {
  return (
    <nav className="hidden items-center justify-center gap-7 text-xs text-white lg:flex">
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

export default Links;
