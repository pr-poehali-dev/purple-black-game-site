import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import GameCard from "@/components/GameCard";
import WalletSection from "@/components/WalletSection";

const Index = () => {
  const games = [
    {
      title: "Mines",
      subtitle: "Найди все алмазы, избегая мин",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      lastWin: "₽2,450",
      players: 1247,
      gameType: "mines" as const,
    },
    {
      title: "Dice",
      subtitle: "Угадай правильное число",
      image:
        "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&h=300&fit=crop",
      lastWin: "₽890",
      players: 856,
      gameType: "dice" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-gaming-dark">
      <Header />

      <main>
        <HeroSection />

        {/* Games Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Популярные игры
              </h2>
              <p className="text-muted-foreground text-lg">Выбери свою удачу</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
              {games.map((game, index) => (
                <GameCard key={index} {...game} />
              ))}
            </div>
          </div>
        </section>

        {/* Wallet Section */}
        <section className="py-16 px-4 bg-gaming-card/20">
          <div className="container mx-auto max-w-2xl">
            <WalletSection />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
