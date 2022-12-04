import React, { useContext } from "react";
import { json, Link, useLoaderData } from "react-router-dom";
import "../../../assets/styles.css";
import {
  FaStar,
  FaLocationArrow,
  FaTruckMoving,
  FaFileInvoiceDollar,
  FaStarHalfAlt,
} from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { ProductsContext } from "../../../contexts/ProductsProvider/ProductsProvider";
import ReviewForm from "./ReviewForm";
import { useQuery } from "@tanstack/react-query";
import ProductReview from "../ProductReview/ProductReview";
import SimilarProducts from "./SimilarProducts";
import Spinner from "../../../Components/Spinner";
import { AuthContexts } from "../../../contexts/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const { user } = useContext(AuthContexts);
  const { state, dispatch } = useContext(ProductsContext);
  const product = useLoaderData();

  const {
    _id,
    price,
    brand_name,
    category_name,
    product_discount,
    product_image,
    product_name,
    product_rating,
    product_size,
    product_stock_size,
    product_warranty,
    seller_name,
    service_type,
    subCategory_name,
  } = product;

  const {
    data: reviews = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["reviews", price],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/reviews?productId=${_id}`);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  const newPrice = price - (price * parseInt(product_discount)) / 100;

  const newProduct = {
    ...product,
    newPrice,
    quantity: state,
    email: user?.email,
  };

  const ratingStar = Array.from({ length: 5 }, (_, i) => {
    let number = i + 0.5;

    return (
      <span key={i}>
        {product_rating >= i + 1 ? (
          <FaStar />
        ) : product_rating >= number ? (
          <FaStarHalfAlt />
        ) : (
          <AiOutlineStar />
        )}
      </span>
    );
  });

  const handleAddToCart = (product) => {
    if (!user) {
      toast.error("Please Login or SignUp");
      return;
    }

    fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Order Complete");
        }
      });
  };

  return (
    <div className="product-container max-w-screen-xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-[340px] lg:h-[400px]">
          <p data-mdb-ripple="true" data-mdb-ripple-color="orange">
            <img
              className="rounded-md lg:w-[340px] lg:h-[400px]"
              src={product_image}
              alt={product_name}
            />
          </p>
        </div>
        <div className="font-medium">
          <h3 className="text-xl font-bold text-gray-700 capitalize">
            {product_name}
          </h3>
          <div>
            <div>
              <div className="flex items-center gap-1 text-sm text-orange-300">
                <div className="flex">{ratingStar}</div>
                <p className="text-gray-700">({product_rating})</p>
              </div>
              <p className="text-gray-500 text-sm">
                Brand: <span className="text-gray-800">{brand_name}</span>
              </p>
              <p className="text-sm text-gray-600 capitalize">
                Category:
                <span className="text-gray-800">
                  <Link className="mx-1" to={`/category/${category_name}`}>
                    {category_name}
                  </Link>
                  | {subCategory_name}
                </span>
              </p>
              <p className="border-b border-b-gray-300 my-3"></p>
              <p className="text-2xl font-semibold text-orange-500">
                ৳{newPrice.toFixed(2)}
              </p>

              <div className="flex items-center gap-1 text-sm">
                <del className="text-gray-500">{price}</del>
                <p className="text-orange-600">(-{product_discount}%)</p>
              </div>
              <p className="border-b border-b-gray-300 my-3"></p>
              <div className="space-y-1">
                <p className="text-sm text-gray-600">
                  Stock: Only
                  <span className="text-gray-800">
                    {" "}
                    {product_stock_size} items left
                  </span>
                </p>

                <p className="text-sm flex items-center text-gray-600">
                  Wear Size:
                  <span className="ml-4 flex gap-3">
                    {product_size?.split(",")?.map((p) => (
                      <div className="border border-gray-300 hover:border-primaryColor focus:border-primaryColor py-1 px-2 rounded-md">
                        <button>{p}</button>
                      </div>
                    ))}
                  </span>
                </p>

                <div className="flex items-center gap-5">
                  <label
                    htmlFor="custom-input-number"
                    className="text-gray-500 text-sm"
                  >
                    Quantity
                  </label>
                  <div className="flex flex-row h-10 w-24 rounded-lg relative bg-transparent mt-1">
                    <button
                      onClick={() => dispatch({ type: "Decrement" })}
                      disabled={state === 0}
                      className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                    >
                      <span className="m-auto text-2xl font-thin">−</span>
                    </button>
                    <p
                      type="number"
                      className="focus:outline-none text-center px-2 bg-gray-300 font-semibold text-md hover:text-black focus:text-black  flex items-center text-gray-700  outline-none"
                    >
                      {state}
                    </p>
                    <button
                      onClick={() => dispatch({ type: "Increment" })}
                      disabled={state === product_stock_size}
                      className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                    >
                      <span className="m-auto text-2xl font-thin">+</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={() => handleAddToCart(newProduct)}
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              className="inline-block px-4 py-2.5 bg-orange-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out mt-3"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="text-sm">
        <div className="space-y-2 border border-gray-300 p-3 rounded-md">
          <p className="text-xl font-semibold text-gray-700">Delivery</p>
          <p className="border-b border-b-gray-300 my-3"></p>
          <div className="flex items-center gap-1">
            <FaLocationArrow className="text-gray-7"></FaLocationArrow>
            <p className="text-sm">
              Dhaka, Dhaka North, Banani Road No. 12 - 19
            </p>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <FaTruckMoving></FaTruckMoving>
                <p>Standard Delivery</p>
              </div>
              <p className="text-xs ml-6">2-5 (days)</p>
            </div>
            <p className="text-lg font-semibold">৳50</p>
          </div>
          <div className="flex items-center gap-1">
            <FaFileInvoiceDollar></FaFileInvoiceDollar>
            <p>{service_type}</p>
          </div>

          <div className="flex items-center gap-1">
            <img
              className="w-5 h-5"
              src="https://camo.githubusercontent.com/48daaa310894c801a3d9396a53cb68f978db169c1f10ea59d82c75527d441446/68747470733a2f2f63646e322e69636f6e66696e6465722e636f6d2f646174612f69636f6e732f6d65646963696e652d352d312f3531322f73657274696669636174655f7365616c2d3531322e706e67"
              alt=""
            />

            <p>{product_warranty}</p>
          </div>
        </div>
        <div className="space-y-2 border border-gray-300 rounded-md mt-4 p-3">
          <div className="">
            <small>Sold by</small>
            <Link to={`/shop/${seller_name}`}>
              <h3 className="text-xl font-semibold text-gray-700">
                {seller_name}
              </h3>
            </Link>
          </div>
          <p className="border-b border-b-gray-300"></p>
          <div className="flex justify-between">
            <div className="text-center">
              <small>Positive Seller Rating</small>
              <h3 className="text-2xl font-semibold text-gray-700">99%</h3>
            </div>
            <div className="text-center">
              <small>Shipping on Time</small>
              <h3 className="text-2xl font-semibold text-gray-700">98%</h3>
            </div>
            <div className="text-center">
              <small>Response Rate</small>
              <h3 className="text-2xl font-semibold text-gray-700">100%</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:mt-10">
        <h4 className="text-xl text-baseColor font-medium">
          Review & Rating of {product_name}
        </h4>
        <ReviewForm product={product} refetch={refetch}></ReviewForm>
        <p className="text-sm border border-gray-300 p-3 rounded-sm">
          Total ({reviews.length}) Review
        </p>
        <div>
          {reviews?.map((review) => (
            <ProductReview key={review?._id} review={review}></ProductReview>
          ))}
        </div>
      </div>
      <div className="lg:ml-10 lg:mt-10 lg:w-3/5">
        <SimilarProducts
          category_name={category_name}
          subCategory_name={subCategory_name}
        ></SimilarProducts>
      </div>
    </div>
  );
};

export default ProductDetails;
