import React, { useState } from 'react';
import './style.css';

function RegistrationForm() {
  return (
    <div className="form">
      <div className="form-body">
        <div className="username">
          <label className="form__label" htmlFor="firstName">
            First Name
          </label>
          <input
            className="form__input"
            type="text"
            id="firstName"
            placeholder="First Name"
          />
        </div>
        <div className="lastname">
          <label className="form__label" htmlFor="lastName">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            className="form__input"
            placeholder="Last Name"
          />
        </div>
        <div className="category">
          <label htmlFor="language" className="form__label" style={{ marginRight: '10px' }}>
            Select a Food category:
          </label>
          {/* <br /> Add a line break */}
          <select name="language" id="language">
            <option value="Select">Select</option>

            <option value="veg">Veg</option>
            <option value="veg">Non-Veg</option>
             
          </select>
        </div>
        <div className="contact info">
          <label className="form__label" htmlFor="character">
            Contact
          </label>
          <input
            type="character"
            id="character"
            className="form__input"
            placeholder="Contact"
          />
        </div>
      </div>
      <div className="footer">
        <button type="submit" className="btn">
          Register
        </button>
      </div>
    </div>
  );
}

export default RegistrationForm;
