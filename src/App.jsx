import React, { useState } from "react";
import axios from "axios";
import FetchData from "./components/FetchData/FetchData";

function App() {
  const [data, setData] = useState(null);

  // Solution 1
  // function getData() {
  //   fetch(`https://swapi.dev/api/people`)
  //     .then((response) => response.json())
  //     .then((data) => setData(data.results))
  //     .catch((err) => console.error(err));
  // }

  // Solution 2
  const getData = () => {
    axios.get(`https://swapi.dev/api/people`).then((response) => {
      setData(response.data.results);
    });
  };

  // url to fetch (with or without axios, as you wish): `https://swapi.dev/api/people`

  // data to get and to send via props: name, heigth, gender in priority, and films if you want to try

  // Component FetchData to create to receive and display the props - don't forget to import the Component in App.jsx

  // In App.jsx, get data with the button - make sure that data exist before mapping !

  return (
    <div>
      {data &&
        data.map((perso, index) => {
          return (
            <FetchData
              key={index}
              name={perso.name}
              height={perso.height}
              gender={perso.gender}
              films={perso.films}
            />
          );
        })}
      <button type="button" onClick={getData}>
        Get data
      </button>
    </div>
  );
}
export default App;
