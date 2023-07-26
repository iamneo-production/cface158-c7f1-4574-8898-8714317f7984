import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addFeedback } from './api';

const FeedForm = () => {
  const [formdata, setFormdata] = useState({
    email: '',
    name: '',
    subject: '',
    message: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setFormdata({ ...formdata, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addFeedback(formdata);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
    console.log(formdata);
  };

  const formContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
  };

  const formStyle = {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '20px',
    maxWidth: '400px',
    width: '100%',
    boxSizing: 'border-box',
  };

  const inputStyle = {
    padding: '10px',
    margin: '5px',
    width: '100%',
    fontSize: '16px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    margin: '10px',
    fontSize: '18px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div style={formContainerStyle}>
      <div className="login-form" style={formStyle}>
        <h2>FEEDBACK</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            id="email"
            style={inputStyle}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Name"
            id="name"
            style={inputStyle}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Subject"
            id="subject"
            style={inputStyle}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Message"
            id="message"
            style={inputStyle}
            onChange={handleChange}
            required
          />
          <button type="submit" style={buttonStyle}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedForm;