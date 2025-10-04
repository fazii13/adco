import React, { useEffect } from "react";
import { initJQueryFunctions } from "../js/script";
import serviceImg1 from "../assets/service-1.png";
import serviceImg2 from "../assets/service-2.png";
import serviceImg3 from "../assets/service-3.png";
import { Link } from "react-router-dom";
const Service = () => {
  return (
    <div  >
      <section className="services-area-one" style={{background:'White'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="section-title-one">
                <span
                  className="sub-title uppercase  "
                  data-wow-delay=".2s"
                >
                  our services
                </span>
                <h2 className="title wow fadeInLeft" data-wow-delay=".4s">
                  Civil Construction & Concrete Structures
                </h2>
              </div>
            </div>
            <div className="col-lg-6 ms-auto align-self-center">
              <div
                className="service-summery wow fadeInRight"
                data-wow-delay=".2s"
              >
                <p>
                  With years of experience in civil engineering, design, and
                  concrete construction, we offer comprehensive solutions for
                  commercial, residential, and industrial projects. Located in
                  Saudi Arabia, we specialize in concrete formwork and
                  structural work. No project is too large or complex for our
                  team. LCC aims to provide seamless, safe, and efficient
                  construction services to meet all civil construction needs.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 mx-auto mx-lg-0 col-lg-12 service-item-one-column">
              <div className="service-item-one">
                <div className="row">
                  <div className="col-sm-12 col-lg-3 col-xl-3 align-self-center">
                    <div className="image">
                      <Link to="/service/asphaltworks" className="d-block w-100">
                        <img
                          src={serviceImg1}
                          alt="service-1"
                          className="img-fluid w-100"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="col-sm-12 col-lg-3 col-xl-3 align-self-center">
                    <div className="service-title ms-lg-4">
                      <h4 className="title">
                        <Link to="/service/asphaltworks">Asphalt Works</Link>
                      </h4>
                    </div>
                  </div>
                  <div className="col-sm-12 col-lg-3 col-xl-3 align-self-center">
                    <div className="description">
                      <p>
                        We undertake asphalt paving in Saudi Arabia and all
                        kinds of road maintenance and earth work
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-lg-3 col-xl-2 ms-auto align-self-center">
                    <div className="read-more text-lg-end">
                      <Link
                        to="/service/asphaltworks"
                        className="common-btn uppercase border-btn"
                      >
                        read More
                        <i className="fas fa-plus" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 mx-auto mx-lg-0 col-lg-12 service-item-one-column">
              <div className="service-item-one">
                <div className="row">
                  <div className="col-sm-12 col-lg-3 col-xl-3 align-self-center">
                    <div className="image">
                      <Link to="/service/concretework" className="d-block w-100">
                        <img
                          src={serviceImg2}
                          alt="service-2"
                          className="img-fluid w-100"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="col-sm-12 col-lg-3 col-xl-3 align-self-center">
                    <div className="service-title ms-lg-4">
                      <h4 className="title">
                        <Link to="/service/concretework">Concrete Work</Link>
                      </h4>
                    </div>
                  </div>
                  <div className="col-sm-12 col-lg-3 col-xl-3 align-self-center">
                    <div className="description">
                      <p>
                        The kingdom of Saudi Arabia Is Still Undergoing the
                        urban development battle in all related aspects e.g.
                        commercial, industrial, and housing etc.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-lg-3 col-xl-2 ms-auto align-self-center">
                    <div className="read-more text-lg-end">
                      <Link
                        to="/service/concretework"
                        className="common-btn uppercase border-btn"
                      >
                        read More
                        <i className="fas fa-plus" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 mx-auto mx-lg-0 col-lg-12 service-item-one-column">
              <div className="service-item-one">
                <div className="row">
                  <div className="col-sm-12 col-lg-3 col-xl-3 align-self-center">
                    <div className="image">
                      <Link to="/service/roadconstruction" className="d-block w-100">
                        <img
                          src={serviceImg3}
                          alt="service-3"
                          className="img-fluid w-100"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="col-sm-12 col-lg-3 col-xl-3 align-self-center">
                    <div className="service-title ms-lg-4">
                      <h4 className="title">
                        <Link to="/service/roadconstruction">Road Construction</Link>
                      </h4>
                    </div>
                  </div>
                  <div className="col-sm-12 col-lg-3 col-xl-3 align-self-center">
                    <div className="description">
                      <p>
                        Our modern world demands high mobility and fast
                        connection.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-lg-3 col-xl-2 ms-auto align-self-center">
                    <div className="read-more text-lg-end">
                      <Link
                        to="/service/roadconstruction"
                        className="common-btn uppercase border-btn"
                      >
                        read More
                        <i className="fas fa-plus" />
                      </Link>
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

export default Service;
