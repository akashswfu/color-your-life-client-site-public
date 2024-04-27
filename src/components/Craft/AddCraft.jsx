import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";

const AddCraft = () => {
  const { user } = useContext(AuthContext);

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
    const email = user?.email;
    const displayName = user?.displayName;
    const stock = form?.stock?.value;

    const newItem = {
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
    console.log(newItem);
    fetch("http://localhost:5000/item", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newItem),
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
    <div className="p-24 bg-gray-100">
      <h2 className="text-center text-4xl font-bold pb-16">Add a New Item</h2>
      <form onSubmit={handleAddCoffee}>
        {/* name and subcategory row  */}
        <div className="md:flex gap-10 justify-center mb-6">
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
              />
            </label>
          </div>
        </div>

        {/* shortDescription and price row  */}

        <div className="md:flex gap-10 justify-center mb-6">
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
              />
            </label>
          </div>
        </div>

        {/* rating and customization row  */}

        <div className="md:flex gap-10 justify-center mb-6">
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
              />
            </label>
          </div>
        </div>
        {/* processing  and stock row  */}

        <div className="md:flex gap-10 justify-center mb-6">
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
              />
            </label>
          </div>
        </div>
        <div className="md:flex gap-10 justify-center mb-6">
          <div className="form-control md:w-full mb-5">
            <label className="label">
              <span className="label-text">UserName</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="displayName"
                placeholder="User Name"
                className="input input-bordered  w-full"
                required
              />
            </label>
          </div>
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
              />
            </label>
          </div>
        </div>

        {/* user email and name  */}

        <input
          className="btn btn-block bg-black text-white font-semibold hover:text-black"
          type="submit"
          value="Add Item"
        />
      </form>
    </div>
  );
};

export default AddCraft;
