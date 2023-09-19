import DATA from "./_data";
import React, { useState } from 'react';

const Table = ({ searchTerm }) => {

  const filteredData = DATA.filter((row) =>
    Object.values(row).some((val) =>
      String(val).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
          {filteredData.map((row) => (
            <tr key={row.address}>
              <td>{row.name}</td>
              <td>{row.age}</td>
              <td>{row.address}</td>
            </tr>
          ))}
        </tbody>
    </table>
  )
}

export default Table;
