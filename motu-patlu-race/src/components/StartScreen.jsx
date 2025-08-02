export default function StartScreen({ onSelect }) {
  return (
    <div className="center">
      <h1>Motu vs Patlu – Fast Food Race 🏃🍔</h1>
      <p>Choose your character</p>
      <button onClick={() => onSelect("Motu")}>Play as Motu</button>
      <button onClick={() => onSelect("Patlu")} style={{ marginLeft: "10px" }}>
        Play as Patlu
      </button>
    </div>
  );
}
