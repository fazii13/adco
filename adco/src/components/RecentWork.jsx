import React, { useEffect } from "react";
import work1 from "../assets/work-1.png";
import work2 from "../assets/work-2.png";
import work3 from "../assets/work-3.png";
import { Link, useNavigate } from "react-router-dom";

const RecentWork = () => {
  return (
    <div>
      <section className="recent-work-area-one">
        <div className="recent-work-one-bg">
          <div className="container">
            <div className="row">
              <div className="col-sm-10 col-md-8 col-lg-6">
                <div className="section-title-one">
                  <span
                    className="sub-title uppercase wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    recent work
                  </span>
                  <h2
                    className="title text-white wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    Building Tomorrow’s Structures with Innovation and Precision
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row recent-work-slider-one">
              <div className="col-lg-4">
                <div className="project-item-one position-relative">
                  <div className="image">
                    <Link to="/projects" className="d-block w-100">
                      <img
                        src={work1}
                        alt="work-1"
                        className="img-fluid w-100"
                      />
                    </Link>
                  </div>
                  <div className="info position-absolute bottom-0 start-0 w-100 d-flex justify-content-between align-items-center">
                    <div className="text">
                      <h4 className="title">
                        <Link to="/projects">
                          SATCO Structure Workshop
                        </Link>
                      </h4>
                      <p>Client: SATCO</p>
                    </div>
                    <div className="plus">
                      <Link to="/projects">
                        <i className="fas fa-plus" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="project-item-one position-relative">
                  <div className="image">
                    <Link to="/projects" className="d-block w-100">
                      <img
                        src={work2}
                        alt="work-2"
                        className="img-fluid w-100"
                      />
                    </Link>
                  </div>
                  <div className="info position-absolute bottom-0 start-0 w-100 d-flex justify-content-between align-items-center">
                    <div className="text">
                      <h4 className="title">
                        <Link to="/projects">Delta Corporation Service Factory</Link>
                      </h4>
                      <p>Client: Delta Corporation</p>
                    </div>
                    <div className="plus">
                      <Link to="/projects">
                        <i className="fas fa-plus" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="project-item-one position-relative">
                  <div className="image">
                    <Link to="/projects" className="d-block w-100">
                      <img
                        src={work3}
                        alt="work-3"
                        className="img-fluid w-100"
                      />
                    </Link>
                  </div>
                  <div className="info position-absolute bottom-0 start-0 w-100 d-flex justify-content-between align-items-center">
                    <div className="text">
                      <h4 className="title">
                        <Link to="/projects">Development Admin Electrical Building</Link>
                      </h4>
                      <p>Client: Adamco</p>
                    </div>
                    <div className="plus">
                      <Link to="/projects">
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

export default RecentWork;
