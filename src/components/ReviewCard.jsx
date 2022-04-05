import React from "react";

const ReviewCard = ({ name, text, rating }) => {
  return (
    <div className="card h-100">
      <div className="card-body">
        <div className="d-flex align-items-center gap-2 mb-2">
          <h5 className="card-title text-success">{name}</h5>
        </div>
        <p className="review-text">{text}</p>
        <div className="rating-container">Ratings: {rating}</div>
      </div>
    </div>
  );
};

export default ReviewCard;
