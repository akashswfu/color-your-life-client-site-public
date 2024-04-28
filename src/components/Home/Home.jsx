import React, { useContext } from "react";
import ArtAndCraftCategoriesSection from "./ArtAndCraftCategoriesSection";
import Banner from "./Banner";
import OurArttist from "./OurArttist";
import { useTypewriter } from "react-simple-typewriter";
import { Slide } from "react-awesome-reveal";
import { useLoaderData } from "react-router-dom";
import CraftItemSection from "./CraftItemSection";
import { AuthContext } from "../../Providers/AuthProvider";
import OurGallery from "./OurGallery";

const Home = () => {
  const item = useLoaderData();
  const { loading, setLoading } = useContext(AuthContext);

  if (item.length === 0) {
    setLoading(true);
  } else {
    setLoading(false);
  }
  if (loading) {
    return (
      <div className="text-center text-7xl h-min-[cal(100vh-130px)] text-blue-400 py-10">
        Loading....
      </div>
    );
  }
  const [typeEffect] = useTypewriter({
    words: [" Art and Craft Item"],
    // loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  return (
    <div>
      <Banner></Banner>

      <div>
        <Slide direction="{'down'} delay={1000}">
          <h1 className="text-3xl font-bold text-center mt-20">
            Our
            <span className="text-green-600">{typeEffect} </span>
          </h1>
          <p className="text-center w-1/2 mx-auto font-semibold text-lg pt-8 pb-20">
            Explore our exquisite collection of art and craft items, crafted
            with passion and skill to inspire creativity and imagination
          </p>
        </Slide>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3">
        {item.slice(0, 6).map((it) => (
          <CraftItemSection key={it._id} it={it}></CraftItemSection>
        ))}
      </div>

      <OurArttist></OurArttist>

      <ArtAndCraftCategoriesSection></ArtAndCraftCategoriesSection>
      <OurGallery></OurGallery>
    </div>
  );
};

export default Home;
