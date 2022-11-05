import React from "react";
import { useState } from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import RegisterLogo from "../../../assets/register.svg";
import { AuthContexts } from "../../../contexts/AuthProvider/AuthProvider";

const Register = () => {
  const [errors, setErrors] = useState(null);
  const { createUser, updateUserProfile, verifyUserEmail } =
    useContext(AuthContexts);
  const navigate = useNavigate();
  const handleUserLogIn = (e) => {
    setErrors("");
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoLink.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((res) => {
        const user = res.user;
        handleUpdateUser(name, photoURL);
        form.reset();
        handleEmailVerification();
        navigate("/");
      })
      .catch((err) => {
        if (err.message === "Firebase: Error (auth/email-already-in-use).") {
          setErrors("This Email already used");
        } else if (
          err.message ===
          "Firebase: Password should be at least 6 characters (auth/weak-password)."
        ) {
          setErrors("Password should be at least 6 characters");
        }
        console.error(err);
      });
  };

  const handleUpdateUser = (name, photoLink) => {
    const userInfo = {
      displayName: name,
      photoURL: photoLink,
    };
    updateUserProfile(userInfo)
      .then((res) => {})
      .catch((err) => console.error(err));
  };

  const handleEmailVerification = () => {
    verifyUserEmail()
      .then((res) => {
        toast.success("Please check your email and verify");
      })
      .catch((err) => console.error(err));
  };

  return (
    <section className="h-screen">
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
            <form onSubmit={handleUserLogIn} className="space-y-3">
              <div>
                <input
                  type="text"
                  name="name"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
                  placeholder="Name"
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  name="photoLink"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
                  placeholder="Photo URL"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
                  placeholder="Email address"
                  required
                />
              </div>

              <div>
                <input
                  type="password"
                  name="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
                  placeholder="Password"
                  required
                />
              </div>

              <div className="mb-6">
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-purple-600 checked:border-purple-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    id="exampleCheck1"
                    required
                  />
                  <label
                    className="form-check-label text-gray-800"
                    htmlFor="exampleCheck1"
                  >
                    Agree to Terms and Conditions?
                  </label>
                </div>
                <p className="text-red-600 font-semibold">{errors}</p>
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
