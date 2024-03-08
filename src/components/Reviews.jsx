import React from "react";
import Button from "./Button";
import { FaStar } from "react-icons/fa6";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  return (
    <div className="w-full mt-10 py-14 px-14">
      <div className="flex items-center justify-between">
        <p className="uppercase font-semibold text-6xl w-1/2">Reviews</p>
        <Button title="See All" />
      </div>

      <div className="mt-8 flex items-center gap-4">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  );
};

export default Reviews;
