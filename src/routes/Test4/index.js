import React, { useState } from 'react';
import Input from "./Input";
import Table from "./Table";

const Test4 = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  return(
    <div>
      <ul>
        <li>Please render data into the table</li>
        <li>Please filter the table by name search (after press enter or click search button)</li>
      </ul>
      <Input value={searchTerm} onChange={handleSearch} />
      <div>
        <Table searchTerm={searchTerm}/>
      </div>
    </div>
  )
}

export default Test4;