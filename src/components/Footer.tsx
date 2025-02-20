import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Watch Repair Services
            </h3>
            <ul className="space-y-2">
              <li>Luxury Watch Repair</li>
              <li>Vintage Watch Restoration</li>
              <li>Battery Replacement</li>
              <li>Crystal Replacement</li>
              <li>Water Resistance Testing</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Popular Locations
            </h3>
            <ul className="space-y-2">
              <li>Watch Repair in San Luis Potosi</li>
              <li>Watch Repair in Mexico City</li>
              <li>Watch Repair in Monterrey</li>
              <li>Watch Repair in Guadalajara</li>
              <li>Watch Repair Near Me</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Brands We Service
            </h3>
            <ul className="space-y-2">
              <li>Rolex Service & Repair</li>
              <li>Omega Watch Repair</li>
              <li>Tag Heuer Repair</li>
              <li>Cartier Watch Service</li>
              <li>Vintage Watch Repair</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
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
          <p className="text-sm text-center">
            © {new Date().getFullYear()} Watch Repair Directory. Find trusted
            watch repair services near you.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
