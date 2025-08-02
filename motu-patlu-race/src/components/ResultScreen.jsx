export default function ResultScreen({ playerScore, botScore, onRestart }) {
  return (
    <div className="center">
      {playerScore > botScore ? (
        <h1>🎉 Congratulations! You Win!</h1>
      ) : playerScore === botScore ? (
        <h1>🤝 It's a Draw!</h1>
      ) : (
        <h1>❌ Sorry! Bot Wins!</h1>
      )}
      <p>Your Score: {playerScore} | Bot Score: {botScore}</p>
      <button onClick={onRestart}>Play Again</button>
    </div>
  );
}
