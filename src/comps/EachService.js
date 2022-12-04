import React from "react";

const EachService = ({ service, setDentalService }) => {
  const { name, slots } = service;
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <select className="select w-full max-w-xs">
          <option disabled defaultValue>
            Choose your time
          </option>
          {slots?.map((slot, i) => (
            <option key={i}>{slot}</option>
          ))}
        </select>
        <p>{slots.length} available slots</p>
        <div className="card-actions justify-start">
          <label
            htmlFor="my-modal-3"
            className="btn btn-primary text-white"
            onClick={() => setDentalService(service)}
          >
            Book
          </label>
        </div>
      </div>
    </div>
  );
};

export default EachService;
