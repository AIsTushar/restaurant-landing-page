import Image from "next/image";

function Logo() {
  return (
    <div className="">
      <Image
        src="/Logo.png"
        alt="Logo"
        width={100}
        height={100}
        className="h-9 w-auto object-cover"
      />
    </div>
  );
}

export default Logo;
