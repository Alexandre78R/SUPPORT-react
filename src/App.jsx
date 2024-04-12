import React, { useState } from "react";
import axios from "axios";
import FetchData from "./components/FetchData/FetchData";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  // Solution 1
  function getData() {
    fetch(`https://swapi.dev/api/people`)
      .then((response) => response.json())
      .then((data) => setData(data.results))
      .catch((err) => console.error(err));
  }

  // Solution 2 with axios
  // const getData = () => {
  //   axios.get(`https://swapi.dev/api/people`).then((response) => {
  //     setData(response.data.results);
  //   });
  // };

  return (
    <>
      <div className="persoCards">
        {data ? (
          data.map((perso, index) => <FetchData key={index} perso={perso} />)
        ) : (
          <div id="buttonArea">
            <button type="button" onClick={getData}>
              Get data
            </button>
          </div>
        )}
      </div>
    </>
  );
}
export default App;
