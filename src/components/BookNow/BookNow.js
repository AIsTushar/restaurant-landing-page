"use client";

import { useState } from "react";

function BookNow() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    people: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat px-7 py-7 text-center text-white lg:px-56 lg:py-28"
      style={{ backgroundImage: "url('/booknow.jpg')" }}
    >
      <div className="text-left lg:w-1/2">
        <div className="mb-4 flex items-center gap-2">
          <div className="h-2 w-2 bg-red-600"></div>
          <h3 className="text-lg font-semibold text-red-600">Book Now</h3>
        </div>
        <h2 className="mb-4 text-4xl font-bold md:text-5xl">BOOK YOUR TABLE</h2>
        <p className="mb-8 text-gray-400">
          Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
          molestie vel, ornare non id blandit netus.
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-500 bg-transparent p-4 text-white placeholder-gray-400 focus:border-red-600 focus:outline-none"
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-500 bg-transparent p-4 text-white placeholder-gray-400 focus:border-red-600 focus:outline-none"
            />
          </div>
          <div className="relative">
            <input
              type="date"
              name="date"
              placeholder="Reservation Date"
              value={formData.date}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-500 bg-transparent p-4 text-white placeholder-gray-400 focus:border-red-600 focus:outline-none"
            />
            <svg
              className="absolute top-1/2 right-4 h-5 w-5 -translate-y-1/2 transform text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div className="relative">
            <input
              type="number"
              name="people"
              placeholder="Total People"
              value={formData.people}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-500 bg-transparent p-4 text-white placeholder-gray-400 focus:border-red-600 focus:outline-none"
            />
            <svg
              className="absolute top-1/2 right-4 h-5 w-5 -translate-y-1/2 transform text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <div className="md:col-span-2">
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="h-32 w-full resize-none rounded-md border border-gray-500 bg-transparent p-4 text-white placeholder-gray-400 focus:border-red-600 focus:outline-none"
            ></textarea>
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              className="bg-yellow-500 px-6 py-2.5 font-semibold text-black uppercase lg:block"
            >
              BOOK NOW
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookNow;
