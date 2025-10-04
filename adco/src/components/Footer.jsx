import React, { useState } from "react";
import logo from "../assets/adco-logo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <footer className="footer-area-one" style={{ marginTop: "2rem" }}>
        <div className="footer-area-one-bg">
          <div className="container">
            <div className="footer-top-one">
              <div className="row">
                <div className="col-sm-6 col-lg-3">
                  <div className="footer-widget">
                    <div className="footer-logo">
                      <a href="/">
                        <img src={logo} alt="white-logo" />
                      </a>
                    </div>
                    <div className="footer-content">
                      <p>
                        Advanced construction combines principles of
                        engineering, architecture, and technology to push the
                        boundaries of traditional building processes.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="footer-widget ms-5">
                    <h4 className="footer-title uppercase">Quick Links</h4>
                    <div className="footer-link">
                      <ul>
                        <li>
                          <Link to="/about-us">
                            <i className="fas fa-angle-right" />About Us
                          </Link>
                        </li>
                        <li>
                          <Link to="/services">
                            <i className="fas fa-angle-right" />Services
                          </Link>
                        </li>
                        <li>
                          <Link to="/projects">
                            <i className="fas fa-angle-right" />Projects
                          </Link>
                        </li>
                        <li>
                          <Link to="/contact-us">
                            <i className="fas fa-angle-right" />Contact Us
                          </Link>
                        </li>
                        <li>
                          <Link to="/blogs">
                            <i className="fas fa-angle-right" />Blogs
                          </Link>
                        </li>
                        
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="footer-widget">
                    <h4 className="footer-title uppercase">Address</h4>
                    <div className="footer-address">
                      <ul>
                        <li className="d-flex">
                          <div className="icon">
                            <i className="fas fa-paper-plane" />
                          </div>
                          <div className="content">
                            <p>
                              2450 Al-Madinah al-Munawwarah st, al-Jubail 35513,
                              Saudi Arabia
                            </p>
                          </div>
                        </li>
                        <li className="d-flex">
                          <div className="icon">
                            <i className="fas fa-envelope" />
                          </div>
                          <div className="content">
                            <a href="mailto:debbie.baker@example.com">
                              info@adco.com.co
                            </a>
                          </div>
                        </li>
                        <li className="d-flex">
                          <div className="icon">
                            <i className="fas fa-phone-alt" />
                          </div>
                          <div className="content">
                            <a href="tel:(405)555-0128">+966 530409933</a>
                            <a
                              href="tel:+966530409933"
                              style={{ visibility: "hidden" }}
                            >
                              (629) 555-0129
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="footer-widget">
                    <h4 className="footer-title uppercase">Follow Us</h4>
                    <p>
                      Follow us on our social media handles for the latest
                      updates, news, and exclusive content!
                    </p>
                    <div className="col-sm-6 col-lg-8">
                      <div className="footer-widget">
                        <div className="footer-logo"></div>
                        <div className="footer-content">
                        
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="row">
                <div className="col-12 col-lg-6">
                  <div className="copyright">
                    <p>
                      Powered by{" "}
                      <a
                        href="https://techcogg.com/"
                        target="_blank"
                        style={{ color: isHovered ? "#e0bf31" : "white" }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                      >
                        Tech Cog
                      </a>
                      , All Rights Reserved by Advance Construction.
                    </p>
                  </div>
                </div>
                {/* <div className="col-12 col-lg-6">
                  <div className="links text-lg-end">
                    <ul>
                      <li>
                        <a href="#">Trams &amp; Condition</a>
                      </li>
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="#">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
