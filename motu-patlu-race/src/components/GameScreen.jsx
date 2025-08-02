import { useEffect, useState } from "react";

const foods = [
  { name: "Samosa", src: "/samosa.png", points: 10 },
  { name: "Burger", src: "/burger.png", points: 15 },
  { name: "Pizza", src: "/pizza.png", points: 20 },
  { name: "Donut", src: "/donut.png", points: 25 },
  { name: "Hotdog", src: "/hotdog.png", points: 30 }
];

export default function GameScreen({ playerChoice, onFinish }) {
  const [playerScore, setPlayerScore] = useState(0);
  const [botScore, setBotScore] = useState(0);
  const [foodsOnScreen, setFoodsOnScreen] = useState([]);
  const [timeLeft, setTimeLeft] = useState(60);
  const [jump, setJump] = useState(false);

  // Handle jumping
  useEffect(() => {
    const handleKey = (e) => {
      if (e.code === "Space" && !jump) {
        setJump(true);
        setTimeout(() => setJump(false), 600);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [jump]);

  // Countdown Timer (✅ fixed stale state issue)
  useEffect(() => {
    if (timeLeft <= 0) {
      onFinish(playerScore, botScore);
      return;
    }
    const t = setTimeout(() => {
      setTimeLeft((prev) => prev - 1); // ✅ always latest value
    }, 1000);
    return () => clearTimeout(t);
  }, [timeLeft, playerScore, botScore, onFinish]);

  // Spawn foods
  useEffect(() => {
    const spawn = setInterval(() => {
      const food = foods[Math.floor(Math.random() * foods.length)];
      setFoodsOnScreen((prev) => [
        ...prev,
        { ...food, id: Date.now(), left: window.innerWidth }
      ]);
    }, 1000);
    return () => clearInterval(spawn);
  }, []);

  // Move foods & bot collects
  useEffect(() => {
    const move = setInterval(() => {
      setFoodsOnScreen((prev) =>
        prev
          .map((f) => ({ ...f, left: f.left - 10 }))
          .filter((f) => f.left > -50)
      );

      // Bot collects randomly
      if (Math.random() < 0.3) {
        setBotScore((prev) => prev + [10, 15, 20, 25, 30][Math.floor(Math.random() * 5)]);
      }
    }, 50);
    return () => clearInterval(move);
  }, []);

  // Player collects food
  useEffect(() => {
    foodsOnScreen.forEach((f) => {
      if (f.left < 150 && f.left > 50 && !jump) {
        setPlayerScore((prev) => prev + f.points);
        setFoodsOnScreen((prev) => prev.filter((p) => p.id !== f.id));
      }
    });
  }, [foodsOnScreen, jump]);

  return (
    <div>
      <div className="city-background"></div>
      <div className="scoreboard">
        <p>⏱ Time: {timeLeft}s</p>
        <p>🧍 {playerChoice}: {playerScore}</p>
        <p>🤖 Bot: {botScore}</p>
      </div>
      <img
        src={playerChoice === "Motu" ? "/motu-running.gif" : "/patlu-running.gif"}
        alt="player"
        className="player"
        style={{ bottom: jump ? "250px" : "100px" }}
      />
      <img
        src={playerChoice === "Motu" ? "/patlu-running.gif" : "/motu-running.gif"}
        alt="bot"
        className="bot"
      />

      {foodsOnScreen.map((f) => (
        <img
          key={f.id}
          src={f.src}
          alt={f.name}
          className="food"
          style={{ left: f.left + "px", bottom: "100px" }}
        />
      ))}
    </div>
  );
}
