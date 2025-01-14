import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [error, setError] = useState("");

  const { signIn, googleLogin, gitHubLogin, setLoading } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        toast.success("Login Successfully");
        setLoading(false);
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 1500);
      })
      .catch(() => {
        toast.error("Access Denied");
      });
  };
  const handleGithubLogin = () => {
    gitHubLogin()
      .then(() => {
        toast.success("Login Successfully");
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 1500);
      })
      .catch(() => {
        toast.error("Access Denied");
      });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    signIn(email, password)
      .then(() => {
        toast.success("Login Successfully");

        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 1500);
      })
      .catch(() => {
        toast.error("Email or Password does not match");
      });
  };

  return (
    <div data-aos="fade-right" data-aos-duration="1000">
      <div className="hero-content w-full flex-col mt-8">
        <div className="card shrink-0 w-full max-w-md  shadow-2xl bg-base-100 ">
          <div className="text-center ">
            <h1 className="text-4xl font-bold my-8 text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">
              Login now!
            </h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className=" px-10">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500 text-sm mt-2">
                  This field is required
                </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-red-500 text-sm mt-2">
                  This field is required
                </span>
              )}
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
            <div className="form-control mt-6">
              <button className="btn  uppercase   text-transparent bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-700 font-semibold text-white">
                Login
              </button>
            </div>
          </form>
          <p className="text-sm text-center">
            New to Here? Please
            <Link to="/register">
              <button className="btn btn-link">Registration first</button>
            </Link>
          </p>
          <div className="divider font-semibold px-10 ">or</div>
          <div className="text-center mt-2  pb-5 flex gap-2 justify-center">
            <button
              onClick={handleGoogleLogin}
              className="btn btn-outline hover:border-0 hover:outline-none bg-gradient-to-r  hover:from-purple-600 hover:to-pink-700 font-semibold text-purple-600"
            >
              <FcGoogle className="text-2xl me-2" />
              Google Login
            </button>
            <button
              onClick={handleGithubLogin}
              className="btn btn-outline hover:border-0 hover:outline-none bg-gradient-to-r  hover:from-purple-600 hover:to-pink-700 font-semibold text-pink-400 "
            >
              <SiGithub className="text-2xl  me-2 " />
              GitHub Login
            </button>
          </div>
        </div>
      </div>
      <div className="w-ful"></div>
      <ToastContainer />
    </div>
  );
};

export default Login;
