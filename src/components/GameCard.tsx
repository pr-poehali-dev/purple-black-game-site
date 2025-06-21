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
    <div className="card-glow rounded-xl p-6 group">
      {/* Game Image */}
      <div className="relative mb-4 overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-3 right-3 bg-gaming-purple/20 backdrop-blur-sm rounded-full p-2">
          <Icon name={getGameIcon()} size={20} className="text-gaming-purple" />
        </div>
      </div>

      {/* Game Info */}
      <div className="space-y-3">
        <div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>

        {/* Stats */}
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center space-x-1">
            <Icon name="TrendingUp" size={14} className="text-green-400" />
            <span className="text-green-400 font-medium">{lastWin}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Users" size={14} className="text-gaming-purple" />
            <span className="text-gaming-purple">{players}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2 pt-2">
          <button
            onClick={() => setGameOpen(true)}
            className="flex-1 button-primary py-3 rounded-lg font-medium text-white hover:scale-105 transition-all duration-300"
          >
            <Icon name="Play" size={16} className="inline mr-2" />
            Играть
          </button>
          <button className="px-4 py-3 bg-gaming-card border border-gaming-border rounded-lg text-gaming-purple hover:bg-gaming-purple hover:text-white transition-all duration-300">
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
