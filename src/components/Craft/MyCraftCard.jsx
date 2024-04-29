import { FaRegEye } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { TiDeleteOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FaSackDollar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import { CgShutterstock } from "react-icons/cg";
import { MdDashboardCustomize } from "react-icons/md";

const MyCraftCard = ({ item, myItem, setMyItem }) => {
  const { name, price, rating, customization, image, stock, _id } = item;
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
        fetch(`https://color-your-life-server-site.vercel.app/item/${_id}`, {
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
    <div className="flex p-3 md:border-0 md:p-0 flex-col md:flex-row rounded-2xl md:w-[800px] mx-auto gap-10 bg-base-100 shadow-xl mt-8">
      <div>
        <img
          className="md:w-80 rounded-2xl mx-auto md:mx-0 md:rounded-l-2xl h-full"
          src={image}
          alt=""
        />
      </div>
      <div className="flex py-4 mt-5  justify-between w-full">
        <div className="flex space-y-5 mt-4 md:mt-0 flex-col md:mx-0 mx-auto">
          <h1 className="md:text-2xl text-xl md:text-left text-center  font-semibold text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">
            {name}
          </h1>
          <div className="flex gap-8 justify-center lg:justify-start">
            <div className="flex items-center gap-2 font-semibold text-blue-700">
              <FaSackDollar className=" text-xl font-bold" />
              <p> {price}</p>
            </div>
            <div className="flex items-center gap-2 font-semibold text-yellow-500">
              <FaStar className=" text-xl font-bold" />
              <p>{rating} (hr)</p>
            </div>
          </div>
          <div className="flex   gap-8 justify-center lg:justify-start">
            <div className="flex items-center gap-2 font-semibold text-green-700">
              <MdDashboardCustomize className=" text-xl font-bold" />
              <p>{customization}</p>
            </div>
            <div className="flex items-center gap-2 font-semibold text-purple-700">
              <IoTime className=" text-xl font-bold" />
              <p>{stock} (hr)</p>
            </div>
          </div>
        </div>
        <div className="card-actions">
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
