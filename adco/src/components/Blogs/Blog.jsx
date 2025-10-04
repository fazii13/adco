import React from "react";
import { Helmet } from "react-helmet";
import Blog1 from "../../assets/blog/blog-construction.png";
import Blog2 from "../../assets/blog/blog-construction-expert.png";
import Blog3 from "../../assets/blog/blog-construction-civil.png";
import Blog4 from "../../assets/blog/blog-urban-development.png";
import Blog5 from "../../assets/blog/blog-civil-jubail.jpg";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      <section className="blog-classic-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-classic-main">
                <div className="blog-classic-item">
                  <div className="blog-image">
                    <Link to="/blog-construction" className="d-block w-100">
                      <img
                        src={Blog1}
                        alt="classis-blog-1"
                        className="img-fluid w-100"
                      />
                    </Link>
                  </div>
                  <div className="blog-info">
                    <h3 className="title">
                      <Link to="/blog-construction">
                        Road Construction in KSA: Leading Contractors and Their
                        Key Contributions
                      </Link>
                    </h3>

                    <p>
                      The Road Construction in KSA - Leading Contractors and
                      their Key Contributions are essential for strengthening
                      the country's infrastructure, ensuring seamless
                      connectivity between cities, and supporting economic
                      development.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="learn-more">
                        <Link
                          to="/blog-construction"
                          className="common-btn uppercase"
                        >
                          learn More <i className="fas fa-plus" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog-classic-item">
                  <div className="blog-image">
                    <Link to="/blog-construction-expert" className="d-block w-100">
                      <img
                        src={Blog2}
                        alt="classis-blog-2"
                        className="img-fluid w-100"
                      />
                    </Link>
                  </div>
                  <div className="blog-info">
                    <h3 className="title">
                      <Link to="/blog-construction-expert">
                        Construction Consultant Companies in Jubail, Saudi
                        Arabia
                      </Link>
                    </h3>

                    <p>
                      Jubail, Saudi Arabia, stands as a hub for industrial and
                      infrastructure development, making it a prime location for
                      construction consultant companies in Jubail, Saudi Arabia.
                      Construction consultancy firms lead project success in
                      multiple development spheres including residential
                      construction and commercial construction as well as
                      industrial and infrastructure works.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="learn-more">
                        <Link
                          to="/blog-construction-expert"
                          className="common-btn uppercase"
                        >
                          learn More <i className="fas fa-plus" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog-classic-item">
                  <div className="blog-image">
                    <Link to="/blog-construction-civil" className="d-block w-100">
                      <img
                        src={Blog3}
                        alt="classis-blog-3"
                        className="img-fluid w-100"
                      />
                    </Link>
                  </div>
                  <div className="blog-info">
                    <h3 className="title">
                      <Link to="/blog-construction-civil">
                        Top Civil Construction Services in Jubail Solutions for
                        Your Business
                      </Link>
                    </h3>

                    <p>
                      Do you require high-quality and reliable civil
                      construction services in Jubail? When you're looking to
                      expand your company, invest in industrial infrastructure,
                      or build commercial space, choosing the right contractor
                      is essential to getting the most out of your venture
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="learn-more">
                        <Link
                          to="/blog-construction-civil"
                          className="common-btn uppercase"
                        >
                          learn More <i className="fas fa-plus" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog-classic-item">
                  <div className="blog-image">
                    <Link to="/blog-urban-development" className="d-block w-100">
                      <img
                        src={Blog4}
                        alt="classis-blog-2"
                        className="img-fluid w-100"
                      />
                    </Link>
                  </div>
                  <div className="blog-info">
                    <h3 className="title">
                      <Link to="/blog-urban-development">
                        Urban Development Contractors Jubail: Transforming
                        Infrastructure and Growth
                      </Link>
                    </h3>

                    <p>
                      The industrial city of Jubail in Saudi Arabia experiences
                      extensive transformation while Urban Development
                      Contractors Jubail: Transforming Infrastructure and Growth
                      steer this development process.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="learn-more">
                        <Link
                          to="/blog-urban-development"
                          className="common-btn uppercase"
                        >
                          learn More <i className="fas fa-plus" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog-classic-item">
                  <div className="blog-image">
                    <Link to="/blog-civil-jubail" className="d-block w-100">
                      <img
                        src={Blog5}
                        alt="classis-blog-2"
                        className="img-fluid w-100"
                      />
                    </Link>
                  </div>
                  <div className="blog-info">
                    <h3 className="title">
                      <Link to="/blog-civil-jubail">
                        Civil Construction Services in Jubail – Expert Solutions
                      </Link>
                    </h3>

                    <p>
                      Civil construction forms the backbone of infrastructure
                      development, encompassing the design, construction, and
                      maintenance of various structures like roads, bridges,
                      buildings, and utilities. In the industrial hub of Jubail,
                      civil construction services are pivotal for advancing the
                      city’s dynamic growth
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="learn-more">
                        <Link
                          to="/blog-civil-jubail"
                          className="common-btn uppercase"
                        >
                          learn More <i className="fas fa-plus" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog-right-sidebar">
                {/* <div className="sidebar-search">
                  <div className="input-group position-relative">
                    <input type="text" placeholder="Keyword..." />
                    <button type="submit" className="position-absolute">
                      <i className="fas fa-search" />
                    </button>
                  </div>
                </div> */}
                <div className="blog-widget">
                  <div className="title-block">
                    <h4 className="title">Services</h4>
                  </div>
                  <ul className="list-body list-unstyled">
                    <li>
                      <Link to="/service/asphaltworks">
                        Asphalt Works{" "}
                        <span>
                          <i className="fas fa-angle-right" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/service/concretework">
                        Concrete Work{" "}
                        <span>
                          <i className="fas fa-angle-right" />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/service/roadconstruction">
                        Road Construction{" "}
                        <span>
                          <i className="fas fa-angle-right" />
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
    </div>
  );
};

export default Blog;
