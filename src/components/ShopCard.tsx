import React from "react";
import { Card } from "./ui/card";
import { Star, Clock, MapPin, Phone } from "lucide-react";
import { Badge } from "./ui/badge";

interface ShopCardProps {
  image?: string;
  name?: string;
  rating?: number;
  distance?: string;
  hours?: string;
  isOpen?: boolean;
  topReview?: string;
  address?: string;
  phone?: string;
  onClick?: () => void;
}

const ShopCard = ({
  image,
  name = "Precision Watch Repairs",
  rating = 4.5,
  distance = "0.8 miles",
  hours = "9:00 AM - 6:00 PM",
  isOpen = true,
  topReview = "Excellent service! Fixed my vintage Omega perfectly.",
  address = "123 Main St, New York, NY 10001",
  phone = "(555) 123-4567",
  onClick = () => {},
}: ShopCardProps) => {
  return (
    <Card
      className="w-[580px] min-h-[240px] cursor-pointer hover:shadow-lg transition-shadow bg-white overflow-hidden flex"
      onClick={onClick}
    >
      <div className="w-[200px] h-full">
        <img
          src={
            image ||
            "https://images.unsplash.com/photo-1585676623595-e60b97115f7e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
          }
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col h-full gap-2 p-4 flex-1">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="ml-1 text-sm text-gray-600">{rating}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="ml-1 text-sm text-gray-600">{distance}</span>
              </div>
            </div>
          </div>
          <Badge
            variant={isOpen ? "default" : "secondary"}
            className={
              isOpen
                ? "bg-green-100 text-green-800"
                : "bg-gray-100 text-gray-800"
            }
          >
            {isOpen ? "Open" : "Closed"}
          </Badge>
        </div>

        <div className="flex items-center gap-1 text-sm text-gray-600">
          <Clock className="w-4 h-4" />
          <span>{hours}</span>
        </div>

        <div className="flex items-center gap-1 text-sm text-gray-600">
          <Phone className="w-4 h-4" />
          <span>{phone}</span>
        </div>

        <div className="mt-2">
          <p className="text-sm text-gray-600 line-clamp-2 italic">
            "{topReview}"
          </p>
        </div>

        <div className="text-sm text-gray-500">{address}</div>
      </div>
    </Card>
  );
};

export default ShopCard;
