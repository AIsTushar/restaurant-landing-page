import Image from "next/image";

function Card({ image, title, subtitle, className }) {
  return (
    <div
      className={`mx-auto max-w-xs cursor-pointer overflow-hidden rounded-md bg-white px-4 py-4 ${className}`}
    >
      {/* Image Section */}
      <div className="flex h-28 w-full items-center justify-center">
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          className="h-28 w-28 object-contain"
        />
      </div>

      <div className="p-4 text-center">
        <div className="mx-auto mb-4 h-0.5 w-12 bg-red-600"></div>

        <h3 className="font-bold text-gray-900 uppercase">{title}</h3>

        <p className="mt-1 text-sm text-gray-600">{subtitle}</p>
      </div>
    </div>
  );
}

export default Card;
