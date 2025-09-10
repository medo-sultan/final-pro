import "./ProductsDropdown.css";
import { Link } from "react-router-dom";

export default function ProductsDropdown({ show }) {
  return (
    <div className={`products-dropdown ${show ? "show" : ""}`}>
      <ul>
        <li>
          <Link to="/products/new">New Arrivals</Link>
        </li>
        <li>
          <Link to="/products/best-sellers">Best Sellers</Link>
        </li>
        <li>
          <Link to="/products/featured">Featured</Link>
        </li>
        <li>
          <Link to="/products/sale">On Sale</Link>
        </li>
        <li>
          <Link to="/products/bundles">Bundles</Link>
        </li>
      </ul>
    </div>
  );
}
