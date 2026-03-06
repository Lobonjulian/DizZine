import { CITIES } from "@/data/cities";

import "./sidebar.css";

export const Sidebar = ({ activeCityId }) => {
  return (
    <aside className="sidebar">
      <ul className="sidebar-list">
        {CITIES.map((city) => (
          <li key={city.id} className={`sidebar-item ${city.id === activeCityId ? "active" : ""}`}>
            <a href={`#${city.id}`}>
              #{city.id.charAt(0).toUpperCase() + city.id.slice(1).charAt(0)}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};
