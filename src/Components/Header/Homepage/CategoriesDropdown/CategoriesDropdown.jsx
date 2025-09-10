import "./CategoriesDropdown.css";
import { Link } from "react-router-dom";

export default function CategoriesDropdown({ show }) {
  return (
    <div className={`categories-dropdown ${show ? "show" : ""}`}>
      <ul>
        <li>
          <Link to="/Supermarket">Supermarket</Link>
        </li>
        <li>
          <Link to="/Mobile">Laptop</Link>
        </li>
        <li>
          <Link to="/MAN">sportswear</Link>
        </li>
        <li>
          <Link to="/Woman">Women's Fashion</Link>
        </li>
        <li>
          <Link to="/Furniture">Furniture</Link>
        </li>
        <li>
          <Link to="/Autopart">Autopart</Link>
        </li>
        <li>
          <Link to="/Book">Books</Link>
        </li>
        <li>
          <Link to="/GameBoy">Playstation</Link>
        </li>
        <li>
          <Link to="/Cosmetics">Cosmetics</Link>
        </li>
        <li>
          <Link to="/MyInfinity">MyInfinity</Link>
        </li>
      </ul>
    </div>
  );
}
