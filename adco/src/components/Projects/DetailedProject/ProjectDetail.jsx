import React from 'react'
import image from '../../../assets/projects/project-details-image.png'
import projectinnerimage from '../../../assets/projects/project-inner-img-1.png'
const ProjectDetail = () => {
  return (
    <section className="project-details-area">
    <div className="container">
      <div className="project-details-thumb-image">
        <img
          src={image}
          alt="project-details-image"
          className="img-fluid w-100"
        />
        <div className="project-information">
          <h3 className="project-title">Project Information</h3>
          <div className="main-content">
            <div className="info-main">
              <div className="info-item">
                <h6 className="info-subtitle">Category:</h6>
                <p>Corporate, business</p>
              </div>
              <div className="info-item">
                <h6 className="info-subtitle">Customer:</h6>
                <p>Starline shimlasi</p>
              </div>
              <div className="info-item">
                <h6 className="info-subtitle">Start date:</h6>
                <p>21 January 2021</p>
              </div>
              <div className="info-item">
                <h6 className="info-subtitle">End date:</h6>
                <p>28 September 2023</p>
              </div>
            </div>
            <div className="rating d-flex justify-content-center align-items-center">
              <h6 className="rating-title">Rating:</h6>
              <div className="star">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
            </div>
            <div className="social-icon text-center">
              <ul className="list-unstyled">
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="project-details-information">
        <h2 className="project-details-title">
          Redefining Construction Standards
        </h2>
        <p>
          Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper
          posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet
          augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo,
          posuere loborti viverra laoreet matti ullamcorper posuere viverra
          .Aliquam eros justo, posuere lobortis non, viverra
        </p>
        <p>
          Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper
          posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet
          augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo,
          posuere loborti viverra laoreet matti ullamcorper posuere viverra
          .Aliquam eros justo, posuere lortis non, viverraAliquam eros justo,
          posuere loborti viverra laoreet matti ullamcorper posuere viverra
          .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis
          fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere loborti
          viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo,
          posuere lobortis non, viverraAliquam er justo, posuere loborti viverra
          laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere
          lobortis viverra laoreet augue mattis fmentum ullamcorper viverra
          laoreet Aliquam eros justo
        </p>
        <div className="project-inner-image">
          <div className="row g-4">
            <div className="col-6 col-md-4 col-lg-4">
              <div className="img">
                <img
                  src={projectinnerimage}
                  alt="project-inner-img-1"
                  className="img-fluid w-100"
                />
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-4">
              <div className="img">
                <img
                  src={projectinnerimage}
                  alt="project-inner-img-2"
                  className="img-fluid w-100"
                />
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-4">
              <div className="img">
                <img
                 src={projectinnerimage}
                  alt="project-inner-img-3"
                  className="img-fluid w-100"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="project-list-info">
          <h3 className="title">The project is start from is standerd shine</h3>
          <ul className="list-unstyled">
            <li>
              <i className="fas fa-check" />
              <h6>Aliquam eros justo, posuere Aliquam eros justo, po loborti</h6>
            </li>
            <li>
              <i className="fas fa-check" />
              <h6>
                laoreet matti ullamc orper Aliquam eros justo, posuere loborti
                posu ere vi
              </h6>
            </li>
            <li>
              <i className="fas fa-check" />
              <h6>
                Aliquam eros justo, posuere Aliquam eros justo, posuere l loborti
              </h6>
            </li>
            <li>
              <i className="fas fa-check" />
              <h6>Aliquam eros justo, posuere Aliquam eros justo, po loborti</h6>
            </li>
            <li>
              <i className="fas fa-check" />
              <h6>
                laoreet matti ullamc orper Aliquam eros justo, posuere loborti
                posu ere vi
              </h6>
            </li>
          </ul>
          <p>
            Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper
            posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet
            augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo,
            posuere loborti viverra laoreet matti ullamcorper posuere viverra
            .Aliquam eros justo, posuere lobortis non, viverra
          </p>
        </div>
        <div className="pagination">
          <ul className="list-unstyled">
            <li className="prev">
              <a href="project-details.html">
                <i className="fas fa-long-arrow-alt-left" /> Previews post
              </a>
            </li>
            <li className="next">
              <a href="project-details.html">
                Next post <i className="fas fa-long-arrow-alt-right" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default ProjectDetail
