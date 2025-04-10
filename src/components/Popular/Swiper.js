import { ChevronLeft, ChevronRight } from "lucide-react";

function Swiper({ className, onPrev, onNext }) {
  return (
    <div className={`flex items-center gap-6 ${className}`}>
      <div
        className="cursor-pointer rounded-full bg-white p-3 shadow-md transition-colors hover:bg-gray-100"
        onClick={onPrev}
      >
        <ChevronLeft className="h-6 w-6" />
      </div>
      <div
        className="cursor-pointer rounded-full bg-white p-3 shadow-md transition-colors hover:bg-gray-100"
        onClick={onNext}
      >
        <ChevronRight className="h-6 w-6 text-red-800" />
      </div>
    </div>
  );
}

export default Swiper;
