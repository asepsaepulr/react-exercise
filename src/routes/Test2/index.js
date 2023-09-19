import React, { useState } from 'react';

import Input from "./Input";
import Label from "./Label";  

const Test2 = () => {
  const [dataFromFirstChild, setDataFromFirstChild] = useState('');

  const handleDataFromFirstChild = (data) => {
    setDataFromFirstChild(data);
  };

  return(
    <div>
      <ul>
        <li>Render user input value inside the label below</li>
        <li>show "close button" only when hovered, and clear the input value when clicked.</li>
      </ul>
      <p>
        <Label receivedData={dataFromFirstChild} />
      </p>
      <Input sendDataToParent={handleDataFromFirstChild} />
    </div>
  )
}

export default Test2;