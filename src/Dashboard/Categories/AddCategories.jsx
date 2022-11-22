import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddCategories = () => {
  const { register, handleSubmit, formState: errors } = useForm();

  const handleFormSubmit = (data) => {
    fetch("http://localhost:5000/categories", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Successfully added a Category");
        }
      });
  };
  return (
    <div className="flex flex-col items-center mt-10">
      <div>
        <h1 className="text-center mb-4 text-xl lg:text-2xl font-semibold text-gray-700">
          Add Category
        </h1>
      </div>
      <div className="block p-6 rounded-lg shadow-lg bg-white w-full lg:w-2/5">
        <form className="space-y-3" onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="form-group">
            <input
              type="text"
              {...register("name", { required: "Category name required" })}
              className="block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-primaryColor focus:outline-none"
              placeholder="Category Name"
            />
            {errors.name && (
              <p className="text-red-400 font-semibold text-sm">
                {errors?.name?.message}
              </p>
            )}
          </div>
          <div className="form-group">
            <input
              type="text"
              {...register("category_id", {
                required: "Category Id required",
              })}
              className="block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-primaryColor focus:outline-none"
              placeholder="Category Id"
            />
            {errors.category_id && (
              <p className="text-red-400 font-semibold text-sm">
                {errors?.category_id?.message}
              </p>
            )}
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
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCategories;
