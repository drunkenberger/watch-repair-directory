import { ExternalLink, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";

interface AdSpotsProps {
  type?: "sidebar" | "banner" | "native";
}

const AdSpots = ({ type = "sidebar" }: AdSpotsProps) => {
  const [currentAdIndex, setCurrentAdIndex] = useState(0);

  const promotionalAds = [
    {
      title: "🌟 Watch Shop Owners!",
      description:
        "Boost your visibility! List your repair shop on our platform and reach thousands of potential customers.",
      image:
        "https://images.unsplash.com/photo-1495856458515-0637185db551?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      cta: "Join Now",
      highlight: "Premium spots available",
    },
    {
      title: "⚡️ Limited Time Offer",
      description:
        "Get 3 months of premium listing for the price of 2! Showcase your expertise to watch enthusiasts.",
      image:
        "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      cta: "Claim Offer",
      highlight: "50% more visibility",
    },
    {
      title: "🏆 Featured Repair Shop",
      description:
        "Premium spot available in your area! Stand out from the competition.",
      image:
        "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      cta: "Get Featured",
      highlight: "Top visibility guaranteed",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAdIndex((prev) => (prev + 1) % promotionalAds.length);
    }, 20000);

    return () => clearInterval(timer);
  }, []);

  if (type === "banner") {
    const bannerAds = [
      {
        title: "Rolex Certified Service",
        description: "Official Rolex parts & expert technicians",
        logo: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=150",
        link: "#service",
      },
      {
        title: "Watch Battery Special",
        description: "$15 battery replacement - All brands",
        logo: "https://images.unsplash.com/photo-1587135991058-8816b028691f?w=150",
        link: "#battery",
      },
      {
        title: "Luxury Watch Repair",
        description: "Same day service available",
        logo: "https://images.unsplash.com/photo-1619946794135-5bc917a27793?w=150",
        link: "#repair",
      },
    ];

    return (
      <div className="w-full h-[90px] bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border border-gray-800 relative overflow-hidden group cursor-pointer">
        <div className="absolute inset-0 bg-[radial-gradient(#64748b_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_70%,transparent_100%)] opacity-20" />
        <div className="h-full flex items-center justify-between px-8">
          <div className="flex items-center gap-4">
            <img
              src={bannerAds[currentAdIndex].logo}
              alt="Ad"
              className="w-16 h-16 rounded-lg object-cover border border-gray-700"
            />
            <div className="text-white">
              <h3 className="font-medium text-lg">
                {bannerAds[currentAdIndex].title}
              </h3>
              <p className="text-gray-400 text-sm">
                {bannerAds[currentAdIndex].description}
              </p>
            </div>
          </div>
          <Button
            variant="secondary"
            size="sm"
            className="group-hover:bg-primary transition-colors"
          >
            Learn More <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
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
            src={promotionalAds[currentAdIndex].image}
            alt="Ad"
            className="w-[180px] h-[120px] object-cover rounded"
          />
          <div>
            <h4 className="font-medium mb-1">
              {promotionalAds[currentAdIndex].title}
            </h4>
            <p className="text-sm text-gray-600 mb-2">
              {promotionalAds[currentAdIndex].description}
            </p>
            <div className="text-xs text-blue-600 hover:underline cursor-pointer">
              {promotionalAds[currentAdIndex].cta} →
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-[300px] h-[600px] bg-white border rounded-lg overflow-hidden">
      <div className="h-full p-6 flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs text-gray-500">Advertisement</span>
          <ExternalLink className="w-3 h-3 text-gray-400" />
        </div>
        <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6 transition-opacity duration-500">
          <img
            src={promotionalAds[currentAdIndex].image}
            alt="Ad"
            className="w-full h-48 object-cover rounded-lg"
          />
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">
              {promotionalAds[currentAdIndex].title}
            </h3>
            <p className="text-gray-600">
              {promotionalAds[currentAdIndex].description}
            </p>
            <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm inline-block">
              {promotionalAds[currentAdIndex].highlight}
            </div>
            <Button className="w-full">
              {promotionalAds[currentAdIndex].cta}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdSpots;
