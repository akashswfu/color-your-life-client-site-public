import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleAllSubCategory from "./SingleAllSubCategory";

const AllSubCategory = () => {
  const data = useLoaderData();
  console.log(data);
  if (data.length === 0) {
    return (
      <p className="text-3xl font-bold text-center h-screen py-20">
        No Data added
      </p>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      {data.map((item) => (
        <SingleAllSubCategory key={item._id} item={item}></SingleAllSubCategory>
      ))}
    </div>
  );
};

export default AllSubCategory;
