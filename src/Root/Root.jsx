import { Outlet } from "react-router-dom";
// import Navbar from "../components/Navbar/Navbar";
// import Footer from "../components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/NavBarFooter/Navbar";
import Footer from "../components/NavBarFooter/Footer";
AOS.init();

const Root = () => {
  return (
    <div className="min-h-[calc(100vh)]">
      <div className="max-w-7xl flex flex-col  mx-auto">
        <Navbar></Navbar>
      </div>
      <div className="max-w-7xl flex flex-col  mx-auto">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Root;
