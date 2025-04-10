import { Clock, Facebook, Twitter } from "lucide-react";
import Card from "./Card";

function Footer() {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat px-7 py-7 text-center text-white sm:px-10 md:px-56 lg:py-28"
      style={{ backgroundImage: "url('/footer.jpg')" }}
    >
      {/* Black overlay */}
      <div className="absolute inset-0 z-0 bg-black/80" />

      {/* Actual content */}
      <div className="relative z-10">
        <p className="text-3xl font-bold text-white lg:text-4xl">
          We ready to have you the best dining experiences
        </p>

        <div className="mt-12 flex flex-col items-center justify-between gap-8 lg:flex-row">
          <Card
            icon={Clock}
            title="Opening Hours"
            infoOne="Monday - Friday"
            infoTwo="10:00 AM to 11:00 PM"
          />
          <Card
            icon={Clock}
            title="Lets Talk"
            infoOne="Phone: 123-456-7890"
            infoTwo="Fax: 123-456-7890"
          />
          <Card
            icon={Clock}
            title="Book a Table"
            infoOne="Email: demo@website.com"
            infoTwo="Support: support@website.com"
          />
          <Card
            icon={Clock}
            title="Our Address"
            infoOne="123 Main St, City"
            infoTwo="States of America"
          />
        </div>

        <div className="mt-12 lg:mt-26">
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
          <p className="text-lg text-white">© 2025 All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
