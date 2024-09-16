import Link from "next/link";

const RestaurantHeader = () => {
  return (
    <div className="header-wrapper">
      <div className="logo">
        <img
          style={{ width: 100 }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ_OTkM0sbcKOBvrdx2vvvKei9QJxruSLkLA&s"
        />
      </div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">Login/SignUp</Link>
        </li>
        <li>
          <Link href="/">Profile</Link>
        </li>
      </ul>
    </div>
  );
};

export default RestaurantHeader;
