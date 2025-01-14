import React from "react";
import { useTypewriter } from "react-simple-typewriter";

const OurGallery = () => {
  const [typeEffect] = useTypewriter({
    words: [" Our Gallery"],
    // loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-20 ">
        <span className="text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">
          {typeEffect}{" "}
        </span>
      </h1>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-10">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="500"
            className="overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl"
          >
            <img
              src="https://i.postimg.cc/5yNzZ75w/g1.jpg"
              alt="book cover"
              className="object-cover w-full h-56 md:h-64 xl:h-80"
            />

            <div className="bg-black bg-opacity-50 px-6 py-4 opacity-0 hover:opacity-100 text-white absolute inset-0 rounded transition-opacity duration-200 flex flex-col ">
              <p className="text-xl font-bold text-green-500"> Oil Portrai</p>
              <br />

              <br />
            </div>
          </div>
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="500"
            className="overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl"
          >
            <img
              src="https://i.postimg.cc/ZYVprmZj/g2.jpg"
              alt="book cover"
              className="object-cover w-full h-56 md:h-64 xl:h-80"
            />

            <div className="bg-black bg-opacity-50 px-6 py-4 opacity-0 hover:opacity-100 text-white absolute inset-0 rounded transition-opacity duration-200 flex flex-col ">
              <p className="text-xl font-bold text-green-500">
                Mountain view canvas
              </p>
              <br />
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="500"
            className="overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl"
          >
            <img
              src="https://i.postimg.cc/xTZm4PXz/g3.jpg"
              alt="book cover"
              className="object-cover w-full h-56 md:h-64 xl:h-80"
            />

            <div className="bg-black bg-opacity-50 px-6 py-4 opacity-0 hover:opacity-100 text-white absolute inset-0 rounded transition-opacity duration-200 flex flex-col ">
              <p className="text-xl font-bold text-green-500">
                {" "}
                Floral Watercolor Art
              </p>
              <br />
            </div>
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="500"
            className="overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl"
          >
            <img
              src="https://i.postimg.cc/mDVzN3xh/g4.jpg"
              alt="book cover"
              className="object-cover w-full h-56 md:h-64 xl:h-80"
            />

            <div className="bg-black bg-opacity-50 px-6 py-4 opacity-0 hover:opacity-100 text-white absolute inset-0 rounded transition-opacity duration-200 flex flex-col ">
              <p className="text-xl font-bold text-green-500">
                Architectural Charcoal Drawing
              </p>
              <br />
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
            className="overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl"
          >
            <img
              src="https://i.postimg.cc/dQHZh9mx/g5.jpg"
              alt="book cover"
              className="object-cover w-full h-56 md:h-64 xl:h-80"
            />

            <div className="bg-black bg-opacity-50 px-6 py-4 opacity-0 hover:opacity-100 text-white absolute inset-0 rounded transition-opacity duration-200 flex flex-col ">
              <p className="text-xl font-bold text-green-500">
                {" "}
                Superhero Cartoon Design
              </p>
              <br />
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="500"
            className="overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl"
          >
            <img
              src="https://i.postimg.cc/pX39ZXSQ/g6.jpg"
              alt="book cover"
              className="object-cover w-full h-56 md:h-64 xl:h-80"
            />

            <div className="bg-black bg-opacity-50 px-6 py-4 opacity-0 hover:opacity-100 text-white absolute inset-0 rounded transition-opacity duration-200 flex flex-col ">
              <p className="text-xl font-bold text-green-500">
                Forest based Landscape painting
              </p>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurGallery;
