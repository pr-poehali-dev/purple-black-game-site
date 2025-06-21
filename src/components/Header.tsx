import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="w-full bg-gaming-card/50 backdrop-blur-md border-b border-gaming-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-gaming-purple to-gaming-pink rounded-lg flex items-center justify-center">
            <span className="text-xl">🍩</span>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-gaming-purple to-gaming-pink bg-clip-text text-transparent">
            DONUTBET
          </span>
        </div>

        {/* Balance & Actions */}
        <div className="flex items-center space-x-4">
          {/* Balance */}
          <div className="bg-gaming-card border border-gaming-border rounded-lg px-4 py-2">
            <div className="flex items-center space-x-2">
              <Icon name="Wallet" size={16} className="text-gaming-purple" />
              <span className="text-sm text-muted-foreground">Баланс:</span>
              <span className="font-semibold text-white">₽1,250.00</span>
            </div>
          </div>

          {/* Top-up Button */}
          <button className="button-primary px-6 py-2 rounded-lg font-medium text-white hover:scale-105 transition-all duration-300 animate-pulse-glow">
            + Пополнить
          </button>

          {/* Profile */}
          <div className="w-10 h-10 bg-gradient-to-r from-gaming-purple to-gaming-pink rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
            <Icon name="User" size={20} className="text-white" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
