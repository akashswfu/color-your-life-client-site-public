import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import { MdPhotoSizeSelectLarge } from "react-icons/md";
import { CgShutterstock } from "react-icons/cg";
import { FaStar } from "react-icons/fa";

const Category = ({ d }) => {
  const { customization, description, image, rating, stock, subcategory } = d;
  return (
    <Link to={`/allCategory/${subcategory}`}>
      <div className="">
        <div className=" mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex">
          <div className="w-full">
            <img className="h-60 w-96 rounded-lg" src={image} alt="" />
          </div>
          <div className="p-5">
            <div>
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {subcategory}
              </h5>
              <h1 className=" font-semibold text-justify py-2">
                {description.slice(0, 110)}...
              </h1>
            </div>

            <div className="flex  items-center gap-10 mt-5 ">
              <div className="flex items-center text-2xl gap-2 text-green-700 font-semibold">
                <CgShutterstock className="  font-bold" />
                <p className=""> {stock}</p>
              </div>
              <div className="flex items-center gap-2 text-2xl font-semibold text-yellow-500">
                <FaStar className="  font-bold" />
                <p className=""> {rating}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Category;
