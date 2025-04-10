import { Facebook, Twitter } from "lucide-react";
import Card from "./Card";

function Footer() {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat px-7 py-7 text-center text-white sm:px-10 md:px-56 lg:py-28"
      style={{ backgroundImage: "url('/Footer.jpg')" }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 z-0 bg-black/80" />

      {/* Actual content */}
      <div className="relative z-10">
        <p className="text-3xl font-bold text-white lg:text-4xl">
          We ready to have you the best dining experiences
        </p>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

        <div className="mt-26">
          <div className="mb-4 flex justify-center gap-4">
            <div className="rounded-full border-1 border-white p-3">
              <Facebook className="h-5 w-5" />
            </div>
            <div className="rounded-full border-1 border-white p-3">
              <Facebook className="h-5 w-5" />
            </div>
            <div className="rounded-full border-1 border-white p-3">
              <Facebook className="h-5 w-5" />
            </div>
            <div className="rounded-full border-1 border-white p-3">
              <Facebook className="h-5 w-5" />
            </div>
          </div>
          <p className="text-lg text-white">© 2023 All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
