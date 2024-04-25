import { useState } from "react";
import "./App.css";
import Table from "./components/Table/Table";

function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="app">
      <div className="Header">
        <input
          type="search"
          id="search-form"
          className="search-input"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
          placeholder="Search bacteria"
        />
      </div>
      <Table search={search}/>
    </div>
  );
}

export default App;
