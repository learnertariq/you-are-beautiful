import React from "react";
import useReview from "../hooks/useReview";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const [reviews] = useReview();
  return (
    <section className="container text-center mt-5">
      <h2 className="text-primary">What Our Customers Say!</h2>
      <div className="reviews-container my-4 text-start">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-2">
          {reviews.map((r, index) => (
            <div key={index} className="col">
              <ReviewCard name={r.name} text={r.text} rating={r.rating} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
