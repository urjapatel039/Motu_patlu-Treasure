export default function StartScreen({ onStart }) {
  return (
    <div>
      <h1>Motu Patlu – Mission Furfuri Treasure Hunt</h1>
      <button onClick={onStart} style={{ padding: "10px 20px", fontSize: "18px" }}>
        Start Game
      </button>
    </div>
  );
}
