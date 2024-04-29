import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import { Slide } from "react-awesome-reveal";

const OurArttist = () => {
  const [typeEffect] = useTypewriter({
    words: [" Our Artist", " Our Team"],
    // loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  return (
    <div>
      <Slide direction="{'down'} delay={1000}">
        <h1 className="text-3xl font-bold text-center mt-20">
          Meet
          <span className="text-green-600">{typeEffect} </span>
        </h1>
        <p className="text-center w-1/2 mx-auto font-semibold text-lg pt-8 pb-20">
          Passionate artists crafting diverse narratives through vibrant
          strokes, encapsulating emotions, and awakening imagination in every
          canvas.
        </p>
      </Slide>
      <div className="flex flex-col md:flex-row justify-center md:justify-around space-y-7 md:space-y-0">
        <div className="flex flex-col space-y-4 items-center">
          <img
            className="w-40 h-40 rounded-full "
            src="https://i.postimg.cc/KYDRx78Q/m1.jpg"
            alt=""
          />
          <h2 className="text-2xl font-semibold">Alex Panday</h2>
          <p className="text-xl font-semibold">Landscape Painting</p>
        </div>
        <div className="flex flex-col space-y-4 items-center">
          <img
            className="w-40 h-40 rounded-full "
            src="https://i.postimg.cc/zBdvRJWg/m2.jpg"
            alt=""
          />
          <h2 className="text-2xl font-semibold">Subin Ahemed</h2>
          <p className="text-xl font-semibold">Charcoal Sketching</p>
        </div>
        <div className="flex flex-col space-y-4 items-center">
          <img
            className="w-40 h-40 rounded-full "
            src="https://i.postimg.cc/4yq3BBW4/m3.jpg"
            alt=""
          />
          <h2 className="text-2xl font-semibold">Bijoy Sarkar</h2>
          <p className="text-xl font-semibold">Watercolour Painting</p>
        </div>
        <div className="flex flex-col space-y-4 items-center">
          <img
            className="w-40 h-40 rounded-full "
            src="https://i.postimg.cc/vHxTcwm4/m4.jpg"
            alt=""
          />
          <h2 className="text-2xl font-semibold">Mountain view canvas</h2>
          <p className="text-xl font-semibold">Akash Sutradhar</p>
        </div>
      </div>
    </div>
  );
};

export default OurArttist;
