import React, { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import MyCraftCard from "./MyCraftCard";

const MyCraftList = () => {
  const allData = useLoaderData();

  const { user } = useContext(AuthContext);
  const myItem = allData.filter((data) => data.email === user?.email);
  //   const [myItem, setMyItem] = useState(LoadedMyItem);
  console.log(myItem);

  console.log(myItem);
  return (
    <div>
      {myItem.map((item) => (
        <MyCraftCard
          key={item._id}
          item={item}
          //   myItem={myItem}
          //   setMyItem={setMyItem}
        ></MyCraftCard>
      ))}
    </div>
  );
};

export default MyCraftList;
