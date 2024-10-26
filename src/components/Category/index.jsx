import React from "react";
import "./style.css";

const categories = [
  { title: "Receita", buttons: ["Bulário", "Manual", "Modelos de Receitas"] },
  { title: "Atestado", buttons: ["Modelos", "Padrão"] },
  { title: "Exames", buttons: ["Solicitação Exames", "Modelos de Exames"] },
  { title: "Relatórios", buttons: ["Personalizados", "Modelos"] },
  { title: "Resultados de Exames", buttons: ["Histórico"] },
  { title: "Recomendações", buttons: ["Retorno", "Personalizados", "Modelos"] },
];

const Category = () => {
  return (
    <div className="category-container">
      {categories.map((category) => (
        <>
          <h2>{category.title}</h2>
          <div key={category.title} className="category-section">
            <div className="buttons-container">
              {category.buttons.map((button) => (
                <button key={button} className="category-button">
                  {button}
                </button>
              ))}
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Category;
