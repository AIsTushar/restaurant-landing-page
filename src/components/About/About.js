"use client";

import { Medal, Package, PackageCheck, PhoneCall } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Feature from "./Feature";

function About() {
  const [activeTab, setActiveTab] = useState("About");

  // Content for each tab
  const tabContent = {
    About: (
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl leading-10 font-bold text-gray-900">
          EXCEPTIONAL CULINARY AND DELICIOUS FOOD
        </h2>

        <p className="text-xs leading-5 text-black">
          Welcome to our restaurant, where every dish tells a story and every
          ingredient is chosen with care. We blend tradition with innovation to
          create unforgettable flavors that celebrate both local and global
          cuisine. Whether you&apos;re here for a quick bite or a full-course
          meal, we promise an experience that satisfies both heart and soul.
        </p>
      </div>
    ),
    Experience: (
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl leading-10 font-bold text-gray-900">
          A DINING EXPERIENCE TO REMEMBER
        </h2>

        <p className="text-xs leading-5 text-black">
          From the moment you walk through our doors, you&apos;ll be immersed in
          a warm and welcoming ambiance. Our team is passionate about
          hospitality, offering attentive service and beautifully plated dishes
          made with seasonal ingredients. Whether it&apos;s your first visit or
          your fiftieth, we strive to make every meal special.
        </p>
      </div>
    ),
    Contact: (
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl leading-10 font-bold text-gray-900">
          GET IN TOUCH WITH US
        </h2>

        <p className="text-xs leading-5 text-black">
          We&apos;d love to hear from you! Whether you have questions, feedback,
          or want to make a reservation, feel free to reach out. Visit us at our
          location, call us directly, or drop us a message online — we&apos;re
          always here to serve you with a smile.
        </p>
      </div>
    ),
  };

  return (
    <section className="relative bg-white px-56 py-24">
      <div className="mx-auto flex gap-8">
        <div className="relative w-1/2">
          <div className="">
            <Image src="/about.png" alt="About" width={500} height={500} />
          </div>
          <div className="absolute top-5 left-5 z-10">
            <Image
              src="/MarketPlace.png"
              alt="MarketPlace"
              width={500}
              height={500}
              className="h-30 w-48"
            />
          </div>
        </div>

        {/* Right Side: Text, Tabs, and Contact Info */}
        <div className="flex w-1/2 flex-col gap-6">
          {/* Tabs */}
          <div className="flex gap-4 border-b border-red-800">
            {["About", "Experience", "Contact"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex cursor-pointer items-center justify-center px-2 py-1 text-xs font-semibold ${
                  activeTab === tab ? "bg-red-800 text-white" : "text-black"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-4">{tabContent[activeTab]}</div>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            <button className="bg-yellow-500 px-6 py-2.5 font-semibold uppercase">
              about more
            </button>
            <div className="flex items-center gap-2">
              <PhoneCall className="h-4 w-4 text-red-800" />
              <span className="text-sm font-bold text-black">+88 3426 465</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 flex flex-col gap-26 md:flex-row">
        {/* Feature 1: Fast Delivery */}
        <Feature
          icon={Package}
          title="FAST DELIVERY"
          description="Within 30 minutes"
        />

        {/* Feature 2: Absolute Dining */}
        <Feature
          icon={Medal}
          title="ABSOLUTE DINING"
          description="Best Buffet Restaurant"
        />

        {/* Feature 3: Pickup Delivery */}
        <Feature
          icon={PackageCheck}
          title="PICKUP DELIVERY"
          description="Grab your food order"
        />
      </div>

      <div className="absolute right-0 bottom-36">
        <Image
          src="/side.png"
          alt="Rectangle"
          width={500}
          height={500}
          className="h-66 w-36"
        />
      </div>
    </section>
  );
}

export default About;
