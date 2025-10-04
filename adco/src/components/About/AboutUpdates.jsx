import React from "react";

const AboutUpdates = () => {
  return (
    <section className="get-updates-area-one">
      <div className="update-area-bg-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="get-updates-info">
                <h2 className="text-white">
                  Let’s Build Your Vision Together!
                </h2>
                <p className="text-white">
                  Contact us today to bring your ideas to life with cutting-edge
                  construction solutions.
                </p>
              </div>
            </div>
            <div className="col-lg-4 ms-auto align-self-center">
              <div className="contact-info d-flex align-items-center">
                <div className="icon">
                  <i className="fas fa-phone-alt" />
                </div>
                <div className="text">
                  <h4 className="title">Contact with us</h4>
                  <h3 className="number">
                  <a href="tel:+966530409933">+966 530409933</a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUpdates;
