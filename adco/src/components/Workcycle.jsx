import React, { useState } from "react";
import Icon1 from "../assets/icon-1.svg";
import Icon2 from "../assets/icon-2.svg";
import Icon3 from "../assets/icon-3.svg";
const Workcycle = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <section className="working-process-area-one">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-xl-6">
            <div className="section-title-one">
              <span className="sub-title uppercase no-after dark">
                working process
              </span>
              <h2 className="title">
                Innovation in construction at your service
              </h2>
            </div>
            <div className="working-process-info">
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                {isExpanded && (
                  <>
                    {" "}
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking
                    at its layout. 
                  </>
                )}
              </p>
              <a
                onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  handleReadMore();
                }}
                href="#"
                className="common-btn uppercase"
              >
                {isExpanded ? "Read Less" : "Read More"} <i className="fas fa-plus" />
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-xl-5 ms-auto">
            <div className="working-process-item-two d-flex justify-content-between align-items-center">
              <div className="info d-flex align-items-center">
                <div className="image">
                  <img src={Icon1} alt="icon-1" />
                </div>
                <div className="title">
                  <h4>Site Preparation</h4>
                </div>
              </div>
              <div className="number">
                <h3>01</h3>
              </div>
            </div>
            <div className="working-process-item-two d-flex justify-content-between align-items-center">
              <div className="info d-flex align-items-center">
                <div className="image">
                  <img src={Icon2} alt="icon-2" />
                </div>
                <div className="title">
                  <h4>Roofing Installation</h4>
                </div>
              </div>
              <div className="number">
                <h3>02</h3>
              </div>
            </div>
            <div className="working-process-item-two d-flex justify-content-between align-items-center">
              <div className="info d-flex align-items-center">
                <div className="image">
                  <img src={Icon3} alt="icon-3" />
                </div>
                <div className="title">
                  <h4>Flooring Installation</h4>
                </div>
              </div>
              <div className="number">
                <h3>03</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Workcycle;