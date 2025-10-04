import React, {useEffect} from "react";
import Aboutus from "../../assets/about-us.png";
import Active from "../../assets/about-us/active-customer-icon.svg";
const AboutUs = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
}, []);

  return (
    <section className="about-us-area-one without-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="about-image position-relative">
              <div className="image">
                <img src={Aboutus} alt="about-us" />
              </div>
              <div className="active-customer d-flex align-items-center">
                <div className="icon">
                  <img src={Active} alt="active-customer-icon" />
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
          <div className="col-lg-7">
            <div className="about-info ms-4">
              <div className="section-title-one">
                <span className="sub-title uppercase">About Us</span>
                <h2 className="title">Pioneering the Future of Construction</h2>
              </div>
              <p>
                Welcome to Advanced Construction! This field of study delves
                into the modern and innovative techniques, materials, and
                methods used to create high-performance, efficient, and
                sustainable structures. Advanced construction combines
                principles of engineering, architecture, and technology to push
                the boundaries of traditional building processes.
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
                      modern solutions that enhance performance, sustainability,
                      and adaptability in the built environment.
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
  );
};

export default AboutUs;
