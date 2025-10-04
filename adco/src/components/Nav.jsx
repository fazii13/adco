import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/adco-logo.png";

const Nav = () => {
  return (
    <div>
      <button className="scroll-to-top">
        <i className="fas fa-angle-up"></i>
      </button>
      <header className="header-area-one" id="sticky-header">
        <nav className="navbar navbar-expand-lg d-none d-lg-block">
          <div className="container-fluid">
            <a className="navbar-brand me-0" href="/">
              <img src={logo} alt="logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                <li className="nav-item">
                  <NavLink
                    exact
                    className="nav-link"
                    activeClassName="active"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeClassName="active"
                    to="/about-us"
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeClassName="active"
                    to="/services"
                  >
                    Services
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeClassName="active"
                    to="/projects"
                  >
                    Projects
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeClassName="active"
                    to="/gallery"
                  >
                    Gallery
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeClassName="active"
                    to="/contact-us"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
              <div className="header-right-info d-flex align-items-center">
          
                <div className="help-number d-flex align-items-center">
                  <div className="icon">
                    <i className="fas fa-phone-alt" />
                  </div>
                  <div className="info">
                    <p>Need help?</p>
                    <h6>
                      <a href="tel:+966530409933">+966 530409933</a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/* Mobile navbar part */}
        <div className="mobile-menu-area d-block d-lg-none">
          <div className="mobile-topbar">
            <div className="container">
              <div className="d-flex justify-content-between align-items-center">
                <div className="logo">
                  <img src={logo} alt="logo" />
                </div>
                <div className="bars">
                  <i className="fas fa-bars" />
                </div>
              </div>
            </div>
          </div>
          <div className="mobile-menu-overlay" />
          <div className="mobile-menu-main">
            <div className="logo">
              <a href="index.html">
                <img src={logo} alt="logo" />
              </a>
            </div>
            <div className="close-mobile-menu">
              <i className="fas fa-times" />
            </div>
            <div className="menu-body">
              <div className="menu-list">
                <ul className="list-unstyled">
                  <li className="sub-mobile-menu">
                    <NavLink
                      exact
                      to="/"
                      activeClassName="active"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="sub-mobile-menu">
                    <NavLink to="/about-us" activeClassName="active">
                      About Us
                    </NavLink>
                  </li>
                  <li className="sub-mobile-menu">
                    <NavLink to="/services" activeClassName="active">
                      Services
                    </NavLink>
                  </li>
                  <li className="sub-mobile-menu">
                    <NavLink to="/projects" activeClassName="active">
                      Projects
                    </NavLink>
                  </li>
                  <li className="sub-mobile-menu">
                    <NavLink to="/contact-us" activeClassName="active">
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
      
          </div>
        </div>
      </header>
    </div>
  );
};

export default Nav;
