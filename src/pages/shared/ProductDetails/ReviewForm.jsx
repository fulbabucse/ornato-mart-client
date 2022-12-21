import React from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContexts } from "../../../contexts/AuthProvider/AuthProvider";

const ReviewForm = ({ product, refetch }) => {
  const { user } = useContext(AuthContexts);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { _id, product_name, subCategory_name } = product;

  const handleReviewProduct = (userData) => {
    const formData = new FormData();
    formData.append("image", userData.image[0]);

    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_API_KEY}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((productData) => {
        const review = {
          reviewerName: user?.displayName,
          email: user?.email,
          reviewedAt: new Date().toLocaleString(),
          createAt: new Date().getTime(),
          productId: _id,
          product_name,
          subCategory_name,
          reviewImage: productData.data.url,
          rating: userData.rating,
          review_message: userData.review_message,
        };

        fetch("https://ornato-mart-server.vercel.app/reviews", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(review),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              toast.success("successfully reviewed");
              refetch();
            }
          });
      });
  };

  return (
    <div>
      <div className="block p-6  max-w-sm">
        <form onSubmit={handleSubmit(handleReviewProduct)}>
          <div className="flex justify-center">
            <div className="mb-3 w-96">
              <input
                {...register("image", {
                  required: "Image is required",
                })}
                className="form-control focus:shadow-none
    block
    w-full
    px-3
    py-1.5
    text-sm
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-primaryColor focus:outline-none"
                type="file"
                id="formFile"
              />
              {errors.image && (
                <p className="text-red-400 font-semibold text-sm">
                  {errors?.image?.message}
                </p>
              )}
            </div>
          </div>
          <div className="mb-3">
            <input
              type="text"
              {...register("rating", {
                required: "Rating is required",
              })}
              className="form-control block w-full px-4 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
              placeholder="Rating"
            />
            {errors.rating && (
              <p className="text-red-400 font-semibold text-sm">
                {errors?.rating?.message}
              </p>
            )}
          </div>
          <div className="flex justify-center">
            <div className="mb-3 xl:w-96">
              <textarea
                {...register("review_message", {
                  required: "Review message is required",
                  //   minLength: { value: 20, message: "At least 20 Character" },
                })}
                className="
        form-control focus:shadow-none
        block
        w-full
        px-3
        py-1.5
        text-sm
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-primaryColor focus:outline-none
      "
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Review"
              ></textarea>
              {errors.review_message && (
                <p className="text-red-400 font-semibold text-sm">
                  {errors?.review_message?.message}
                </p>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="
      w-full
      px-6
      py-2.5
      bg-primaryColor
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-primaryColor hover:shadow-lg
      focus:bg-primaryColor focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-primaryColor active:shadow-lg
      transition
      duration-150
      ease-in-out"
          >
            Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
