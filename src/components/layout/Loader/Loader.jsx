import "./loader.css";

export const Loader = ({ progress }) => {
  return (
    <div className="loader">
      <div className="loader__content">
        <hgroup>
          <h1 className="loader__title">DizZine</h1>
          <p className="loader__subtitle">Ciudades de Colombia</p>
        </hgroup>

        <div className="loader__progress-bar">
          <div className="loader__progress" style={{ width: `${progress}%` }} />
        </div>
        <p className="loader__percentage">{Math.round(progress)}</p>
      </div>
    </div>
  );
};
