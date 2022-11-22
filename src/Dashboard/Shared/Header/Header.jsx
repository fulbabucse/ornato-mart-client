import React, { useContext, useState } from "react";
import { FaCartArrowDown, FaSearch, FaTh, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContexts } from "../../../contexts/AuthProvider/AuthProvider";
import UserThumb from "../../../assets/user_thumbnail.jpg";
import { ProductsContext } from "../../../contexts/ProductsProvider/ProductsProvider";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const { user, userSignOut } = useContext(AuthContexts);
  const { setSearch } = useContext(ProductsContext);

  const handleUserSignOut = () => {
    userSignOut()
      .then(() => {})
      .catch((err) => console.error(err));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
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
              className={`flex-1 lg:ml-20 justify-self-center pb-3 md:block md:pb-0 md:mt-0 absolute inset-x-0 z-20 w-full px-6 py-4 bg-white dark:bg-gray-800  lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center lg:justify-between ${
                navbar
                  ? "block translate-x-0 opacity-100"
                  : "hidden opacity-0 -translate-x-full"
              }`}
            >
              <div className="flex flex-col items-center transition-all duration-300 ease-in-out  text-gray-600 capitalize dark:text-gray-300 lg:flex lg:-mx-4 lg:flex-row lg:items-center justify-between gap-10">
                <button
                  className="inline-block px-4 py-3 bg-primaryColor text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-primaryColor hover:shadow-lg focus:bg-primaryColor focus:shadow-lg  focus:outline-none focus:ring-0 active:bg-primaryColor active:shadow-lg transition duration-150 ease-in-out"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                >
                  Menu
                </button>

                <div>
                  <div className="lg:w-[600px]">
                    <form
                      onSubmit={handleSearch}
                      className="input-group relative flex flex-wrap items-stretch w-full"
                    >
                      <input
                        type="search"
                        name="search"
                        className="form-control focus:shadow-none relative flex-auto  block px-3 py-1.5 text-base font-normal text-gray-700 bg-white  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:bg-white focus:outline-none"
                        placeholder="Search in Ornato Mart"
                        aria-label="Search"
                        aria-describedby="button-addon2"
                      />
                      <button
                        className="btn px-4 py-3 bg-primaryColor text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-primaryColor hover:shadow-lg focus:bg-primaryColor  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primaryColor active:shadow-lg transition duration-150 ease-in-out flex items-center"
                        type="submit"
                        id="button-addon2"
                      >
                        <FaSearch className="text-xl"></FaSearch>
                      </button>
                    </form>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
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
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
