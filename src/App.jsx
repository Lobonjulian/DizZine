import { CitySection } from "@components/city/CitySection";
import { CITIES } from "@data/cities";
import { useEffect, useState } from "react";
import { Header } from "./components/layout/Header/Header";
import { Loader } from "./components/layout/Loader/Loader";

function App() {
  const [activityCityId, setActivityCityId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 10;
      });
    }, 200);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500);
      return () => clearInterval(timer);
    }
  }, [progress]);

  const handleCityVisible = (id) => {
    if (id !== activityCityId) {
      setActivityCityId(id);
    }
  };

  if (isLoading) {
    return <Loader progress={progress} />;
  }

  return (
    <>
      <Header activeCityId={activityCityId} />

      <main className="app-container">
        {CITIES.map((city) => (
          <CitySection key={city.id} city={city} onCityVisible={handleCityVisible} />
        ))}
      </main>
    </>
  );
}

export default App;
