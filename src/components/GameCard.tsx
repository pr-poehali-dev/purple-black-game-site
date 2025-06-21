import { useState } from "react";
import Icon from "@/components/ui/icon";
import MinesGame from "./games/MinesGame";
import DiceGame from "./games/DiceGame";

interface GameCardProps {
  title: string;
  subtitle: string;
  image: string;
  lastWin: string;
  players: number;
  gameType: "mines" | "dice";
}

const GameCard = ({
  title,
  subtitle,
  image,
  lastWin,
  players,
  gameType,
}: GameCardProps) => {
  const [gameOpen, setGameOpen] = useState(false);

  const getGameIcon = () => {
    return gameType === "mines" ? "Bomb" : "Dice6";
  };

  return (
    <div className="relative bg-gradient-to-br from-gaming-card/60 to-gaming-card/20 backdrop-blur-xl border border-gaming-border/50 rounded-2xl p-6 group hover:border-gaming-purple/50 transition-all duration-500 hover:shadow-2xl hover:shadow-gaming-purple/20 overflow-hidden">
      {/* Animated background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-gaming-purple/5 via-gaming-pink/5 to-gaming-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Game Image */}
      <div className="relative mb-6 overflow-hidden rounded-xl shadow-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-52 object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Game type badge */}
        <div className="absolute top-4 right-4 bg-gaming-purple/30 backdrop-blur-md border border-gaming-purple/40 rounded-full p-3 group-hover:bg-gaming-purple/50 transition-all duration-300">
          <Icon
            name={getGameIcon()}
            size={18}
            className="text-white drop-shadow-lg"
          />
        </div>

        {/* Live indicator */}
        <div className="absolute top-4 left-4 flex items-center space-x-2 bg-red-500/20 backdrop-blur-md border border-red-500/40 rounded-full px-3 py-1">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          <span className="text-xs font-medium text-white">LIVE</span>
        </div>
      </div>

      {/* Game Info */}
      <div className="relative space-y-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-gaming-purple transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground/80">{subtitle}</p>
        </div>

        {/* Enhanced Stats */}
        <div className="flex justify-between items-center p-3 bg-gaming-card/30 backdrop-blur-sm rounded-lg border border-gaming-border/30">
          <div className="flex items-center space-x-2">
            <div className="p-1 bg-green-500/20 rounded-full">
              <Icon name="TrendingUp" size={14} className="text-green-400" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Выигрыш</p>
              <p className="text-green-400 font-bold text-sm">{lastWin}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="p-1 bg-gaming-purple/20 rounded-full">
              <Icon name="Users" size={14} className="text-gaming-purple" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Игроков</p>
              <p className="text-gaming-purple font-bold text-sm">{players}</p>
            </div>
          </div>
        </div>

        {/* Modern Action Buttons */}
        <div className="flex space-x-3 pt-2">
          <button
            onClick={() => setGameOpen(true)}
            className="flex-1 relative overflow-hidden bg-gradient-to-r from-gaming-purple to-gaming-pink p-3 rounded-xl font-semibold text-white hover:from-gaming-pink hover:to-gaming-purple transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-gaming-purple/50 group/button"
          >
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/button:translate-x-[100%] transition-transform duration-700 skew-x-12" />
            <div className="relative flex items-center justify-center space-x-2">
              <Icon name="Play" size={16} />
              <span>Играть</span>
            </div>
          </button>
          <button className="px-4 py-3 bg-gaming-card/50 border border-gaming-border hover:border-gaming-purple rounded-xl text-gaming-purple hover:bg-gaming-purple/10 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
            <Icon name="Eye" size={16} />
          </button>
        </div>
      </div>

      {/* Game Modals */}
      {gameOpen && gameType === "mines" && (
        <MinesGame onClose={() => setGameOpen(false)} />
      )}
      {gameOpen && gameType === "dice" && (
        <DiceGame onClose={() => setGameOpen(false)} />
      )}
    </div>
  );
};

export default GameCard;
