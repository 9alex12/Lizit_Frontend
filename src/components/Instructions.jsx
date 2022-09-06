import React from "react";

export default function Instructions(props) {
  return (
    <>
      <h1 className="title">React + Redux</h1>
      <strong>Instrucciones:</strong>
      <ol className="instructions">
        <li>
          El proyecto cuenta con una configuración del store de redux, pero hace
          falta algunos cambios. Verifique que le hace falta e implemente.
        </li>
        <li>Terminar de conectar el componente App con el store de redux.</li>
        <li>
          Realice el consumo a la api{" "}
          <a href="https://rickandmortyapi.com/documentation/#filter-characters">
            https://rickandmortyapi.com/documentation/#filter-characters
          </a>{" "}
          con lo ya existente en el proyecto y permitirle filtrar por el nombre,
          muestre con ayuda del componente <strong>CharacterList</strong> la
          información consultada.
        </li>
      </ol>
    </>
  );
}
