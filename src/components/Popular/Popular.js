import Image from "next/image";
import Card from "./Card";
import Swiper from "./Swiper";

function Popular() {
  return (
    <div className="relative bg-[#FBF7F2] px-7 py-7 lg:px-56 lg:py-28">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex items-center font-bold text-red-800">
            <span className="mr-2 inline-block h-2 w-2 bg-red-800" />
            Crispy, Every Bite Taste
          </div>
          <h2 className="text-4xl font-bold tracking-tight uppercase antialiased">
            POPULAR FOOD ITEMS
          </h2>
        </div>
        <Swiper />
      </div>
      {/* Cards */}
      <div className="mt-16 grid gap-8 lg:grid-cols-4">
        <Card
          image="/burger.png"
          title="vegetables burger"
          subtitle="Barbecue Italian cuisine pizza"
        />
        <Card
          image="/french-fries.png"
          title="Spacial French fries"
          subtitle="Barbecue Italian cuisine"
          className="hidden lg:block"
        />
        <Card
          image="/pizza.png"
          title="Spacial Pizza"
          subtitle="Barbecue Italian cuisine pizza "
          className="hidden lg:block"
        />
        <Card
          image="/fried-shrimp.png"
          title="Cuisine Chicken"
          subtitle="Japanese Cuisine Chicken"
          className="hidden lg:block"
        />
      </div>

      <div className="hidden lg:block">
        <Image
          src="/side-2.png"
          alt="Offer"
          width={500}
          height={500}
          className="absolute bottom-36 left-0 h-66 w-46"
        />
      </div>
    </div>
  );
}

export default Popular;
