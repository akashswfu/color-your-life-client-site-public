import { FaRegEye } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { TiDeleteOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyCraftCard = ({ item, myItem, setMyItem }) => {
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
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("Delete Confirmed");
        fetch(`http://localhost:5000/item/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Item has been deleted.",
                icon: "success",
              });
              const remaining = myItem.filter((cof) => cof._id !== _id);
              setMyItem(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img className="h-40 rounded-lg w-40" src={image} alt="Movie" />
      </figure>
      <div className="flex py-5 items-center justify-between w-full">
        <div className="card-body">
          <h2 className="card-title">Name: {name}</h2>
          <p>Supplier {price}</p>
          <p>Quantity {rating}</p>
        </div>
        <div className="card-body">
          <p>Supplier {customization}</p>
          <p>Quantity {stock}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="join join-vertical me-5 space-y-3">
            <Link to={`/item/${_id}`}>
              <button className="btn bg-green-500 border-0">
                <FaRegEye className="text-xl text-white" />
              </button>
            </Link>
            <Link to={`/updateItem/${_id}`}>
              <button className="btn bg-blue-500 border-0">
                <FiEdit className="text-xl text-white" />
              </button>
            </Link>

            <button
              onClick={() => handleDelete(_id)}
              className="btn bg-red-500 border-0"
            >
              <TiDeleteOutline className="text-2xl text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCraftCard;
