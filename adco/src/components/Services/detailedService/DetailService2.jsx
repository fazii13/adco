import React, { useEffect } from "react";
import DetailedImage from "../../../assets/services/service-details-image2.png";
import Icon from "../../../assets/services/service-details-icon-1.svg";
import Icon1 from "../../../assets/services/service-details-icon-2.svg";
import Icon2 from "../../../assets/services/service-details-icon-3.svg";
import Icon3 from "../../../assets/services/service-details-icon-4.svg";
import expertiseitem1 from "../../../assets/services/expertise-item-1.svg";

const DetailService2 = () => {
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
              <h2 className="service-details-title">Concrete Work</h2>
              <p>
                At Advanced Construction, we pride ourselves on delivering
                unparalleled services tailored to meet the diverse needs of
                urban development in the Kingdom of Saudi Arabia. Our expertise
                spans across commercial, industrial, and residential
                construction, ensuring every project is executed with precision
                and excellence. From initial planning to project completion, we
                implement advanced techniques and adhere to international
                standards to eliminate errors and minimize the need for costly
                repairs or rehabilitations.
              </p>
              <p>
                Our team of specialized professionals is dedicated to providing
                technical solutions that address and rectify construction
                challenges efficiently, ensuring long-lasting results that stand
                the test of time.{" "}
              </p>
              <div className="service-inner-details">
                <div className="row g-4">
                  <div className="col-md-6 col-lg-6">
                    <div className="service-info-item text-center">
                      <div className="icon">
                        <img src={Icon} alt="service-details-icon-1" />
                      </div>
                      <h4 className="title">Concrete Paving</h4>
                      <p>
                        Expert installation of concrete pavements designed for
                        durability and aesthetic appeal, ensuring smooth,
                        long-lasting surfaces.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <div className="service-info-item text-center">
                      <div className="icon">
                        <img src={Icon1} alt="service-details-icon-2" />
                      </div>
                      <h4 className="title">Foundation </h4>
                      <p>
                        Strong, reliable foundations designed to support
                        structures and withstand heavy loads, utilizing advanced
                        reinforcement techniques.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <div className="service-info-item text-center">
                      <div className="icon">
                        <img src={Icon2} alt="service-details-icon-3" />
                      </div>
                      <h4 className="title">Decorative Concrete</h4>
                      <p>
                        Custom-designed decorative concrete for driveways and
                        walkways, providing functional yet visually appealing
                        solutions.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <div className="service-info-item text-center">
                      <div className="icon">
                        <img src={Icon3} alt="service-details-icon-4" />
                      </div>
                      <h4 className="title">Concrete Resurfacing</h4>
                      <p>
                        Restoring and renewing existing concrete surfaces with
                        advanced resurfacing techniques to extend lifespan and
                        improve appearance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="expertise-block">
                <h3 className="expertise-title">Why Choose Us</h3>
                <p>
                  At Advanced Construction, we bring precision, innovation, and
                  unmatched expertise to every concrete project. Our skilled
                  team utilizes state-of-the-art technology and high-quality
                  materials to ensure durable, strong, and visually appealing
                  concrete solutions for all your needs. Whether it's
                  foundations, pavements, or decorative concrete, we guarantee
                  exceptional results tailored to your specifications. Our
                  commitment to sustainability and timely project completion
                  means you can rely on us for cost-effective, long-lasting
                  solutions. We collaborate closely with our clients to ensure
                  every concrete project meets the highest standards of quality
                  and performance. Choose us for your concrete works, and trust
                  that your project will stand the test of time.
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
                  Advanced Construction is your trusted partner for all concrete
                  projects, delivering outstanding results with a focus on
                  durability and precision. Our experienced team works with the
                  latest equipment and best practices to ensure each project is
                  completed to the highest standards. We specialize in both
                  commercial and residential concrete solutions, from
                  foundations to driveways and decorative finishes. Our
                  commitment to sustainability means we incorporate
                  environmentally responsible practices into every stage of the
                  process. With a reputation for reliability,
                  cost-effectiveness, and attention to detail, we provide
                  concrete works that not only meet but exceed expectations. Let
                  us bring your vision to life with concrete
                  solutions built to last.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="service-right-sidebar">
              <div className="project-title-info">
                <h3 className="service-sidebar-title">Concrete Work</h3>
                <p className="sub-title">Commercial, Industrial, Residential</p>
                <p>
                  At Advanced Construction, we pride ourselves on delivering unparalleled services
                  tailored to meet the diverse needs of urban development in the Kingdom of Saudi Arabia.
                  Our expertise ensures every project is executed with precision and excellence,
                  from initial planning to project completion.
                </p>
              </div>
              <div className="project-block">
                <h6 className="title">Our Expertise</h6>
                <p>
                  We implement advanced techniques and adhere to international standards to eliminate errors
                  and minimize the need for costly repairs or rehabilitations.
                </p>
                <ul className="list-unstyled list-info">
                  <li>
                    <i className="far fa-check-circle" />
                    Tailored solutions for commercial, industrial, and residential projects.
                  </li>
                  <li>
                    <i className="far fa-check-circle" />
                    Advanced techniques to ensure precision and minimize errors.
                  </li>
                  <li>
                    <i className="far fa-check-circle" />
                    Adherence to international standards for long-lasting results.
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

export default DetailService2;
