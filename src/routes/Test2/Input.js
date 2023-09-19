const Input = ({ sendDataToParent }) => {
  const handleChange = (event) => {
    sendDataToParent(event.target.value);
  };

  return(
    <div>
     <input type="text" placeholder="input here" onChange={handleChange}  />
      </div>
     )
}

export default Input;
