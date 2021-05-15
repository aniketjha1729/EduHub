import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./navbar.css";
import { IconContext } from "react-icons";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../redux/actions/admin";

const Navbar = ({ logout, isAuthenticated, admin: { user } }) => {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          {user ? (
            <div className="navHeading">
              <FaIcons.FaAdn />
              <span>{user.user.name}</span>
            </div>
          ) : (
            ""
          )}
        </div>
        <nav
          activeKey="/"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
          className={sidebar ? "nav-menu active" : "nav-menu"}
        >
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <b style={{ color: "white" }}>EduHub</b>
              </Link>
            </li>
            {isAuthenticated &&
              SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            {isAuthenticated ? (
              <li className="nav-text">
                <Link onClick={logout}>Logout</Link>
              </li>
            ) : (
              ""
            )}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};
//for action to be called
Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
};

//for fetching the state
const mapStateToProps = (state) => ({
  isAuthenticated: state.admin.isAuthenticated,
  admin: state.admin,
});

export default connect(mapStateToProps, { logout })(Navbar);
