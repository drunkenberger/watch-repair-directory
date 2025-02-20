import { Clock, ShieldCheck, Wrench, Award } from "lucide-react";

const InfoSection = () => {
  return (
    <div className="relative bg-gray-900 py-24 overflow-hidden">
      {/* Background Effects */}

      <div className="absolute inset-0 bg-[radial-gradient(#64748b_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_70%,transparent_100%)] opacity-20 -z-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509048191080-d2984bad6ae5')] bg-cover bg-center mix-blend-overlay opacity-20" />
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-serif font-medium text-center mb-16 text-white leading-tight">
          Expert Watch Repair Services
          <span className="block text-lg font-sans font-light mt-4 text-gray-400">
            Discover skilled watchmakers near you
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="text-center space-y-4 group">
            <div className="bg-white/5 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 border border-white/10">
              <Wrench className="h-8 w-8 text-white group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <h3 className="text-2xl font-serif font-medium text-white">
              Professional Repairs
            </h3>
            <p className="text-gray-400 font-sans font-light">
              Expert watchmakers specializing in luxury and vintage timepiece
              repairs
            </p>
          </div>

          <div className="text-center space-y-4 group">
            <div className="bg-white/5 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 border border-white/10">
              <Clock className="h-8 w-8 text-white group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <h3 className="text-2xl font-serif font-medium text-white">
              Quick Turnaround
            </h3>
            <p className="text-gray-400 font-sans font-light">
              Fast and efficient service with most repairs completed within 3-5
              days
            </p>
          </div>

          <div className="text-center space-y-4 group">
            <div className="bg-white/5 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 border border-white/10">
              <ShieldCheck className="h-8 w-8 text-white group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <h3 className="text-2xl font-serif font-medium text-white">
              Quality Service
            </h3>
            <p className="text-gray-400 font-sans font-light">
              Trusted watchmakers with proven track records of excellence
            </p>
          </div>

          <div className="text-center space-y-4 group">
            <div className="bg-white/5 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 border border-white/10">
              <Award className="h-8 w-8 text-white group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <h3 className="text-2xl font-serif font-medium text-white">
              Certified Experts
            </h3>
            <p className="text-gray-400 font-sans font-light">
              Licensed and certified watchmakers with years of experience
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg font-sans font-light text-gray-400">
            Our innovative platform connects you with skilled watchmakers in
            your area, making it effortless to find available appointments that
            fit your busy lifestyle.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
