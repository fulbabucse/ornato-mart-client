import React from "react";
import { FaGoogle, FaFacebookF, FaTwitter } from "react-icons/fa";
import logo from "../../../assets/login.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContexts } from "../../../contexts/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { useState } from "react";

const Login = () => {
  const { signInUser, googleSign, userPasswordReset } =
    useContext(AuthContexts);
  const [emailAddress, setEmailAddress] = useState("");
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleUserLogIn = (e) => {
    setErrors("");
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((res) => {
        const user = res.user;
        navigate(from, { replace: true });
      })
      .catch((err) => {
        if (err.message === "Firebase: Error (auth/user-not-found).") {
          setErrors("Couldn't find your account");
        } else if (err.message === "Firebase: Error (auth/wrong-password).") {
          setErrors("Invalid username or password");
        }
        console.error(err);
      });
  };

  const handleGoogleSignIn = () => {
    googleSign()
      .then((res) => {
        const user = res.user;
        navigate(from, { replace: true });
        toast.success("Successfully sign in with Google");
      })
      .catch((err) => console.error(err));
  };

  const handleEmailBlur = (e) => {
    setEmailAddress(e.target.value);
  };

  const handlePasswordReset = () => {
    if (!emailAddress) {
      toast.error("Please enter your email address");
      return;
    }

    userPasswordReset(emailAddress)
      .then((res) => {
        toast.success(
          "Password reset email has sent, Please check Inbox or Spam"
        );
      })
      .catch((err) => console.error(err));
  };

  return (
    <section className="">
      <div className="container px-6 py-6 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
            <img src={logo} className="w-full" alt="Phone image" />
          </div>
          <div className="w-full md:w-8/12 lg:w-5/12 lg:ml-20">
            <div className="mb-4">
              <h2 className="text-center text-3xl font-bold text-gray-700 uppercase">
                Log In
              </h2>
              <p className="text-center text-gray-700 font-semibold">
                Log in to access your account
              </p>
            </div>
            <form onSubmit={handleUserLogIn}>
              <div className="mb-3">
                <input
                  type="text"
                  name="email"
                  onBlur={handleEmailBlur}
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
                  placeholder="Email address"
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  name="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
                  placeholder="Password"
                  required
                />
              </div>

              <button
                type="submit"
                className="inline-block px-7 py-3 bg-purple-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Log In
              </button>
            </form>
            <div className="flex justify-between items-center mt-3">
              <p className="text-red-600">{errors}</p>
              <button
                onClick={handlePasswordReset}
                className="text-purple-600 hover:text-purple-700 focus:text-purple-700 active:text-purple-800 duration-200 transition ease-in-out"
              >
                Forgot password?
              </button>
            </div>
            <div>
              <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p className="text-center font-semibold mx-4 mb-0">OR</p>
              </div>

              <button
                onClick={handleGoogleSignIn}
                className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3 bg-amber-500"
                role="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                <FaGoogle className="mx-1"></FaGoogle>
                Continue with Google
              </button>

              <button
                className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
                style={{ backgroundColor: "#3b5998" }}
                role="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                <FaFacebookF className="mx-1"></FaFacebookF>
                Continue with Facebook
              </button>

              <button
                className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center"
                style={{ backgroundColor: "#55acee" }}
                role="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                <FaTwitter className="mx-1"></FaTwitter>
                Continue with Twitter
              </button>
              <p className="text-md font-semibold mt-3 text-center">
                Already have an account?
                <Link
                  to="/register"
                  className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out ml-1"
                >
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
