import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (product) => {
    console.log(product);
  };

  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/categories");
      const data = await res.json();
      return data;
    },
  });

  const { data: subCategories = [] } = useQuery({
    queryKey: ["sub-categories"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/sub-categories");
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="my-4">
      <div>
        <h1 className="text-center mb-4 text-xl lg:text-2xl font-semibold text-gray-700">
          Add Product
        </h1>
      </div>
      <div className="block p-6 bg-white w-full">
        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="form-group">
              <input
                type="text"
                {...register("product_name", {
                  required: "Product Name is required",
                })}
                className="form-control block
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
        focus:text-gray-700 focus:bg-white focus:shadow-none focus:border-primaryColor focus:outline-none"
                id="exampleInput7"
                placeholder="Product Name"
              />

              {errors.product_name && (
                <p className="text-red-400 font-semibold text-sm">
                  {errors?.product_name?.message}
                </p>
              )}
            </div>
            <div className="form-group">
              <input
                type="text"
                {...register("brand_name", {
                  required: "Brand Name is required",
                })}
                className="form-control block
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
        focus:text-gray-700 focus:bg-white focus:shadow-none focus:border-primaryColor focus:outline-none"
                id="exampleInput7"
                placeholder="Brand Name"
              />
              {errors.brand_name && (
                <p className="text-red-400 font-semibold text-sm">
                  {errors?.brand_name?.message}
                </p>
              )}
            </div>

            <div className="w-full">
              <select
                {...register("category_name", {
                  required: "Category Name is required",
                })}
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
                <option selected>Select Category</option>
                {categories?.map((category) => (
                  <option key={category?._id} value={category?.name}>
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

            <div className="w-full">
              <select
                {...register("subCategory_name", {
                  required: "Category Name is required",
                })}
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
                <option selected>Select Sub Category</option>
                {subCategories?.map((subCategory) => (
                  <option
                    key={subCategory?._id}
                    value={subCategory?.sub_category}
                  >
                    {subCategory?.sub_category}
                  </option>
                ))}
              </select>
              {errors.subCategory_name && (
                <p className="text-red-400 font-semibold text-sm">
                  {errors?.subCategory_name?.message}
                </p>
              )}
            </div>

            <div className="w-full">
              <select
                {...register("service_type", {
                  required: "Service type is required",
                })}
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
                <option selected>Select one Services Type</option>
                <option value="Installment">Installment</option>
                <option value="Cash on Delivery">Cash on Delivery</option>
                <option value="Free Shipping">Free Shipping</option>
              </select>
              {errors.service_type && (
                <p className="text-red-400 font-semibold text-sm">
                  {errors?.service_type?.message}
                </p>
              )}
            </div>
            <div className="w-full">
              <select
                {...register("location", {
                  required: "Location is required",
                })}
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
                <option selected>Select one location</option>
                <option value="International">International</option>
                <option value="Bangladesh">Bangladesh</option>
              </select>
              {errors.location && (
                <p className="text-red-400 font-semibold text-sm">
                  {errors?.location?.message}
                </p>
              )}
            </div>

            <div className="form-group">
              <input
                type="text"
                {...register("price", {
                  required: "Price is required",
                })}
                className="form-control block
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
        focus:text-gray-700 focus:bg-white focus:shadow-none focus:border-primaryColor focus:outline-none"
                id="exampleInput7"
                placeholder="Price"
              />
              {errors.price && (
                <p className="text-red-400 font-semibold text-sm">
                  {errors?.price?.message}
                </p>
              )}
            </div>

            <div className="w-full">
              <select
                {...register("product_color", {
                  required: "Product Color is required",
                })}
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
                <option selected>Select one Colors</option>
                <option value="Black">Black</option>
                <option value="Green">Green</option>
                <option value="Blue">Blue</option>
                <option value="Brown">Brown</option>
                <option value="Chocolate">Chocolate</option>
                <option value="White">White</option>
                <option value="Khaki">Khaki</option>
                <option value="Gray">Gray</option>
                <option value="Red">Red</option>
                <option value="Gold">Gold</option>
                <option value="Coffee">Coffee</option>
                <option value="Navy Blue">Navy Blue</option>
                <option value="Yellow">Yellow</option>
                <option value="Silver">Silver</option>
                <option value="Multicolors">Multicolors</option>
                <option value="Maroon">Maroon</option>
              </select>
              {errors.product_color && (
                <p className="text-red-400 font-semibold text-sm">
                  {errors?.product_color?.message}
                </p>
              )}
            </div>

            <div className="form-group">
              <input
                type="text"
                {...register("product_size", {
                  required: "Product size is required",
                })}
                className="form-control block
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
        focus:text-gray-700 focus:bg-white focus:shadow-none focus:border-primaryColor focus:outline-none"
                id="exampleInput7"
                placeholder="Product Size"
              />
              {errors.product_size && (
                <p className="text-red-400 font-semibold text-sm">
                  {errors?.product_size?.message}
                </p>
              )}
            </div>

            <div className="form-group">
              <input
                type="text"
                {...register("product_rating", {
                  required: "Product Rating is required",
                })}
                className="form-control block
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
        focus:text-gray-700 focus:bg-white focus:shadow-none focus:border-primaryColor focus:outline-none"
                id="exampleInput7"
                placeholder="Product Rating"
              />
              {errors.product_rating && (
                <p className="text-red-400 font-semibold text-sm">
                  {errors?.product_rating?.message}
                </p>
              )}
            </div>

            <div className="w-full">
              <select
                {...register("product_warranty", {
                  required: "Product Color is required",
                })}
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
                <option selected>Select one Warranty</option>
                <option value="3 Months">3 Months</option>
                <option value="6 Months">6 Months</option>
                <option value="1 Year">1 Year</option>
                <option value="Warranty Not Available">
                  Warranty Not Available
                </option>
              </select>
              {errors.product_warranty && (
                <p className="text-red-400 font-semibold text-sm">
                  {errors?.product_warranty?.message}
                </p>
              )}
            </div>

            <div className="form-group">
              <input
                type="text"
                {...register("product_main_materials", {
                  required: "Product Main Materials is required",
                })}
                className="form-control block
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
        focus:text-gray-700 focus:bg-white focus:shadow-none focus:border-primaryColor focus:outline-none"
                id="exampleInput7"
                placeholder="Product Main Materials"
              />
              {errors.product_main_materials && (
                <p className="text-red-400 font-semibold text-sm">
                  {errors?.product_main_materials?.message}
                </p>
              )}
            </div>
            <div className="form-group">
              <input
                type="text"
                {...register("product_stock_size", {
                  required: "Product Stock Size is required",
                })}
                className="form-control block
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
        focus:text-gray-700 focus:bg-white focus:shadow-none focus:border-primaryColor focus:outline-none"
                id="exampleInput7"
                placeholder="Product Stock Size"
              />
              {errors.product_stock_size && (
                <p className="text-red-400 font-semibold text-sm">
                  {errors?.product_stock_size?.message}
                </p>
              )}
            </div>
            <div className="form-group">
              <input
                type="text"
                {...register("product_discount")}
                className="form-control block
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
        focus:text-gray-700 focus:bg-white focus:shadow-none focus:border-primaryColor focus:outline-none"
                id="exampleInput7"
                placeholder="Product Discount"
              />
            </div>
            <div>
              <label htmlFor="image" className="block mb-2 text-sm">
                Products Sample Pictures
              </label>
              <input
                type="file"
                id="image"
                {...register("product_sample", {
                  required: "Sample Picture is required",
                })}
                accept="image"
              />
              {errors.product_sample && (
                <p className="text-red-400 font-semibold text-sm">
                  {errors?.product_sample?.message}
                </p>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="
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
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
