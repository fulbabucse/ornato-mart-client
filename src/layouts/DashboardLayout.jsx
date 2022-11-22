import React from "react";
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
                  <Link
                    to="/dashboard/all-categories"
                    className="block px-4 py-2 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:text-white hover:bg-primaryColor dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    All Categories
                  </Link>
                  <Link
                    to="/dashboard/add-categories"
                    className="block px-4 py-2 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:text-white hover:bg-primaryColor dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Add Categories
                  </Link>
                  <Link
                    to="/dashboard/add-categories"
                    className="block px-4 py-2 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:text-white hover:bg-primaryColor dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Add Categories
                  </Link>
                  <Link
                    to="/dashboard/add-categories"
                    className="block px-4 py-2 text-sm text-gray-600 capitalize transition-colors duration-300 transform dark:text-gray-300 hover:text-white hover:bg-primaryColor dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Add Categories
                  </Link>
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
