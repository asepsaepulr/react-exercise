import React, { useState, useEffect } from 'react';
import { css } from 'react-emotion';
import './style.css';

const cssLabel = css({
  display: 'inline-block',
  margin: '4px 0px',
  padding: '2px 8px',
  backgroundColor: '#e0e0e0',
  borderRadius: 8,
  button: {
    backgroundColor: 'transparent',
    color: 'red',
    marginLeft: 4,
    fontSize: 22,
    padding: 0,
    border: 'none',
    outline: 'none',
  }
})

const Label = ({ receivedData }) => {
  
  const [inputValue, setInputValue] = useState(receivedData);

  useEffect(() => { 
    setInputValue(receivedData);
  }, [receivedData]);

  const handleClearValue = (valueToClear) => () => {
    setInputValue(valueToClear);
  };
  return (
    <span className={cssLabel}>
      <span className='hover-label'>
     {inputValue}
      <button className="hover-button" onClick={handleClearValue('')} type="button">⊗</button>
    </span>
    </span>
  )
}

export default Label;
