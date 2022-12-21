import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import RegisterLogo from "../../../assets/register.svg";
import { AuthContexts } from "../../../contexts/AuthProvider/AuthProvider";
import { useToken } from "../../../hooks/useToken";

const Register = () => {
  const [userErrors, setUserErrors] = useState(null);
  const [email, setEmail] = useState("");
  const [token] = useToken(email);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile, verifyUserEmail } =
    useContext(AuthContexts);

  const navigate = useNavigate();

  if (token) {
    navigate(from, { replace: true });
  }

  const handleRegister = (userData) => {
    setUserErrors("");
    const formData = new FormData();
    formData.append("image", userData.image[0]);

    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_API_KEY}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        createUser(userData.email, userData.password)
          .then((result) => {
            const updateInfo = {
              displayName: userData.name,
              photoURL: imageData.data.url,
            };
            updateUserProfile(updateInfo)
              .then(() => {
                userInfoSaveToDB(result.user?.displayName, result.user?.email);
                verifyUserEmail()
                  .then(() => {})
                  .catch((err) => console.error(err));
              })
              .catch((err) => console.error(err));
          })
          .catch((err) => {
            if (
              err.message === "Firebase: Error (auth/email-already-in-use)."
            ) {
              setUserErrors("This Email already used");
            } else if (
              err.message ===
              "Firebase: Password should be at least 6 characters (auth/weak-password)."
            ) {
              setUserErrors("Password should be at least 6 characters");
            }
          });
      })
      .catch((err) => console.error(err));
  };

  const userInfoSaveToDB = (name, email) => {
    const user = {
      name,
      email,
    };
    fetch("https://ornato-mart-server.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("ornatoToken")}`,
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Successfully created Account");
          setEmail(email);
        }
      });
  };

  return (
    <section>
      <div className="container px-6 py-6 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0 flex justify-center">
            <img src={RegisterLogo} className="w-full" alt="Register" />
          </div>
          <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
            <div className="mb-4">
              <h2 className="text-center text-3xl font-bold text-gray-700 uppercase">
                Register
              </h2>
              <p className="text-center text-gray-700 font-semibold">
                Create a new Account
              </p>
            </div>
            <form onSubmit={handleSubmit(handleRegister)} className="space-y-2">
              <div>
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
                  placeholder="Name"
                />
                {errors.name && (
                  <p className="text-red-400 font-semibold text-sm">
                    {errors?.name?.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email address is required",
                  })}
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
                  placeholder="Email address"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm font-medium">
                    {errors.email?.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password length should be 6 character",
                    },
                    pattern: {
                      value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                      message: `At least 1 special character, 1 uppercase letter, and Number character make the password stronger`,
                    },
                  })}
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
                  placeholder="Password"
                />
                {errors.password && (
                  <p className="text-red-400 text-sm font-medium">
                    {errors.password?.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="image" className="block mb-2 text-sm">
                  Select profile Picture
                </label>
                <input
                  type="file"
                  id="image"
                  {...register("image", {
                    required: "Profile picture is required",
                  })}
                  accept="image/*"
                />
                {errors.image && (
                  <p className="text-red-400 font-semibold text-sm">
                    {errors?.image?.message}
                  </p>
                )}
              </div>

              <div className="mb-6">
                <p className="text-red-600 font-semibold">{userErrors}</p>
              </div>

              <button
                type="submit"
                className="inline-block px-7 py-3 bg-purple-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Register
              </button>
            </form>
            <div>
              <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p className="text-center font-semibold mx-4">OR</p>
              </div>

              <p className="text-md font-semibold text-center">
                Don't have an account?
                <Link
                  to="/login"
                  className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out ml-1"
                >
                  Log In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
