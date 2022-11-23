import React from "react";
import { FaAngleDown, FaListUl, FaProductHunt, FaUsers } from "react-icons/fa";
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
                            to="/dashboard/add-product"
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
                          data-bs-target="#users"
                          aria-expanded="false"
                          aria-controls="users"
                        >
                          <FaUsers className="mr-2"></FaUsers>
                          <span>Users</span>
                          <FaAngleDown className="text-xl ml-auto"></FaAngleDown>
                        </a>
                        <ul
                          className="relative accordion-collapse collapse"
                          id="users"
                          aria-labelledby="sidenavEx2"
                          data-bs-parent="#sidenavExample"
                        >
                          <Link
                            to="/dashboard/all-users"
                            className="flex items-center text-sm py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                          >
                            All Users
                          </Link>
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
