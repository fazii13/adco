import React, {useEffect} from "react";
import Bannerbg from "../../assets/bg/bread-crumb-bg.png"; // Ensure the correct path to the image
const Services = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    //banner
    <section
      className="breadcrumb-area"
      style={{
        backgroundImage: `url(${Bannerbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className="breadcrumb-content">
          <div className="row">
            <div className="col-md-6 align-self-center">
              <div className="breadcrumb-title">
                <h2 className="title text-white">Service</h2>
              </div>
            </div>
            <div className="col-md-6 align-self-center">
              <ul className="list-unstyled bread-crumb text-md-end">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>Service</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
