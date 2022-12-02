import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (productData) => {
    console.log(productData);
    const formData = new FormData();
    formData.append("image", productData.product_sample[0]);

    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_API_KEY}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((productPhoto) => {
        const product = {
          brand_name: productData.brand_name,
          category_name: productData.category_name,
          location: productData.location,
          price: productData.price,
          product_color: productData.product_color,
          product_discount: productData.product_discount,
          product_main_materials: productData.product_main_materials,
          product_name: productData.product_name,
          product_rating: productData.product_rating,
          product_image: productPhoto.data.url,
          product_size: productData.product_size,
          product_stock_size: productData.product_stock_size,
          product_warranty: productData.product_warranty,
          service_type: productData.service_type,
          subCategory_name: productData.subCategory_name,
          seller_name: productData.seller_name,
        };
        fetch("http://localhost:5000/products", {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("ornatoToken")}`,
          },
          body: JSON.stringify(product),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              toast.success("Successfully Product Added");
            }
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  };

  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/categories");
      const data = await res.json();
      return data;
    },
  });

  const { data: sellers = [] } = useQuery({
    queryKey: ["sellers"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/sellers");
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
                  <option key={category?._id} defaultValue={category?.name}>
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
                    defaultValue={subCategory?.sub_category}
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
                <option defaultValue="Installment">Installment</option>
                <option defaultValue="Cash on Delivery">
                  Cash on Delivery
                </option>
                <option defaultValue="Free Shipping">Free Shipping</option>
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
                <option defaultValue="International">International</option>
                <option defaultValue="Bangladesh">Bangladesh</option>
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
                <option defaultValue="Black">Black</option>
                <option defaultValue="Green">Green</option>
                <option defaultValue="Blue">Blue</option>
                <option defaultValue="Brown">Brown</option>
                <option defaultValue="Chocolate">Chocolate</option>
                <option defaultValue="White">White</option>
                <option defaultValue="Khaki">Khaki</option>
                <option defaultValue="Gray">Gray</option>
                <option defaultValue="Red">Red</option>
                <option defaultValue="Gold">Gold</option>
                <option defaultValue="Coffee">Coffee</option>
                <option defaultValue="Navy Blue">Navy Blue</option>
                <option defaultValue="Yellow">Yellow</option>
                <option defaultValue="Silver">Silver</option>
                <option defaultValue="Multicolors">Multicolors</option>
                <option defaultValue="Maroon">Maroon</option>
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
                defaultValue={`M, L, XL, XXL`}
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
                <option defaultValue="3 Months">3 Months</option>
                <option defaultValue="6 Months">6 Months</option>
                <option defaultValue="1 Year">1 Year</option>
                <option defaultValue="Warranty Not Available">
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

            <div className="w-full">
              <select
                {...register("seller_name", {
                  required: "Seller Name is required",
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
                <option selected>Select Seller</option>
                {sellers?.map((seller) => (
                  <option key={seller?._id} defaultValue={seller?.seller_name}>
                    {seller?.seller_name}
                  </option>
                ))}
              </select>
              {errors.seller_name && (
                <p className="text-red-400 font-semibold text-sm">
                  {errors?.seller_name?.message}
                </p>
              )}
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
