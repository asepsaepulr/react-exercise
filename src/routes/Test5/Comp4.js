import { cssWrapper, cssModalRight } from './style';
import React, {useState } from 'react';

const globalData = {
  sharedValue4: 0,
};
const Comp4 = (/* NO PROPS ALLOWED */) => {
  const [myNumber, setMyNumber] = useState(0);
  //globalData.sharedValue4 = myNumber;
  return(
    <>
      <div className={cssWrapper}>
        <div className={cssModalRight}>
          Input Modal
          <button type="button">⊗</button>
        </div>
        <input id="mynumber2" type="text" placeholder="input mynumber2"  onChange={(e) => setMyNumber(parseInt(e.target.value))}></input>
      </div>
    </>
  )
}
export function getSharedValue4() {
  return globalData.sharedValue4;
}

export default Comp4;