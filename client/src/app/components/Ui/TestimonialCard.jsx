import React from "react";

export const TestimonialCard = ({ testimonials }) => {
  return (
    <div className="testimonial">
      <p>{testimonials?.comment}</p>
      <div className="test-info">
        <img className="test-pic" src={testimonials?.clientImg} alt="avatar" />
        <div className="d-flex justify-content-between align-items-center w-100">
          <div className="test-name">
            <span>{testimonials?.clientName}</span>
            {testimonials?.clientDesignation}
          </div>
          <div className="client_brand">
            <img src={testimonials?.clientBrand} alt="brand" />
          </div>
        </div>
      </div>
    </div>
  );
};
