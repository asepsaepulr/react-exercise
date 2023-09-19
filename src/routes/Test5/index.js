
import { cssWrapper } from './style';
import React, {useState } from 'react';

import Comp1 from "./Comp1";
import Comp3 from "./Comp3";

const question = (
  <ul>
    <li>primarily, user can input the value from <code>#mynumber</code></li>
    <li>
      please add or reduce the value by 1 when user click{' '}
      <code>#numbermin</code> and <code>#numberplus</code> button
    </li>
    <li>Show <b>ODD</b> or <b>EVEN</b> in first render section</li>
    <li>
      only show <code>#mynumber1</code> input when <code>#overwrite</code> checkbox is checked in <code>Comp1</code>
    </li>
    <li>
      user can input in <code>#mynumber1</code> and render the latest source of input in <code>Comp1</code> and it's value in{' '}<code>Comp2</code>
    </li>
    <li><code>Comp2</code> will display latest inputted from <code>#mynumber</code> &amp; <code>#mynumber1</code></li>
    <li><code>Comp3</code> will display <code>#mynumber</code></li>
    <li>show <code>Comp4</code> modal when user click <b>Show Modal</b> button in <code>Comp3</code></li>
    <li>update whole <code>input</code> and value render when user input <code>#mynumber2</code></li>
  </ul>
);
const globalData = {
  sharedValue: 0,
};

const Test5 = () => {
  const [myNumber, setMyNumber] = useState(0);
  //const [inputValueComp2, setInputValueComp2] = useState('');
  const handleNumberChange = (newValue) => {
    setMyNumber(newValue);
    globalData.sharedValue = newValue;
  };
  return(
    <>
      {question}
      <button id="numbermin" type="button" onClick={() => handleNumberChange(myNumber - 1)}>-</button>
      <input id="mynumber" type="text" placeholder="input mynumber" value={myNumber}
          onChange={(e) => setMyNumber(parseInt(e.target.value))}/>
      <button id="numberplus" type="button"   onClick={() => handleNumberChange(myNumber + 1)}>+</button>
      <br/>
      <br/>
      <div className={cssWrapper}>
        The inputted value is {myNumber % 2 === 0 ? 'EVEN' : 'ODD'}
      </div>
      <Comp1
         />
      <Comp3 />
      </>
  )
}
export function getSharedValue() {
  return globalData.sharedValue;
}

export default Test5;