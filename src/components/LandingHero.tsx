import { Button } from "./ui/button";
import {
  Clock,
  Wrench,
  Award,
  Search,
  Star,
  MapPin,
  Phone,
} from "lucide-react";
import SearchSection from "./SearchSection";
import MapView from "./MapView";
import ResultsPanel, { defaultShops } from "./ResultsPanel";

interface LandingHeroProps {
  searchValue: string;
  onSearch: (value: string) => void;
  onUseMyLocation: () => void;
  shops: any[];
  onShopClick: (shop: any) => void;
  rating: number[];
  distance: string;
  openNow: boolean;
  onRatingChange: (value: number[]) => void;
  onDistanceChange: (value: string) => void;
  onOpenNowChange: (value: boolean) => void;
  onMarkerClick: (markerId: string) => void;
}

const LandingHero = ({
  searchValue,
  onSearch,
  onUseMyLocation,
  shops,
  onShopClick,
  rating,
  distance,
  openNow,
  onRatingChange,
  onDistanceChange,
  onOpenNowChange,
  onMarkerClick,
}: LandingHeroProps) => {
  return (
    <div className="relative">
      <div className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509048191080-d2984bad6ae5')] bg-cover bg-center mix-blend-overlay opacity-20" />
        <div className="max-w-7xl mx-auto px-4 py-24 relative">
          <div className="text-center space-y-8 max-w-3xl mx-auto bg-transparent">
            <h1 className="text-5xl font-bold tracking-tight">
              {" "}
              Watch Repair Near Me
            </h1>
            <p className="text-xl text-gray-300">
              Find trusted local watchmakers for repairs, maintenance, and
              restoration of your precious timepieces
            </p>
            <div className="mt-8">
              <SearchSection
                searchValue={searchValue}
                onSearch={onSearch}
                onUseMyLocation={onUseMyLocation}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="text-center space-y-4">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Wrench className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Expert Repairs</h3>
              <p className="text-gray-300">
                Professional watchmakers with years of experience and more than
                100 reviews on google. We only list the best ranked as well.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Quick Service</h3>
              <p className="text-gray-300">
                Fast turnaround times when looking for someone for your watch
                repairs.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold">Availability</h3>
              <p className="text-gray-300">
                Find the shop that's close and convenient. Repair your watch
                with the best match to your needs.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 flex flex-col items-center gap-8 max-w-[1512px] mx-auto">
        <div className="w-[900px]">
          <MapView
            markers={shops.map((shop) => {
              const location = shop.location;
              const lat =
                typeof location?.lat === "function"
                  ? location.lat()
                  : location?.lat;
              const lng =
                typeof location?.lng === "function"
                  ? location.lng()
                  : location?.lng;

              return {
                id: shop.id,
                lat: lat || 0,
                lng: lng || 0,
                name: shop.name,
                rating: shop.rating,
              };
            })}
            onMarkerClick={onMarkerClick}
          />
        </div>
        {searchValue && (
          <div className="w-[900px]">
            <ResultsPanel
              shops={shops}
              onShopClick={onShopClick}
              rating={rating}
              distance={distance}
              openNow={openNow}
              onRatingChange={onRatingChange}
              onDistanceChange={onDistanceChange}
              onOpenNowChange={onOpenNowChange}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingHero;
