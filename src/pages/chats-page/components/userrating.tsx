import React, { useState } from "react";
import { BsStar, BsStarFill } from "react-icons/bs";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const fixNumber = (n: number) => Number.parseFloat(String(n)).toFixed(2);

const UserRating = ({
  maxStars = 5,
  initialRating = 0,
  onRatingChange,
  onRate,
}: any) => {
  const [rating, setRating] = useState(initialRating);

  const handleStarClick = (selectedRating: number) => {
    setRating(selectedRating);
    onRate(true);
    if (onRatingChange) {
      onRatingChange(selectedRating);
    }
  };

  const renderStar = (starNumber: number) => {
    const filled = starNumber <= rating;

    return (
      <OverlayTrigger
        key={starNumber}
        placement="top"
        overlay={
          <Tooltip id={`tooltip-${starNumber}`}>{`Rate ${starNumber}`}</Tooltip>
        }
      >
        <span className="mx-1" onClick={() => handleStarClick(starNumber)}>
          {filled ? <BsStarFill /> : <BsStar />}
        </span>
      </OverlayTrigger>
    );
  };

  const stars = Array.from({ length: maxStars }, (_, index) =>
    renderStar(index + 1)
  );

  return (
    <div className="rating">
      {stars} {fixNumber(rating)} ({fixNumber(maxStars)})
    </div>
  );
};

export default UserRating;
