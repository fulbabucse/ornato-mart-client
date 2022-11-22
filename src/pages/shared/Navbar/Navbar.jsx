import React, { useContext, useEffect, useState } from "react";
import { FaCartArrowDown, FaSearch, FaTh, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContexts } from "../../../contexts/AuthProvider/AuthProvider";
import UserThumb from "../../../assets/user_thumbnail.jpg";
import { ProductsContext } from "../../../contexts/ProductsProvider/ProductsProvider";
// import { useQuery } from "@tanstack/react-query";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const { user, userSignOut } = useContext(AuthContexts);
  const { setSearch } = useContext(ProductsContext);

  // const { data: categories = [] } = useQuery({
  //   queryKey: [],
  //   queryFn: async () => {
  //     const res = await fetch("http://localhost:5000/categories");
  //     const data = await res.json();
  //     return data;
  //   },
  // });

  const handleUserSignOut = () => {
    userSignOut()
      .then(() => {})
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <nav className="bg-white shadow dark:bg-gray-800">
        <div className="container px-4 py-2 mx-auto">
          <div className="lg:flex lg:items-center">
            <div className="flex items-center justify-between">
              <div>
                <Link to="/">
                  <h1 className="text-3xl font-bold text-orange-400 uppercase">
                    Ornato Mart
                  </h1>
                </Link>
              </div>

              <div className="flex lg:hidden">
                <button
                  className="p-2 text-slate-700 rounded-md outline-none focus:border-slate-700 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? <FaTimes></FaTimes> : <FaTh></FaTh>}
                </button>
              </div>
            </div>

            <div
              className={`flex-1 justify-self-center pb-3 md:block md:pb-0 md:mt-0 absolute inset-x-0 z-20 w-full px-6 py-4 bg-white dark:bg-gray-800  lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center lg:justify-between ${
                navbar
                  ? "block translate-x-0 opacity-100"
                  : "hidden opacity-0 -translate-x-full"
              }`}
            >
              <nav class="navbar navbar-expand-lg py-2 relative flex items-center w-full justify-between">
                <div class="px-6">
                  <button
                    class="navbar-toggler border-0 py-3 lg:hidden leading-none text-xl bg-transparent text-gray-600 hover:text-gray-700 focus:text-gray-700 transition-shadow duration-150 ease-in-out"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContentY"
                    aria-controls="navbarSupportedContentY"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      class="w-5"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="currentColor"
                        d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                      ></path>
                    </svg>
                  </button>
                  <div
                    class="navbar-collapse collapse grow items-center"
                    id="navbarSupportedContentY"
                  >
                    <ul class="navbar-nav mr-auto flex flex-row">
                      <li class="nav-item dropdown static">
                        <a
                          class="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out dropdown-toggle flex items-center whitespace-nowrap"
                          href="#"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                          type="button"
                          id="dropdownMenuButtonY"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Menu
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="caret-down"
                            class="w-2 ml-2"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"
                          >
                            <path
                              fill="currentColor"
                              d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                            ></path>
                          </svg>
                        </a>
                        <div
                          class="dropdown-menu w-full mt-0 hidden shadow-lg bg-white absolute left-0 top-full"
                          aria-labelledby="dropdownMenuButtonY"
                        >
                          <div class="px-6 lg:px-8 py-5">
                            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                              <div class="bg-white text-gray-600">
                                <p class="block px-2 text-sm py-2 border-b border-gray-200 w-full  font-semibold text-gray-700">
                                  Men's Fashion
                                </p>
                                <a
                                  href="#!"
                                  aria-current="true"
                                  class="block px-2 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out"
                                >
                                  Dolor sit
                                </a>
                                <a
                                  href="#!"
                                  aria-current="true"
                                  class="block px-2 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out"
                                >
                                  Amet consectetur
                                </a>
                                <a
                                  href="#!"
                                  aria-current="true"
                                  class="block px-2 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out"
                                >
                                  Cras justo odio
                                </a>
                                <a
                                  href="#!"
                                  aria-current="true"
                                  class="block px-2 py-2 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out"
                                >
                                  Adipisicing elit
                                </a>
                              </div>
                              <div class="bg-white text-gray-600">
                                <p class="block px-2 text-sm py-2 border-b border-gray-200 w-full  font-semibold text-gray-700">
                                  Women's Fashion
                                </p>
                                <a
                                  href="#!"
                                  aria-current="true"
                                  class="block px-2 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out"
                                >
                                  Perspiciatis quo
                                </a>
                                <a
                                  href="#!"
                                  aria-current="true"
                                  class="block px-2 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out"
                                >
                                  Cras justo odio
                                </a>
                                <a
                                  href="#!"
                                  aria-current="true"
                                  class="block px-2 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out"
                                >
                                  Laudant maiores
                                </a>
                                <a
                                  href="#!"
                                  aria-current="true"
                                  class="block px-2 py-2 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out"
                                >
                                  Provident dolor
                                </a>
                              </div>
                              <div class="bg-white text-gray-600">
                                <p class="block px-2 text-sm py-2 border-b border-gray-200 w-full  font-semibold text-gray-700">
                                  Electronics Devices
                                </p>
                                <a
                                  href="#!"
                                  aria-current="true"
                                  class="block px-2 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out"
                                >
                                  Cras justo odio
                                </a>
                                <a
                                  href="#!"
                                  aria-current="true"
                                  class="block px-2 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out"
                                >
                                  Est iure
                                </a>
                                <a
                                  href="#!"
                                  aria-current="true"
                                  class="block px-2 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out"
                                >
                                  Praesentium
                                </a>
                                <a
                                  href="#!"
                                  aria-current="true"
                                  class="block px-2 py-2 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out"
                                >
                                  Laboriosam
                                </a>
                              </div>
                              <div class="bg-white text-gray-600">
                                <p class="block px-2 text-sm py-2 border-b border-gray-200 w-full font-semibold text-gray-700">
                                  Health & Beauty
                                </p>
                                <a
                                  href="#!"
                                  aria-current="true"
                                  class="block px-2 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out"
                                >
                                  Saepe
                                </a>
                                <a
                                  href="#!"
                                  aria-current="true"
                                  class="block px-2 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out"
                                >
                                  Vel alias
                                </a>
                                <a
                                  href="#!"
                                  aria-current="true"
                                  class="block px-2 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out"
                                >
                                  Sunt doloribus
                                </a>
                                <a
                                  href="#!"
                                  aria-current="true"
                                  class="block px-2 py-2 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out"
                                >
                                  Cum dolores
                                </a>
                              </div>
                              <div class="bg-white text-gray-600">
                                <p class="block px-2 text-sm py-2 border-b border-gray-200 w-full font-semibold text-gray-700">
                                  Automotive & Engines
                                </p>
                                <a
                                  href="#!"
                                  aria-current="true"
                                  class="block px-2 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out"
                                >
                                  Saepe
                                </a>
                                <a
                                  href="#!"
                                  aria-current="true"
                                  class="block px-2 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out"
                                >
                                  Vel alias
                                </a>
                                <a
                                  href="#!"
                                  aria-current="true"
                                  class="block px-2 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out"
                                >
                                  Sunt doloribus
                                </a>
                                <a
                                  href="#!"
                                  aria-current="true"
                                  class="block px-2 py-2 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out"
                                >
                                  Cum dolores
                                </a>
                              </div>
                              <div class="bg-white text-gray-600">
                                <p class="block px-2 text-sm py-2 border-b border-gray-200 w-full font-semibold text-gray-700">
                                  Electronics Accessories
                                </p>
                                <a
                                  href="#!"
                                  aria-current="true"
                                  class="block px-2 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out"
                                >
                                  Saepe
                                </a>
                                <a
                                  href="#!"
                                  aria-current="true"
                                  class="block px-2 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out"
                                >
                                  Vel alias
                                </a>
                                <a
                                  href="#!"
                                  aria-current="true"
                                  class="block px-2 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out"
                                >
                                  Sunt doloribus
                                </a>
                                <a
                                  href="#!"
                                  aria-current="true"
                                  class="block px-2 py-2 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out"
                                >
                                  Cum dolores
                                </a>
                              </div>
                              <div class="bg-white text-gray-600">
                                <p class="block px-2 text-sm py-2 border-b border-gray-200 w-full font-semibold text-gray-700">
                                  Tv & Home Appliances
                                </p>
                                <a
                                  href="#!"
                                  aria-current="true"
                                  class="block px-2 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out"
                                >
                                  Saepe
                                </a>
                                <a
                                  href="#!"
                                  aria-current="true"
                                  class="block px-2 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out"
                                >
                                  Vel alias
                                </a>
                                <a
                                  href="#!"
                                  aria-current="true"
                                  class="block px-2 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out"
                                >
                                  Sunt doloribus
                                </a>
                                <a
                                  href="#!"
                                  aria-current="true"
                                  class="block px-2 py-2 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out"
                                >
                                  Cum dolores
                                </a>
                              </div>
                              <div class="bg-white text-gray-600">
                                <p class="block px-2 text-sm py-2 border-b border-gray-200 w-full font-semibold text-gray-700">
                                  Babies & Toys
                                </p>
                                <a
                                  href="#!"
                                  aria-current="true"
                                  class="block px-2 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out"
                                >
                                  Saepe
                                </a>
                                <a
                                  href="#!"
                                  aria-current="true"
                                  class="block px-2 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out"
                                >
                                  Vel alias
                                </a>
                                <a
                                  href="#!"
                                  aria-current="true"
                                  class="block px-2 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out"
                                >
                                  Sunt doloribus
                                </a>
                                <a
                                  href="#!"
                                  aria-current="true"
                                  class="block px-2 py-2 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out"
                                >
                                  Cum dolores
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>

              <div className="flex flex-col items-center transition-all duration-300 ease-in-out  text-gray-600 capitalize dark:text-gray-300 lg:flex lg:-mx-4 lg:flex-row lg:items-center justify-between gap-10">
                {user?.uid && (
                  <li className="text-gray-600 hover:text-primaryColor list-none mr-3">
                    <Link to="/orders">Orders</Link>
                  </li>
                )}

                <div className="flex gap-4 px-10 items-center">
                  <li className="list-none">
                    <Link to="/dashboard">
                      <FaCartArrowDown className="text-3xl font-bold text-primaryColor"></FaCartArrowDown>
                    </Link>
                  </li>

                  <div className="flex justify-center mt-6 lg:flex lg:mt-0 lg:-mx-2">
                    <div>
                      <div className="flex justify-center">
                        <div className="dropdown relative">
                          <button
                            type="button"
                            className="w-10 h-10 rounded-full"
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <img
                              className="w-10 h-10 rounded-full text-xs"
                              src={user?.photoURL || UserThumb}
                              alt="User Picture"
                            />
                          </button>
                          <ul
                            className=" dropdown-menu px-2 min-w-max absolute hidden bg-white text-base z-50 space-y-2 py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none"
                            aria-labelledby="dropdownMenuButton1"
                          >
                            {user?.uid && (
                              <li>
                                <Link
                                  to="/profile"
                                  className="dropdown-item rounded-md text-md py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                                >
                                  {user?.displayName || "User Profile"}
                                </Link>
                              </li>
                            )}

                            <li>
                              {user?.uid ? (
                                <button
                                  onClick={handleUserSignOut}
                                  className="border text-white border-orange-500 bg-orange-500 hover:bg-orange-600 transition-colors duration-200 font-semibold px-4 rounded-md  text-lg text-opacity-90 hover:text-opacity-100 w-full"
                                >
                                  Log Out
                                </button>
                              ) : (
                                <Link
                                  to="/login"
                                  className="text-sm font-normal block w-full whitespace-nowrap bg-transparent"
                                >
                                  <button className="border text-white border-orange-500 bg-orange-500 hover:bg-orange-600 transition-colors duration-200 font-semibold px-4 rounded-md  text-lg text-opacity-90 hover:text-opacity-100 w-full">
                                    Log In
                                  </button>
                                </Link>
                              )}
                            </li>

                            {!user?.uid && (
                              <li>
                                <Link
                                  to="/register"
                                  className="text-sm font-normal block w-full whitespace-nowrap bg-transparent"
                                >
                                  <button
                                    type="button"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    className="inline-block px-4 py-1 bg-purple-600 text-white font-medium text-lg leading-tight w-full rounded-md shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out normal-case"
                                  >
                                    Register
                                  </button>
                                </Link>
                              </li>
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
