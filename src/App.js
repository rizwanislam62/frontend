import { useState } from "react";
import "./App.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  const handleClick = () => {
    axios
      .get(
        "https://ta-backend-e8bxhkbhcjdcdgb5.westeurope-01.azurewebsites.net/customerInfo"
      )
      .then((response) => {
        console.log(response.data && response.data.recordset);
        setData(response.data ? response.data.recordset : []);
      });
  };
  console.log(data);
  return (
    <div className="App">
      <header className="App-header">Hello</header>

      {data.length > 0 &&
        data.map((ele) => {
          return <text href="#/action-1">{ele.firstName}</text>;
        })}
    </div>
  );
}

export default App;
