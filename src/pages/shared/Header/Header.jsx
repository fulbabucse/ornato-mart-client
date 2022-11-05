import { useContext, useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContexts } from "../../../contexts/AuthProvider/AuthProvider";
import UserThumb from "../../../assets/user_thumbnail.jpg";

function Header() {
  const [navbar, setNavbar] = useState(false);
  const [categories, setCategories] = useState();
  const { user, userSignOut } = useContext(AuthContexts);

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

  return (
    <nav className="w-full bg-white shadow">
      <div className="justify-between px-2 lg:px-0 mx-auto lg:max-w-7xl md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-2 md:py-5 md:block">
            <Link to="/">
              <h2 className="text-4xl font-bold text-orange-500">
                Ornato Mart
              </h2>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col lg:flex-row items-center justify-center space-y-3 md:flex md:space-x-6 md:space-y-0">
              <li className="text-gray-600 font-md hover:text-blue-600">
                <Link to="/home">Home</Link>
              </li>
              <li className="text-gray-600">
                <div className="flex justify-center">
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
                </div>
              </li>
              <li className="text-gray-600 hover:text-blue-600">
                <Link to="/orders">Orders</Link>
              </li>

              <li className="text-gray-600 hover:text-blue-600">
                <Link to="/about">About</Link>
              </li>
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
                        className="w-10 h-10 rounded-full"
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
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
