import React from "react";
import stethoscope from "../assets/images/stethoscope.png";

const Banner = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-full md:w-1/2">
          <img
            src={stethoscope}
            className="rounded-lg shadow-2xl"
            alt="banner"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl md:text-5xl font-bold">
            Get Better With Us, Stay Safe, Stay Healthy.
          </h1>
          <p className="py-6">
            Get our care 24/7, call us. Make an appointment with our doctors.
            Stay connected, be safe and take care of your health.
          </p>
          <button className="btn border-0 bg-primary text-white hover:bg-secondary">
            Make Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
