import { useState } from "react";
import Icon from "@/components/ui/icon";

interface MinesGameProps {
  onClose: () => void;
}

const MinesGame = ({ onClose }: MinesGameProps) => {
  const [bet, setBet] = useState(100);
  const [minesCount, setMinesCount] = useState(3);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);
  const [multiplier, setMultiplier] = useState(1);
  const [revealed, setRevealed] = useState<boolean[]>(
    new Array(25).fill(false),
  );
  const [mines, setMines] = useState<number[]>([]);
  const [gems, setGems] = useState(0);

  const startGame = () => {
    // Генерируем позиции мин
    const minePositions: number[] = [];
    while (minePositions.length < minesCount) {
      const pos = Math.floor(Math.random() * 25);
      if (!minePositions.includes(pos)) {
        minePositions.push(pos);
      }
    }

    setMines(minePositions);
    setRevealed(new Array(25).fill(false));
    setGameStarted(true);
    setGameOver(false);
    setWon(false);
    setGems(0);
    setMultiplier(1);
  };

  const clickCell = (index: number) => {
    if (!gameStarted || gameOver || revealed[index]) return;

    const newRevealed = [...revealed];
    newRevealed[index] = true;
    setRevealed(newRevealed);

    if (mines.includes(index)) {
      // Попали на мину
      setGameOver(true);
      setWon(false);
    } else {
      // Нашли алмаз
      const newGems = gems + 1;
      setGems(newGems);

      // Рассчитываем множитель
      const safeSpots = 25 - minesCount;
      const newMultiplier = Math.pow(
        safeSpots / (safeSpots - newGems),
        newGems,
      );
      setMultiplier(newMultiplier);
    }
  };

  const cashOut = () => {
    if (gems > 0) {
      setWon(true);
      setGameOver(true);
    }
  };

  const resetGame = () => {
    setGameStarted(false);
    setGameOver(false);
    setWon(false);
    setRevealed(new Array(25).fill(false));
    setMines([]);
    setGems(0);
    setMultiplier(1);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 game-modal">
      <div className="bg-gaming-card border border-gaming-border rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-2xl">💣</span>
            Mines
          </h2>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-white transition-colors"
          >
            <Icon name="X" size={24} />
          </button>
        </div>

        {/* Настройки игры */}
        {!gameStarted && (
          <div className="space-y-4 mb-6">
            <div>
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
              />
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-2">
                Количество мин
              </label>
              <select
                value={minesCount}
                onChange={(e) => setMinesCount(Number(e.target.value))}
                className="w-full bg-gaming-dark border border-gaming-border rounded-lg px-3 py-2 text-white"
              >
                <option value={1}>1 мина</option>
                <option value={3}>3 мины</option>
                <option value={5}>5 мин</option>
                <option value={10}>10 мин</option>
              </select>
            </div>
          </div>
        )}

        {/* Игровое поле */}
        <div className="grid grid-cols-5 gap-2 mb-6">
          {Array.from({ length: 25 }).map((_, index) => (
            <button
              key={index}
              onClick={() => clickCell(index)}
              disabled={!gameStarted || gameOver}
              className={`aspect-square rounded-lg border-2 transition-all duration-200 ${
                revealed[index]
                  ? mines.includes(index)
                    ? "bg-red-500 border-red-400"
                    : "bg-green-500 border-green-400"
                  : "bg-gaming-dark border-gaming-border hover:border-gaming-purple"
              }`}
            >
              {revealed[index] ? (
                mines.includes(index) ? (
                  <span className="text-2xl">💣</span>
                ) : (
                  <span className="text-2xl">💎</span>
                )
              ) : null}
            </button>
          ))}
        </div>

        {/* Статистика */}
        {gameStarted && (
          <div className="flex justify-between items-center mb-4 p-4 bg-gaming-dark rounded-lg">
            <div className="text-center">
              <div className="text-sm text-muted-foreground">Алмазы</div>
              <div className="text-lg font-bold text-green-400">{gems}</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-muted-foreground">Множитель</div>
              <div className="text-lg font-bold text-gaming-purple">
                {multiplier.toFixed(2)}x
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm text-muted-foreground">Выигрыш</div>
              <div className="text-lg font-bold text-white">
                ₽{(bet * multiplier).toFixed(2)}
              </div>
            </div>
          </div>
        )}

        {/* Кнопки управления */}
        <div className="flex space-x-3">
          {!gameStarted ? (
            <button
              onClick={startGame}
              className="flex-1 button-primary py-3 rounded-lg font-bold text-white"
            >
              Начать игру
            </button>
          ) : !gameOver ? (
            <>
              <button
                onClick={cashOut}
                disabled={gems === 0}
                className="flex-1 bg-green-600 hover:bg-green-700 py-3 rounded-lg font-bold text-white disabled:opacity-50"
              >
                Забрать ₽{(bet * multiplier).toFixed(2)}
              </button>
            </>
          ) : (
            <button
              onClick={resetGame}
              className="flex-1 button-primary py-3 rounded-lg font-bold text-white"
            >
              {won
                ? `Выиграно ₽${(bet * multiplier).toFixed(2)}! Играть снова`
                : "Попробовать снова"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MinesGame;
