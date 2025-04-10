import Image from "next/image";
import Swiper from "../Popular/Swiper";
import { Play } from "lucide-react";

function Testimonials() {
  return (
    <div className="relative overflow-hidden bg-white px-7 py-7 lg:px-56 lg:py-28">
      {/* Absulte Images */}
      <Image
        src="/221.png"
        alt="image"
        width={200}
        height={200}
        className="absolute top-32 left-0 hidden h-62 w-32 lg:block"
      />

      <Image
        src="/12.png"
        alt="image"
        width={200}
        height={200}
        className="absolute -right-6 bottom-16 hidden h-96 w-96 rotate-8 lg:block"
      />
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex items-center font-bold text-red-800">
            <span className="mr-2 inline-block h-2 w-2 bg-red-800" />
            Crispy, Every Bite Taste
          </div>
          <h2 className="text-3xl font-bold tracking-tight uppercase antialiased lg:text-4xl">
            What Some of my Customers Say
          </h2>
        </div>
        <Swiper className="hidden lg:flex" />
      </div>

      {/* Testimonials */}
      <div className="mt-6 flex w-full flex-col-reverse lg:mt-16 lg:h-[500px] lg:flex-row">
        <div className="relative h-[400px] overflow-hidden bg-yellow-400 px-7 py-7 lg:h-auto lg:w-1/2 lg:px-16 lg:py-16">
          <div className="absolute -bottom-5 -left-3 lg:bottom-12">
            <Image
              src="/Group.svg"
              alt="vector"
              width={200}
              height={200}
              className="h-18 w-16"
            />
          </div>
          <div className="mx-auto flex h-full flex-col justify-between">
            {/* Quote Text */}
            <div className="relative">
              <p className="text-lg leading-relaxed text-black lg:text-lg">
                <span className="absolute -top-2 -left-3 text-4xl">“</span>
                You can&apos;t go wrong with Chicken Mandi, I had twice. The
                chicken was cooked perfectly, juicy & soft (usually mandi
                chicken is a bit dry). I would definitely recommend it.
              </p>
            </div>

            {/* Author and Location */}
            <div className="mt-4 flex w-full items-center justify-between border-b pb-3">
              <div>
                <p className="font-semibold text-black">KHALID ALDAWSRY</p>
                <p className="text-sm text-gray-600">Jeddah, Saudi</p>
              </div>

              {/* Profile Image */}
              <div className="relative flex h-full items-center justify-center">
                <Image
                  src="/person.png"
                  alt="Profile"
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full"
                />
                <span className="absolute -bottom-3 z-10 h-1 w-full bg-red-500"></span>
              </div>
            </div>
          </div>
        </div>
        <div
          className="relative h-[300px] bg-cover bg-center lg:h-full lg:w-2/3"
          style={{ backgroundImage: "url('/video.png')" }}
        >
          {/* Black overlay */}
          <div className="absolute inset-0 z-0 bg-black/30" />
          <div className="absolute top-1/2 left-1/2 z-10 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full">
            <Image
              src="/play.png"
              alt="Play"
              width={20}
              height={20}
              className="h-12 w-12"
            />
          </div>
        </div>
      </div>
      <div className="mt-6 flex w-full items-center justify-center lg:hidden">
        <Swiper />
      </div>

      <div>
        <Image
          src="/Group.svg"
          alt="vector"
          width={200}
          height={200}
          className="absolute right-0 -bottom-10 h-12 w-12"
        />
      </div>
    </div>
  );
}

export default Testimonials;
