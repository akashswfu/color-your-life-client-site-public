import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateData = () => {
  const item = useLoaderData();
  const {
    name,
    subcategory,
    description,
    price,
    rating,
    customization,
    processing,
    image,
    email,
    displayName,
    stock,
    _id,
  } = item;
  console.log(item);
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const subcategory = form.subcategory.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processing = form.processing.value;
    const image = form.image.value;
    const stock = form?.stock?.value;

    const updatedItem = {
      name,
      subcategory,
      description,
      price,
      rating,
      customization,
      processing,
      image,
      email,
      displayName,
      stock,
    };
    fetch(`https://color-your-life-server-site.vercel.app/item/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated Successfully",
            icon: "success",
          });
        }
      });
  };
  return (
    <div className="md:p-24 p-10 bg-gray-100">
      <h2 className="text-center text-2xl md:text-4xl text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text  uppercase font-bold md:pb-16 my-10 md:my-0">
        Update Your item
      </h2>
      <form onSubmit={handleAddCoffee}>
        {/* name and subcategory row  */}
        <div className="md:flex gap-10 justify-center md:mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Item Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Item Name"
                name="name"
                className="input input-bordered w-full"
                required
                defaultValue={name}
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Subcategory Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="subcategory"
                placeholder="Subcategory Name"
                className="input input-bordered  w-full"
                required
                defaultValue={subcategory}
              />
            </label>
          </div>
        </div>

        {/* shortDescription and price row  */}

        <div className="md:flex gap-10 justify-center md:mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Short Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Short Description"
                name="description"
                className="input input-bordered w-full"
                required
                defaultValue={description}
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="price"
                placeholder="Price"
                className="input input-bordered  w-full"
                required
                defaultValue={price}
              />
            </label>
          </div>
        </div>

        {/* rating and customization row  */}

        <div className="md:flex gap-10 justify-center md:mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Rating"
                name="rating"
                className="input input-bordered w-full"
                required
                defaultValue={rating}
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Customization</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="customization"
                placeholder="Customization"
                className="input input-bordered  w-full"
                required
                defaultValue={customization}
              />
            </label>
          </div>
        </div>
        {/* processing  and stock row  */}

        <div className="md:flex gap-10 justify-center md:mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Processing Time (hr)</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Processing Time"
                name="processing"
                className="input input-bordered w-full"
                required
                defaultValue={processing}
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Stock Status </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="stock"
                placeholder="Stock Status"
                className="input input-bordered  w-full"
                required
                defaultValue={stock}
              />
            </label>
          </div>
        </div>
        <div>
          <div className="form-control md:w-full mb-5">
            <label className="label">
              <span className="label-text">Image </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="image"
                placeholder="Image URL"
                className="input input-bordered  w-full"
                required
                defaultValue={image}
              />
            </label>
          </div>
        </div>

        {/* user email and name  */}

        <input
          className="btn w-full text-lg uppercase  text-white text-transparent bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-700"
          type="submit"
          value="Update Item"
        />
      </form>
    </div>
  );
};

export default UpdateData;
