"use client";
import { useState } from "react";
import RestaurantLogin from "../_components/RestaurantLogin";
import RestaurantSignUp from "../_components/RestaurantSignUp";
import RestaurantHeader from "../_components/RestaurantHeader";
import Footer from "../_components/Footer";
import "./style.css";

const Restaurant = () => {
  const [login, setLogin] = useState(true);

  return (
    <div className="container">
      <RestaurantHeader />

      <h1>Restaurant Login/Signup Page</h1>
      {login ? <RestaurantLogin /> : <RestaurantSignUp />}

      <button className="button-link" onClick={() => setLogin(!login)}>
        {login ? "Do not have account? SignUp" : "Aleready have Account? Login"}
      </button>

      <Footer />
    </div>
  );
};

export default Restaurant;
