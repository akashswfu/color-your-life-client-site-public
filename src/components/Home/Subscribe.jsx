import React from "react";
import Swal from "sweetalert2";

const Subscribe = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    Swal.fire({
      text: "Thanks for Subscribe , We notify you our latest updates !",
      toast: true,
      position: "top-right",
      showConfirmButton: false,
      timer: 3000,
      customClass: {
        popup: "text-green-500 font-semibold text-center",
      },
    });
  };
  return (
    <div className="flex items-center">
      <form onSubmit={handleSubscribe}>
        <input
          type="email"
          placeholder="Enter email here"
          className="input outline-none  rounded-e-none w-full max-w-xs"
          required
        />
        <button className="btn uppercase bg-red-500 border-0 rounded-s-none hover:bg-red-700 text-white outline-0 font-semibold">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Subscribe;
