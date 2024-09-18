"use client";
import { useState } from "react";

const Page = () => {
  const [loginMobile, setLoginMobile] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSignUp = async () => {
    console.log(name, mobile, password, confirmPassword, city, address);
    let response = await fetch(
      "http://localhost:3000/api/deliverypartners/signup",
      {
        method: "post",
        body: JSON.stringify({
          name,
          mobile,
          password,
          city,
          address,
        }),
      }
    );
    response = await response.json();
    if (response.success) {
      const { result } = response;
      delete result.password;
      localStorage.setItem("delivery", JSON.stringify(result));
      alert("success");
    } else {
      alert("failed");
    }
  };

  const loginHandle = async () => {
    let response = await fetch(
      "http://localhost:3000/api/deliverypartners/login",
      {
        method: "post",
        body: JSON.stringify({
          mobile: loginMobile,
          password: loginPassword,
        }),
      }
    );
    response = await response.json();
    if (response.success) {
      const { result } = response;
      delete result.password;
      localStorage.setItem("delivery", JSON.stringify(result));
      alert("success");
    } else {
      alert("failed to login. Please try again with valid mobile and password");
    }
  };

  return (
    <div>
      <h1>Delivery partner</h1>
      <div className="auth-container">
        {/* login */}
        <div className="login-wrapper">
          <h3>Login</h3>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="enter mobile"
              value={loginMobile}
              onChange={(e) => setLoginMobile(e.target.value)}
              className="input-field"
            />
          </div>

          <div className="input-wrapper">
            <input
              type="password"
              placeholder="enter password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              className="input-field"
            />
          </div>

          <div className="input-wrapper">
            <button onClick={() => loginHandle()} className="button">
              Login
            </button>
          </div>
        </div>

        {/* sign up */}
        <div className="signup-wrapper">
          <h3>Signup</h3>
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
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Enter mobile"
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
            <button onClick={handleSignUp} className="button">
              Signup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
