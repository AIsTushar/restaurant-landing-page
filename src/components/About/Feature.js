import { Package } from "lucide-react";

function Feature({ title, description, icon: Icon }) {
  return (
    <div className="flex items-center gap-4">
      <div className="rounded-full bg-white p-5 shadow-md">
        <Icon className="h-8 w-8 text-red-800" />
      </div>
      <div>
        <p className="text-xl font-bold text-gray-900">{title}</p>
        <p className="text-black">{description}</p>
      </div>
    </div>
  );
}

export default Feature;
