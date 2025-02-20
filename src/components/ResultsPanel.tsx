import React from "react";
import FilterSection from "./FilterSection";
import ShopList from "./ShopList";

interface Shop {
  id: string;
  name: string;
  rating: number;
  distance: string;
  hours: string;
  isOpen: boolean;
  topReview: string;
  address: string;
  phone: string;
  image?: string;
}

interface ResultsPanelProps {
  shops?: Shop[];
  onShopClick?: (shop: Shop) => void;
  onRatingChange?: (value: number[]) => void;
  onDistanceChange?: (value: string) => void;
  onOpenNowChange?: (value: boolean) => void;
  rating?: number[];
  distance?: string;
  openNow?: boolean;
}

export const defaultShops: Shop[] = [
  {
    id: "1",
    name: "Precision Watch Repairs",
    rating: 4.8,
    distance: "0.3 miles",
    hours: "9:00 AM - 6:00 PM",
    isOpen: true,
    topReview: "Best watch repair service in the city! Highly recommended.",
    address: "Av. Venustiano Carranza 2301, San Luis Potosi, SLP, Mexico",
    phone: "(555) 123-4567",
    image:
      "https://images.unsplash.com/photo-1585676623595-e60b97115f7e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: "2",
    name: "Timeless Watch Care",
    rating: 4.5,
    distance: "0.8 miles",
    hours: "10:00 AM - 7:00 PM",
    isOpen: true,
    topReview: "Excellent service and very knowledgeable staff.",
    address: "Av. Universidad 1340, San Luis Potosi, SLP, Mexico",
    phone: "(555) 234-5678",
    image:
      "https://images.unsplash.com/photo-1587135991058-8816b028691f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: "3",
    name: "Classic Timepiece Repair",
    rating: 4.2,
    distance: "1.2 miles",
    hours: "9:30 AM - 5:30 PM",
    isOpen: false,
    topReview: "Great work on vintage watches. Fair prices.",
    address: "Av. Salvador Nava 105, San Luis Potosi, SLP, Mexico",
    phone: "(555) 345-6789",
    image:
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
];

const ResultsPanel = ({
  shops = defaultShops,
  onShopClick = () => {},
  onRatingChange = () => {},
  onDistanceChange = () => {},
  onOpenNowChange = () => {},
  rating = [3.5],
  distance = "5",
  openNow = false,
}: ResultsPanelProps) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <FilterSection
        rating={rating}
        distance={distance}
        openNow={openNow}
        onRatingChange={onRatingChange}
        onDistanceChange={onDistanceChange}
        onOpenNowChange={onOpenNowChange}
      />
      <ShopList shops={shops} onShopClick={onShopClick} />
    </div>
  );
};

export default ResultsPanel;
