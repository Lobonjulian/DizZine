import { CITIES } from "@data/cities";
import { CitySection } from "@components/city/CitySection";
import { Counter } from "@components/counter/Counter";
import { Footer } from "@components/layout/Footer/Footer";
import { Header } from "@components/layout/Header/Header";
import { Loader } from "@components/layout/Loader/Loader";
import { Sidebar } from "@components/layout/Sidebar/Sidebar";
import { useCityTracker } from "@hooks/useCityTracker";
import { useLoader } from "@hooks/useLoader";

function App() {
  const { isLoading, progress } = useLoader();

  const { activityCityId, viewCounts, handleCityVisible } = useCityTracker();

  if (isLoading) {
    return <Loader progress={progress} />;
  }

  return (
    <>
      <Header activeCityId={activityCityId} />
      <Sidebar activeCityId={activityCityId} />

      <main className="app-container">
        {CITIES.map((city) => (
          <CitySection key={city.id} city={city} onCityVisible={handleCityVisible} />
        ))}
      </main>

      <Counter counts={viewCounts} />
      <Footer />
    </>
  );
}

export default App;
