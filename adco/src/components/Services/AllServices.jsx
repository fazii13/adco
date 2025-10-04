import React from "react";
import image1 from "../../assets/services/all-service-image-1.png";
import image2 from "../../assets/services/all-service-image-2.png";
import image3 from "../../assets/services/all-service-image-3.png";

import icon1 from "../../assets/icons/service-icon-1.svg";
import icon2 from "../../assets/icons/service-icon-2.svg";
import icon3 from "../../assets/icons/service-icon-3.svg";
import icon4 from "../../assets/icons/service-icon-1.svg";
import icon5 from "../../assets/icons/service-icon-2.svg";
import icon6 from "../../assets/icons/service-icon-3.svg";
import { Link } from "react-router-dom";

const AllServices = () => {
  return (
    <section className="all-services-area">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className="all-services-item">
              <div className="image">
                <Link to="/service/asphaltworks" className="d-block w-100">
                  <img
                    src={image1}
                    alt="all-service-image-1"
                    className="img-fluid w-100"
                  />
                </Link>
                <div className="icon">
                  <img src={icon1} alt="service-icon-1" />
                </div>
              </div>
              <div className="text">
                <h4 className="title">
                  <Link to="/service/asphaltworks">Asphalt Works</Link>
                </h4>
                <p>
                  We undertake asphalt paving in Saudi Arabia and all kinds of
                  road maintenance and earth work.
                </p>
                <Link to="/service/asphaltworks" className="read-more uppercase">
                  Read More <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="all-services-item">
              <div className="image">
                <Link to="/service/concretework" className="d-block w-100">
                  <img
                    src={image2}
                    alt="all-service-image-5"
                    className="img-fluid w-100"
                  />
                </Link>
                <div className="icon">
                  <img src={icon5} alt="service-icon-5" />
                </div>
              </div>
              <div className="text">
                <h4 className="title">
                  <Link to="/service/concretework">Concrete Work</Link>
                </h4>
                <p>
                  The kingdom of Saudi Arabia Is Still Undergoing the urban
                  development battle in all related aspects.
                </p>
                <Link to="/service/concretework" className="read-more uppercase">
                  Read More <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="all-services-item">
              <div className="image">
                <Link to="/service/roadconstruction" className="d-block w-100">
                  <img
                    src={image3}
                    alt="all-service-image-6"
                    className="img-fluid w-100"
                  />
                </Link>
                <div className="icon">
                  <img src={icon6} alt="service-icon-6" />
                </div>
              </div>
              <div className="text">
                <h4 className="title">
                  <Link to="/service/roadconstruction">Road Construction</Link>
                </h4>
                <p>
                Our modern world demands high mobility and fast connections to keep pace with rapid urbanization and economic growth. 
                </p>
                <Link to="/service/roadconstruction" className="read-more uppercase">
                  Read More <i className="fas fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllServices;
