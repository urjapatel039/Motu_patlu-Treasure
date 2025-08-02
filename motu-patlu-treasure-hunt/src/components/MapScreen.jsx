export default function MapScreen({ setCurrentLocation }) {
  const locations = ["Market", "Park", "Lab"];

  return (
    <div>
      <h2>Choose a Location</h2>
      {locations.map((loc) => (
        <button
          key={loc}
          onClick={() => setCurrentLocation(loc)}
          style={{ margin: "10px", padding: "10px 15px" }}
        >
          {loc}
        </button>
      ))}
    </div>
  );
}
