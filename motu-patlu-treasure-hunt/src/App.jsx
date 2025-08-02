import { useState } from "react";
import StartScreen from "./components/StartScreen";
import MapScreen from "./components/MapScreen";
import LocationScene from "./components/LocationScene";
import CluesBoard from "./components/CluesBoard";
import TreasureScene from "./components/TreasureScene";

export default function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [clues, setClues] = useState([]);
  const [treasureFound, setTreasureFound] = useState(false);

  const handleFindClue = (clue) => {
    if (!clues.includes(clue)) {
      setClues([...clues, clue]);
    }
    setCurrentLocation(null);
    if (clues.length + 1 >= 3) setTreasureFound(true); // Unlock treasure after 3 clues
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {!gameStarted && <StartScreen onStart={() => setGameStarted(true)} />}

      {gameStarted && !currentLocation && !treasureFound && (
        <>
          <CluesBoard clues={clues} />
          <MapScreen setCurrentLocation={setCurrentLocation} />
        </>
      )}

      {currentLocation && !treasureFound && (
        <LocationScene location={currentLocation} onFindClue={handleFindClue} />
      )}

      {treasureFound && <TreasureScene />}
    </div>
  );
}
