import { AiOutlineDollar } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { MdDashboardCustomize, MdPhotoSizeSelectLarge } from "react-icons/md";
import { RiHomeSmileFill } from "react-icons/ri";
import { TbHomePlus } from "react-icons/tb";
import { useLoaderData, useParams } from "react-router-dom";
import { FaSackDollar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import { CgShutterstock } from "react-icons/cg";

const ViewDetails = () => {
  const allItem = useLoaderData();
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
  } = allItem;

  return (
    <div>
      <div className="lg:flex  w-full gap-10  mt-10 mb-10  shadow-2xl p-5 rounded-2xl">
        <div className="lg:w-1/2 w-full shadow-2xl rounded-2xl  flex items-center justify-center">
          <img
            data-aos="fade-right"
            data-aos-duration="1000"
            className="lg:w-full lg:h-full  rounded-2xl"
            src={image}
            alt=""
          />
        </div>
        <div className="space-y-5 mt-5 lg:w-1/2 text-center md:text-left md:py-0 py-5">
          <h1
            data-aos="fade-left"
            data-aos-delay="500"
            className="text-3xl font-bold text-center lg:text-left mt-8 lg:mt-0"
          >
            {name}
          </h1>
          <p
            data-aos="fade-left"
            data-aos-delay="800"
            className="text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-xl text-center lg:text-left mt-8 lg:mt-0 font-semibold"
          >
            Sub Category : {subcategory}{" "}
          </p>
          <div className="border border-dashed "></div>
          <h1
            data-aos="fade-left"
            data-aos-delay="1500"
            className="  text-[#131313CC] text-justify"
          >
            {description}
          </h1>
          <div className="border border-dashed "></div>

          <div
            data-aos="fade-left"
            data-aos-delay="1500"
            className="flex flex-col md:justify-start   justify-center lg:justify-start  gap-8 mb-5"
          >
            <div className="flex gap-8">
              <div className="flex items-center gap-2 text-green-600 font-semibold">
                <FaSackDollar className="text-xl  font-bold" />
                <p className=""> {price}</p>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="flex items-center gap-2 font-semibold text-yellow-500">
                <FaStar className=" text-xl font-bold" />
                <p> {rating}</p>
              </div>
              <div className="flex items-center gap-2 font-semibold text-blue-700">
                <CgShutterstock className=" text-xl font-bold" />
                <p> {stock}</p>
              </div>

              {/* <div className="flex items-center gap-2 font-semibold text-blue-700">
                {status === "sale" ? (
                  <TbHomePlus className=" text-xl font-bold" />
                ) : (
                  <RiHomeSmileFill className=" text-xl font-bold" />
                )}

                <p> {status}</p>
              </div> */}
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="1500"
            className="flex flex-col md:justify-start  gap-8 justify-center lg:justify-start"
          >
            <div className="flex items-center gap-2 font-semibold text-pink-700">
              <MdDashboardCustomize className=" text-xl font-bold" />
              <p>Customization : {customization}</p>
            </div>
            <div className="flex items-center gap-2 font-semibold text-red-700">
              <IoTime className=" text-xl font-bold" />
              <p>Processing Time : {processing} (hr)</p>
            </div>
          </div>

          <div className="border border-dashed "></div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
