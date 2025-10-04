import React, {useEffect} from "react";
import Bannerbg from "../../assets/bg/bread-crumb-bg.png";
const Contact = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
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
                <h2 className="title text-white">Contact</h2>
              </div>
            </div>
            <div className="col-md-6 align-self-center">
              <ul className="list-unstyled bread-crumb text-md-end">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
