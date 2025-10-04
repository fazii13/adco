import React from 'react'
import Bannerbg from '../../../assets/img/bg/bread-crumb-bg.png'; // Ensure the correct path to the image

const DetailedBanner = () => {
  return (
    <section
    className="breadcrumb-area"
    style={{
      backgroundImage: `url(${Bannerbg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  >
    <div className="container">
      <div className="breadcrumb-content">
        <div className="row">
          <div className="col-md-6 align-self-center">
            <div className="breadcrumb-title">
              <h2 className="title text-white">Project Details</h2>
            </div>
          </div>
          <div className="col-md-6 align-self-center">
            <ul className="list-unstyled bread-crumb text-md-end">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>Project Details</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default DetailedBanner
