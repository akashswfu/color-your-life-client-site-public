import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import MyCraftCard from "./MyCraftCard";

const MyCraftList = () => {
  const { setLoading } = useContext(AuthContext);
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
  if (data.length === 0) {
    <p className="text-xl text-red-500 font-semibold">
      No Data Added By You! Please add first then visit here!
    </p>;
  }
  const handleSort = (sortBy) => {
    const sortByYes = myItem.filter(
      (item) => item.customization.toLowerCase() === sortBy
    );
    setData(sortByYes);

    if (sortBy === "All") {
      setData(myItem);
    }
  };

  return (
    <div className="min-h-[calc(100vh-370px)]">
      <div className="flex justify-center pb-24">
        <details className="dropdown">
          <summary className="m-1 px-3 cursor-pointer py-2 rounded-lg  border-0 w-full bg-[#23BE0A] text-white text-xl font-semibold">
            SORT BY
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-36">
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
      <div className="mx-3">
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
