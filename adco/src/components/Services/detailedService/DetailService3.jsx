import React, { useEffect } from "react";
import DetailedImage from "../../../assets/services/service-details-image3.png";
import Icon from "../../../assets/services/service-details-icon-1.svg";
import Icon1 from "../../../assets/services/service-details-icon-2.svg";
import Icon2 from "../../../assets/services/service-details-icon-3.svg";
import Icon3 from "../../../assets/services/service-details-icon-4.svg";
import expertiseitem1 from "../../../assets/services/expertise-item-1.svg";

const DetailService3 = () => {
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
              <h2 className="service-details-title">Road Construction</h2>
              <p>
                Advanced Construction is a premier road construction company,
                committed to providing high-quality infrastructure solutions
                across Saudi Arabia. With a team of experts and cutting-edge
                equipment, we deliver reliable and durable road construction
                services tailored to meet the needs of every project.
              </p>
              <div className="service-inner-details">
                <div className="row g-4">
                  <div className="col-md-6 col-lg-6">
                    <div className="service-info-item text-center">
                      <div className="icon">
                        <img src={Icon} alt="service-details-icon-1" />
                      </div>
                      <h4 className="title">Road Design and Planning</h4>
                      <p>
                        Comprehensive road design services, ensuring safety,
                        sustainability, and efficient traffic flow through
                        careful planning and engineering.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <div className="service-info-item text-center">
                      <div className="icon">
                        <img src={Icon1} alt="service-details-icon-2" />
                      </div>
                      <h4 className="title">Excavation and Earthworks</h4>
                      <p>
                        Precise excavation and earthworks to prepare the site
                        for road construction, ensuring a stable and solid
                        foundation.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <div className="service-info-item text-center">
                      <div className="icon">
                        <img src={Icon2} alt="service-details-icon-3" />
                      </div>
                      <h4 className="title">Paving and Asphalt Laying</h4>
                      <p>
                        High-quality asphalt laying and paving services to
                        create smooth, durable, and long-lasting roads and
                        driveways.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <div className="service-info-item text-center">
                      <div className="icon">
                        <img src={Icon3} alt="service-details-icon-4" />
                      </div>
                      <h4 className="title">Stormwater Drainage Systems</h4>
                      <p>
                        Design and installation of effective drainage solutions
                        to manage water runoff and maintain road integrity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="expertise-block">
                <h3 className="expertise-title">Why Choose Us</h3>
                <p>
                  Advanced Construction stands out for its expertise in creating
                  reliable and durable road networks that meet the demands of
                  modern infrastructure. Our approach combines cutting-edge
                  techniques with a deep understanding of engineering principles
                  to deliver roads that are both functional and built to last.
                  We prioritize quality control, safety, and environmental
                  responsibility at every stage of construction. With a
                  dedicated team, advanced machinery, and a commitment to
                  excellence, we ensure that each project is completed
                  efficiently and within the stipulated timeline, providing
                  value and performance for the long term. Let us be your
                  trusted partner in building roads that connect communities
                  and drive progress.
                </p>
                <div className="expertise-main">
                  <div className="row g-5">
                    <div className="col-md-6 col-lg-6">
                      <div className="expertise-item d-flex align-items-center">
                        <div className="icon">
                          <img src={expertiseitem1} alt="expertise-item-1" />
                        </div>
                        <h4 className="title">
                          Best Service Provider 
                        </h4>
                        <h3 className="number">01</h3>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                      <div className="expertise-item d-flex align-items-center">
                        <div className="icon">
                          <img src={expertiseitem1} alt="expertise-item-1" />
                        </div>
                        <h4 className="title">Team of Experts</h4>
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
                  At Advanced Construction, we are committed to delivering
                  exceptional road construction services that ensure
                  long-lasting, efficient, and safe infrastructure. Our team of
                  skilled professionals uses advanced technology and equipment
                  to provide high-quality results, whether it's paving,
                  excavation, or drainage solutions. With a focus on precision,
                  sustainability, and on-time delivery, we guarantee projects
                  that meet the highest standards. We work closely with clients
                  to understand their needs, offering comprehensive services
                  that ensure every road is built to endure and serve its
                  purpose for years to come. Choose us for your road
                  construction needs, and experience unmatched quality
                  and reliability.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="service-right-sidebar">
              <div className="project-title-info">
                <h3 className="service-sidebar-title">Road Construction</h3>
                <p className="sub-title">Infrastructure, Development</p>
                <p>
                  Advanced Construction is a premier road construction company, committed to
                  providing high-quality infrastructure solutions across Saudi Arabia. With a
                  team of experts and cutting-edge equipment, we deliver reliable and durable
                  road construction services tailored to meet the needs of every project.
                </p>
              </div>
              <div className="project-block">
                <h6 className="title">Why Choose Us</h6>
                <p>
                  We ensure precision, durability, and efficiency in every road construction project
                  to create long-lasting infrastructure.
                </p>
                <ul className="list-unstyled list-info">
                  <li>
                    <i className="far fa-check-circle" />
                    Expert team with extensive road construction experience.
                  </li>
                  <li>
                    <i className="far fa-check-circle" />
                    Cutting-edge equipment for efficient and precise work.
                  </li>
                  <li>
                    <i className="far fa-check-circle" />
                    Tailored solutions to meet project-specific requirements.
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

export default DetailService3;
