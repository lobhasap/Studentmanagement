// Register.js
import React, { useState } from 'react';
import './studentmanagementsystem.css';


function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    age: '',
    email: '',
    phoneNumber: '',
    address: '',
    gender: 'male', // default gender
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
  
    try {
      // Make POST request to backend
      const response = await fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      console.log('Form submitted:', formData);
    } catch (error) {
      console.error('There was an error!', error.message);
    }
  };

  return (
    <div className="register-container">
      <h2>Register Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              pattern="[A-Za-z]+"
              required
            />
          </label>
        </div>
        <div>
          <label>
            Middle Name:
            <input
              type="text"
              name="middleName"
              value={formData.middleName}
              onChange={handleChange}
              pattern="[A-Za-z]+"
              required
            />
          </label>
        </div>
        <div>
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              pattern="[A-Za-z]+"
              required
            />
          </label>
        </div>
        <div>
          <label>
            Age:
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              min="1"
              max="999"
              required
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              pattern="^[a-zA-Z0-9._%+-]+@(gmail\.com|outlook\.com|yahoo\.co\.in|vupune\.ac\.in)$"
              required
            />
          </label>
        </div>
        <div>
          <label>
            Phone Number:
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              pattern="[0-9]{10}"
              maxLength="10"
              required
            />
          </label>
        </div>
        <div>
          <label>
            Address:
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              maxLength="100"
              required
            />
          </label>
        </div>
        <div>
          <label>
            Gender:
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === 'male'}
              onChange={handleChange}
            />{' '}
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === 'female'}
              onChange={handleChange}
            />{' '}
            Female
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              minLength="6" // Example: Minimum 6 characters
              required
            />
          </label>
        </div>

        {/* New confirm password field */}
        <div>
          <label>
            Confirm Password:
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              minLength="6" // Example: Minimum 6 characters
              required
            />
          </label>
        </div>
        <center><button type="submit">Submit</button></center>
      </form>
    </div>
  );
}

export default Register;
