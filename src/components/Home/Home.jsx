import React from "react";
import ArtAndCraftCategoriesSection from "./ArtAndCraftCategoriesSection";
import Banner from "./Banner";
import OurArttist from "./OurArttist";
import OurGallary from "./OurGallary";
import { useLoaderData } from "react-router-dom";
import CraftItemSection from "./CraftItemSection";

const Home = () => {
  const item = useLoaderData();

  return (
    <div>
      {/* <Banner></Banner> */}

      {/* <div className="grid grid-cols-1 md:grid-cols-3">
        {item.slice(0, 6).map((it) => (
          <CraftItemSection key={it._id} it={it}></CraftItemSection>
        ))}
      </div> */}

      {/* <OurArttist></OurArttist> */}

      <ArtAndCraftCategoriesSection></ArtAndCraftCategoriesSection>

      {/* <OurGallary></OurGallary> */}
    </div>
  );
};

export default Home;
