import React, { useState } from "react";
import "react-icons/ri";
import { Link } from "react-router-dom";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import { DataMenu } from "./DataMenu";
import { GiSnakeSpiral } from "react-icons/gi";

const Navbar = ({ pageTitle }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  window.onscroll = () => {
    return setToggleMenu(false);
  };
  return (
    <header className="header" id="header-id">
      <div className="header-logo flex-row">
        <Link to="/" className="header-logo-link link flex-row">
          <GiSnakeSpiral className="header-logo-link-icon" size={25} />
          <div className="header-logo-link-title">sokunmaru | {pageTitle}</div>
        </Link>
      </div>
      <div className="menu">
        <div className="menu-buttons">
          <div className="menu-button">
            {toggleMenu ? (
              <RiCloseLine
                className="btns"
                size={27}
                onClick={() => setToggleMenu(false)}
              />
            ) : (
              <RiMenu3Line
                className="btns"
                size={27}
                onClick={() => setToggleMenu(true)}
              />
            )}
          </div>
        </div>
        <div className="menu-data">
          {toggleMenu && (
            <div className="menu-popUp flex-col" id="menu-id">
              {DataMenu.map((item, index) => {
                return (
                  <Link className="menu-item link" to={item.path}>
                    {item.title}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
export default Navbar;
