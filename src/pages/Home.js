import React from "react";
import clock from "../assets/icons/clock.svg";
import marker from "../assets/icons/marker.svg";
import phone from "../assets/icons/phone.svg";
import Banner from "../comps/Banner";
import InfoCards from "../comps/InfoCards";
import fluoride from "../assets/images/fluoride.png";
import cavity from "../assets/images/cavity.png";
import whitening from "../assets/images/whitening.png";
import Service from "../comps/Service";
import Treatment from "../comps/Treatment";
import Doctor from "../comps/Doctor";
import appointment from "../assets/images/appointment.png";
import quote from "../assets/icons/quote.svg";
import people1 from "../assets/images/people1.png";
import people2 from "../assets/images/people2.png";
import people3 from "../assets/images/people3.png";
import Review from "../comps/Review";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import HomeForm from "../comps/HomeForm";

const infoCards = [
  {
    id: "1",
    name: "Opening hours",
    description: "Open 9:00 am to 5:00 pm everyday",
    bgClass: "bg-primary",
    icon: clock,
    linkTo: "Get Appointment",
  },
  {
    id: "2",
    name: "Visit our location",
    description: "Brooklyn, NY 10036, United States",
    bgClass: "bg-accent",
    icon: marker,
    linkTo: "See Map",
  },
  {
    id: "3",
    name: "Contact with us",
    description: "+000 123 45678",
    bgClass: "bg-primary",
    icon: phone,
    linkTo: "Call Us",
  },
];

const services = [
  {
    id: "1",
    name: "Fluoride Treatment",
    description:
      "Fluoride varnish can be applied to both baby teeth and adult teeth by a dentist. The process involves painting a varnish containing high levels of fluoride onto the surface of the tooth twice a year to prevent decay. It works by strengthening tooth enamel, making it more resistant to decay.",
    img: fluoride,
  },
  {
    id: "2",
    name: "Cavity Filling",
    description:
      "A passage cleans out the bacteria and any damaged tissue so as to form the world less painful and to assist save the tooth. A cavity filling brings back the functionality and appearance of the tooth. Basically, a passage is sort of a filling except for the within of the tooth, deep within the roots, where the nerve and blood supply is. A “regular” filling is to deal with decay on the highest a part of the tooth.",
    img: cavity,
  },
  {
    id: "3",
    name: "Teeth Whitening",
    description:
      "Everyone notices a bright, white, glowing smile. And everyone notices how confident you feel when you have that beautiful smile. That’s why we utilize long-lasting Teeth Whitening procedure — because we want you to glow with pride and confidence.",
    img: whitening,
  },
];

const reviews = [
  {
    _id: 1,
    name: "Winson Herry",
    img: people1,
    review:
      "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    location: "California",
  },
  {
    _id: 2,
    name: "Winson Herry",
    img: people2,
    review:
      "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    location: "California",
  },
  {
    _id: 3,
    name: "Winson Herry",
    img: people3,
    review:
      "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    location: "California",
  },
];

const Home = () => {
  return (
    <div className="max-w-[1440px] mx-auto ">
      {/* hero section  */}
      <Banner></Banner>
      {/* info card section  */}
      <div className="w-3/4 mx-auto grid grid-cols-1 md:grid-cols-3 gap-0">
        {infoCards.map((card, i) => (
          <InfoCards key={i} card={card}></InfoCards>
        ))}
      </div>
      {/* SERVICES AREA  */}
      <div className="my-12">
        <div className="text-center">
          <h1 className="text-2xl text-primary font-bold">Our Services</h1>
          <h2 className="text-lg text-accent font-bold">Services We Provid</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <Service key={i} service={service}></Service>
          ))}
        </div>
      </div>
      {/* TREATMENT DENTAL CARE  */}
      <div>
        <Treatment></Treatment>
      </div>
      {/* DOCTOR  */}
      <div
        style={{ background: `url(${appointment})` }}
        className="md:h-[450px] mx-auto mt-16"
      >
        <Doctor></Doctor>
      </div>
      {/* reviews carousel  */}
      <div>
        <div className="flex justify-between items-center my-12">
          <div>
            <h1 className="text-4xl text-primary font-bold">Testimonials</h1>
            <h2 className="text-2xl text-accent font-bold">
              What our clients says
            </h2>
          </div>
          <img className="w-[150px] md:w-[200px]" src={quote} alt="quote" />
        </div>
        <Carousel
          autoPlay={true}
          showThumbs={true}
          centerMode={true}
          centerSlidePercentage={100}
          autoFocus={true}
          infiniteLoop={true}
          interval={2000}
          showIndicators={false}
          showStatus={false}
        >
          {reviews.map((review, i) => (
            <Review key={i} review={review} length={reviews.length}></Review>
          ))}
        </Carousel>
      </div>
      {/* conact us  */}
      <div style={{ background: `url(${appointment})` }} className="my-16 py-16">
        <div className="text-center">
          <h1 className="text-2xl text-primary font-bold">Contact Us</h1>
          <h2 className="text-lg text-white font-bold">
            Stay connected with us
          </h2>
        </div>
        <div className="w-11/12 mx-auto"><HomeForm></HomeForm></div>
      </div>
    </div>
  );
};

export default Home;
