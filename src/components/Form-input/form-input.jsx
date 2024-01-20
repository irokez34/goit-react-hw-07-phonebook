import React, { useState } from 'react';

import './form-input.css';
import { useDispatch, useSelector } from 'react-redux';
import { addNewContactThunk } from 'store/thunk/thunk';
import { selectContacts } from 'store/Slice/selectors';

const FormInput = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const handleChange = e => {
    const { value, name } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    const isContact = contacts.find(el => el.number === number);
    if (isContact) {
      setName('');
      setNumber('');
      return alert('Контакт Існує');
    }

    const data = {
      name: name,
      number: number,
    };
    dispatch(addNewContactThunk(data));
    setName('');
    setNumber('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <div className="input-name">
          <input
            type="text"
            name="name"
            className="input-form"
            value={name}
            onChange={handleChange}
            required
          />
          <span className="bar"></span>
          <label>Name</label>
        </div>
        <div className="input-number">
          <input
            type="tel"
            name="number"
            className="input-form"
            value={number}
            onChange={handleChange}
            required
          />
          <span className="bar"></span>
          <label>Number</label>
        </div>
        <button className="btn" type="submit">
          Add contact
        </button>
      </div>
    </form>
  );
};

export default FormInput;
