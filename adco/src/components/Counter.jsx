import React, { useEffect } from "react";
import Odometer from "odometer";
import "odometer/themes/odometer-theme-default.css";
import counter1 from "../assets/counter-1.svg";
import counter2 from "../assets/counter-2.svg";
import counter3 from "../assets/counter-3.svg";
import counter4 from "../assets/counter-4.svg";

const Counter = () => {
  useEffect(() => {
    const counters = document.querySelectorAll(".odometer");
    counters.forEach((counter, index) => {
      const count = parseInt(counter.getAttribute("data-count"), 10);
      const odometer = new Odometer({
        el: counter,
        value: 0, // Start from 0
      });
      setTimeout(() => {
        odometer.update(count);
      }, index * 500); // Add a delay for staggered animations
    });
  }, []);

  return (
    <div>
      <section className="counter-area-one">
        <div className="container">
          <div className="row g-4 g-lg-0">
            <div className="col-sm-6 col-lg-3">
              <div className="counter-one-item d-flex align-items-center">
                <div className="icon">
                  <img src={counter1} alt="feature-1" />
                </div>
                <div className="info">
                  <h2 className="counter-number" style={{color:'#184949'}}>
                    <span className="odometer" data-count={12} />+
                  </h2>
                  <p>Projects Done</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="counter-one-item d-flex align-items-center">
                <div className="icon">
                  <img src={counter2} alt="feature-2" />
                </div>
                <div className="info">
                  <h2 className="counter-number" style={{color:'#184949'}}>
                    <span className="odometer" data-count={230} />+
                  </h2>
                  <p>Customers</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="counter-one-item d-flex align-items-center">
                <div className="icon">
                  <img src={counter3} alt="feature-3" />
                </div>
                <div className="info">
                  <h2 className="counter-number" style={{color:'#184949'}}>
                    <span className="odometer" data-count={100} />+
                  </h2>
                  <p>Clients Review</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="counter-one-item d-flex align-items-center">
                <div className="icon">
                  <img src={counter4} alt="feature-4" />
                </div>
                <div className="info">
                  <h2 className="counter-number" style={{color:'#184949'}}>
                    <span className="odometer" data-count={350} />+
                  </h2>
                  <p>Team Member</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Counter;
