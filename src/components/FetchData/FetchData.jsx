import React from "react";
import "./FetchData.css";

function FetchData({ perso }) {
  return (
    <>
      <section className="persoCard">
        <h1>{perso.name}</h1>
        <p>{perso.height}</p>
        <ul>
          {perso.films.map((film, index) => (
            <a key={index} href={film} target="_blank">
              <li>{film}</li>
            </a>
          ))}
        </ul>
      </section>
    </>
  );
}

export default FetchData;
