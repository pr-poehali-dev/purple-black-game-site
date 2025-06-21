import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gaming-purple/20 via-black to-gaming-pink/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,119,198,0.2),transparent_50%)]" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gaming-purple/30 rounded-full blur-xl animate-pulse" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-gaming-pink/40 rounded-full blur-lg animate-bounce" />
      <div className="absolute bottom-32 left-32 w-12 h-12 bg-green-400/30 rounded-full blur-md animate-ping" />
      <div
        className="absolute bottom-20 right-40 w-24 h-24 bg-gaming-purple/20 rounded-full blur-2xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto text-center relative z-10 max-w-6xl">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-gaming-card/40 backdrop-blur-sm border border-gaming-border rounded-full text-sm text-gaming-pink mb-8 animate-fade-in">
          <Icon name="Sparkles" size={16} className="mr-2" />
          🎮 #1 Игровая платформа России
        </div>

        {/* Main Headline */}
        <div className="mb-12">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-none">
            <span className="block bg-gradient-to-r from-gaming-purple via-gaming-pink to-purple-400 bg-clip-text text-transparent animate-scale-in">
              ПОБЕЖДАЙ
            </span>
            <span
              className="block bg-gradient-to-r from-gaming-pink via-yellow-400 to-gaming-purple bg-clip-text text-transparent animate-scale-in"
              style={{ animationDelay: "0.2s" }}
            >
              С НАМИ
            </span>
          </h1>
          <p
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-medium animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            Окунись в мир азарта! Получи бонус{" "}
            <span className="bg-gradient-to-r from-gaming-pink to-yellow-400 bg-clip-text text-transparent font-bold text-2xl md:text-3xl">
              1000₽
            </span>{" "}
            на первый депозит и начни побеждать уже сегодня!
          </p>
        </div>

        {/* Live Stats */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="bg-gaming-card/20 backdrop-blur-md border border-gaming-border/50 rounded-2xl p-6 hover:bg-gaming-card/30 transition-all duration-300 hover:scale-105">
            <div className="text-3xl md:text-4xl font-black text-gaming-purple mb-2">
              <span className="animate-pulse">15,247</span>
            </div>
            <div className="text-gray-400 font-medium">Игроков онлайн</div>
            <div className="flex items-center mt-2 text-green-400 text-sm">
              <Icon name="TrendingUp" size={16} className="mr-1" />
              +12% за час
            </div>
          </div>

          <div className="bg-gaming-card/20 backdrop-blur-md border border-gaming-border/50 rounded-2xl p-6 hover:bg-gaming-card/30 transition-all duration-300 hover:scale-105">
            <div className="text-3xl md:text-4xl font-black text-gaming-pink mb-2">
              <span className="animate-pulse">₽4.2M</span>
            </div>
            <div className="text-gray-400 font-medium">Выплачено сегодня</div>
            <div className="flex items-center mt-2 text-green-400 text-sm">
              <Icon name="Coins" size={16} className="mr-1" />
              Рекорд дня!
            </div>
          </div>

          <div className="bg-gaming-card/20 backdrop-blur-md border border-gaming-border/50 rounded-2xl p-6 hover:bg-gaming-card/30 transition-all duration-300 hover:scale-105">
            <div className="text-3xl md:text-4xl font-black text-green-400 mb-2">
              <span className="animate-pulse">99.1%</span>
            </div>
            <div className="text-gray-400 font-medium">Отдача RTP</div>
            <div className="flex items-center mt-2 text-green-400 text-sm">
              <Icon name="Award" size={16} className="mr-1" />
              Честная игра
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div
          className="mb-12 animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto mb-6">
            <button className="group w-full sm:w-auto relative bg-gradient-to-r from-gaming-purple via-gaming-pink to-purple-500 px-10 py-5 rounded-2xl font-black text-xl text-white hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-gaming-purple/50">
              <div className="absolute inset-0 bg-gradient-to-r from-gaming-pink via-purple-400 to-gaming-purple rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center justify-center">
                <Icon name="Rocket" size={24} className="mr-3" />
                ИГРАТЬ СЕЙЧАС
              </div>
            </button>

            <button className="w-full sm:w-auto bg-transparent border-2 border-gaming-purple/50 px-10 py-5 rounded-2xl font-bold text-lg text-gaming-purple hover:bg-gaming-purple/10 hover:border-gaming-purple transition-all duration-300 backdrop-blur-sm">
              <Icon name="Play" size={20} className="inline mr-2" />
              Демо версия
            </button>
          </div>

          <p className="text-sm text-gray-500">
            Без регистрации • Мгновенный вывод • Поддержка 24/7
          </p>
        </div>

        {/* Trust & Security */}
        <div
          className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-400 animate-fade-in"
          style={{ animationDelay: "1s" }}
        >
          <div className="flex items-center space-x-2 bg-gaming-card/10 px-4 py-2 rounded-full backdrop-blur-sm">
            <Icon name="Shield" size={18} className="text-green-400" />
            <span>Лицензия РФ</span>
          </div>
          <div className="flex items-center space-x-2 bg-gaming-card/10 px-4 py-2 rounded-full backdrop-blur-sm">
            <Icon name="Lock" size={18} className="text-green-400" />
            <span>SSL защита</span>
          </div>
          <div className="flex items-center space-x-2 bg-gaming-card/10 px-4 py-2 rounded-full backdrop-blur-sm">
            <Icon name="Zap" size={18} className="text-yellow-400" />
            <span>Вывод за 1 минуту</span>
          </div>
          <div className="flex items-center space-x-2 bg-gaming-card/10 px-4 py-2 rounded-full backdrop-blur-sm">
            <Icon name="Users" size={18} className="text-blue-400" />
            <span>500K+ игроков</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
