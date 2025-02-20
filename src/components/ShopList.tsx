import React from "react";
import { ScrollArea } from "./ui/scroll-area";
import ShopCard from "./ShopCard";

interface Shop {
  image?: string;
  id: string;
  name: string;
  rating: number;
  distance: string;
  hours: string;
  isOpen: boolean;
  topReview: string;
  address: string;
  phone: string;
}

interface ShopListProps {
  shops?: Shop[];
  onShopClick?: (shop: Shop) => void;
}

const defaultShops: Shop[] = [
  {
    id: "1",
    name: "Precision Watch Repairs",
    rating: 4.8,
    distance: "0.3 miles",
    hours: "9:00 AM - 6:00 PM",
    isOpen: true,
    topReview: "Best watch repair service in the city! Highly recommended.",
    address: "123 Main St, New York, NY 10001",
    phone: "(555) 123-4567",
  },
  {
    id: "2",
    name: "Timeless Watch Care",
    rating: 4.5,
    distance: "0.8 miles",
    hours: "10:00 AM - 7:00 PM",
    isOpen: true,
    topReview: "Excellent service and very knowledgeable staff.",
    address: "456 Park Ave, New York, NY 10002",
    phone: "(555) 234-5678",
  },
  {
    id: "3",
    name: "Classic Timepiece Repair",
    rating: 4.2,
    distance: "1.2 miles",
    hours: "9:30 AM - 5:30 PM",
    isOpen: false,
    topReview: "Great work on vintage watches. Fair prices.",
    address: "789 Broadway, New York, NY 10003",
    phone: "(555) 345-6789",
  },
];

const ShopList = ({
  shops = defaultShops,
  onShopClick = () => {},
}: ShopListProps) => {
  return (
    <div className="w-full bg-white rounded-lg shadow-sm border p-4 overflow-hidden h-[900px]">
      <ScrollArea className="h-full">
        <div className="flex flex-col gap-4">
          {shops.map((shop) => (
            <ShopCard
              key={shop.id}
              name={shop.name}
              rating={shop.rating}
              distance={shop.distance}
              hours={shop.hours}
              isOpen={shop.isOpen}
              topReview={shop.topReview}
              address={shop.address}
              phone={shop.phone}
              image={shop.image}
              onClick={() => onShopClick(shop)}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default ShopList;
