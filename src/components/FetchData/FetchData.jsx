import React from "react";
import "./FetchData.css";

function FetchData({ data }) {
  return (
    <>
      <div id="persoCards">
        {data.map((perso, index) => (
          <section class="persoCard" key={index}>
            <h1>{perso.name}</h1>
            <p>{perso.height}</p>
            <ul>
              {perso.films.map((film, index) => (
                <a href={film} target="_blank">
                  <li key={index}>{film}</li>
                </a>
              ))}
            </ul>
          </section>
        ))}
        ;
      </div>
    </>
  );
}

export default FetchData;
