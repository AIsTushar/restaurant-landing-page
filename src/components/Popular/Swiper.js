import { ChevronLeft, ChevronRight } from "lucide-react";

function Swiper({ className }) {
  return (
    <div className={`flex items-center gap-6 ${className}`}>
      <div className="cursor-pointer rounded-full bg-white p-3 shadow-md">
        <ChevronLeft className="h-6 w-6" />
      </div>
      <div className="cursor-pointer rounded-full bg-white p-3 shadow-md">
        <ChevronRight className="h-6 w-6 text-red-800" />
      </div>
    </div>
  );
}

export default Swiper;
