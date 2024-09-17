import Link from "next/link";

const CustomerHeader = () => {
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
        <li>
          <Link href="/">Login</Link>
        </li>
        <li>
          <Link href="/">SignUp</Link>
        </li>
        <li>
          <Link href="/">Cart(0)</Link>
        </li>
        <li>
          <Link href="/">Add Restaurant</Link>
        </li>
      </ul>
    </div>
  );
};

export default CustomerHeader;
