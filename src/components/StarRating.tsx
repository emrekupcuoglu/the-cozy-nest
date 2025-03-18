"use client";
import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";

function StarRating() {
  const rating = 2.2;

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => {
          return (
            <span key={i} className="text-card-action">
              {i < Math.floor(rating) ? (
                <IoStar />
              ) : i < rating ? (
                <IoStarHalf />
              ) : (
                <IoStarOutline />
              )}
            </span>
          );
        })}
      </div>

      <span>{rating}</span>
    </div>
  );
}

export default StarRating;
