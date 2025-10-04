import React, { useEffect, useRef } from "react";
import { initJQueryFunctions } from "../../js/script";
import { useAlert } from "react-alert";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  useEffect(() => {
    // Delay the initialization to ensure the DOM is fully ready
    const timer = setTimeout(() => {
      initJQueryFunctions();
    }, 0); // Adjust the delay as necessary
  }, []);
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="contact-form-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-title-one">
                <span className="sub-title uppercase">Send a messege</span>
                <h2 className="title">Feel free to messege</h2>
              </div>
              <div className="short-description">
                <p>
                  Have questions or need assistance? Reach out to us today—we’re
                  here to help with all your construction and industrial
                  equipment needs.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-form">
                <form>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="input-group">
                        <input
                          type="text"
                          name="user_name"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="input-group">
                        <input
                          type="email"
                          name="user_email"
                          placeholder="Email Address"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="input-group">
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone Number"
                          required
                          inputMode="numeric" // Suggests numeric keyboard on mobile devices
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="input-group">
                        <textarea
                          name="message"
                          className="form-control"
                          placeholder="Your Message"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button type="submit" className="submit-btn uppercase">
                        Send a messege
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-information">
                <div className="contact-info-item">
                  <ul className="list-unstyled">
                    <li className="icon">
                      <i className="fas fa-phone-alt" />
                    </li>
                    <li className="info">
                      <h4 className="title">Phone number</h4>
                      <p>+966 55 604 7021</p>
                    </li>
                  </ul>
                </div>
                <div className="contact-info-item">
                  <ul className="list-unstyled">
                    <li className="icon">
                      <i className="fas fa-envelope" />
                    </li>
                    <li className="info">
                      <h4 className="title">Email Address</h4>
                      <p>info@adco.com.co</p>
                    </li>
                  </ul>
                </div>
                <div className="contact-info-item">
                  <ul className="list-unstyled">
                    <li className="icon">
                      <i className="fas fa-map-marker-alt" />
                    </li>
                    <li className="info">
                      <h4 className="title">Address</h4>
                      <p>
                        2450 Al Madinah Al Mounawwarah, st, Al Jubail 35513,
                        Saudi Arabia{" "}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* contact form end */}
      {/* contact map start */}
      <div className="contact-map-area">
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.858134363909!2d49.636961199999995!3d27.0030371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e35a198c5707411%3A0xf7fb4d5ab3251c9c!2s(%20ADCO%20)%20Advance%20Construction!5e0!3m2!1sen!2s!4v1738751974285!5m2!1sen!2s"
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
};

export default ContactForm;