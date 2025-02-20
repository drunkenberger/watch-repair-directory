import React, { useState, useEffect } from "react";
import Header from "./Header";
import SearchSection from "./SearchSection";
import MapView from "./MapView";
import ResultsPanel from "./ResultsPanel";
import ShopDetailModal from "./ShopDetailModal";
import LandingHero from "./LandingHero";
import InfoSection from "./InfoSection";
import PriceGuide from "./PriceGuide";
import Footer from "./Footer";
import AdBanner from "./AdBanner";
import AdSpots from "./AdSpots";
import SponsoredContent from "./SponsoredContent";
import { getGoogleMapsLoader } from "@/lib/googleMaps";

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
}

const defaultShops: Shop[] = [
  {
    id: "1",
    name: "HOSPITAL DE RELOJES LEON",
    rating: 4.1,
    distance: "0.3 miles",
    hours: "Closed",
    isOpen: false,
    topReview:
      "A number where they do answer! I stopped to change the battery and they charged me 80 pesos and it doesn't work!!! And it's closed and the phone number doesn't work!!!",
    address: "Joaquin Angulo 756, Zona Centro, 44200 Guadalajara, Jal., Mexico",
    phone: "33 2818 3289",
  },
  {
    id: "2",
    name: "REPARACION DE ALHAJAS Y RELOJES",
    rating: 5.0,
    distance: "0.8 miles",
    hours: "Closed",
    isOpen: false,
    topReview: "Excellent service and price",
    address: "Etiopia 3254, Lagos de Oriente, 44770 Guadalajara, Jal., Mexico",
    phone: "33 3843 5412",
  },
  {
    id: "3",
    name: "HENRY'S relojeria",
    rating: 4.5,
    distance: "1.2 miles",
    hours: "Closed",
    isOpen: false,
    topReview: "Great work on vintage watches. Fair prices.",
    address: "Av. Salvador Nava 105, San Luis Potosi, SLP, Mexico",
    phone: "33 3843 5412",
  },
  {
    id: "4",
    name: "Joyeria y Relojeria Diamante",
    rating: 4.8,
    distance: "1.5 miles",
    hours: "Closed",
    isOpen: false,
    topReview: "Excellent service for luxury timepieces. True craftsmen.",
    address: "Av. Revolucion 2703, Guadalajara, Jal., Mexico",
    phone: "33 3615 7890",
  },
  {
    id: "5",
    name: "Relojeria El Tiempo",
    rating: 4.3,
    distance: "1.8 miles",
    hours: "Closed",
    isOpen: false,
    topReview:
      "Professional watch repair service with great attention to detail.",
    address: "Av. Mexico 2890, Guadalajara, Jal., Mexico",
    phone: "33 3729 1234",
  },
];

