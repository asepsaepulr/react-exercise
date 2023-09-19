import React, { useState } from 'react';
import Modal from './Modal';
import { cssForm } from './style';

const Test8 = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    address: '',
  });

  const [showModal, setShowModal] = useState(false);

  const handleInput = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowModal(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      age: '',
      address: '',
    });
    setShowModal(false);
  };
  return(
    <div>
      <ul>
        <li>User can input the form - only 1 handle method is allowed</li>
        <li>When submit display the modal</li>
        <li>Show the form value inside the modal</li>
        <li>Reset the form and close the modal when user click the reset button</li>
      </ul>
      <form className={cssForm} onSubmit={handleSubmit}>
        <input type="text" placeholder="name" name="name" value={formData.name} onChange={handleInput}/>
        <input type="text" placeholder="age" name="age" value={formData.age} onChange={handleInput}/>
        <textarea type="text" placeholder="address" name="address" value={formData.address} onChange={handleInput}/>
        <button>Submit</button>
      </form>
      {/* Only Show the modal when user clicked submit */}
      <Modal
        isOpen={showModal}
        onReset={handleReset}
        data={formData}
      ></Modal>
    </div>
  )
}

export default Test8;