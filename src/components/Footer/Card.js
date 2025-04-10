import { Clock } from "lucide-react";

function Card() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Clock className="text-yellow-400" />
      <p className="text-lg font-bold">Opening hours</p>
      <div className="flex flex-col items-center justify-center gap-1 text-xs font-semibold text-gray-300">
        <span>Monday - Sunday </span>
        <span>9:00 - 22:00</span>
      </div>
    </div>
  );
}

export default Card;
