"use client";

import { useEffect, useState } from "react";
import CustomerHeader from "./_components/CustomerHeader";
import Footer from "./_components/Footer";

export default function Home() {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [showLocation, setShowLocation] = useState(false);

  useEffect(() => {
    loadLocations();
  }, []);

  const loadLocations = async () => {
    let response = await fetch("http://localhost:3000/api/customer/locations");
    response = await response.json();
    if (response.success) {
      setLocations(response.result);
    }
  };

  const handleListItem = (item) => {
    setSelectedLocation(item);
    setShowLocation(false);
  };

  console.log(locations);
  return (
    <main>
      <CustomerHeader />
      <div className="main-page-banner">
        <h1>Food Delivery App</h1>
        <div className="input-wrapper">
          <input
            type="text"
            value={selectedLocation}
            onClick={() => setShowLocation(true)}
            className="select-input"
            placeholder="Select Place"
          />
          <ul className="location-list">
            {showLocation &&
              locations.map((item) => (
                <li onClick={() => handleListItem(item)}> {item} </li>
              ))}
          </ul>

          <input
            type="text"
            className="search-input"
            placeholder="Enter food or restaurant name"
          />
        </div>
      </div>
      <Footer />
    </main>
  );
}
