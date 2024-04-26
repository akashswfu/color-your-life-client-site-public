import { AiOutlineDollar } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { MdPhotoSizeSelectLarge } from "react-icons/md";
import { RiHomeSmileFill } from "react-icons/ri";
import { TbHomePlus } from "react-icons/tb";
import { useLoaderData, useParams } from "react-router-dom";

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
        <div className="space-y-5 lg:w-1/2 text-center md:text-left md:py-0 py-5">
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
            className="text-green-500 text-xl text-center lg:text-left mt-8 lg:mt-0 font-semibold"
          >
            Segment Name : {subcategory}{" "}
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
            className="flex items-center flex-col md:flex-row justify-center lg:justify-start  gap-8 mb-5"
          >
            <div className="flex gap-8">
              <div className="flex items-center gap-2 text-blue-700 font-semibold">
                <CiLocationOn className="text-xl  font-bold" />
                <p className=""> {price}</p>
              </div>
              <div className="flex items-center gap-2 font-semibold text-blue-700">
                <MdPhotoSizeSelectLarge className=" text-xl font-bold" />
                <p> {processing}</p>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="flex items-center gap-2 font-semibold text-blue-700">
                <AiOutlineDollar className=" text-xl font-bold" />
                <p> {rating}</p>
              </div>
              <div className="flex items-center gap-2 font-semibold text-blue-700">
                <AiOutlineDollar className=" text-xl font-bold" />
                <p> Stocks : YES</p>
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
          <div>
            <h1>And it can customaize</h1>
          </div>

          <div className="border border-dashed "></div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
