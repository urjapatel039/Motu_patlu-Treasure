import { useState } from "react";
import StartScreen from "./components/StartScreen";
import GameScreen from "./components/GameScreen";
import ResultScreen from "./components/ResultScreen";
import "./styles.css";

export default function App() {
  const [stage, setStage] = useState("start");
  const [playerChoice, setPlayerChoice] = useState(null);
  const [playerScore, setPlayerScore] = useState(0);
  const [botScore, setBotScore] = useState(0);

  const startGame = (choice) => {
    setPlayerChoice(choice);
    setStage("game");
  };

  const finishGame = (player, bot) => {
    setPlayerScore(player);
    setBotScore(bot);
    setStage("result");
  };

  const restartGame = () => {
    setStage("start");
    setPlayerScore(0);
    setBotScore(0);
  };

  return (
    <>
      {stage === "start" && <StartScreen onSelect={startGame} />}
      {stage === "game" && <GameScreen playerChoice={playerChoice} onFinish={finishGame} />}
      {stage === "result" && (
        <ResultScreen
          playerScore={playerScore}
          botScore={botScore}
          onRestart={restartGame}
        />
      )}
    </>
  );
}
