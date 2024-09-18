"use client";

import { useState } from "react";

const UserSignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSignUp = async () => {
    console.log(name, email, password, confirmPassword, city, address, mobile);
    let response = await fetch("http://localhost:3000/api/user", {
      method: "post",
      body: JSON.stringify({
        name,
        email,
        password,
        city,
        address,
        mobile,
      }),
    });
    response = await response.json();
    if (response.success) {
      alert("user signup done");
    } else {
      alert("failed");
    }
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
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
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
