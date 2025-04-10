import Image from "next/image";

function Logo() {
  return (
    <div className="">
      <Image
        src="/Logo.png"
        alt="Logo"
        width={100}
        height={100}
        className="h-8 w-auto object-cover lg:h-9"
      />
    </div>
  );
}

export default Logo;
