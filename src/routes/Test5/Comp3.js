import { cssWrapper } from "./style";
import { useState } from "react";
import Comp4 from "./Comp4";
//import {getSharedValue4} from "./Comp4";
import { getSharedValue } from './index';


const Comp3 = () => {
  const sharedData = getSharedValue();
  // const sharedData4 = getSharedValue4();
  // console.log(sharedData4)
  const [ showModal, setShowModal ] = useState(false);
  const handleModal = () => {
    setShowModal(true);
  };
  return(
    <>
      <div className={cssWrapper}>The Inputted Value is: {sharedData}</div>
      <button type="button" onClick={handleModal}>Show Modal</button>
      {showModal && <Comp4/>}
    </>
  )
}

export default Comp3;