import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContexts } from "../../contexts/AuthProvider/AuthProvider";

const ModalForm = () => {
  const { user } = useContext(AuthContexts);
  const [province, setProvince] = useState("");
  const [areaCities, setAreaCities] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { data: provinces = [] } = useQuery({
    queryKey: ["provinces"],
    queryFn: async () => {
      const res = await fetch(
        "https://ornato-mart-server.vercel.app/provinces"
      );
      const data = await res.json();
      return data;
    },
  });

  const { data: cities = [] } = useQuery({
    queryKey: ["cities", province],
    queryFn: async () => {
      const res = await fetch(
        `https://ornato-mart-server.vercel.app/cities?province=${province}`
      );
      const data = await res.json();
      return data;
    },
  });

  const { data: areas = [] } = useQuery({
    queryKey: ["area", areaCities],
    queryFn: async () => {
      const res = await fetch(
        `https://ornato-mart-server.vercel.app/area?area=${areaCities}`
      );
      const data = await res.json();
      return data;
    },
  });

  const handleSaveAddress = (data) => {
    const updatedData = {
      address: data.address,
      area: data.area,
      phone: data.phoneNumber,
      province,
      city: areaCities,
    };

    fetch(`https://ornato-mart-server.vercel.app/users?email=${user?.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged && data.modifiedCount) {
          toast.success("successfully added your Shipping & Billing Address");
        }
      });
  };

  return (
    <div>
      <div
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="shippingBillingModalForm"
        tabIndex="-1"
        aria-labelledby="shippingBillingModalForm"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable relative w-auto pointer-events-none">
          <div className="modal-content border-none p-5 shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between  rounded-t-md">
              <h5
                className="text-xl font-medium leading-normal text-gray-800"
                id="shippingBillingModalForm"
              >
                Add Shipping & Billing Address
              </h5>
              <button
                type="button"
                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body relative">
              <div className="block rounded-lg bg-white mt-2">
                <form
                  onSubmit={handleSubmit(handleSaveAddress)}
                  className="space-y-2 p-1 text-sm"
                >
                  <div className="form-group">
                    <input
                      type="text"
                      defaultValue={user?.displayName}
                      disabled
                      className="form-control focus:shadow-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-secondaryColor focus:outline-none"
                      aria-describedby="emailHelp"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      defaultValue={user?.email}
                      disabled
                      className="form-control focus:shadow-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-secondaryColor focus:outline-none"
                      aria-describedby="emailHelp"
                      placeholder="Email"
                    />
                  </div>

                  <div className="flex justify-center">
                    <div className="w-full">
                      <select
                        onBlur={(e) => setProvince(e.target.value)}
                        className="form-select focus:shadow-none appearance-none
      block
      w-full
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
      focus:text-gray-700 focus:bg-white  focus:outline-none"
                        aria-label="Default select example"
                      >
                        <option selected>Select Province</option>
                        {provinces?.map((province) => (
                          <option
                            key={province?._id}
                            value={province?.province_name}
                          >
                            {province?.province_name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="w-full">
                      <select
                        onBlur={(e) => setAreaCities(e.target.value)}
                        className="form-select focus:shadow-none appearance-none
      block
      w-full
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
      focus:text-gray-700 focus:bg-white  focus:outline-none"
                        aria-label="Default select example"
                      >
                        <option selected>Select City</option>
                        {cities?.map((city) => (
                          <option key={city?._id} value={city?.city_name}>
                            {city?.city_name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-full">
                      <select
                        {...register("area", {
                          required: "Area is required",
                        })}
                        className="form-select focus:shadow-none appearance-none
      block
      w-full
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
      focus:text-gray-700 focus:bg-white  focus:outline-none"
                        aria-label="Default select example"
                      >
                        <option selected>Select Area</option>
                        {areas?.map((area) => {
                          return area.area?.map((a, index) => (
                            <option key={index} value={a}>
                              {a}
                            </option>
                          ));
                        })}
                      </select>
                      {errors.area && (
                        <p className="text-red-400 text-sm font-medium">
                          {errors.area?.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      {...register("address", {
                        required: "Address is required",
                      })}
                      className="form-control focus:shadow-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-secondaryColor focus:outline-none"
                      aria-describedby="emailHelp"
                      placeholder="House No, Building, Street area"
                    />
                    {errors.address && (
                      <p className="text-red-400 text-sm font-medium">
                        {errors.address?.message}
                      </p>
                    )}
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      {...register("phoneNumber", {
                        required: "Phone Number is required",
                        minLength: {
                          value: 11,
                          message: "11 Character Correct Number",
                        },
                      })}
                      className="form-control focus:shadow-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-secondaryColor focus:outline-none"
                      aria-describedby="emailHelp"
                      placeholder="Phone Number"
                    />
                    {errors.phoneNumber && (
                      <p className="text-red-400 text-sm font-medium">
                        {errors.phoneNumber?.message}
                      </p>
                    )}
                  </div>

                  <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md">
                    <button
                      type="button"
                      className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
