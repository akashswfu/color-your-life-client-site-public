import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import { MdPhotoSizeSelectLarge } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

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
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr className="bg-base-200">
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
          </tr>
          {/* row 2 */}
          <tr>
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Purple</td>
          </tr>
          {/* row 3 */}
          <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Red</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ShowAllArtAndCraft;
