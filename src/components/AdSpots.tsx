import { ExternalLink } from "lucide-react";

interface AdSpotsProps {
  type?: "sidebar" | "banner" | "native";
}

const AdSpots = ({ type = "sidebar" }: AdSpotsProps) => {
  if (type === "banner") {
    return (
      <div className="w-full h-[90px] bg-gray-100 border flex items-center justify-center p-4 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <span>Advertisement</span>
          <ExternalLink className="w-4 h-4" />
        </div>
      </div>
    );
  }

  if (type === "native") {
    return (
      <div className="w-full p-4 bg-gray-50 border rounded-lg">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-gray-500">Sponsored</span>
          <ExternalLink className="w-3 h-3 text-gray-400" />
        </div>
        <div className="flex gap-4">
          <img
            src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=180"
            alt="Ad"
            className="w-[180px] h-[120px] object-cover rounded"
          />
          <div>
            <h4 className="font-medium mb-1">Premium Watch Service</h4>
            <p className="text-sm text-gray-600 mb-2">
              Expert watch repair and maintenance services
            </p>
            <div className="text-xs text-blue-600">www.example.com</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-[300px] h-[600px] bg-gray-100 border flex flex-col items-center justify-center p-4 text-sm text-gray-500">
      <div className="flex items-center gap-2 mb-2">
        <span>Advertisement</span>
        <ExternalLink className="w-4 h-4" />
      </div>
      <div className="text-xs text-gray-400">300 x 600</div>
    </div>
  );
};

export default AdSpots;
