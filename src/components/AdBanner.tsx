import { Button } from "./ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";

interface AdBannerProps {
  type?: "horizontal" | "vertical";
}

const AdBanner = ({ type = "horizontal" }: AdBannerProps) => {
  const sponsors = [
    {
      name: "European Watch Company",
      image:
        "https://images.unsplash.com/photo-1587135991058-8816b028691f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      description: "Luxury Watch Sales & Service",
      link: "https://www.europeanwatch.com/",
      discount: "Expert Service",
    },
    {
      name: "Crown & Caliber",
      image:
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      description: "Luxury Watch Service & Trade-In",
      link: "https://www.crownandcaliber.com/pages/sell-or-trade-watches",
      discount: "Free Shipping",
    },
    {
      name: "Watchfinder & Co.",
      image:
        "https://images.unsplash.com/photo-1619946794135-5bc917a27793?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      description: "Pre-owned Luxury Watch Service",
      link: "https://www.watchfinder.com/service",
      discount: "Free Assessment",
    },
  ];

  if (type === "horizontal") {
    return (
      <div className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-serif text-center mb-8">
            Featured Watch Websites
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 z-10" />
                <img
                  src={sponsor.image}
                  alt={sponsor.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
                  <div className="bg-primary/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm inline-flex items-center w-fit mb-2">
                    {sponsor.discount}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{sponsor.name}</h3>
                  <p className="text-gray-300 mb-4">{sponsor.description}</p>
                  <a
                    href={sponsor.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <Button
                      variant="secondary"
                      className="w-full group-hover:bg-primary transition-colors"
                    >
                      Visit Website <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-[300px] bg-white rounded-lg shadow-lg overflow-hidden border">
      <div className="p-4 bg-primary text-white">
        <h3 className="font-semibold">Sponsored</h3>
      </div>
      {sponsors.slice(0, 1).map((sponsor, index) => (
        <div key={index} className="p-4">
          <img
            src={sponsor.image}
            alt={sponsor.name}
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h4 className="font-semibold mb-2">{sponsor.name}</h4>
          <p className="text-sm text-gray-600 mb-4">{sponsor.description}</p>
          <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm inline-flex items-center mb-4">
            {sponsor.discount}
          </div>
          <a
            href={sponsor.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full"
          >
            <Button className="w-full" variant="outline">
              Visit Website <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </div>
      ))}
    </div>
  );
};

export default AdBanner;
