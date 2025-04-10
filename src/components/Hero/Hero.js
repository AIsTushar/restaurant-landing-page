import Image from "next/image";

function Hero() {
  return (
    <div className="flex flex-col px-7 pt-8 lg:flex-row lg:px-56 lg:pt-26 lg:pb-30">
      <div className="z-10 flex flex-col justify-center gap-4">
        <div className="lg:w-2xl lg:bg-[linear-gradient(90deg,_rgba(189,_31,_23,_0)_32.88%,_rgba(189,_31,_23,_0.7)_100%)]">
          <h2 className="text-3xl font-bold tracking-[0%] text-white uppercase lg:text-6xl lg:leading-[90px]">
            Taste the authentic Saudi cuisine
          </h2>
        </div>
        <p className="w-full text-lg text-white lg:w-[60%]">
          Among the best Saudi chefs in the world, serving you something beyond
          flavor.
        </p>
        <button className="mt-2 h-fit w-fit bg-yellow-500 px-6 py-2.5 font-semibold uppercase">
          explore menu
        </button>
      </div>
      <div className="relative mt-8 h-[300px] lg:mt-0 lg:-ml-44 lg:h-[500px] lg:w-2/3">
        <Image src="/image 1.png" alt="Hero" fill className="z-10 lg:z-0" />
        <Image
          src="/Vector.png"
          alt="Vector"
          width={450}
          height={450}
          className="absolute -top-5 right-0 h-12 w-12 lg:-top-4 lg:-right-4 lg:h-5 lg:w-5"
        />
        <Image
          src="/Offer.png"
          alt="Ofter"
          width={120}
          height={120}
          className="absolute right-2 bottom-2 h-28 w-28 lg:-right-14 lg:-bottom-0"
        />
      </div>
    </div>
  );
}

export default Hero;
