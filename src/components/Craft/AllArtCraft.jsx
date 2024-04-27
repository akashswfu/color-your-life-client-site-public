import { useLoaderData } from "react-router-dom";
import ShowAllArtAndCraft from "./ShowAllArtAndCraft";

const AllArtCraft = () => {
  const allItems = useLoaderData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 justify-center">
      {allItems.map((item) => (
        <ShowAllArtAndCraft key={item._id} item={item}></ShowAllArtAndCraft>
      ))}
    </div>
  );
};

export default AllArtCraft;
