import React, { useState } from "react";
import axios from "axios";
import FetchData from "./components/FetchData/FetchData";

function App() {
  const [data, setData] = useState(null);

  // url to fetch (with axios or "classic" fetch, as you wish): `https://swapi.dev/api/people`

  // data to get and to send via props: name, heigth, gender in priority, and films if you want to try

  // Component FetchData to create to display the value of the props - don't forget to import the Component in App.jsx

  // In App.jsx, make sure that data exist, and get it with the button "get data"

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
