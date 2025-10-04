import React, { useState } from "react";
import Icon1 from "../../assets/working-process/icon-1.svg";
import Icon2 from "../../assets/working-process/icon-2.svg";
import Icon3 from "../../assets/working-process/icon-3.svg";

const AboutProcess = () => {
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
              <h2 className="title">Our Streamlined Working Process</h2>
            </div>
            <div className="working-process-info">
              <p>
                We follow a structured yet flexible approach, ensuring every
                project is executed efficiently, from concept to completion,
                with precision and innovation.
                {isExpanded && (
                  <>
                    {" "}
                    Our team of experts works collaboratively to ensure all
                    project stages are completed on time and within budget, with
                    a focus on delivering top-notch results that exceed client
                    expectations. We prioritize continuous improvement and
                    innovation in every step of our process.
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
                  <h4>Planning</h4>
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
                  <h4>Execution</h4>
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
                  <h4>Delivery</h4>
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

export default AboutProcess;
