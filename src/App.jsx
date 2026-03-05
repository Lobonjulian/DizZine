import { CitySection } from "./components/city/CitySection";
import { CITIES } from "./data/cities";

function App() {
  return (
    <div className="app-container">
      {CITIES.map((city) => (
        <CitySection key={city.id} city={city} />
      ))}
    </div>
  );
}

export default App;
