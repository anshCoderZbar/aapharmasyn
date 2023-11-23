import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { TestimonialCard } from "app/components/Ui/TestimonialCard";
import { ClientTestimonials } from "app/mock/home";

export const Testimonials = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      breakpoints={{
        470: {
          slidesPerView: 1.5,
        },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 2.2,
        },
        1199: {
          slidesPerView: 2.5,
        },
      }}
    >
      {ClientTestimonials?.map((testimonials, i) => {
        return (
          <SwiperSlide key={i}>
            <TestimonialCard testimonials={testimonials} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
