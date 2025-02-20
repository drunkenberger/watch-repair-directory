import { Clock, ShieldCheck, Wrench, Award } from "lucide-react";

const InfoSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Expert Watch Repair Services Near You
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="text-center space-y-4">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
              <Wrench className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Professional Repairs</h3>
            <p className="text-gray-600">
              Expert watchmakers specializing in luxury and vintage timepiece
              repairs
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
              <Clock className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Quick Turnaround</h3>
            <p className="text-gray-600">
              Fast and efficient service with most repairs completed within 3-5
              days
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
              <ShieldCheck className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Warranty Guaranteed</h3>
            <p className="text-gray-600">
              All repairs backed by our comprehensive warranty policy
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Certified Experts</h3>
            <p className="text-gray-600">
              Licensed and certified watchmakers with years of experience
            </p>
          </div>
        </div>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mb-4">
            Find the Best Watch Repair Shop Near You
          </h2>
          <p className="text-gray-600 mb-4">
            Discover expert watch repair services tailored to your schedule and
            location. Our innovative platform connects you with skilled
            watchmakers in your area, making it effortless to find available
            appointments that fit your busy lifestyle. Using advanced
            location-based technology and real-time availability updates, we
            help you locate and book appointments with certified watch repair
            professionals who can service your timepiece when it's most
            convenient for you.
          </p>

          <h3 className="text-xl font-semibold mb-3">
            Why Choose Local Watch Repair Shops?
          </h3>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>Convenient location and easy accessibility</li>
            <li>Personal attention and face-to-face consultation</li>
            <li>Immediate assessment of repair needs</li>
            <li>Support local skilled craftsmen</li>
            <li>Often more affordable than manufacturer service centers</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
