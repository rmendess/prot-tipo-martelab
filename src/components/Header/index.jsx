import React from "react";
import "./styles.css";
import Background from "../../assets/background.jpg";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-wave-div">
        <div class="wave-container">
          <img src={Background} alt="sem imagem de fundo" />
        </div>

        <div className="positionUsername">
          <h1>
            Bem Vindo Dra.<span className="highlight">Simone</span>
          </h1>
        </div>
      </div>
    
    </div>
  );
};

export default Header;
