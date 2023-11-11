import React from "react";

const About = () => {
  return (
    <div className="container-xxl py-5 bg-gray-100">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="col-lg-6 wow fadeInUp md:w-1/2" data-wow-delay="0.1s">
            <div className="position-relative h-96">
              <img
                className="img-fluid position-absolute w-full h-full object-cover"
                src="/about.jpg" // Make sure to provide the correct path to your image
                alt="About Us"
              />
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp md:w-1/2" data-wow-delay="0.3s">
            <h6 className="section-title bg-white text-start text-primary pe-3">
              About Us
            </h6>
            <h1 className="mb-4">
              Welcome to{" "}
              <span className="text-primary">Your Travel Companion</span>
            </h1>
            <p className="mb-4">
              Embark on a journey with us and explore the wonders of the world.
              Our mission is to make your travel experience extraordinary,
              filled with unforgettable moments and cherished memories.
            </p>
            <p className="mb-4">
              At Your Travel Companion, we believe in providing top-notch
              services to our clients. Whether it's first-class flights,
              handpicked hotels, 5-star accommodations, or the latest model
              vehicles, we ensure every aspect of your journey is exceptional.
            </p>
            <div className="flex flex-col md:flex-row gap-2 mb-4">
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2"></i>First
                  Class Flights
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2"></i>
                  Handpicked Hotels
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2"></i>5 Star
                  Accommodations
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2"></i>Latest
                  Model Vehicles
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2"></i>150
                  Premium City Tours
                </p>
              </div>
              <div className="col-sm-6">
                <p className="mb-0">
                  <i className="fa fa-arrow-right text-primary me-2"></i>24/7
                  Service
                </p>
              </div>
            </div>
            <a className="btn btn-primary py-3 px-5 mt-2" href="/">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
