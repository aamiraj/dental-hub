import React, { useState } from 'react';
import AppointBanner from '../comps/AppointBanner';
import DentalServices from '../comps/DentalServices';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
            <AppointBanner selectedDate={selectedDate} setSelectedDate={setSelectedDate}></AppointBanner>
            <DentalServices selectedDate={selectedDate}></DentalServices>
        </div>
    );
};

export default Appointment;