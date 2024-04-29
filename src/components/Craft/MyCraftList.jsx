import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import MyCraftCard from "./MyCraftCard";

const MyCraftList = () => {
  // const LoadedMyItem = useLoaderData();

  // const [loadedMyItem, setLoadedMyItem] = useState([]);
  const [myItem, setMyItem] = useState([]);
  const [data, setData] = useState(myItem);

  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(
      `https://color-your-life-server-site.vercel.app/emailItem/${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyItem(data);
        setData(data);
      });
  }, []);
  console.log(user.email);

  // console.log(data);

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
    <div className="min-h-[calc(100vh-370px)]">
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
      <div>
        {data.map((item) => (
          <MyCraftCard
            key={item._id}
            item={item}
            myItem={data}
            setMyItem={setData}
          ></MyCraftCard>
        ))}
      </div>
    </div>
  );
};

export default MyCraftList;
