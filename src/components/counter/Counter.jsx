import { useState } from "react";
import { CITIES } from "@/data/cities";
import "./counter.css";

// Counter - Muestra vistas por ciudad
export const Counter = ({ counts }) => {
  const [isOpen, setIsOpen] = useState(false);

  const totalViews = Object.values(counts).reduce((sum, count) => sum + count, 0);

  const sortedCities = CITIES.map((city) => ({
    ...city,
    count: counts[city.id] || 0,
  })).sort((a, b) => b.count - a.count);

  return (
    <div className={`counter-widget ${isOpen ? "open" : ""}`}>
      <button
        className="counter-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Ver estadísticas"
      >
        <span className="counter-icon">Vistas totales</span>
        <span className="counter-total">{totalViews}</span>
      </button>

      {isOpen && (
        <div className="counter-panel">
          <h4>Visitas por Ciudad</h4>
          <ul className="counter-list">
            {sortedCities.map((city) => (
              <li key={city.id} className="counter-item">
                <span className="item-name">{city.name}</span>
                <div className="item__bar-container">
                  <div
                    className="item__bar-fill"
                    style={{
                      width: `${(city.count / (totalViews || 1)) * 100}%`,
                      backgroundColor: city.bgColor,
                    }}
                  ></div>
                </div>
                <span className="item-count">{city.count}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
