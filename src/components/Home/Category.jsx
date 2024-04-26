import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import { MdPhotoSizeSelectLarge } from "react-icons/md";

const Category = ({ d }) => {
  const { customization, description, image, rating, stock, subcategory } = d;
  return (
    <Link to={`/item/${subcategory}`}>
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
                {subcategory}
              </h5>
              <h1 className="text-green-500 font-semibold py-2">
                {description.slice(0, 100)}
              </h1>
            </div>

            <div className="flex  items-center justify-between mb-5">
              <div className="flex items-center gap-2 text-blue-700 font-semibold">
                <CiLocationOn className="text-xl  font-bold" />
                <p className=""> {rating}</p>
              </div>
              <div className="flex items-center gap-2 font-semibold text-blue-700">
                <MdPhotoSizeSelectLarge className=" text-xl font-bold" />
                <p className=""> {stock}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Category;
