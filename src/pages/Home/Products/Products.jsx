import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Product from "../../shared/Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);
  const [dataSize, setDataSize] = useState(10);

  const pages = Math.ceil(count / dataSize);

  useEffect(() => {
    fetch(
      `https://ornato-mart-server.vercel.app/products?page=${page}&size=${dataSize}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCount(data.count);
        setProducts(data.products);
      })
      .catch((err) => console.error(err));
  }, [page, dataSize]);

  const handlePrePage = () => {
    setPage(page - 1);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <div className="flex flex-col items-center w-full mb-5">
        <h3 className="text-4xl font-bold text-gray-600">Just For You</h3>
        <p className="text-gray-700 text-center w-full lg:w-3/5 font-semibold">
          At "Ornato Mart" bangladesh, we carry some of the finest brands and
          offer amazing quality that is hard to find elsewhere under one roof.
          So wait no more! Choose from list of men’s clothing brands in
          bangladesh using our brand filter and find the product that best
          matches your styling taste and budget needs.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 px-3">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>

      <div className="flex justify-center mt-5">
        <nav aria-label="Page navigation example">
          <ul className="flex flex-wrap list-style-none">
            <li className="page-item">
              <button
                onClick={() => handlePrePage()}
                disabled={page === 0}
                className="page-link relative block cursor-pointer py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
              >
                Previous
              </button>
            </li>
            {[...Array(pages).keys()].map((number) => (
              <li key={number} className="page-item">
                <button
                  onClick={() => setPage(number)}
                  className={`${
                    page === number && "bg-orange-400 text-white"
                  } page-link cursor-pointer relative block py-1 px-3 font-semibold border-0 outline-none transition-all duration-300 rounded-full hover:text-gray-800 hover:bg-gray-200 focus:shadow-none `}
                >
                  {number + 1}
                </button>
              </li>
            ))}
            <li className="page-item">
              <button
                onClick={() => handleNextPage()}
                disabled={page === dataSize - 1}
                className="page-link relative block cursor-pointer py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
              >
                Next
              </button>
            </li>

            <li className="page-item">
              <select
                onChange={(e) => setDataSize(e.target.value)}
                className="form-select appearance-none
      block
      w-16
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
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
              >
                <option value="5">5</option>
                <option selected value="10">
                  10
                </option>
                <option value="15">15</option>
                <option value="20">20</option>
              </select>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Products;
