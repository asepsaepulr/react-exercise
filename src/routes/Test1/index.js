import React, { useState } from "react";
const Test1 = () => {

  const [inputVal, setInputVal] = useState("")
  
  return(
    <div>
      <ul>
        <li>Please render the inputted value</li>
      </ul>
      <p>
        <b>User Input: </b> {inputVal}
      </p>
      <input type="text" placeholder="input here" onChange={(e) => setInputVal(e.target.value)}/>
    </div>
  )
}

export default Test1;