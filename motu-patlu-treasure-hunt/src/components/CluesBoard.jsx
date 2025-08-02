export default function CluesBoard({ clues }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>Clues Found:</h3>
      <ul>
        {clues.length === 0 ? (
          <li>No clues yet.</li>
        ) : (
          clues.map((clue, i) => <li key={i}>{clue}</li>)
        )}
      </ul>
    </div>
  );
}
