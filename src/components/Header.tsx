const Header = () => {
  const brands = [
    "Rolex",
    "Omega",
    "Cartier",
    "Casio",
    "Timex",
    "Swatch",
    "Seiko",
    "Citizen",
    "TAG Heuer",
    "Fossil",
    "G-Shock",
    "Bulova",
  ];

  return (
    <header className="w-full h-[72px] border-b bg-white overflow-hidden">
      <div className="h-full flex items-center relative">
        <div className="flex absolute animate-marquee whitespace-nowrap">
          {[...brands, ...brands, ...brands].map((brand, index) => (
            <span
              key={index}
              className="text-xl font-medium text-gray-900 flex items-center mx-8"
            >
              {brand} Watch Repair <span className="text-gray-400 mx-2">•</span>
            </span>
          ))}
        </div>
        <div className="flex absolute animate-marquee2 whitespace-nowrap">
          {[...brands, ...brands, ...brands].map((brand, index) => (
            <span
              key={index}
              className="text-xl font-medium text-gray-900 flex items-center mx-8"
            >
              {brand} Watch Repair <span className="text-gray-400 mx-2">•</span>
            </span>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
