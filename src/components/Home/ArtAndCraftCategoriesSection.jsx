import { useEffect, useState } from "react";
import Category from "./Category";

const ArtAndCraftCategoriesSection = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/category")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 justify-center">
      {data.map((d) => (
        <Category key={d._id} d={d}></Category>
      ))}
    </div>
  );
};

export default ArtAndCraftCategoriesSection;
