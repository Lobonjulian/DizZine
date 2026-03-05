import "./CitySection.css";

export const CitySection = ({ city }) => {
  const { name, department, description, architecture, bgColor, population, poster, coordinates } =
    city;

  const formattedPopulation = population
    ? new Intl.NumberFormat("es-CO").format(population)
    : "N/A";

  return (
    <section className="city-section" style={{ backgroundColor: bgColor }}>
      <div className="city-frame">
        <figure className="city-section__poster">
          {poster ? (
            <img src={poster} alt={`Poster de ${name}`} className="poster-image" />
          ) : (
            <div className="poster-placeholder">
              <span>
                {name}- {coordinates}
              </span>
            </div>
          )}

          <figcaption className="poster-caption">
            <span className="poster-caption__department">{department}</span>
            <h1 className="poster-caption__name">{name}</h1>
            <p className="poster-caption__description">{description}</p>
          </figcaption>
        </figure>

        <footer className="city-meta">
          <div className="meta-item">
            <span className="meta-label">Arquitectura</span>
            <span className="meta-value">{architecture}</span>
          </div>

          <div className="meta-item">
            <span className="meta-label">Población</span>
            <span className="meta-value">{formattedPopulation} hab.</span>
          </div>
        </footer>
      </div>
    </section>
  );
};
