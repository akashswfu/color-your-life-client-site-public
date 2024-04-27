import React, { useContext } from "react";
import ArtAndCraftCategoriesSection from "./ArtAndCraftCategoriesSection";
import Banner from "./Banner";
import OurArttist from "./OurArttist";
import OurGallary from "./OurGallary";
import { useLoaderData } from "react-router-dom";
import CraftItemSection from "./CraftItemSection";
import { AuthContext } from "../../Providers/AuthProvider";

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

  return (
    <div>
      {/* <Banner></Banner> */}

      <div className="grid grid-cols-1 md:grid-cols-3">
        {item.slice(0, 6).map((it) => (
          <CraftItemSection key={it._id} it={it}></CraftItemSection>
        ))}
      </div>

      <OurArttist></OurArttist>

      <ArtAndCraftCategoriesSection></ArtAndCraftCategoriesSection>

      {/* <OurGallary></OurGallary> */}
    </div>
  );
};

export default Home;
