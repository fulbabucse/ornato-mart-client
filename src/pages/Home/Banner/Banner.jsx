import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="mb-6">
      <div>
        <div
          id="carouselExampleCaptions"
          className="carousel slide carousel-fade relative"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>

            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>

            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="5"
              aria-label="Slide 6"
            ></button>
          </div>
          <div className="carousel-inner relative w-full overflow-hidden">
            <div className="carousel-item active relative float-left w-full">
              <div className="carousel-images">
                <img
                  src="https://img.freepik.com/free-psd/silver-iphone-13-pro-mockup_106244-2064.jpg?w=740&t=st=1667657826~exp=1667658426~hmac=c79a86e6e23008115c19136618461fb274439d9fac5eda55f098647fc156cd69"
                  className="carousel-img"
                  alt="..."
                />
              </div>
              <div className="carousel-caption hidden md:block absolute lg:top-40 space-y-3 w-full lg:w-2/4">
                <h5 className="text-xl lg:text-6xl font-bold">
                  Love the power <br /> Love the price
                </h5>
                <p className="text-lg">
                  With Apple Trade In, you can get credit toward a new iPhone
                  when you trade in an eligible smartphone.7 It’s good for you
                  and the planet.
                </p>
                <div className="flex gap-3">
                  <button className="border text-white border-orange-500 bg-orange-500 hover:bg-orange-600 transition-colors duration-200 font-semibold py-2 px-4 rounded-sm  text-lg text-opacity-90 hover:text-opacity-100">
                    Discover More
                  </button>
                  <button className="border border-white text-white hover:bg-pink-600 hover:text-white hover:border-pink-500 transition-colors duration-200 font-semibold py-2 px-4 rounded-sm  text-lg">
                    Latest Projects
                  </button>
                </div>
              </div>
            </div>

            <div className="carousel-item relative float-left w-full">
              <div className="carousel-images">
                <img
                  src="https://plus.unsplash.com/premium_photo-1661627310281-3863d788c0b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  className="carousel-img"
                  alt="..."
                />
              </div>

              <div className="carousel-caption hidden md:block absolute lg:top-40 space-y-3 w-full lg:w-2/4">
                <h5 className="text-xl lg:text-6xl font-bold capitalize">
                  Our Everyday Pieces
                </h5>
                <p className="text-lg">
                  Introducing our new Sustainability Programme Product Trace
                  your favorite MV pieces from conception to completion.
                </p>
                <div className="flex gap-3">
                  <button className="border text-white border-orange-500 bg-orange-500 hover:bg-orange-600 transition-colors duration-200 font-semibold py-2 px-4 rounded-sm  text-lg text-opacity-90 hover:text-opacity-100">
                    Discover More
                  </button>
                  <button className="border border-white text-white hover:bg-pink-600 hover:text-white hover:border-pink-500 transition-colors duration-200 font-semibold py-2 px-4 rounded-sm  text-lg">
                    Latest Projects
                  </button>
                </div>
              </div>
            </div>

            <div className="carousel-item relative float-left w-full">
              <div className="carousel-images">
                <img
                  src="https://images.unsplash.com/photo-1651055163460-3563d657e44a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  className="carousel-img"
                  alt="..."
                />
              </div>

              <div className="carousel-caption hidden md:block absolute lg:top-40 space-y-3 w-full ">
                <h5 className="text-xl lg:text-6xl font-bold">
                  And the crowd goes wild <br /> The Fan Edition is back.
                </h5>
                <p className="text-lg w-3/5">
                  Galaxy S21 series is 5G ready. Compatibility dependent upon 5G
                  network availability in Bangladesh.
                </p>
                <div className="flex gap-3">
                  <button className="border text-white border-orange-500 bg-orange-500 hover:bg-orange-600 transition-colors duration-200 font-semibold py-2 px-4 rounded-sm  text-lg text-opacity-90 hover:text-opacity-100">
                    Discover More
                  </button>
                  <button className="border border-white text-white hover:bg-pink-600 hover:text-white hover:border-pink-500 transition-colors duration-200 font-semibold py-2 px-4 rounded-sm  text-lg">
                    Latest Projects
                  </button>
                </div>
              </div>
            </div>

            <div className="carousel-item relative float-left w-full">
              <div className="carousel-images">
                <img
                  src="https://oasis.opstatics.com/content/dam/oasis/page/2022/operation/mar/0324/eu-banner/EU-10pro-Green_M-.jpg.transform/scale-50/image.jpg"
                  className="carousel-img"
                  alt="..."
                />
              </div>

              <div className="carousel-caption hidden md:block absolute lg:top-40 space-y-3 w-full lg:w-2/4">
                <h5 className="text-xl lg:text-6xl font-bold">
                  OnePlus 10 Pro 5G
                </h5>
                <p className="text-lg">
                  The pursuit of tactile perfection with balanced weight
                  distribution.
                </p>
                <div className="flex gap-3">
                  <button className="border text-white border-orange-500 bg-orange-500 hover:bg-orange-600 transition-colors duration-200 font-semibold py-2 px-4 rounded-sm  text-lg text-opacity-90 hover:text-opacity-100">
                    Discover More
                  </button>
                  <button className="border border-white text-white hover:bg-pink-600 hover:text-white hover:border-pink-500 transition-colors duration-200 font-semibold py-2 px-4 rounded-sm  text-lg">
                    Latest Projects
                  </button>
                </div>
              </div>
            </div>

            <div className="carousel-item relative float-left w-full">
              <div className="carousel-images">
                <img
                  src="https://img.freepik.com/free-photo/cute-freelance-girl-using-laptop-sitting-floor-smiling_176420-20221.jpg?w=740&t=st=1667658611~exp=1667659211~hmac=7907eeae85122d9d01b2ec1ed1df8eeea10d7f7dab73780470a4741cf748184d"
                  className="carousel-img"
                  alt="..."
                />
              </div>

              <div className="carousel-caption hidden md:block absolute lg:top-40 space-y-3 w-full lg:w-2/4">
                <h5 className="text-xl lg:text-6xl font-bold">
                  Discover a <br /> new level of meeting collaboration
                </h5>
                <p className="text-lg">
                  Introducing the HP Dragonfly Folio—this sophisticated, highly
                  secure, multi-mode PC anticipates and adapts to your life,
                  your work, and your surroundings.
                </p>
                <div className="flex gap-3">
                  <Link to="/category/laptops">
                    <button className="border text-white border-orange-500 bg-orange-500 hover:bg-orange-600 transition-colors duration-200 font-semibold py-2 px-4 rounded-sm  text-lg text-opacity-90 hover:text-opacity-100">
                      Discover More
                    </button>
                  </Link>
                  <button className="border border-white text-white hover:bg-pink-600 hover:text-white hover:border-pink-500 transition-colors duration-200 font-semibold py-2 px-4 rounded-sm  text-lg">
                    Latest Projects
                  </button>
                </div>
              </div>
            </div>
            <div className="carousel-item relative float-left w-full">
              <div className="carousel-images">
                <img
                  src="https://img.freepik.com/free-photo/closeup-shot-pretty-afro-american-girl-holding-some-shopping-bags-feeling-happy_181624-44670.jpg?w=740&t=st=1667658645~exp=1667659245~hmac=deaa630155b33252e9fd5eef060757804c94c67c5f9d8249bcba0db7cf661b90"
                  className="carousel-img"
                  alt="..."
                />
              </div>

              <div className="carousel-caption hidden md:block absolute lg:top-40 space-y-3 w-full lg:w-2/4">
                <h5 className="text-xl lg:text-6xl font-bold">
                  Fashion Changing Always
                </h5>
                <p className="text-lg">
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <div className="flex gap-3">
                  <button className="border text-white border-orange-500 bg-orange-500 hover:bg-orange-600 transition-colors duration-200 font-semibold py-2 px-4 rounded-sm  text-lg text-opacity-90 hover:text-opacity-100">
                    Discover More
                  </button>
                  <button className="border border-white text-white hover:bg-pink-600 hover:text-white hover:border-pink-500 transition-colors duration-200 font-semibold py-2 px-4 rounded-sm  text-lg">
                    Latest Projects
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
