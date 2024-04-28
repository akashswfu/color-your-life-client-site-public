import { useEffect, useState } from "react";
import Category from "./Category";
import { useTypewriter } from "react-simple-typewriter";
import { Slide } from "react-awesome-reveal";

const ArtAndCraftCategoriesSection = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/category")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const [typeEffect] = useTypewriter({
    words: ["Art & Craft Categories"],
    // loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  return (
    <div>
      <div>
        <Slide direction="{'down'} delay={1000}">
          <h1 className="text-3xl font-bold text-center mt-20">
            <span className="text-green-600">{typeEffect} </span>
          </h1>
          <p className="text-center w-1/2 mx-auto font-semibold text-lg pt-8 pb-20">
            Discover diverse creative realms with painting, sculpture, pottery,
            jewelry making, and more, igniting your imagination and artistic
            passion.
          </p>
        </Slide>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center">
        {data.map((d) => (
          <Category key={d._id} d={d}></Category>
        ))}
      </div>
    </div>
  );
};

export default ArtAndCraftCategoriesSection;
