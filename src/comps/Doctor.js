import React from "react";
import doctor from "../assets/images/doctor.png";
const Doctor = () => {
  return (
    <div className="hero p-0 bg-transparent w-3/4 mx-auto my-12">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="w-full md:w-1/2 md:-mt-20">
          <img src={doctor} className="max-w-full rounded-lg" alt="doctor" />
        </div>
        <div className="text-white w-full md:w-1/2">
          <h1 className="text-lg font-bold text-primary">Appointment</h1>
          <h3 className="text-4xl font-bold text-white">Make an appointment</h3>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary text-white hover:bg-secondary">Make Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
