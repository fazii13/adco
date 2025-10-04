import React, { useEffect } from "react";
import DetailedImage from "../../../assets/services/service-details-image1.png";
import Icon from "../../../assets/services/service-details-icon-1.svg";
import Icon1 from "../../../assets/services/service-details-icon-2.svg";
import Icon2 from "../../../assets/services/service-details-icon-3.svg";
import Icon3 from "../../../assets/services/service-details-icon-4.svg";
import expertiseitem1 from "../../../assets/services/expertise-item-1.svg";

const RequestService = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="service-details-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="service-details-content">
              <div className="service-details-image">
                <img
                  src={DetailedImage}
                  alt="service-details-image"
                  className="img-fluid w-100"
                />
              </div>
              <h2 className="service-details-title">Asphalt Works</h2>
              <p>
                We are a leading asphalt paving company in Jubail, committed to
                delivering excellence in every project. With state-of-the-art
                paving and milling equipment maintained across our repair
                facilities throughout Saudi Arabia, we ensure unmatched
                performance and reliability.
              </p>
              <div className="service-inner-details">
                <div className="row g-4">
                  <div className="col-md-6 col-lg-6">
                    <div className="service-info-item text-center">
                      <div className="icon">
                        <img src={Icon} alt="service-details-icon-1" />
                      </div>
                      <h4 className="title">Asphalt Paving</h4>
                      <p>
                        High-quality mix, solid compaction, and precise slopes
                        for long-lasting roads and driveways.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <div className="service-info-item text-center">
                      <div className="icon">
                        <img src={Icon1} alt="service-details-icon-2" />
                      </div>
                      <h4 className="title">Road Marking</h4>
                      <p>
                        Installation of cat eyes, road paint lines, and markers
                        for enhanced safety and visibility.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <div className="service-info-item text-center">
                      <div className="icon">
                        <img src={Icon2} alt="service-details-icon-3" />
                      </div>
                      <h4 className="title">Curb Stone Installation</h4>
                      <p>
                        Professional installation and laying of curb stones for
                        a polished and functional finish.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <div className="service-info-item text-center">
                      <div className="icon">
                        <img src={Icon3} alt="service-details-icon-4" />
                      </div>
                      <h4 className="title">Pavement Resurfacing</h4>
                      <p>
                        Expert milling and resurfacing solutions for smooth and
                        durable roadways.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="expertise-block">
                <h3 className="expertise-title"> Why Choose Us</h3>
                <p>
                  At Advanced Construction, we understand that durable and
                  well-constructed asphalt surfaces are essential for reliable
                  infrastructure. Here’s why we are the trusted choice
                  for asphalt works
                </p>
                <div className="expertise-main">
                  <div className="row g-5">
                    <div className="col-md-6 col-lg-6">
                      <div className="expertise-item d-flex align-items-center">
                        <div className="icon">
                          <img src={expertiseitem1} alt="expertise-item-1" />
                        </div>
                        <h4 className="title">Best Service Provider</h4>
                        <h3 className="number">01</h3>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                      <div className="expertise-item d-flex align-items-center">
                        <div className="icon">
                          <img src={expertiseitem1} alt="expertise-item-1" />
                        </div>
                        <h4 className="title">Steam of Experts </h4>
                        <h3 className="number">02</h3>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                      <div className="expertise-item d-flex align-items-center">
                        <div className="icon">
                          <img src={expertiseitem1} alt="expertise-item-1" />
                        </div>
                        <h4 className="title">Advanced Equipment</h4>
                        <h3 className="number">03</h3>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                      <div className="expertise-item d-flex align-items-center">
                        <div className="icon">
                          <img src={expertiseitem1} alt="expertise-item-1" />
                        </div>
                        <h4 className="title">Overarching Solutions</h4>
                        <h3 className="number">04</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <p>
                  Advanced Construction is your trusted partner for high-quality
                  asphalt solutions. Our skilled team uses state-of-the-art
                  technology to deliver durable, long-lasting results tailored
                  to your needs. We pride ourselves on meeting deadlines without
                  compromising on quality, ensuring cost-effective and
                  sustainable solutions. With a commitment to excellence, we
                  handle every project with precision and care. Choose us for
                  asphalt works that exceed expectations and stand
                  the test of time.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="service-right-sidebar">
              <div className="project-title-info">
                <h3 className="service-sidebar-title">Excellence in Asphalt Paving</h3>
                <p className="sub-title">Asphalt, Construction</p>
                <p>
                  We are dedicated to delivering top-quality asphalt paving solutions with
                  state-of-the-art equipment and expert craftsmanship. Our commitment to excellence
                  sets us apart as a leader in the industry.
                </p>
              </div>
              <div className="project-block">
                <h6 className="title">Our Commitment</h6>
                <p>
                  Ensuring unmatched performance and reliability in every project we undertake
                  throughout Saudi Arabia.
                </p>
                <ul className="list-unstyled list-info">
                  <li>
                    <i className="far fa-check-circle" />
                    State-of-the-art paving and milling equipment.
                  </li>
                  <li>
                    <i className="far fa-check-circle" />
                    Highly skilled team with extensive experience.
                  </li>
                  <li>
                    <i className="far fa-check-circle" />
                    Comprehensive maintenance across repair facilities.
                  </li>
                </ul>
                <a
                  href="/contact-us"
                  className="request-service-btn uppercaser"
                >
                  Request Service
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RequestService;
