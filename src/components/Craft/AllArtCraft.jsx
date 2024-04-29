import { Link, useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const AllArtCraft = () => {
  const allItems = useLoaderData();
  const { loading, setLoading } = useContext(AuthContext);

  if (allItems.length === 0) {
    setLoading(true);
  } else {
    setLoading(false);
  }
  if (loading) {
    return (
      <div className="text-center text-7xl h-min-[cal(100vh-130px)] text-blue-400 py-10">
        Loading....
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-400px)] mt-10 ">
      <div className="overflow-x-auto">
        <table className="table table-zebra border-2 ">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Sub Category</th>
              {/* <th>Rating</th> */}
              <th>Price</th>
              <th className="text-center">Customization</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody className="py-5">
            {allItems.map((item, idx) => (
              <tr key={item._id} className="bg-base-200 my-5 py-10">
                <th>{idx + 1}</th>
                <td>{item.name}</td>
                <td>{item.subcategory}</td>
                {/* <td>{item.rating}</td> */}
                <td>{item.price}</td>
                <td className="text-center">{item.customization}</td>
                <Link to={`/item/${item._id}`}>
                  <td className="text-blue-600 underline">View Details</td>
                </Link>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllArtCraft;
