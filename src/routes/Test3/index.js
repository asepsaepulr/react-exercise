import React, { useRef } from 'react';

const Test3 = () => {
  const inputRef = useRef(null);

  const handleFocusClick = () => {
    inputRef.current.focus();
  };
  return(
    <div>
      <ul>
        <li>Please focus to the text field when user click the focus button</li>
      </ul>
      <p>
        <button type="button" onClick={handleFocusClick}>Focus Text Field</button>
      </p>
      <input type="text" placeholder="focus me" ref={inputRef} />
    </div>
  )
}

export default Test3;