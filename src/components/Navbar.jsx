import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaSearch, FaShoppingBag, FaUser } from "react-icons/fa";

const Navbar = ({ onSearch }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchText);
    setShowSearch(false);
    navigate("/search");
  };

  return (
    <nav className="flex justify-between items-center px-10 py-4 bg-white shadow-sm">
      <header>
        <Link to="/" className="flex items-center gap-3">
          <img
            src="https://i.pinimg.com/1200x/09/4d/a7/094da7c53bfcc19b048a1ae725c09d71.jpg"
            alt="brand logo"
            className="w-32 h-28 object-cover rounded-full"
          />
        </Link>
      </header>

      <ul className="flex gap-5 font-medium">
        <NavLink to="/" className="hover:underline mx-2 cursor-pointer">
          Home
        </NavLink>

        <NavLink to="/collection" className="hover:underline mx-2 cursor-pointer">
          Collection
        </NavLink>

        <NavLink to="/about" className="hover:underline mx-2 cursor-pointer">
          About
        </NavLink>

        <NavLink to="/contact" className="hover:underline mx-2 cursor-pointer">
          Contact
        </NavLink>
      </ul>

      <div className="flex gap-4 text-lg relative">
        <button onClick={() => setShowSearch(!showSearch)}>
          <FaSearch />
        </button>

        {showSearch && (
          <form
            onSubmit={handleSearch}
            className="absolute right-0 top-full mt-2 flex items-center gap-2 bg-white p-2 shadow-md rounded"
          >
            <input
              type="text"
              placeholder="Search products..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="border px-3 py-2 rounded outline-none"
            />

            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded"
            >
              Search
            </button>
          </form>
        )}

        <FaUser />
        <FaShoppingBag />
      </div>
    </nav>
  );
};

export default Navbar;