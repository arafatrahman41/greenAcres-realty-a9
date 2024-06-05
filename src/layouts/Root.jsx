import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Root = () => {
  return (
    <div className="font-roboto">
      <div className="max-w-7xl mx-auto px-8">
        <Navbar />
        <div className="min-h-[calc(100vh-336px)]">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Root;
