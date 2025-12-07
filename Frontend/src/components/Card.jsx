import { MapPin, Star } from "lucide-react";

export default function Card({ item }) {
  return (
    <div className="w-[260px] rounded-2xl bg-white shadow-md overflow-hidden">

      {/* Portrait Image */}
      <div className="relative aspect-[3/4] w-full">
        <img
          src={item.image}
          alt="Lakeview house"
          className="h-full w-full object-cover"
        />

        <span className="absolute top-3 right-3 bg-black/80 text-white text-xs px-3 py-1 rounded-full">
         {item.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <h3 className="text-sm font-semibold text-gray-900">
          {item.name}
        </h3>

        <div className="flex items-center text-xs text-gray-500 gap-1">
          <MapPin size={12} />
          <span>Bali, Indonesia</span>
        </div>

        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center text-xs text-gray-600 gap-1">
            <Star size={12} className="text-yellow-500 fill-yellow-500" />
            <span className="font-medium">4.8</span>
            <span className="text-gray-400">(210)</span>
          </div>

          <p className="text-sm font-semibold text-gray-900">
            {item.price} <span className="text-xs text-gray-500">/night</span>
          </p>
        </div>
      </div>
    </div>
  );
}
