import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import profile from "../../../public/images/user.png";
import homeIcons from "/images/home.png";
import Swal from "sweetalert2";

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          text: "LogOut Success! ",
          toast: true,
          position: "top-right",
          showConfirmButton: false,
          timer: 3000,
          customClass: {
            popup: "text-green-500 font-semibold text-center",
          },
        });
        setTimeout(() => {}, 1000);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const links = (
    <div className="flex flex-col md:flex-row lg:flex-row md:gap-4 uppercase font-semibold ">
      <li className="">
        <NavLink to="/">Home</NavLink>
      </li>
      {/* {user && (
        <li>
          <NavLink to="/updateProfile">All Art & craft Items</NavLink>
        </li>
      )} */}

      <li>
        <NavLink to="/allArtCraft">All Art & craft Items</NavLink>
      </li>
      <li>
        <NavLink to="/addCraft">Add Craft Item</NavLink>
      </li>
      <li>
        <NavLink to="/myCraftList">My Art&Craft List</NavLink>
      </li>
    </div>
  );

  const isValidPhotoUrl = (url) => {
    const imageRegex = /\.(jpg|jpeg|png|gif|bmp)$/i;
    const googleRegex = /https?:\/\/lh[0-9]+\.googleusercontent\.com\/.*/i;
    const githubRegex = /https?:\/\/avatars\d*\.githubusercontent\.com\/.*/i;

    return (
      imageRegex.test(url) || googleRegex.test(url) || githubRegex.test(url)
    );
  };

  return (
    <div className="navbar bg-[#f3efe6] py-4 px-4 md:rounded-b-3xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost flex md:hidden lg:hidden "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-6 z-[1]  p-2 shadow bg-base-100  relative rounded-box w-40"
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <img
            className="w-10 h-10 hidden md:flex lg:flex"
            src={homeIcons}
            alt=""
          />
          <span className="hidden text-2xl font-semibold md:flex lg:flex text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">
            Home Haven
          </span>
        </div>
      </div>
      <div className="navbar-center hidden md:flex lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center gap-4">
            <div>
              {isValidPhotoUrl(user?.photoURL) ? (
                <div
                  className="w-12 border-0 p-0  h-12 rounded-full relative"
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                >
                  <img
                    className="w-full h-full rounded-full bg-gray-50 border"
                    src={user?.photoURL}
                  />
                  {showTooltip && (
                    <div className="absolute top-1/2 me-2 right-full transform -translate-y-1/2  font-bold px-2">
                      {user?.displayName}
                    </div>
                  )}
                </div>
              ) : (
                <div
                  className="w-12 border-0 p-0  h-12 rounded-full relative"
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                >
                  <img
                    className="w-full h-full rounded-full bg-gray-50 border"
                    src={profile}
                  />
                  {showTooltip && (
                    <div className="absolute top-1/2 me-2 right-full transform -translate-y-1/2  font-bold px-2">
                      {user?.displayName}
                    </div>
                  )}
                </div>
              )}
            </div>
            <button
              onClick={handleLogout}
              className="btn btn-outline bg-green-600  hover:bg-green-700 px-6 font-semibold uppercase text-md  text-white border-0 text-md"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-4">
            <Link to="/login">
              <button className="btn btn-outline bg-green-600  hover:bg-green-700 px-8 font-semibold uppercase text-md  text-white border-0 text-md">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="btn btn-outline bg-green-600  hover:bg-green-700 px-8 font-semibold uppercase text-md  text-white border-0 text-md">
                Register
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
