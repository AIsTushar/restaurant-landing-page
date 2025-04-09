import Image from "next/image";

function Hero() {
  return (
    <div className="flex px-56 pt-26 pb-30">
      <div className="z-10 flex flex-col justify-center gap-4">
        <div className="w-2xl bg-[linear-gradient(90deg,_rgba(189,_31,_23,_0)_32.88%,_rgba(189,_31,_23,_0.7)_100%)]">
          <h2 className="text-6xl leading-[90px] font-bold tracking-[0%] text-white uppercase">
            Taste the authentic Saudi cuisine
          </h2>
        </div>
        <p className="w-[60%] text-lg text-white">
          Among the best Saudi chefs in the world, serving you something beyond
          flavor.
        </p>
        <button className="mt-2 h-fit w-fit bg-yellow-500 px-6 py-2.5 font-semibold uppercase">
          explore menu
        </button>
      </div>
      <div className="relative -ml-44 h-[500px] w-2/3">
        <Image src="/image 1.png" alt="Hero" fill />
        <Image
          src="/Vector.png"
          alt="Vector"
          width={450}
          height={450}
          className="absolute -top-4 -right-4 h-5 w-5"
        />
        <Image
          src="/Offer.png"
          alt="Ofter"
          width={120}
          height={120}
          className="absolute -right-14 -bottom-0 h-28 w-28"
        />
      </div>
    </div>
  );
}

export default Hero;
