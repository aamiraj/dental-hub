import React from "react";
import chair from "../assets/images/chair.png";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppointBanner = ({ selectedDate, setSelectedDate }) => {
  let footer = <p>Please pick a day.</p>;
  if (selectedDate) {
    footer = <p>You picked {format(selectedDate, "PP")}.</p>;
  }
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-full md:w-1/2">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            footer={footer}
          />
        </div>
        <div className="w-full md:w-1/2">
          <img src={chair} className="rounded-lg shadow-2xl" alt="banner" />
        </div>
      </div>
    </div>
  );
};

export default AppointBanner;
