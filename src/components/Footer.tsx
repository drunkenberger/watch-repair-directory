import { MapPin, Phone, Mail } from "lucide-react";

const watchBrands = [
  {
    name: "Rolex",
    url: "https://www.rolex.com",
    service: "Service & Repair",
  },
  {
    name: "Omega",
    url: "https://www.omegawatches.com",
    service: "Watch Repair",
  },
  {
    name: "Tag Heuer",
    url: "https://www.tagheuer.com",
    service: "Repair",
  },
  {
    name: "Cartier",
    url: "https://www.cartier.com",
    service: "Watch Service",
  },
  {
    name: "Patek Philippe",
    url: "https://www.patek.com",
    service: "Service",
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-serif text-xl mb-4">
              Watch Repair Services
            </h3>
            <ul className="space-y-2 font-sans font-light">
              <li>Luxury Watch Repair</li>
              <li>Vintage Watch Restoration</li>
              <li>Battery Replacement</li>
              <li>Crystal Replacement</li>
              <li>Water Resistance Testing</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-serif text-xl mb-4">
              Popular Locations
            </h3>
            <ul className="space-y-2 font-sans font-light">
              <li>Watch Repair in London</li>
              <li>Watch Repair in Mexico City</li>
              <li>Watch Repair in New York</li>
              <li>Watch Repair in Dubai</li>
              <li>Watch Repair Near Me</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-serif text-xl mb-4">
              Brands We Salute
            </h3>
            <ul className="space-y-2 font-sans font-light">
              {watchBrands.map((brand, index) => (
                <li key={index}>
                  <a
                    href={brand.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center group"
                  >
                    <span className="group-hover:underline">{brand.name}</span>
                    <span className="text-gray-500 ml-2">{brand.service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-serif text-xl mb-4">Contact Us</h3>
            <ul className="space-y-3 font-sans font-light">
              <li className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Find Watch Repair Near You
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                24/7 Support Available
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                info@watchrepair.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <p className="text-sm text-center font-sans font-light">
            © {new Date().getFullYear()} Watch Repair Directory. Find trusted
            watch repair services near you.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
