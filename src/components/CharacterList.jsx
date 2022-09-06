import React from "react";
import "./characterList.css";

export default function CharacterList({ characters }) {
  return (
    <ul className="character-list">
      {characters.map(({ id, name, image }) => (
        <li key={id}>
          <img src={image} alt={`imagen de ${name}`} />
          <div>{name}</div>
        </li>
      ))}
    </ul>
  );
}
