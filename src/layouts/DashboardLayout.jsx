import React from "react";
import { FaAngleDown, FaListUl, FaProductHunt } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import Header from "../Dashboard/Shared/Header/Header";

const DashboardLayout = () => {
  return (
    <div>
      <Header></Header>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex space-x-2">
          <div>
            <div
              className="offcanvas offcanvas-end fixed bottom-0 flex flex-col max-w-full bg-white invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 top-0 right-0 border-none w-96"
              tabIndex="-1"
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
            >
              <div className="offcanvas-header flex items-center justify-between p-4">
                <h5
                  className="text-2xl text-primaryColor offcanvas-title mb-0 leading-normal font-semibold"
                  id="offcanvasExampleLabel"
                >
                  Ornato Mart
                </h5>
                <button
                  type="button"
                  className="btn-close box-content w-4 h-4 p-2 -my-5 -mr-2 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body flex-grow p-4 overflow-y-auto">
                <div className="flex flex-col">
                  <div className="w-full h-full" id="sidenavExample">
                    <ul className="relative">
                      <li className="relative" id="sidenavEx1">
                        <a
                          className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="dark"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSidenavEx1"
                          aria-expanded="true"
                          aria-controls="collapseSidenavEx1"
                        >
                          <FaListUl className="mr-2"></FaListUl>
                          <span>Categories</span>
                          <FaAngleDown className="text-xl ml-auto"></FaAngleDown>
                        </a>
                        <ul
                          className="relative accordion-collapse collapse"
                          id="collapseSidenavEx1"
                          aria-labelledby="sidenavEx1"
                          data-bs-parent="#sidenavExample"
                        >
                          <Link
                            to="/dashboard/all-categories"
                            className="flex items-center text-sm py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                          >
                            All Categories
                          </Link>
                          <Link
                            to="/dashboard/add-categories"
                            className="flex items-center text-sm py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                          >
                            Add Category
                          </Link>
                        </ul>
                      </li>
                      <li className="relative" id="sidenavEx1">
                        <a
                          className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="dark"
                          data-bs-toggle="collapse"
                          data-bs-target="#products"
                          aria-expanded="true"
                          aria-controls="products"
                        >
                          <FaProductHunt className="mr-2"></FaProductHunt>
                          <span>Products</span>
                          <FaAngleDown className="text-xl ml-auto"></FaAngleDown>
                        </a>
                        <ul
                          className="relative accordion-collapse collapse"
                          id="products"
                          aria-labelledby="sidenavEx1"
                          data-bs-parent="#sidenavExample"
                        >
                          <Link
                            to="/dashboard/all-categories"
                            className="flex items-center text-sm py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                          >
                            All Products
                          </Link>
                          <Link
                            to="/dashboard/add-categories"
                            className="flex items-center text-sm py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                          >
                            Add Product
                          </Link>
                        </ul>
                      </li>
                      <li className="relative" id="sidenavEx2">
                        <a
                          className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out cursor-pointer"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="dark"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseSidenavEx2"
                          aria-expanded="false"
                          aria-controls="collapseSidenavEx2"
                        >
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            className="w-3 h-3 mr-3"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 496 512"
                          >
                            <path
                              fill="currentColor"
                              d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"
                            ></path>
                          </svg>
                          <span>Click here 2</span>
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            className="w-3 h-3 ml-auto"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path
                              fill="currentColor"
                              d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
                            ></path>
                          </svg>
                        </a>
                        <ul
                          className="relative accordion-collapse collapse"
                          id="collapseSidenavEx2"
                          aria-labelledby="sidenavEx2"
                          data-bs-parent="#sidenavExample"
                        >
                          <a
                            href="#!"
                            className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="dark"
                          >
                            Link 3
                          </a>
                          <a
                            href="#!"
                            className="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="dark"
                          >
                            Link 4
                          </a>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
