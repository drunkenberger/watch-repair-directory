import { Card } from "./ui/card";
import { Separator } from "./ui/separator";
import { Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const repairs = [
  {
    name: "Battery Replacement",
    price: "$20 - $40",
    time: "15-30 mins",
    info: "Simple battery swap for quartz watches",
  },
  {
    name: "Crystal Replacement",
    price: "$80 - $200",
    time: "1-2 days",
    info: "Replace scratched or broken watch crystal",
  },
  {
    name: "Movement Service",
    price: "$150 - $500",
    time: "7-14 days",
    info: "Complete service including cleaning and lubrication",
  },
  {
    name: "Water Resistance Test",
    price: "$40 - $60",
    time: "30 mins",
    info: "Pressure testing to verify water resistance",
  },
  {
    name: "Band Adjustment",
    price: "$15 - $30",
    time: "15 mins",
    info: "Resize metal bracelet or replace watch strap",
  },
  {
    name: "Crown Replacement",
    price: "$60 - $150",
    time: "1-3 days",
    info: "Replace damaged or worn crown and stem",
  },
];

const PriceGuide = () => {
  return (
    <div className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_70%,transparent_100%)] -z-10" />
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-serif font-medium mb-4 text-primary leading-tight">
            Watch Repair Price Guide
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-sans font-light text-lg">
            Typical price ranges for common watch repairs. Actual prices may
            vary based on watch brand, model, and complexity of repair.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repairs.map((repair, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm hover:scale-[1.02] hover:bg-white group"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-serif font-medium group-hover:text-primary transition-colors">
                  {repair.name}
                </h3>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{repair.info}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Typical Cost:</span>
                  <span className="text-lg font-medium text-primary">
                    {repair.price}
                  </span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Estimated Time:</span>
                  <span className="font-medium text-gray-900">
                    {repair.time}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PriceGuide;
