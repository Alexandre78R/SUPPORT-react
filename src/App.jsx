import React, { useState } from "react";
import axios from "axios";
import FetchData from "./components/FetchData/FetchData";

function App() {
  const [data, setData] = useState();

  // const getData = () => {
  //   const charNumber = prompt("Choose a number between 1 and 83");
  //   axios.get(`https://swapi.dev/api/people/${charNumber}`).then((response) => {
  //     setData(response.data);
  //   });
  // };
  const getData = () => {
    axios.get(`https://swapi.dev/api/people/1`).then((response) => {
      setData(response.data);
    });
  };
  return (
    <div>
      {data && (
        <FetchData
          name={data.name}
          height={data.height}
          gender={data.gender}
          films={data.films}
        />
      )}
      <button type="button" onClick={getData}>
        Get data
      </button>
    </div>
  );
}
export default App;
