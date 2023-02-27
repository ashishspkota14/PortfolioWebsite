import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Blake R",
    review:
      "I am delighted to work with Aashish. He understood the work well. Before starting he visualised and discussed and the end result was known. He delivered timely. I also picked up some new things while working. I look forward to working on further projects with him.",
  },
  {
    avatar: AVTR2,
    name: "Raj Agrawal",
    review:
      "Aashish is totally fantastic. His work had a tremendous impact on our software systems. He is very punctual, responsive, and professional in every way imaginable. We worked with him on numerous features, over the course of about one year. We threw everything at him from small issues to extremely complicated ones. Alex couldn't have worked out any better. Just a pleasure to work with on this project and I would hire him for any future React projects in a heartbeat.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
