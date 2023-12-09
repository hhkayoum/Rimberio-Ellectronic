import { Outlet } from "react-router-dom";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";

const Root = () => {
  return (
    <div>
      <div className=" max-w-screen-2xl mx-auto">
        <div className="fixed top-0 left-0 right-0 max-w-screen-2xl mx-auto">
          <Navbar></Navbar>
        </div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
