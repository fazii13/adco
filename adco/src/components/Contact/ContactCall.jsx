import React from 'react'
import callimage from '../../assets/images/call-to-action-image.png'
const Call = () => {
  return (
    <section className="call-to-action-area">
    <div className="row">
      <div className="col-lg-6">
        <div className="image">
          <img
            src={callimage}
            alt="call-to-action-image"
            className="img-fluid w-100"
          />
        </div>
      </div>
      <div className="col-lg-6 align-self-center">
        <div className="info">
          <div className="phone-icon">
            <i className="fas fa-phone-alt" />
          </div>
          <h3 className="text-white title">
            Need help? Call us Today{" "}
            <a href="tel:+201-555-0124">+201- 555-0124</a>
          </h3>
          <p className="text-white">
            Lorem Ipsum is simply dummy text of the printing{" "}
          </p>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Call