const HomePage = () => {
  const [selectedShop, setSelectedShop] = useState<Shop | null>(null);
  const [searchValue, setSearchValue] = useState("");
  const [rating, setRating] = useState([3.5]);
  const [distance, setDistance] = useState("5");
  const [openNow, setOpenNow] = useState(false);
  const [shops, setShops] = useState<Shop[]>(defaultShops);
  const [showSearch, setShowSearch] = useState(false);

  const handleShopClick = (shop: Shop) => {
    setSelectedShop(shop);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header onSearchClick={() => setShowSearch(true)} />
      <LandingHero
        searchValue={searchValue}
        onSearch={async (value) => {
          setSearchValue(value);
          if (value) {
            const loader = getGoogleMapsLoader();
            const google = await loader.load();

            // Create a map instance for the PlacesService
            const mapDiv = document.createElement("div");
            const map = new google.maps.Map(mapDiv, {
              center: { lat: 37.7749, lng: -122.4194 }, // Default to San Francisco
              zoom: 13,
            });
            const service = new google.maps.places.PlacesService(map);

            const request = {
              query: `watch repair ${value}`,
              types: ["establishment"],
            };

            // First get the location coordinates
            const geocoder = new google.maps.Geocoder();
            const geocodeResult = await new Promise((resolve) => {
              geocoder.geocode({ address: value }, (results, status) => {
                if (status === "OK" && results?.[0]) {
                  resolve(results[0].geometry.location);
                } else {
                  resolve(null);
                }
              });
            });

            if (geocodeResult) {
              setShops([]); // Clear existing shops while searching
              request.location = geocodeResult;
              request.radius = 50000; // 50km radius
            }

            service.textSearch(request, async (results, status) => {
              if (
                status === google.maps.places.PlacesServiceStatus.OK &&
                results
              ) {
                const mappedShopsPromises = results.map(async (result) => {
                  // Get detailed place information including photos
                  const detailsPromise = new Promise((resolve) => {
                    service.getDetails(
                      {
                        placeId: result.place_id,
                        fields: [
                          "name",
                          "geometry",
                          "formatted_address",
                          "rating",
                          "opening_hours",
                          "formatted_phone_number",
                          "photos",
                          "reviews",
                          "website",
                          "opening_hours",
                        ],
                      },
                      (place, detailStatus) => {
                        if (
                          detailStatus ===
                            google.maps.places.PlacesServiceStatus.OK &&
                          place
                        ) {
                          resolve(place);
                        } else {
                          resolve(null);
                        }
                      },
                    );
                  });

                  const placeDetails = await detailsPromise;
                  let photoUrl = null;
                  if (placeDetails?.photos?.[0]) {
                    try {
                      photoUrl = placeDetails.photos[0].getUrl({
                        maxWidth: 400,
                        maxHeight: 300,
                      });
                    } catch (error) {
                      console.error("Error getting photo URL:", error);
                    }
                  }

                  return {
                    id: result.place_id || String(result.reference),
                    name: result.name || "Unknown Shop",
                    rating: result.rating || 0,
                    distance: "calculating...",
                    hours:
                      placeDetails?.opening_hours?.weekday_text?.[
                        new Date().getDay() - 1
                      ] || "Hours not available",
                    isOpen: placeDetails?.opening_hours?.isOpen?.() || false,
                    topReview: placeDetails?.reviews?.[0]?.text || "",
                    address: result.formatted_address || "",
                    phone:
                      placeDetails?.formatted_phone_number || "Not available",
                    location: result.geometry?.location,
                    image: photoUrl || null,
                    website: placeDetails?.website || null,
                    openingHours: placeDetails?.opening_hours || null,
                    reviews: placeDetails?.reviews || null,
                    photos: placeDetails?.photos || null,
                  };
                });

                const mappedShops = await Promise.all(mappedShopsPromises);
                setShops(mappedShops);
              }
            });
          } else {
            setShops([]);
          }
        }}
        onUseMyLocation={() => {
          // Handle geolocation
          console.log("Getting user location...");
        }}
        shops={shops}
        onShopClick={handleShopClick}
        rating={rating}
        distance={distance}
        openNow={openNow}
        onRatingChange={setRating}
        onDistanceChange={setDistance}
        onOpenNowChange={setOpenNow}
        onMarkerClick={(markerId) => {
          const shop = shops.find((s) => s.id === markerId);
          if (shop) {
            setSelectedShop(shop);
          }
        }}
      />

      <ShopDetailModal
        open={!!selectedShop}
        onOpenChange={(open) => {
          if (!open) setSelectedShop(null);
        }}
        {...selectedShop}
      />
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
        <AdSpots type="banner" />
        <div className="flex gap-8">
          <div className="flex-1">
            <AdBanner type="horizontal" />
          </div>
          <AdSpots />
        </div>
        <AdSpots type="native" />
      </div>
      <PriceGuide />
      <SponsoredContent />
      <InfoSection />
      <Footer />
    </div>
  );
};

export default HomePage;
