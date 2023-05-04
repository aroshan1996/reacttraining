import React from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";
const Menu = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="menu-dev">
        <ul>
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/about-us")}>About us</li>
          <li onClick={() => navigate("/contact-us")}>Contact us</li>
          <li onClick={() => navigate("/sign-up")}>Sign up</li>
        </ul>
      </div>
    </>
  );
};
export default Menu;
