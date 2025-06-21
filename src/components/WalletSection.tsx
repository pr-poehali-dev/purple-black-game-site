import Icon from "@/components/ui/icon";

const WalletSection = () => {
  const transactions = [
    {
      type: "deposit",
      amount: "+₽500",
      time: "2 мин назад",
      status: "success",
    },
    { type: "win", amount: "+₽1,250", time: "15 мин назад", status: "success" },
    { type: "bet", amount: "-₽100", time: "30 мин назад", status: "neutral" },
  ];

  return (
    <div className="card-glow rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Кошелек</h2>
        <Icon name="Wallet" size={24} className="text-gaming-purple" />
      </div>

      {/* Balance Display */}
      <div className="bg-gradient-to-r from-gaming-purple/10 to-gaming-pink/10 rounded-lg p-6 mb-6">
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-2">Общий баланс</p>
          <p className="text-4xl font-bold text-white mb-4">₽1,250.00</p>
          <div className="flex space-x-3">
            <button className="flex-1 button-primary py-3 rounded-lg font-medium text-white hover:scale-105 transition-all duration-300">
              <Icon name="Plus" size={16} className="inline mr-2" />
              Пополнить
            </button>
            <button className="flex-1 bg-gaming-card border border-gaming-border py-3 rounded-lg font-medium text-white hover:bg-gaming-border transition-all duration-300">
              <Icon name="Minus" size={16} className="inline mr-2" />
              Вывести
            </button>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">
          Последние операции
        </h3>
        <div className="space-y-3">
          {transactions.map((tx, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-gaming-card/30 rounded-lg border border-gaming-border/50"
            >
              <div className="flex items-center space-x-3">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    tx.type === "deposit"
                      ? "bg-green-500/20"
                      : tx.type === "win"
                        ? "bg-gaming-purple/20"
                        : "bg-red-500/20"
                  }`}
                >
                  <Icon
                    name={
                      tx.type === "deposit"
                        ? "ArrowDown"
                        : tx.type === "win"
                          ? "Trophy"
                          : "ArrowUp"
                    }
                    size={16}
                    className={
                      tx.type === "deposit"
                        ? "text-green-400"
                        : tx.type === "win"
                          ? "text-gaming-purple"
                          : "text-red-400"
                    }
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">
                    {tx.type === "deposit"
                      ? "Пополнение"
                      : tx.type === "win"
                        ? "Выигрыш"
                        : "Ставка"}
                  </p>
                  <p className="text-xs text-muted-foreground">{tx.time}</p>
                </div>
              </div>
              <span
                className={`font-semibold ${
                  tx.amount.startsWith("+") ? "text-green-400" : "text-red-400"
                }`}
              >
                {tx.amount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WalletSection;
