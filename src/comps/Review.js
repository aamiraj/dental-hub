import React from "react";

const Review = ({ review, length }) => {
  const { name, img, review: userReview, location } = review;
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <q><i>{userReview}</i></q>
      </div>
      <div className="flex justify-center items-center gap-2 py-2">
        <div>
          <img className="w-20 h-20" src={img} alt="carousel" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="card-title">{name}</h2>
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
