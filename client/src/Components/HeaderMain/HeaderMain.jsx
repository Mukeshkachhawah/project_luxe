import "./HeaderMain.css";
import { Link } from "react-router-dom";

const HeaderMain = ({ setSearch }) => {
  return (
    <>
      <div className="secondbar">
        <div className="b1">
          <Link to="/">
            <img
              src="https://themewagon.github.io/eiser/img/logo.png"
              alt="Logo"
            />
          </Link>
        </div>
        <div className="b2">
          <ul>
            <li>
              <Link to="/men-products">Mens</Link>
            </li>
            <li>
              <Link to="/women-products">Women</Link>
            </li>
            <li>
              <Link to="/beauty-products">Beauty</Link>
            </li>
            <li>
              <Link to="/order-tracking">Home & Kitchen</Link>
            </li>

            <li>
              <Link to="/faq-page">FAQs</Link>
            </li>
            <li>
              <Link to="/contact-page">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="b3">
          <input
            className="form-control myInput"
            type="search"
            placeholder="Search Easier"
            aria-label="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <Link to="/love-product">
            <span>
              <i className="fa-regular fa-heart"></i>
            </span>
          </Link>
          <Link to="/cart-page">
            <span>
              <i className="fa-solid fa-cart-shopping"></i>
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeaderMain;
