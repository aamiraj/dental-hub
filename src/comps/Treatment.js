import React from 'react';
import treatment from "../assets/images/treatment2.png";

const Treatment = () => {
    return (
        <div className="hero w-full md:w-3/4 mx-auto bg-base-100">
          <div className="hero-content flex-col lg:flex-row">
            <div className="w-full md:w-1/2">
              <img
                src={treatment}
                className="max-w-full rounded-lg shadow-2xl"
                alt="dentalcare"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h1 className="text-5xl font-bold">
                Exceptional dental care, on your terms
              </h1>
              <p className="py-6">
                Dentistry, also known as dental medicine and oral medicine, is
                the branch of medicine focused on the teeth, gums, and mouth. It
                consists of the study, diagnosis, prevention, management, and
                treatment of diseases, disorders, and conditions of the mouth,
                most commonly focused on dentition as well as the oral mucosa.
              </p>
              <button className="btn btn-primary text-white hover:bg-secondary">
                Get Started
              </button>
            </div>
          </div>
        </div>
    );
};

export default Treatment;