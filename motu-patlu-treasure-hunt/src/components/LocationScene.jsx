export default function LocationScene({ location, onFindClue }) {
  const clues = {
    Market: "Clue 1: The treasure is near water.",
    Park: "Clue 2: It’s hidden under something tall.",
    Lab: "Clue 3: It’s close to Dr. Jhatka’s inventions."
  };

  return (
    <div>
      <h2>{location}</h2>
      <p>Search around to find the clue!</p>
      <button
        onClick={() => onFindClue(clues[location])}
        style={{ padding: "8px 15px", marginTop: "10px" }}
      >
        Find Clue
      </button>
    </div>
  );
}
