import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Bounce, Slide } from "react-awesome-reveal";

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
      <div className="flex justify-around">
        <div className="flex flex-col space-y-4 items-center">
          <img className="w-40 h-40 rounded-full bg-red-500" src="" alt="" />
          <h2 className="text-2xl font-semibold">Name</h2>
          <p className="text-xl font-semibold">category</p>
        </div>
        <div className="flex flex-col space-y-4 items-center">
          <img className="w-40 h-40 rounded-full bg-red-500" src="" alt="" />
          <h2 className="text-2xl font-semibold">Name</h2>
          <p className="text-xl font-semibold">category</p>
        </div>
        <div className="flex flex-col space-y-4 items-center">
          <img className="w-40 h-40 rounded-full bg-red-500" src="" alt="" />
          <h2 className="text-2xl font-semibold">Name</h2>
          <p className="text-xl font-semibold">category</p>
        </div>
        <div className="flex flex-col space-y-4 items-center">
          <img className="w-40 h-40 rounded-full bg-red-500" src="" alt="" />
          <h2 className="text-2xl font-semibold">Name</h2>
          <p className="text-xl font-semibold">category</p>
        </div>
      </div>
    </div>
  );
};

export default OurArttist;
