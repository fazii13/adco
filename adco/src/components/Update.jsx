import React, { useEffect } from "react";
const Update = () => { 
  return (
    <section className="get-updates-area-one">
    <div className="update-area-bg-one">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="get-updates-info">
              <h2 className="text-white">
                Sign Up For news &amp; Get All Updates
              </h2>
              <p className="text-white">
                It is a long established fact that a reader will be distracted by
                the
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
                  <a href="tel:(405)555-0128">(405) 555-0128</a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Update