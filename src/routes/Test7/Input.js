import React, { useRef } from 'react';

const Input = ({ onSearch }) => {
  const searchRef = useRef('');

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onSearch(searchRef.current.value);
    }
  };

  const handleSearch = () => {
    onSearch(searchRef.current.value);
  };
  return (
    <div>
      <input type="text" placeholder="search" ref={searchRef} onKeyPress={handleKeyPress} />
      <button onClick={handleSearch} type="submit">🔍</button>
    </div>
  )
}

export default Input;
