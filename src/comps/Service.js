import React, { useState } from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
    const [seeMore, setSeeMore] = useState(false)

    const handleSeeMore = ()=>{
        setSeeMore(!seeMore)
    }
  const {name, description, img} = service;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={img}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{seeMore ? description :`${(description).slice(0, 100)} ... `}<Link onClick={handleSeeMore} className="hover:underline">{seeMore?"See Less":"See More"}</Link></p>
        <div className="card-actions">
          <button className="btn btn-primary text-white hover:bg-secondary">Appoint Now</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
