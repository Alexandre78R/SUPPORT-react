import React, { useState } from "react";
import axios from "axios";
import FetchData from "./components/FetchData/FetchData";

function App() {
  const [data, setData] = useState(null);

  const getData = () => {
    axios.get(`https://swapi.dev/api/people`).then((response) => {
      console.log(response.data.results);
      setData(response.data.results);
    });
  };
  return (
    <div>
      {data &&
        data.map((perso) => {
          return (
            <FetchData
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
