import React from "react";
import { Button } from "./ui/button";
import { Search, Clock, Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

const Header = () => {
  return (
    <header className="w-full h-[72px] px-4 border-b flex items-center justify-center bg-white">
      <h1 className="text-xl font-semibold text-gray-900">
        Watch Repair Finder
      </h1>
    </header>
  );
};

export default Header;
