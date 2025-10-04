import React, { useEffect } from "react";
import aboutImg from "../assets/about-us.png";
import aboutIcon from "../assets/active-customer-icon.svg";

const About = () => {
  return (
    <div>
      <section className="about-us-area-one" style={{paddingBottom:'120px'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-xl-6 col-xxl-5">
              <div className="about-image position-relative">
                <div className="image">
                  <img src={aboutImg} alt="about-us" />
                </div>
                <div className="active-customer d-flex align-items-center">
                  <div className="icon">
                    <img src={aboutIcon} alt="active-customer-icon" />
                  </div>
                  <div className="title">
                    <h2 className="number">
                      <span>4</span>k+
                    </h2>
                    <p>Daily Activate Customer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-6 col-xxl-7">
              <div className="about-info ms-4">
                <div className="section-title-one">
                  <span className="sub-title uppercase">About Us</span>
                  <h2 className="title">
                    Pioneering the Future of Construction
                  </h2>
                </div>
                <p>
                  We are transforming the construction industry through
                  innovative techniques, sustainable materials, and advanced
                  technologies, shaping a smarter and greener built environment.
                </p>
                <div className="about-list">
                  <div className="about-list-items d-flex">
                    <div className="icon">
                      <i className="fas fa-angle-double-right" />
                    </div>
                    <div className="text">
                      <h4 className="title">Our Vision</h4>
                      <p>
                        We aim to redefine construction practices by adopting
                        modern solutions that enhance performance,
                        sustainability, and adaptability in the built
                        environment.
                      </p>
                    </div>
                  </div>
                  <div className="about-list-items d-flex">
                    <div className="icon">
                      <i className="fas fa-angle-double-right" />
                    </div>
                    <div className="text">
                      <h4 className="title">Our Expertise</h4>
                      <p>
                        Our team specializes in innovative design approaches,
                        advanced materials, and smart technologies to deliver
                        exceptional results in construction projects across
                        various sectors.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
