import React, { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import MyCraftCard from "./MyCraftCard";

const MyCraftList = () => {
  const LoadedMyItem = useLoaderData();

  // const { user } = useContext(AuthContext);

  const [myItem, setMyItem] = useState(LoadedMyItem);
  const [data, setData] = useState(LoadedMyItem);

  // let sortedByYes = [...myItem];
  const handleSort = (sortBy) => {
    const sortByYes = myItem.filter(
      (item) => item.customization.toLowerCase() === sortBy
    );
    setData(sortByYes);

    if (sortBy === "All") {
      setData(myItem);
    }

    // if (sortBy === "yes") {

    // }
    // if (sortBy === "no") {
    //   const sortByYNo = myItem.filter(
    //     (item) => item.customization.toLowerCase() === "no"
    //   );
    //   setMyItem(sortByYNo);
    // }
  };

  return (
    <div>
      <div className="flex justify-center pb-20">
        <details className="dropdown">
          <summary className="m-1 btn">Clicked</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={() => handleSort("yes")}>
              <a>Sort By Yes</a>
            </li>
            <li onClick={() => handleSort("no")}>
              <a>Sort By No</a>
            </li>
            <li onClick={() => handleSort("All")}>
              <a>ALL</a>
            </li>
          </ul>
        </details>
      </div>
      {data.map((item) => (
        <MyCraftCard
          key={item._id}
          item={item}
          myItem={data}
          setMyItem={setData}
        ></MyCraftCard>
      ))}
    </div>
  );
};

export default MyCraftList;
