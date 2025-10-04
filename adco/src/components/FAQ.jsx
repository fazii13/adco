import React, { useEffect } from "react";
import faq2 from "../assets/faq-image-one.png";
// import faq2 from "../assets/faq-image-two.png";

const FAQ = () => {
  return (
    <div>
      <section className="faq-area-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-title-one">
                <span className="sub-title uppercase">Some FAQ</span>
                <h2 className="title">
                  Advanced Construction: Passion, Precision, Excellence at Your
                  Service
                </h2>
              </div>
              <div className="faq-body">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        What types of projects does Advanced Construction
                        handle?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          We specialize in both commercial and residential
                          projects, including large-scale developments, concrete
                          construction, civil engineering, and formwork
                          solutions. No project is too large or complex for our
                          team.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Where is Advanced Construction located?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          We are based in Saudi Arabia, providing comprehensive
                          construction services across the region for a variety
                          of industries, including commercial, residential, and
                          industrial sectors.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        How experienced is your team?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Our team has years of experience in civil
                          construction, concrete structures, and formwork. We
                          combine engineering expertise with innovative design
                          to deliver high-performance, sustainable buildings.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 ms-auto">
              <div className="faq-image">
                <div className="image-one">
                  <img src={faq2} alt="faq-image-one" />
                </div>
                <div className="image-two">
                  <img
                    src={faq2}
                    alt="faq-image-two"
                    className="img-fluid w-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
