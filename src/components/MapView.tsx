import React, { useEffect, useRef } from "react";
import { MapPin } from "lucide-react";
import { getGoogleMapsLoader } from "@/lib/googleMaps";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface MapViewProps {
  markers?: Array<{
    id: string;
    lat: number;
    lng: number;
    name: string;
    rating: number;
  }>;
  center?: { lat: number; lng: number };
  onMarkerClick?: (markerId: string) => void;
}

const defaultMarkers = [
  {
    id: "1",
    lat: 40.7128,
    lng: -74.006,
    name: "Precision Watch Repairs",
    rating: 4.8,
  },
  {
    id: "2",
    lat: 40.7138,
    lng: -74.007,
    name: "Timeless Watch Care",
    rating: 4.5,
  },
  {
    id: "3",
    lat: 40.7148,
    lng: -74.008,
    name: "Classic Timepiece Repair",
    rating: 4.2,
  },
];

const MapView = ({
  markers = defaultMarkers,
  center = { lat: 0, lng: 0 },
  onMarkerClick = () => {},
}: MapViewProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const googleMapRef = useRef<google.maps.Map>();
  const markersRef = useRef<google.maps.Marker[]>([]);

  useEffect(() => {
    const initMap = async () => {
      const loader = getGoogleMapsLoader();

      try {
        const google = await loader.load();
        if (mapRef.current) {
          const defaultCenter = { lat: 37.7749, lng: -122.4194 }; // Default to San Francisco
          if (!googleMapRef.current) {
            googleMapRef.current = new google.maps.Map(mapRef.current, {
              center: defaultCenter,
              zoom: 13,
              mapTypeControl: true,
              streetViewControl: true,
              fullscreenControl: true,
              styles: [
                {
                  featureType: "poi",
                  elementType: "labels",
                  stylers: [{ visibility: "off" }],
                },
              ],
            });
          }

          // Update center when markers change
          if (markers && markers.length > 0) {
            const bounds = new google.maps.LatLngBounds();
            markers.forEach((marker) => {
              bounds.extend({ lat: marker.lat, lng: marker.lng });
            });
            googleMapRef.current.fitBounds(bounds);
          }

          // Clear existing markers
          markersRef.current.forEach((marker) => marker.setMap(null));
          markersRef.current = [];

          // Add new markers
          markers.forEach((marker) => {
            const newMarker = new google.maps.Marker({
              position: { lat: marker.lat, lng: marker.lng },
              map: googleMapRef.current,
              icon: {
                path: google.maps.SymbolPath.CIRCLE,
                fillColor: "#1e40af",
                fillOpacity: 1,
                strokeWeight: 1,
                strokeColor: "#ffffff",
                scale: 10,
                labelOrigin: new google.maps.Point(0, 0),
              },
              label: {
                text: marker.rating.toFixed(1),
                color: "#ffffff",
                fontSize: "12px",
                fontWeight: "bold",
              },
              title: marker.name,
            });

            newMarker.addListener("click", () => onMarkerClick(marker.id));
            markersRef.current.push(newMarker);
          });
        }
      } catch (error) {
        console.error("Error loading Google Maps:", error);
      }
    };

    initMap();
  }, [center, markers, onMarkerClick]);
  return (
    <div className="w-[900px] h-[750px] bg-slate-100 relative">
      <div ref={mapRef} className="w-full h-full" />
    </div>
  );
};

export default MapView;
