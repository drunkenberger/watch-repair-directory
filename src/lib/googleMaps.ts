import { Loader } from "@googlemaps/js-api-loader";

let loader: Loader | null = null;

export const getGoogleMapsLoader = () => {
  if (!loader) {
    loader = new Loader({
      apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
      version: "weekly",
      libraries: ["places"],
    });
  }
  return loader;
};
