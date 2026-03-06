import Logo from "/svg/logo.svg";
import { CITIES } from "@data/cities";

import "./header.css";

export const Header = ({ activeCityId }) => {
  const activeCity = CITIES.find((city) => city.id === activeCityId);

  return (
    <header className="header">
      <div className="header-logo">
        <img src={Logo} alt="logo" className="logo-img" /> -
        {activeCity ? (
          <span className="header-city">{activeCity.name}</span>
        ) : (
          <span className="header-city loading">cargando...</span>
        )}
      </div>

      <nav>
        <a href="mailto:info@DizZine.com" className="info">
          info@DizZine.com
        </a>
      </nav>
    </header>
  );
};
