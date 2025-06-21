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
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-2xl">🎲</span>
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
            className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
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
                  ? "bg-purple-600 text-white"
                  : "bg-gray-800 border border-gray-600 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Больше
            </button>
            <button
              onClick={() => setDirection("under")}
              disabled={isRolling}
              className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
                direction === "under"
                  ? "bg-purple-600 text-white"
                  : "bg-gray-800 border border-gray-600 text-gray-300 hover:bg-gray-700"
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
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>

        {/* Результат броска */}
        <div className="mb-6 text-center">
          <div className="w-24 h-24 mx-auto bg-gray-800 border-2 border-gray-600 rounded-xl flex items-center justify-center mb-4">
            {isRolling ? (
              <Icon
                name="Dice6"
                size={32}
                className="text-purple-500 animate-spin"
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
          <div className="bg-gray-800 rounded-lg p-3">
            <div className="text-gray-400">Шанс</div>
            <div className="text-white font-bold">{getWinChance()}%</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-3">
            <div className="text-gray-400">Множитель</div>
            <div className="text-purple-400 font-bold">
              {getMultiplier().toFixed(2)}x
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg p-3">
            <div className="text-gray-400">Выигрыш</div>
            <div className="text-white font-bold">
              ₽{(bet * getMultiplier()).toFixed(2)}
            </div>
          </div>
        </div>

        {/* Кнопка броска */}
        <button
          onClick={rollDice}
          disabled={isRolling}
          className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-lg font-bold text-white disabled:opacity-50 transition-colors"
        >
          {isRolling ? "Бросаем..." : "Бросить кубик"}
        </button>
      </div>
    </div>
  );
};

export default DiceGame;
