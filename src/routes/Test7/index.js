import React, { useState } from 'react';
import useRenderLog from "../../hooks/useRenderLog";
import Input from "./Input";
import Table from "./Table";
import DATA from "./_data";


const Test7 = () => {
 useRenderLog('Test7', 1);
  const [filteredData, setFilteredData] = useState(DATA);

  const handleSearch = (searchTerm) => {
    const filteredRows = DATA.filter((row) =>
      row.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredRows);
  };
  return(
    <div>
      <ul>
        <li>Please filter the table by name search (after press enter or click search button)</li>
        <li>No rerender allowed in <code>Test7</code> component</li>
      </ul>
      <Input onSearch={handleSearch}/>
      <div>
        <Table data={filteredData} />
      </div>
    </div>
  )
}

export default Test7;