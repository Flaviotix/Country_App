import React from "react";

const Card = ({ country }) => {
  return (
    <li className="card">
      <img
        src={country.flags.png}
        alt={"drapeau" + country.translations.fra.common}
      />
      <div className="infos">
        <h2>{country.translations.fra.common}</h2>
        <p>Pop. {country.population.toLocaleString()}</p>
      </div>
    </li>
  );
};

export default Card;
