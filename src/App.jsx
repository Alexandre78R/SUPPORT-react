import React, { useState } from "react";
import axios from "axios";
import FetchData from "./components/FetchData/FetchData";

function App() {
  const [data, setData] = useState(null);

  // url to fetch (with or without axios, as you wish): `https://swapi.dev/api/people`

  // data to get and to send via props: name, heigth, gender in priority, and films if you want to try

  // Component FetchData to create to receive and display the props - already imported in App:)

  // In App.jsx, get data with the button - make sure that data exist before mapping !

  return (
    <div>
      <button type="button" onClick={getData}>
        Get data
      </button>
    </div>
  );
}
export default App;
