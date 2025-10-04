import React, { useEffect } from "react";
import aboutImage from "../assets/banner-image.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <section
        className="banner-area-one"
        data-background="assets/img/bg/banner-bg.png"
      >
        <svg
          className="banner-shape"
          viewBox="0 0 1056 979"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="primary-colour"
            d="M1197.56 1040L103.744 1040L231.189 818.024L266.474 755.955L327.563 862.735L763.09 862.735L981.643 481.904L764.143 101.074L641.964 101.074L716.746 -29.3763L776.255 -133L1197.56 -133L1197.56 1040Z"
          />
          <path
            className="primary-colour"
            d="M206 869L649.304 89H773.856L995 479.513L777.415 869H206Z"
          />
          <path
            className="black-colour"
            d="M647.5 92H321L160.5 373.5L310.5 685.5L647.5 92Z"
          />
          <path
            className="black-colour"
            d="M165.887 383.537L133.762 327.254L132.183 324.624L131.656 323.572L195.905 211.006L334.41 -29.9063L338.096 -29.9063L582.454 -29.3802L716.746 -29.3802L641.964 101.07L626.165 101.07L347.576 101.07L328.09 101.07L165.887 383.537Z"
          />
          <path
            className="primary-colour"
            d="M66.8821 1040L-0.000391173 1040L127.445 818.023L193.801 818.023L66.8821 1040Z"
          />
          <path
            className="black-colour"
            d="M460.277 1040L103.746 1040L282.275 728.602L460.277 1040Z"
          />
        </svg>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="banner-info">
                <span
                  className="sub-title uppercase wow fadeInLeft"
                  data-wow-delay=".2s"
                >
                  Smart Solutions
                </span>
                <h2
                  className="banner-title wow fadeInLeft"
                  data-wow-delay=".4s"
                >
                  Welcome To Advanced Construction
                </h2>
                <p className="wow fadeInLeft" data-wow-delay=".6s">
                  Welcome to Advanced Construction, where innovative techniques
                  and technologies create sustainable, high-performance
                  structures. This field merges engineering, architecture, and
                  design to redefine building methods.
                </p>
                <Link
                  to="/about-us"
                  className="common-btn uppercase wow fadeInLeft"
                  data-wow-delay=".8s"
                >
                  read More <i className="fas fa-plus" />
                </Link>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="banner-image">
                <img
                  src={aboutImage}
                  alt="banner-image"
                  className="img-fluid w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
