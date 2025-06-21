import { useState } from "react";
import Icon from "@/components/ui/icon";

interface DiceGameProps {
  onClose: () => void;
}

const DiceGame = ({ onClose }: DiceGameProps) => {
  const [bet, setBet] = useState(100);
  const [prediction, setPrediction] = useState(50);
  const [direction, setDirection] = useState<"over" | "under">("over");
  const [isRolling, setIsRolling] = useState(false);
  const [result, setResult] = useState<number | null>(null);
  const [won, setWon] = useState<boolean | null>(null);

  const getMultiplier = () => {
    if (direction === "over") {
      return 99 / (99 - prediction);
    } else {
      return 99 / prediction;
    }
  };

  const rollDice = async () => {
    setIsRolling(true);
    setResult(null);
    setWon(null);

    // Симуляция броска с анимацией
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const diceResult = Math.floor(Math.random() * 100) + 1;
    setResult(diceResult);

    const isWin =
      direction === "over" ? diceResult > prediction : diceResult < prediction;

    setWon(isWin);
    setIsRolling(false);
  };

  const getWinChance = () => {
    if (direction === "over") {
      return (((99 - prediction) / 99) * 100).toFixed(1);
    } else {
      return (((prediction - 1) / 99) * 100).toFixed(1);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 game-modal">
      <div className="bg-gaming-card border border-gaming-border rounded-xl p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-2xl">🍩</span>
            Dice
          </h2>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-white transition-colors"
          >
            <Icon name="X" size={24} />
          </button>
        </div>

        {/* Ставка */}
        <div className="mb-6">
          <label className="block text-sm text-muted-foreground mb-2">
            Ставка
          </label>
          <input
            type="number"
            value={bet}
            onChange={(e) => setBet(Number(e.target.value))}
            className="w-full bg-gaming-dark border border-gaming-border rounded-lg px-3 py-2 text-white"
            min="10"
            max="10000"
            disabled={isRolling}
          />
        </div>

        {/* Направление */}
        <div className="mb-6">
          <label className="block text-sm text-muted-foreground mb-2">
            Направление
          </label>
          <div className="flex space-x-2">
            <button
              onClick={() => setDirection("over")}
              disabled={isRolling}
              className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
                direction === "over"
                  ? "bg-gaming-purple text-white"
                  : "bg-gaming-dark border border-gaming-border text-muted-foreground"
              }`}
            >
              Больше
            </button>
            <button
              onClick={() => setDirection("under")}
              disabled={isRolling}
              className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
                direction === "under"
                  ? "bg-gaming-purple text-white"
                  : "bg-gaming-dark border border-gaming-border text-muted-foreground"
              }`}
            >
              Меньше
            </button>
          </div>
        </div>

        {/* Предсказание */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm text-muted-foreground">
              {direction === "over" ? "Больше чем" : "Меньше чем"}
            </label>
            <span className="text-white font-bold">{prediction}</span>
          </div>
          <input
            type="range"
            min="2"
            max="98"
            value={prediction}
            onChange={(e) => setPrediction(Number(e.target.value))}
            disabled={isRolling}
            className="w-full"
          />
        </div>

        {/* Результат броска */}
        <div className="mb-6 text-center">
          <div className="w-24 h-24 mx-auto bg-gaming-dark border-2 border-gaming-border rounded-xl flex items-center justify-center mb-4">
            {isRolling ? (
              <Icon
                name="Dice6"
                size={32}
                className="text-gaming-purple animate-spin"
              />
            ) : result !== null ? (
              <span
                className={`text-2xl font-bold ${won ? "text-green-400" : "text-red-400"}`}
              >
                {result}
              </span>
            ) : (
              <Icon name="Dice6" size={32} className="text-muted-foreground" />
            )}
          </div>

          {won !== null && (
            <div
              className={`text-lg font-bold ${won ? "text-green-400" : "text-red-400"}`}
            >
              {won
                ? `Выигрыш ₽${(bet * getMultiplier()).toFixed(2)}`
                : "Проигрыш"}
            </div>
          )}
        </div>

        {/* Статистика */}
        <div className="grid grid-cols-3 gap-4 mb-6 text-center text-sm">
          <div className="bg-gaming-dark rounded-lg p-3">
            <div className="text-muted-foreground">Шанс</div>
            <div className="text-white font-bold">{getWinChance()}%</div>
          </div>
          <div className="bg-gaming-dark rounded-lg p-3">
            <div className="text-muted-foreground">Множитель</div>
            <div className="text-gaming-purple font-bold">
              {getMultiplier().toFixed(2)}x
            </div>
          </div>
          <div className="bg-gaming-dark rounded-lg p-3">
            <div className="text-muted-foreground">Выигрыш</div>
            <div className="text-white font-bold">
              ₽{(bet * getMultiplier()).toFixed(2)}
            </div>
          </div>
        </div>

        {/* Кнопка броска */}
        <button
          onClick={rollDice}
          disabled={isRolling}
          className="w-full button-primary py-3 rounded-lg font-bold text-white disabled:opacity-50"
        >
          {isRolling ? "Бросаем..." : "Бросить кубик"}
        </button>
      </div>
    </div>
  );
};

export default DiceGame;
