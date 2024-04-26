import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import { MdPhotoSizeSelectLarge } from "react-icons/md";

const ShowAllArtAndCraft = ({ item }) => {
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
  return (
    // data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500"
    <div>
      <div className="max-w-sm mt-7 mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
        <div className="relative">
          <img className="h-60 w-full rounded-t-lg" src={image} alt="" />

          {/* {status === "rent" ? (
                <p className="absolute top-3 right-3 bg-red-500 uppercase rounded-md px-2 py-1 text-white font-semibold">
                  For {status}
                </p>
              ) : (
                <p className="absolute top-3 right-3 bg-yellow-500 uppercase rounded-md px-2 py-1 text-white font-semibold">
                  for {status}
                </p>
              )} */}
        </div>
        <div className="p-5">
          <div>
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
            <h1 className="text-green-500 font-semibold py-2">{subcategory}</h1>
          </div>

          <div className="flex  items-center justify-between mb-5">
            <div className="flex items-center gap-2 text-blue-700 font-semibold">
              <CiLocationOn className="text-xl  font-bold" />
              <p className=""> {price}</p>
            </div>
            <div className="flex items-center gap-2 font-semibold text-blue-700">
              <MdPhotoSizeSelectLarge className=" text-xl font-bold" />
              <p className=""> {rating}</p>
            </div>
          </div>

          <Link
            to={`/item/${_id}`}
            className="inline-flex items-center w-full justify-center  font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 py-3"
          >
            <button className="font-semibold text-lg">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowAllArtAndCraft;
