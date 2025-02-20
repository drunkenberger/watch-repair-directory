import React, { useEffect, useRef, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search, MapPin, Crosshair } from "lucide-react";
import { getGoogleMapsLoader } from "@/lib/googleMaps";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface SearchSectionProps {
  onSearch?: (value: string) => void;
  onUseMyLocation?: () => void;
  searchValue?: string;
  suggestions?: string[];
  isLoading?: boolean;
}

const SearchSection = ({
  onSearch = () => {},
  onUseMyLocation = () => {},
  searchValue = "",
  isLoading = false,
}: SearchSectionProps) => {
  const [suggestions, setSuggestions] = useState<
    google.maps.places.AutocompletePrediction[]
  >([]);
  const autocompleteService = useRef<google.maps.places.AutocompleteService>();
  const placesService = useRef<google.maps.places.PlacesService>();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [locationLoading, setLocationLoading] = useState(false);

  useEffect(() => {
    const initGoogleServices = async () => {
      const loader = getGoogleMapsLoader();

      try {
        const google = await loader.load();
        autocompleteService.current =
          new google.maps.places.AutocompleteService();

        // Create a dummy div for PlacesService (required but not used)
        const dummyDiv = document.createElement("div");
        placesService.current = new google.maps.places.PlacesService(dummyDiv);
      } catch (error) {
        console.error("Error loading Google Places:", error);
      }
    };

    initGoogleServices();
  }, []);

  const handleSearchInput = async (value: string) => {
    if (!autocompleteService.current) {
      console.error("Autocomplete service not initialized");
      return;
    }

    try {
      if (!value.trim()) {
        setSuggestions([]);
        onSearch("");
        return;
      }

      const response = await autocompleteService.current.getPlacePredictions({
        input: value,
        types: ["geocode", "establishment"],
      });

      setSuggestions(response?.predictions || []);
      onSearch(value);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (
    suggestion: google.maps.places.AutocompletePrediction,
  ) => {
    onSearch(suggestion.description);
    setSuggestions([]);
  };

  const handleUseMyLocation = async () => {
    if (!navigator.geolocation) {
      console.error("Geolocation is not supported by this browser.");
      return;
    }

    setLocationLoading(true);

    try {
      const position = await new Promise<GeolocationPosition>(
        (resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        },
      );

      const { latitude, longitude } = position.coords;
      const loader = getGoogleMapsLoader();
      const google = await loader.load();

      const geocoder = new google.maps.Geocoder();
      const result = await new Promise((resolve, reject) => {
        geocoder.geocode(
          { location: { lat: latitude, lng: longitude } },
          (results, status) => {
            if (status === "OK" && results?.[0]) {
              resolve(results[0].formatted_address);
            } else {
              reject(new Error(`Geocoding failed: ${status}`));
            }
          },
        );
      });

      onSearch(result as string);
    } catch (error) {
      console.error("Error getting location:", error);
    } finally {
      setLocationLoading(false);
    }
  };

  return (
    <div className="w-full h-[120px] p-6 bg-white/95 backdrop-blur-sm shadow-lg rounded-lg">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4">
          <div className="flex-1 flex gap-2">
            <div className="relative flex-1">
              <Input
                ref={searchInputRef}
                type="text"
                placeholder="Enter your location"
                value={searchValue}
                onChange={(e) => handleSearchInput(e.target.value)}
                className="pl-10 pr-4 h-12 text-lg text-gray-900 w-full"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
            <Button className="h-12 px-6" onClick={() => onSearch(searchValue)}>
              Search
            </Button>
            {suggestions.length > 0 && searchValue && (
              <div className="absolute left-0 right-0 top-[calc(100%+4px)] bg-white border rounded-md shadow-lg z-50 max-h-[300px] overflow-y-auto">
                {suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className="px-4 py-3 hover:bg-gray-50 cursor-pointer flex items-center gap-2"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    <MapPin className="w-4 h-4 flex-shrink-0 text-gray-400" />
                    <span className="text-gray-900 truncate">
                      {suggestion.description}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  className="h-12 px-6 flex items-center gap-2 text-gray-900 hover:text-gray-900"
                  onClick={handleUseMyLocation}
                  disabled={isLoading || locationLoading}
                >
                  <Crosshair className="w-5 h-5" />
                  <span>
                    {locationLoading
                      ? "Getting location..."
                      : "Use My Location"}
                  </span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  Use your current location to find nearby watch repair shops
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
