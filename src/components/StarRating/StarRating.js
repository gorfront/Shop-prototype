import React, { useState } from "react";
import './StarRating.css'

function StarRating({ rating }) {

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (rating?.rate) ? "on" : "off"}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );



};

export default StarRating