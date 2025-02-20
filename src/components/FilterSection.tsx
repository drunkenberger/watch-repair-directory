import React from "react";
import { Slider } from "./ui/slider";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Switch } from "./ui/switch";

interface FilterSectionProps {
  onRatingChange?: (value: number[]) => void;
  onDistanceChange?: (value: string) => void;
  onOpenNowChange?: (value: boolean) => void;
  rating?: number[];
  distance?: string;
  openNow?: boolean;
}

const FilterSection = ({
  onRatingChange = () => {},
  onDistanceChange = () => {},
  onOpenNowChange = () => {},
  rating = [3.5],
  distance = "5",
  openNow = false,
}: FilterSectionProps) => {
  return (
    <div className="w-full bg-white rounded-lg shadow-sm border p-6 mb-4">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
      </div>

      <div className="grid grid-cols-4 gap-8">
        <div className="space-y-2">
          <Label htmlFor="rating-filter">Minimum Rating</Label>
          <Slider
            id="rating-filter"
            min={0}
            max={5}
            step={0.5}
            value={rating}
            onValueChange={onRatingChange}
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="distance-filter">Distance</Label>
          <Select value={distance} onValueChange={onDistanceChange}>
            <SelectTrigger id="distance-filter">
              <SelectValue placeholder="Select distance" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Within 1 mile</SelectItem>
              <SelectItem value="5">Within 5 miles</SelectItem>
              <SelectItem value="10">Within 10 miles</SelectItem>
              <SelectItem value="20">Within 20 miles</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="availability">Availability</Label>
          <div className="flex items-center space-x-2">
            <Switch
              id="availability"
              checked={openNow}
              onCheckedChange={onOpenNowChange}
            />
            <Label htmlFor="availability" className="text-sm text-gray-600">
              Show available now
            </Label>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="brand-filter">Brand Expertise</Label>
          <Select value="all" onValueChange={() => {}}>
            <SelectTrigger id="brand-filter">
              <SelectValue placeholder="Select brand" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Brands</SelectItem>
              <SelectItem value="rolex">Rolex</SelectItem>
              <SelectItem value="omega">Omega</SelectItem>
              <SelectItem value="cartier">Cartier</SelectItem>
              <SelectItem value="tag">TAG Heuer</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
