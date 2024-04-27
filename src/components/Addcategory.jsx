import React from "react";
import Swal from "sweetalert2";

const Addcategory = () => {
    
  const handleAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const subcategory = form.subcategory.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const stock = form.stock.value;
    const image = form.image.value;
    const categoryData = {
      subcategory,
      description,
      rating,
      customization,
      stock,
      image,
    };
    fetch("http://localhost:5000/category", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(categoryData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Added Successfully",
            icon: "success",
          });
        }
      });
  };
  return (
    <form onSubmit={handleAdd}>
      <input
        type="text"
        placeholder="subcategory"
        name="subcategory"
        className="input input-bordered w-1/2 mx-auto my-5 "
      />
      <input
        type="text"
        placeholder="short_description"
        name="description"
        className="input input-bordered w-1/2 mx-auto my-5 "
      />
      <input
        type="text"
        placeholder="rating"
        name="rating"
        className="input input-bordered w-1/2 mx-auto my-5 "
      />
      <input
        type="text"
        placeholder="customization"
        name="customization"
        className="input input-bordered w-1/2 mx-auto my-5 "
      />
      <input
        type="text"
        placeholder="stock"
        name="stock"
        className="input input-bordered w-1/2 mx-auto my-5 "
      />
      <input
        type="text"
        placeholder="image"
        name="image"
        className="input input-bordered w-1/2 mx-auto my-5 "
      />
      <input
        className="btn btn-block bg-black text-white font-semibold hover:text-black"
        type="submit"
        value="Add Item"
      />
    </form>
  );
};

export default Addcategory;
