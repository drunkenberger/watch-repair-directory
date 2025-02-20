import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Star, Clock, MapPin, Phone, Globe, Navigation } from "lucide-react";
import { Badge } from "./ui/badge";

interface Review {
  author: string;
  rating: number;
  text: string;
  date: string;
}

interface ShopDetailModalProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  name?: string;
  rating?: number;
  totalReviews?: number;
  address?: string;
  phone?: string;
  website?: string | null;
  hours?: google.maps.places.PlaceOpeningHours | null;
  photos?: google.maps.places.PlacePhoto[] | null;
  reviews?: google.maps.places.PlaceReview[] | null;
  reviews?: Review[];
}

const ShopDetailModal = ({
  open = true,
  onOpenChange = () => {},
  name = "Precision Watch Repairs",
  rating = 4.8,
  totalReviews = 128,
  address = "123 Main St, New York, NY 10001",
  phone = "(555) 123-4567",
  website = null,
  hours = null,
  reviews = null,
  photos = null,
}: ShopDetailModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[800px] max-h-[90vh] overflow-y-auto bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{name}</DialogTitle>
          <DialogDescription asChild>
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="ml-1 font-semibold">{rating}</span>
              </div>
              <span className="text-gray-500">({totalReviews} reviews)</span>
            </div>
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 gap-6 mt-4">
          {/* Contact Information */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Contact Information</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-gray-500" />
                <span>{address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-gray-500" />
                <span>{phone}</span>
              </div>
              {website && (
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-gray-500" />
                  <a
                    href={
                      website.startsWith("http")
                        ? website
                        : `https://${website}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {website}
                  </a>
                </div>
              )}
            </div>
          </div>

          <Separator />

          {/* Business Hours */}
          {hours?.weekday_text && (
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Business Hours</h3>
              <div className="grid grid-cols-2 gap-2">
                {hours.weekday_text.map((schedule, index) => {
                  const [day, time] = schedule.split(": ");
                  return (
                    <div key={index} className="flex justify-between">
                      <span className="font-medium">{day}</span>
                      <span className="text-gray-600">{time}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <Separator />

          {/* Reviews */}
          {reviews && reviews.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Recent Reviews</h3>
              <div className="space-y-4">
                {reviews.map((review, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">
                          {review.author_name}
                        </span>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="ml-1">{review.rating}</span>
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">
                        {new Date(review.time * 1000).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-gray-600">{review.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Price Guide */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Common Repair Prices</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 border rounded-lg">
                <span className="font-medium">Battery Replacement</span>
                <p className="text-gray-600">From $20</p>
              </div>
              <div className="p-3 border rounded-lg">
                <span className="font-medium">Crystal Replacement</span>
                <p className="text-gray-600">From $80</p>
              </div>
              <div className="p-3 border rounded-lg">
                <span className="font-medium">Movement Service</span>
                <p className="text-gray-600">From $150</p>
              </div>
              <div className="p-3 border rounded-lg">
                <span className="font-medium">Water Resistance Test</span>
                <p className="text-gray-600">From $40</p>
              </div>
            </div>
          </div>

          <Separator />

          {/* Action Buttons */}
          <div className="flex gap-4 mt-4">
            <Button
              className="flex-1"
              onClick={() =>
                window.open(`https://maps.google.com/?q=${address}`, "_blank")
              }
            >
              <Navigation className="w-4 h-4 mr-2" />
              Get Directions
            </Button>
            <Button className="flex-1" variant="secondary">
              <Clock className="w-4 h-4 mr-2" />
              Book Appointment
            </Button>
            <Button
              className="flex-1"
              variant="outline"
              onClick={() => (window.location.href = `tel:${phone}`)}
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Shop
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShopDetailModal;
