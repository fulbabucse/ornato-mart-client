import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { HiShieldCheck } from "react-icons/hi";

const ProductReview = ({ review }) => {
  const { rating, reviewImage, review_message, reviewedAt, reviewerName } =
    review;

  const ratingStar = Array.from({ length: 5 }, (_, i) => {
    let number = i + 0.5;

    return (
      <span key={i}>
        {rating >= i + 1 ? (
          <FaStar />
        ) : rating >= number ? (
          <FaStarHalfAlt />
        ) : (
          <AiOutlineStar />
        )}
      </span>
    );
  });

  return (
    <div className="border-b border-b-gray-300 py-4">
      <div className="flex justify-between items-center gap-2">
        <span className="flex items-center text-orange-400 text-sm">
          {ratingStar}
          <span>({rating})</span>
        </span>
        <p className="text-sm">{reviewedAt}</p>
      </div>
      <div className="flex gap-1 items-center">
        <div className="flex justify-between w-full">
          <div>
            <div className="flex items-center gap-1 text-sm">
              <span className="text-xs">by</span>
              {reviewerName}
              <span className="flex items-center gap-1 text-green-500">
                <HiShieldCheck></HiShieldCheck>
                Verified Purchase
              </span>
            </div>
            <p className="banglaFont">{review_message}</p>
            <img src={reviewImage} className="w-20 h-20 rounded-md" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductReview;
