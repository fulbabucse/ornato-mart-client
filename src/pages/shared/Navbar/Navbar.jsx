import React, { useContext, useEffect, useState } from "react";
import { FaSearch, FaTh, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContexts } from "../../../contexts/AuthProvider/AuthProvider";
import UserThumb from "../../../assets/user_thumbnail.jpg";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [categories, setCategories] = useState();
  const { user, userSignOut } = useContext(AuthContexts);
  const [search, setSearch] = useState("");

  const handleUserSignOut = () => {
    userSignOut()
      .then((res) => {})
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error(err));
  }, []);

  const handleSearchBlue = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <nav className="bg-white shadow dark:bg-gray-800">
        <div className="container px-4 py-4 mx-auto">
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
              <div className="flex flex-col items-center transition-all duration-300 ease-in-out  text-gray-600 capitalize dark:text-gray-300 lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center">
                <Link
                  to="/"
                  className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"
                >
                  Home
                </Link>

                <Link
                  to="/about"
                  className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200"
                >
                  About
                </Link>
                <div>
                  <div className="dropdown relative">
                    <Link
                      className="
          dropdown-toggle
          px-6
          py-2.5
          text-gray-600
          leading-tight
          rounded focus:outline-none focus:ring-0
          transition
          duration-150
          ease-in-out
          flex
          items-center
        "
                      type="button"
                      id="dropdownMenuButton2"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Products
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="caret-down"
                        className="w-2 ml-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                      >
                        <path
                          fill="currentColor"
                          d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                        ></path>
                      </svg>
                    </Link>
                    <ul
                      className="dropdown-menu min-w-max absolute bg-white text-base z-50 float-left py-2  list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none"
                      aria-labelledby="dropdownMenuButton2"
                    >
                      {categories?.map((category, index) => (
                        <li
                          key={index}
                          className="hover:bg-gray-700 hover:pl-1 focus:bg-gray-700 transition-all duration-300"
                        >
                          <Link
                            to={`/category/${category}`}
                            className="dropdown-item text-md py-2 capitalize text-orange-700 px-4 font-medium block w-full hover:text-white whitespace-nowrap bg-transparent text-gray-700hover:bg-gray-100"
                          >
                            {category}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {user?.uid && (
                  <li className="text-gray-600 hover:text-blue-600 list-none">
                    <Link to="/orders">Orders</Link>
                  </li>
                )}

                <div className="xl:w-96">
                  <div className="input-group relative flex flex-wrap items-stretch w-full">
                    <input
                      type="search"
                      onBlur={handleSearchBlue}
                      className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="button-addon2"
                    />
                    <Link to={`/search/${search}`}>
                      <button
                        className="btn px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                        type="button"
                        id="button-addon2"
                      >
                        <FaSearch className="text-xl"></FaSearch>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-6 lg:flex lg:mt-0 lg:-mx-2">
                <div>
                  <div className="flex justify-center">
                    <div className="dropdown relative">
                      <button
                        type="button"
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
      </nav>
    </div>
  );
};

export default Navbar;
