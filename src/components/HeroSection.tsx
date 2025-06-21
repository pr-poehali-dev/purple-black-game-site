import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-gaming-purple/10 via-gaming-pink/5 to-gaming-purple/10" />
      <div className="absolute top-20 left-20 w-32 h-32 bg-gaming-purple/20 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 right-20 w-24 h-24 bg-gaming-pink/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto text-center relative z-10">
        {/* Main Headline */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gaming-purple via-gaming-pink to-gaming-purple bg-clip-text text-transparent animate-pulse-glow">
              Побеждай с нами
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Присоединяйся к тысячам игроков и получи бонус{" "}
            <span className="text-gaming-purple font-bold">500₽</span> на первый
            депозит
          </p>
        </div>

        {/* Stats */}
        <div className="flex justify-center space-x-8 mb-12 text-center">
          <div className="bg-gaming-card/30 backdrop-blur-sm border border-gaming-border rounded-lg p-4">
            <div className="text-2xl font-bold text-gaming-purple">12,849</div>
            <div className="text-sm text-muted-foreground">Игроков онлайн</div>
          </div>
          <div className="bg-gaming-card/30 backdrop-blur-sm border border-gaming-border rounded-lg p-4">
            <div className="text-2xl font-bold text-gaming-pink">₽2.1M</div>
            <div className="text-sm text-muted-foreground">
              Выплачено сегодня
            </div>
          </div>
          <div className="bg-gaming-card/30 backdrop-blur-sm border border-gaming-border rounded-lg p-4">
            <div className="text-2xl font-bold text-green-400">98.5%</div>
            <div className="text-sm text-muted-foreground">RTP</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
          <button className="w-full sm:w-auto button-primary px-8 py-4 rounded-xl font-bold text-lg text-white hover:scale-110 transition-all duration-300 neon-glow animate-pulse-glow">
            <Icon name="Rocket" size={20} className="inline mr-2" />
            Начать играть
          </button>
          <button className="w-full sm:w-auto bg-transparent border-2 border-gaming-purple px-8 py-4 rounded-xl font-bold text-lg text-gaming-purple hover:bg-gaming-purple hover:text-white transition-all duration-300">
            <Icon name="Play" size={20} className="inline mr-2" />
            Демо режим
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex justify-center items-center space-x-6 text-sm text-muted-foreground">
          <div className="flex items-center space-x-2">
            <Icon name="Shield" size={16} className="text-green-400" />
            <span>Лицензированно</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Lock" size={16} className="text-green-400" />
            <span>Безопасно</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Zap" size={16} className="text-green-400" />
            <span>Мгновенные выплаты</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
