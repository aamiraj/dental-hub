import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import EachService from "./EachService";
import Loading from "./Loading";
import { format } from "date-fns";
import ServiceModal from "./ServiceModal";

const DentalServices = ({selectedDate}) => {
  const [dentalService, setDentalService] = useState({})
  const { data: services, isLoading } = useQuery(["services"], async () => {
    const { data } = await axios.get("http://localhost:5000/services");
    return data;
  });

  //console.log(data);

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="w-11/12 mx-auto my-8">  
      <div className="text-center my-8">
        <h1 className="text-2xl text-primary font-bold">Dental Services We Provide</h1>
        <h2 className="text-lg text-accent font-bold">Your Appointment Date: {format(selectedDate, "PP")}</h2>
      </div>
      <div  className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services?.map((d, i) => (
          <EachService key={i} service={d} setDentalService={setDentalService}></EachService>
        ))}
      </div>
      <ServiceModal dentalService={dentalService} selectedDate={selectedDate}></ServiceModal>
    </div>
  );
};

export default DentalServices;
