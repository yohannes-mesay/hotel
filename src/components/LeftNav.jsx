import "./LeftNav.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  House,
  Bag,
  Gear,
  Calendar,
  ShoppingBag,
  Tag,
  Compass,
} from "phosphor-react";

export const LeftNav = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleClick = (index) => {
    setActiveLink(index);
  };
  return (
    <div className="navbar">
      <div className="logo">Logo</div>
      {/* <hr /> */}
      <div className="links">
        <p className="Topic">Primary</p>
        <Link
          to="/"
          className={activeLink === 0 ? "active" : ""}
          onClick={() => handleClick(0)}
        >
          <div>
            <House size={18} />
            <p>Dashboard</p>
          </div>
        </Link>
        <p className="Topic">Explore</p>
        <Link
          to="/Products"
          className={activeLink === 1 ? "active" : ""}
          onClick={() => handleClick(1)}
        >
          <div>
            <ShoppingBag size={18} />
            <p>Products</p>
          </div>
        </Link>
        <Link
          to="/Service"
          className={activeLink === 2 ? "active" : ""}
          onClick={() => handleClick(2)}
        >
          <div>
            <Gear size={18} />
            <p>Services</p>
          </div>
        </Link>
        <Link
          to="/Events"
          className={activeLink === 3 ? "active" : ""}
          onClick={() => handleClick(3)}
        >
          <div>
            <Calendar size={18} />
            <p>Events</p>
          </div>
        </Link>
        <p className="Topic">Studio</p>
        <Link
          to="/Saved"
          className={activeLink === 4 ? "active" : ""}
          onClick={() => handleClick(4)}
        >
          <div>
            <Bag size={18} />
            <p>Saved</p>
          </div>
        </Link>
        <Link
          to="/Create"
          className={activeLink === 5 ? "active" : ""}
          onClick={() => handleClick(5)}
        >
          <div>
            <Compass size={18} />
            <p>Create</p>
          </div>
        </Link>
      </div>
    </div>
  );
};
