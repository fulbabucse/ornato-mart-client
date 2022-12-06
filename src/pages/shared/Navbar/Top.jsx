import React from "react";
import { Link } from "react-router-dom";

const Top = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-1">
      <nav>
        <ul className="flex gap-2 text-center lg:gap-6 justify-end">
          <li className="text-baseColor text-sm uppercase">
            <Link
              className="hover:text-primaryColor font-medium hover:border-b hover:border-b-primaryColor transition-all duration-200 ease-in-out"
              to="/ornato-donate-to-make-difference"
            >
              Ornato Donate
            </Link>
          </li>
          <li className="text-baseColor text-sm uppercase">
            <Link
              className="text-primaryColor font-medium hover:border-b hover:border-b-primaryColor transition-all duration-200 ease-in-out"
              to="/seller/register"
            >
              Sell on Ornato
            </Link>
          </li>
          <li className="text-baseColor text-sm uppercase">
            <Link
              className="hover:text-primaryColor font-medium hover:border-b hover:border-b-primaryColor transition-all duration-200 ease-in-out"
              to="/customer-care"
            >
              Customer Care
            </Link>
          </li>
          <li className="text-baseColor text-sm uppercase">
            <Link
              className="hover:text-primaryColor font-medium hover:border-b hover:border-b-primaryColor transition-all duration-200 ease-in-out"
              to="/track-my-orders"
            >
              Track My Order
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Top;
