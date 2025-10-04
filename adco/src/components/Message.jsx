import React, { useEffect } from "react";
import Img from "../assets/messages/messages-image.png";
const Message = () => {
  return (
    <div>
      <section className="messages-area-one">
        <div className="messages-area-one-bg">
          <div className="container">
            <div className="messages-area-one-main">
              <div className="row">
                <div className="col-lg-6">
                  <div className="image pe-3">
                    <img
                      src={Img}
                      alt="messages-image"
                      className="img-fluid w-100"
                    />
                  </div>
                </div>
                <div className="col-lg-6 align-self-center">
                  <div className="text">
                    <div className="section-title-one">
                      <span className="sub-title uppercase white">
                        talk with us
                      </span>
                      <h2 className="title white">
                        Building with passion precision and pride
                      </h2>
                    </div>
                    <div className="messages-box">
                      <form action="#">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="input-group">
                              <input type="text" placeholder="Your Name" />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="input-group">
                              <input type="text" placeholder="Your Email" />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="input-group">
                              <input type="text" placeholder="Phone Number" />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="input-group">
                              <textarea
                                rows={4}
                                placeholder="Message here.."
                                defaultValue={""}
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <button
                              type="submit"
                              className="submit-btn uppercase"
                            >
                              Send Now
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Message;
