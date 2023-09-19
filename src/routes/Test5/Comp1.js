import { cssWrapper } from './style';
import Comp2 from "./Comp2";
import React, { useState } from 'react';

const Comp1 = () => {
  //const [value] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [overwriteChecked, setOverwriteChecked] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleOverwriteChange = () => {
    console.log(overwriteChecked)
    setOverwriteChecked(!overwriteChecked);
  };
  return(
    <div className={cssWrapper}>
      Latest Inputted from <code>[Test5/Comp1]*</code>
      <br/>
      <br/>
      <label htmlFor="overwrite">
        Local overwrite: <input id="overwrite" type="checkbox" checked={overwriteChecked}
          onChange={handleOverwriteChange}/>
        {/* only show when overwrite is checked */}
        {/* {isOverwriteChecked && ( */}
        N 1
        {overwriteChecked && (
        <input id="mynumber1" type="text" placeholder="input mynumber1" value={inputValue} onChange={handleInputChange}/>
         )}
      </label>
      <Comp2 value={inputValue} />
    </div>
  )
}

export default Comp1;