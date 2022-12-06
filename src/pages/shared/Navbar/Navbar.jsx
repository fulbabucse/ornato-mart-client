import React, { useContext } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContexts } from "../../../contexts/AuthProvider/AuthProvider";
import logo from "../../../assets/logo/logo.png";
import UserThumb from "../../../assets/user_thumbnail.jpg";
import { useQuery } from "@tanstack/react-query";
import { useAdmin } from "../../../hooks/useAdmin";
import Top from "./Top";

const Navbar = () => {
  const { user, userSignOut } = useContext(AuthContexts);

  const [isAdmin] = useAdmin(user?.email);

  const { data: orders = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/cart?email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("ornatoToken")}`,
          },
        }
      );
      const data = await res.json();
      return data;
    },
  });

  const { data: mensSubCategory = [] } = useQuery({
    queryKey: ["men"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/sub-category/men");
      const data = await res.json();
      return data;
    },
  });

  const { data: womensSubCategory = [] } = useQuery({
    queryKey: ["women"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/sub-category/women");
      const data = await res.json();
      return data;
    },
  });

  const { data: electronicsDevices = [] } = useQuery({
    queryKey: ["electronics-devices"],
    queryFn: async () => {
      const res = await fetch(
        "http://localhost:5000/sub-category/electronics-devices"
      );
      const data = await res.json();
      return data;
    },
  });

  const { data: babiesToyes = [] } = useQuery({
    queryKey: ["babies-toys"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/sub-category/babies-toys");
      const data = await res.json();
      return data;
    },
  });

  const { data: healthBeauty = [] } = useQuery({
    queryKey: ["health-beauty"],
    queryFn: async () => {
      const res = await fetch(
        "http://localhost:5000/sub-category/health-beauty"
      );
      const data = await res.json();
      return data;
    },
  });

  const { data: automotives = [] } = useQuery({
    queryKey: ["automotive-motorbike"],
    queryFn: async () => {
      const res = await fetch(
        "http://localhost:5000/sub-category/automotive-motorbike"
      );
      const data = await res.json();
      return data;
    },
  });

  const { data: electronicsAccessories = [] } = useQuery({
    queryKey: ["electronics-accessories"],
    queryFn: async () => {
      const res = await fetch(
        "http://localhost:5000/sub-category/electronics-accessories"
      );
      const data = await res.json();
      return data;
    },
  });

  const { data: homeAppliance = [] } = useQuery({
    queryKey: ["tv-appliance"],
    queryFn: async () => {
      const res = await fetch(
        "http://localhost:5000/sub-category/tv-appliance"
      );
      const data = await res.json();
      return data;
    },
  });

  const handleUserSignOut = () => {
    userSignOut()
      .then(() => {})
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <Top />
      <nav className="bg-white shadow dark:bg-gray-800">
        <div className="container px-4 mx-auto">
          <div className="lg:flex lg:items-center">
            <div className="flex items-center justify-between my-3">
              <div className="w-24 h-10">
                <Link to="/">
                  <img src={logo} alt="" />
                </Link>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <li className="nav-item dropdown static list-none">
                <button
                  className="nav-link  pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out dropdown-toggle flex items-center whitespace-nowrap"
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
                </button>
                <div
                  className="dropdown-menu w-full lg:w-4/5 mx-auto mt-0 hidden shadow-lg bg-white absolute left-0 top-full"
                  aria-labelledby="dropdownMenuButtonY"
                >
                  <div className="px-6 lg:px-8 py-5">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                      <div className="bg-white text-gray-600">
                        <p className="block px-2 text-sm py-2 border-b border-gray-200 w-full  font-semibold text-gray-700">
                          Men's Fashion
                        </p>

                        {mensSubCategory?.map((menCategory) => (
                          <Link
                            to={`/sub-category/${menCategory?.category_id}`}
                            aria-current="true"
                            key={menCategory?._id}
                            className="block px-2 py-1 capitalize text-sm border-b border-gray-200 w-full hover:bg-primaryColor hover:text-white transition duration-150 ease-in-out"
                          >
                            {menCategory?.sub_category}
                          </Link>
                        ))}
                      </div>
                      <div className="bg-white text-gray-600">
                        <p className="block px-2 text-sm py-2 border-b border-gray-200 w-full  font-semibold text-gray-700">
                          Women's Fashion
                        </p>
                        {womensSubCategory?.map((womenCategory) => (
                          <Link
                            to={`/sub-category/${womenCategory?.category_id}`}
                            aria-current="true"
                            key={womenCategory?._id}
                            className="block px-2 py-1 text-sm capitalize border-b border-gray-200 w-full hover:bg-primaryColor hover:text-white transition duration-150 ease-in-out"
                          >
                            {womenCategory?.sub_category}
                          </Link>
                        ))}
                      </div>
                      <div className="bg-white text-gray-600">
                        <p className="block px-2 text-sm py-2 border-b border-gray-200 w-full  font-semibold text-gray-700">
                          Electronics Devices
                        </p>
                        {electronicsDevices?.map((electronics) => (
                          <Link
                            to={`/sub-category/${electronics?.category_id}`}
                            aria-current="true"
                            key={electronics?._id}
                            className="block px-2 py-1 text-sm capitalize border-b border-gray-200 w-full hover:bg-primaryColor hover:text-white transition duration-150 ease-in-out"
                          >
                            {electronics?.sub_category}
                          </Link>
                        ))}
                      </div>
                      <div className="bg-white text-gray-600">
                        <p className="block px-2 text-sm py-2 border-b border-gray-200 w-full font-semibold text-gray-700">
                          Health & Beauty
                        </p>
                        {healthBeauty?.map((healths) => (
                          <Link
                            to={`/sub-category/${healths?.category_id}`}
                            aria-current="true"
                            key={healths?._id}
                            className="block px-2 py-1 text-sm capitalize border-b border-gray-200 w-full hover:bg-primaryColor hover:text-white transition duration-150 ease-in-out"
                          >
                            {healths?.sub_category}
                          </Link>
                        ))}
                      </div>
                      <div className="bg-white text-gray-600">
                        <p className="block px-2 text-sm py-2 border-b border-gray-200 w-full font-semibold text-gray-700">
                          Automotive & Engines
                        </p>
                        {automotives?.map((automotive) => (
                          <Link
                            to={`/sub-category/${automotive?.category_id}`}
                            aria-current="true"
                            key={automotive?._id}
                            className="block px-2 py-1 text-sm capitalize border-b border-gray-200 w-full hover:bg-primaryColor hover:text-white transition duration-150 ease-in-out"
                          >
                            {automotive?.sub_category}
                          </Link>
                        ))}
                      </div>
                      <div className="bg-white text-gray-600">
                        <p className="block px-2 text-sm py-2 border-b border-gray-200 w-full font-semibold text-gray-700">
                          Electronics Accessories
                        </p>
                        {electronicsAccessories?.map((accessories) => (
                          <Link
                            to={`/sub-category/${accessories?.category_id}`}
                            aria-current="true"
                            key={accessories?._id}
                            className="block px-2 py-1 text-sm capitalize border-b border-gray-200 w-full hover:bg-primaryColor hover:text-white transition duration-150 ease-in-out"
                          >
                            {accessories?.sub_category}
                          </Link>
                        ))}
                      </div>
                      <div className="bg-white text-gray-600">
                        <p className="block px-2 text-sm py-2 border-b border-gray-200 w-full font-semibold text-gray-700">
                          Tv & Home Appliances
                        </p>
                        {homeAppliance?.map((home) => (
                          <Link
                            to={`/sub-category/${home?.category_id}`}
                            aria-current="true"
                            key={home?._id}
                            className="block px-2 py-1 text-sm capitalize border-b border-gray-200 w-full hover:bg-primaryColor hover:text-white transition duration-150 ease-in-out"
                          >
                            {home?.sub_category}
                          </Link>
                        ))}
                      </div>
                      <div className="bg-white text-gray-600">
                        <p className="block px-2 text-sm py-2 border-b border-gray-200 w-full font-semibold text-gray-700">
                          Babies & Toys
                        </p>
                        {babiesToyes?.map((babiesToy) => (
                          <Link
                            to={`/sub-category/${babiesToy?.category_id}`}
                            aria-current="true"
                            key={babiesToy?._id}
                            className="block px-2 py-1 text-sm capitalize border-b border-gray-200 w-full hover:bg-primaryColor hover:text-white transition duration-150 ease-in-out"
                          >
                            {babiesToy?.sub_category}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <div className="flex flex-col items-center transition-all duration-300 ease-in-out  text-gray-600 capitalize dark:text-gray-300 lg:flex lg:-mx-4 lg:flex-row lg:items-center justify-end gap-10 lg:absolute lg:right-10">
                <div className="flex gap-4 lg:px-10 justify-center items-center">
                  <li className="list-none">
                    {user?.uid && (
                      <li className="text-gray-600 hover:text-primaryColor list-none">
                        <Link to="/orders" className="flex gap-1">
                          <FaCartArrowDown className="text-xl font-bold text-primaryColor"></FaCartArrowDown>
                          <sup className="text-xl text-primaryColor">
                            {orders?.length}
                          </sup>
                        </Link>
                      </li>
                    )}
                  </li>

                  {isAdmin && (
                    <li className="list-none">
                      <Link to="/dashboard">
                        <h5>Dashboard</h5>
                      </Link>
                    </li>
                  )}

                  <div className="flex justify-center lg:flex lg:mt-0 lg:-mx-2">
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
                              alt="User"
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
