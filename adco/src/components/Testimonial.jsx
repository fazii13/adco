import React, { useEffect } from "react";

import testi from "../assets/testimonial/testimonial-avatar-1.png";
import quote from "../assets/quote.png";
import man from "../assets/man.png";
const Testimonial = () => {
  return (
    <div>
      <section className="testimonial-area-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div className="section-title-one text-center">
                <span className="sub-title uppercase">clients testimonial</span>
                <h2 className="title">
                  Construction that exceeds expectations
                </h2>
              </div>
            </div>
          </div>
          <div className="row testimonial-area-slider-one">
            <div className="col-lg-6">
              <div className="testimonial-item-one">
                <div className="quote-icon">
                  <img src={quote} alt="quote" />
                </div>
                <div className="testimonial-avatar d-flex align-items-center">
                  <div className="image">
                    <img src={man} alt="testimonial-avatar-1" />
                  </div>
                  <div className="text">
                    <h4 className="title">Omar Al-Farisi</h4>
                    <p>Client </p>
                  </div>
                </div>
                <div className="testimonial-info">
                  <div className="rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <p>
                    The civil construction company Adco delivers premier
                    services throughout Jubail by providing projects with
                    superior quality execution along with timely delivery and
                    expert project management.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="testimonial-item-one">
                <div className="quote-icon">
                  <img src={quote} alt="quote" />
                </div>
                <div className="testimonial-avatar d-flex align-items-center">
                  <div className="image">
                    <img src={man} alt="testimonial-avatar-2" />
                  </div>
                  <div className="text">
                    <h4 className="title">Ahmed Khan</h4>
                    <p>Client </p>
                  </div>
                </div>
                <div className="testimonial-info">
                  <div className="rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <p>
                    As a provider of road construction services in KSA Adco
                    establishes roads that are both reliable and protected and
                    operate efficiently through state-of-the-art applications
                    . Highly reliable service!{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="testimonial-item-one">
                <div className="quote-icon">
                  <img src={quote} alt="quote" />
                </div>
                <div className="testimonial-avatar d-flex align-items-center">
                  <div className="image">
                    <img src={man} alt="testimonial-avatar-1" />
                  </div>
                  <div className="text">
                    <h4 className="title">Rajesh Verma</h4>
                    <p>Client </p>
                  </div>
                </div>
                <div className="testimonial-info">
                  <div className="rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                  <p>
                    Adco delivers exceptional development services to Jubail by
                    delivering creative sustainable systems which boost
                    infrastructure development and effectively fuel metropolitan
                    expansion.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
