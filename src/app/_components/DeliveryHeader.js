"use client";
import Link from "next/link";

const DeliveryHeader = (props) => {
  return (
    <div className="header-wrapper">
      <div>
        <img
          style={{ width: 100 }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ_OTkM0sbcKOBvrdx2vvvKei9QJxruSLkLA&s"
        />
      </div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
    </div>
  );
};

export default DeliveryHeader;
