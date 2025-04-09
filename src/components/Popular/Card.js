import Image from "next/image";

function Card({ image, title, subtitle }) {
  return (
    <div className="mx-auto max-w-xs overflow-hidden rounded-lg bg-white shadow-lg">
      {/* Image Section */}
      <div className="flex h-48 w-full items-center justify-center bg-gray-200">
        <Image
          src={image}
          alt="Burger"
          width={200}
          height={200}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-4 text-center">
        {/* Red Horizontal Line */}
        <div className="mx-auto mb-4 h-0.5 w-12 bg-red-600"></div>

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 uppercase">{title}</h3>

        {/* Subtitle */}
        <p className="mt-1 text-sm text-gray-600">{subtitle}</p>
      </div>
    </div>
  );
}

export default Card;
