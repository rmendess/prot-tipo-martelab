import React from "react";
import "./styles.css";
const Header = () => {
  return (
    <div className="header-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="wave"
      >
        <defs>
          {/* Gradiente Linear para a Onda */}
          <linearGradient id="waveGradient" gradientTransform="rotate(90)">
            <stop offset="15%" stop-color="#1e90ff" />
            <stop offset="100%" stop-color="#00008b" />
          </linearGradient>

          {/* Gradiente Radial para a Parte Inferior */}
          <radialGradient id="radialGradient" cx="40%" cy="60%" r="50%">
            <stop offset="50%" stop-color="white" />
            <stop offset="100%" stop-color="#DBDBDB" />
          </radialGradient>
        </defs>

        {/* Parte Inferior com Gradiente Radial */}
        <rect y="60" width="1440" height="320" fill="url(#radialGradient)" />

        {/* Onda com Gradiente Linear */}
        <path
          fill="url(#waveGradient)"
          fill-opacity="1"
          d="M0,160L48,165.3C96,171,192,181,288,192C384,203,480,213,576,197.3C672,181,768,139,864,138.7C960,139,1056,181,1152,213.3C1248,245,1344,267,1392,277.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>

      <h1 className="wave-text">
        Bem Vindo Dra. <span className="highlight">Simone</span>
      </h1>
    </div>
  );
};

export default Header;
