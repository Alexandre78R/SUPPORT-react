import React from "react";

function FetchData(props) {
  const { name, height, gender, films } = props;
  return (
    <div>
      <p>{name}</p>
      <p>{height}</p>
      <p>{gender}</p>
      <ul>
        {films.map((film) => (
          <li key={film}>
            <a target="_blank" href={film}>
              {film}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchData;
