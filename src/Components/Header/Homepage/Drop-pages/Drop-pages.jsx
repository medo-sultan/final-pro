import "./Drop-pages.css";
import { Link } from "react-router-dom";

export default function PagesDropdown({ show }) {
  return (
    <div className={`pages-dropdown ${show ? "show" : ""}`}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About Us</Link>
        </li>
        <li>
          <Link to="/Blog">Blog</Link>
        </li>
        <li>
          <Link to="/Categories">Categories</Link>
        </li>
        <li>
          <Link to="/Offers">Offers</Link>
        </li>
        <li>
          <Link to="/discount">Best Discount</Link>
        </li>
        <li>
          <Link to="/privacy">Privacy Policy</Link>
        </li>
      </ul>
    </div>
  );
}
