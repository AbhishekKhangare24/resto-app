"use client";
import { useEffect, useState } from "react";
import DeliveryHeader from "../_components/DeliveryHeader";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const [myOrders, setMyOrders] = useState("");
  useEffect(() => {
    getMyOrders();
  }, []);

  const getMyOrders = async () => {
    const deliveryData = JSON.parse(localStorage.getItem("delivery"));
    let response = await fetch(
      `http://localhost:3000/api/deliverypartners/orders/${deliveryData._id}`
    );
    response = await response.json();
    if (response.success) {
      setMyOrders(response.result);
    }
  };

  useEffect(() => {
    const delivery = JSON.parse(localStorage.getItem("delivery"));
    if (!delivery) {
      router.push("/deliverydashboard");
    }
  }, []);

  return (
    <div>
      <DeliveryHeader />
      <h1>My Order List</h1>
      {myOrders &&
        myOrders.map((item) => (
          <div
            className="restaurant-wrapper"
            style={{ marginLeft: "auto", marginRight: "auto" }}
          >
            <h4>Name: {item.data.name}</h4>
            <div>Amount: {item.amount}</div>
            <div>Address: {item.data.address}</div>
            <div>Status: {item.status}</div>
            <div>
              Update Status:
              <select>
                <option>Confirm</option>
                <option>One the way</option>
                <option>Delivered</option>
                <option>Failed To delivered</option>
              </select>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Page;
