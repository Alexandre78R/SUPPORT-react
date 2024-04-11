import React, { useState } from "react";
import axios from "axios";
import FetchData from "./components/FetchData/FetchData";

function App() {
  const [data, setData] = useState(null);

  const getData = () => {};

  return (
    <div>
      <button type="button" onClick={getData}>
        Get data
      </button>
    </div>
  );
}
export default App;
