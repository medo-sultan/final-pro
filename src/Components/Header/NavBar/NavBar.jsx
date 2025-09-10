import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import "./NavBar.css";
import Homepage from "../Homepage/Homepage";

import ProductsDropdown from "../Homepage/ProductsDropdown/ProductsDropdown";
import PagesDropdown from "../Homepage/Drop-pages/Drop-pages";
import RecentDropdown from "../../../Pages/Recent/Recent";
import CategoriesDropdown from "../Homepage/CategoriesDropdown/CategoriesDropdown";

export default function NavBar({
  setIsSidebarOpen,
  homeDrop,
  setHomeDrop,
  catDrop,
  setCatDrop,
  prodDrop,
  setProdDrop,
  pagesDrop,
  setPagesDrop,
  recentDrop,
  setRecentDrop,
  homeTimeout,
  catTimeout,
  prodTimeout,
  pagesTimeout,
  handleEnter,
  handleLeave,
}) {
  return (
    <nav className="main-nav">
      <div className="categories-btn" onClick={() => setIsSidebarOpen(true)}>
        <span>☰</span> Shop by Categories
      </div>

      <ul className="nav-links">
        <li
          className="nav-has-dropdown"
          onMouseEnter={() => handleEnter(setHomeDrop, homeTimeout)}
          onMouseLeave={() => handleLeave(setHomeDrop, homeTimeout)}
        >
          <span className="dropdown-link">
            <Link to="/">Home</Link> <IoIosArrowDown />
          </span>
          <Homepage show={homeDrop} />
        </li>

        <li
          className="nav-has-dropdown"
          onMouseEnter={() => handleEnter(setCatDrop, catTimeout)}
          onMouseLeave={() => handleLeave(setCatDrop, catTimeout)}
        >
          <span className="dropdown-link">
            <Link to="/Categories">Categories</Link>
            <IoIosArrowDown />
          </span>
          <CategoriesDropdown show={catDrop} />
        </li>

        <li
          className="nav-has-dropdown"
          onMouseEnter={() => handleEnter(setProdDrop, prodTimeout)}
          onMouseLeave={() => handleLeave(setProdDrop, prodTimeout)}
        >
          <span className="dropdown-link">
            <Link to="/Offers">Offers</Link>
            <IoIosArrowDown />
          </span>
          <ProductsDropdown show={prodDrop} />
        </li>

        <li
          className="nav-has-dropdown"
          onMouseEnter={() => handleEnter(setPagesDrop, pagesTimeout)}
          onMouseLeave={() => handleLeave(setPagesDrop, pagesTimeout)}
        >
          <span className="dropdown-link">
            Pages <IoIosArrowDown />
          </span>
          <PagesDropdown show={pagesDrop} />
        </li>

        <li>
          <Link to="/about">About us</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/discount">Best Discount</Link>
        </li>

        <li
          className="nav-has-dropdown push-end"
          onMouseEnter={() => handleEnter(setRecentDrop, pagesTimeout)}
          onMouseLeave={() => handleLeave(setRecentDrop, pagesTimeout)}
        >
          <span className="dropdown-link">
            <RecentDropdown show={recentDrop} />
          </span>
        </li>
      </ul>
    </nav>
  );
}
