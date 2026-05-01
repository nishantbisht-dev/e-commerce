import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout({ onSearch }) {
  return (
    <>
      <Navbar onSearch={onSearch} />
      {/* That means the layout gives the navbar access to the search function from App.jsx. 
      So MainLayout.jsx is like a wrapper for all pages.
      */}
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;