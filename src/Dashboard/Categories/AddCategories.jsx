import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddCategories = () => {
  const { register, handleSubmit, formState: errors } = useForm();

  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/categories");
      const data = await res.json();
      return data;
    },
  });

  const handleFormSubmit = (data) => {
    const categoryName = data.category_name.split(" ");
    const categoryJoin = categoryName.join("-");
    const subcategoryName = data.sub_category.split(" ");
    const subCategory = subcategoryName.join("-");
    const category_id = `${categoryJoin}-${subCategory}`;

    const category = {
      category_name: data.category_name,
      sub_category: data.sub_category,
      category_id,
    };

    fetch("http://localhost:5000/sub-categories", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(category),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Added New Sub Category");
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
          <div className="flex justify-center">
            <div className="mb-3 w-full">
              <select
                {...register("category_name")}
                className="form-select focus:shadow-none appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-primaryColor focus:outline-none"
                aria-label="Default select example"
              >
                <option selected>Select One Category</option>
                {categories?.map((category) => (
                  <option key={category?.name} value={category?.name}>
                    {category?.name}
                  </option>
                ))}
              </select>
              {errors.category_name && (
                <p className="text-red-400 font-semibold text-sm">
                  {errors?.category_name?.message}
                </p>
              )}
            </div>
          </div>

          <div className="form-group">
            <input
              type="text"
              {...register("sub_category", {
                required: "Category name required",
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
              placeholder="Sub Category Name"
            />
            {errors.sub_category && (
              <p className="text-red-400 font-semibold text-sm">
                {errors?.sub_category?.message}
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
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCategories;
