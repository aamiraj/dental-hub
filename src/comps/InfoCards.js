import React from 'react';

const InfoCards = ({card}) => {
    const {icon, name, description, linkTo} = card
    return (
        <div
            className={`flex flex-col justify-center items-center ${card.bgClass} shadow-xl text-white p-8 rounded-0`}
          >
            <figure>
              <img src={icon} alt="icons" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{name}</h2>
              <p>{description}</p>
              <div className="my-4 card-actions justify-start">
                <button className="btn bg-transparent text-white hover:bg-secondary hover:border-0">
                  {linkTo}
                </button>
              </div>
            </div>
          </div>
    );
};

export default InfoCards;