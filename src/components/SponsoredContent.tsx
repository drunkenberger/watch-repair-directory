import { Button } from "./ui/button";
import {
  Star,
  Clock,
  Shield,
  Award,
  Rocket,
  Target,
  TrendingUp,
  Package,
  Video,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

const SponsoredContent = () => {
  const sponsorshipTiers = [
    {
      name: "Basic Listing",
      icon: Target,
      description: "Get your watch repair shop listed on our platform",
      features: ["Basic shop profile", "Map listing", "Customer reviews"],
      price: "Free",
      highlight: false,
    },
    {
      name: "Premium Partner",
      icon: TrendingUp,
      description: "Enhanced visibility and premium features",
      features: ["Priority listing", "Detailed analytics", "Verified badge"],
      price: "$19/month",
      highlight: false,
    },
    {
      name: "Featured Sponsor",
      icon: Rocket,
      description: "Maximum exposure and exclusive benefits",
      features: ["Homepage feature", "Custom promotions", "Direct booking"],
      price: "$49/month",
      highlight: true,
    },
  ];

  const onlineServices = [
    {
      title: "Crown & Caliber Service",
      icon: Package,
      description: "Luxury Watch Service & Trade-In Platform",
      image:
        "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=800",
      features: [
        "Certified watchmakers",
        "Luxury watch experts",
        "Service tracking",
        "Global warranty",
      ],
      link: "https://www.crownandcaliber.com/pages/watch-service",
    },
    {
      title: "Timex Service Center",
      icon: Video,
      description: "Official Timex, Casio & Citizen Service",
      image:
        "https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=800",
      features: [
        "Battery replacement",
        "Water resistance",
        "Crystal repair",
        "Band adjustment",
      ],
      link: "https://www.timex.com/customer-service/repairs/",
    },
    {
      title: "Watchfinder & Co.",
      icon: MessageCircle,
      description: "Pre-owned Luxury Watch Service",
      image:
        "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800",
      features: [
        "Authentication service",
        "Certified repairs",
        "Global shipping",
        "12-month warranty",
      ],
      link: "https://www.watchfinder.com/service",
    },
  ];

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Online Services Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-medium mb-4">
              Featured Online Watch Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover established online watch repair services. Note: These are
              third-party services not affiliated with our platform. We do not
              guarantee or endorse any repair services listed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {onlineServices.map((service, index) => (
              <div
                key={index}
                className="group cursor-pointer hover:scale-[1.02] transition-all duration-300"
              >
                <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <div className="flex items-center gap-2 text-white mb-1">
                      <service.icon className="w-5 h-5" />
                      <h3 className="text-lg font-medium">{service.title}</h3>
                    </div>
                    <p className="text-gray-200 text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-primary" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button className="w-full mt-4" variant="outline">
                    Visit Website <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Sponsorship Section */}
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-medium mb-4">
              Join Our Platform
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              List your watch repair business on our platform and reach
              thousands of potential customers looking for quality watch repair
              services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {sponsorshipTiers.map((tier, index) => (
              <div
                key={index}
                className={`bg-white/5 backdrop-blur-sm rounded-xl p-8 hover:bg-white/10 transition-all duration-300 ${tier.highlight ? "ring-2 ring-primary relative before:absolute before:top-0 before:right-0 before:-translate-y-2 before:translate-x-2 before:bg-primary before:text-white before:px-2 before:py-1 before:text-xs before:rounded before:content-['POPULAR']" : ""}`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-white/10 p-2 rounded-lg">
                    <tier.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-medium">{tier.name}</h3>
                </div>
                <p className="text-gray-400 mb-8 min-h-[48px]">
                  {tier.description}
                </p>
                <div className="space-y-3 mb-6">
                  {tier.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-primary" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-1 mb-6">
                  <div className="text-3xl font-bold text-white">
                    {tier.price}
                  </div>
                  {tier.price !== "Free" && (
                    <div className="text-sm text-gray-400">
                      per month, billed monthly
                    </div>
                  )}
                </div>
                <Button
                  className="w-full"
                  variant={tier.highlight ? "default" : "secondary"}
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center pt-12 border-t border-white/10">
            <div>
              <h3 className="text-3xl font-serif font-medium mb-6">
                Why Join as a Featured Sponsor?
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-2 rounded-lg">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Premium Placement</h4>
                    <p className="text-gray-300 text-sm">
                      Get featured at the top of search results and on our
                      homepage
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-2 rounded-lg">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Business Growth</h4>
                    <p className="text-gray-300 text-sm">
                      Access detailed analytics and insights to grow your
                      business
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-2 rounded-lg">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Verified Status</h4>
                    <p className="text-gray-300 text-sm">
                      Stand out with a verified business badge and priority
                      support
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1495856458515-0637185db551?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                alt="Watch Repair Business"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-5 h-5 text-primary" />
                    <span className="font-medium text-gray-900">
                      Featured Business
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Join our network of premium watch repair businesses
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsoredContent;
