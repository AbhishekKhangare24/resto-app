"use client";

import { useState } from "react";

const UserSignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");

  const handleSignUp = () => {
    console.log(name, email, password, confirmPassword, city, address, contact);
  };

  return (
    <div>
      <div className="input-wrapper">
        <input
          type="text"
          className="input-field"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
      </div>

      <div className="input-wrapper">
        <input
          type="text"
          className="input-field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />
      </div>

      <div className="input-wrapper">
        <input
          type="text"
          className="input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
      </div>

      <div className="input-wrapper">
        <input
          type="text"
          className="input-field"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm password"
        />
      </div>

      <div className="input-wrapper">
        <input
          type="text"
          className="input-field"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
        />
      </div>

      <div className="input-wrapper">
        <input
          type="text"
          className="input-field"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter address"
        />
      </div>

      <div className="input-wrapper">
        <input
          type="text"
          className="input-field"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="Enter mobile"
        />
      </div>

      <div className="input-wrapper">
        <button onClick={handleSignUp} className="button">
          Signup
        </button>
      </div>
    </div>
  );
};
export default UserSignUp;
