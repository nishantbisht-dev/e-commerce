import React from 'react'
import { Link, NavLink } from "react-router-dom";

// // react icons 
import { FaSearch, FaShoppingBag, FaUser } from "react-icons/fa";


const Navbar = () => {
  return (

    <nav className="flex justify-between items-center px-10 py-4 bg-white shadow-sm">
      <header>
        <Link to="/" className="flex items-center gap-3">
          <img
            src='https://i.pinimg.com/1200x/09/4d/a7/094da7c53bfcc19b048a1ae725c09d71.jpg'
            alt="brand logo"
            className="w-32 h-28 object-cover rounded-full"
          />
        </Link>
      </header>

      <ul className="flex gap-5 font-medium">

        <NavLink to="/" className="hover:underline mx-2 cursor-pointer">Home</NavLink>

        <NavLink to="/collection" className="hover:underline mx-2 cursor-pointer">Collection</NavLink>

        <NavLink to="/about" className="hover:underline mx-2 cursor-pointer">About</NavLink>

        <NavLink to="/contact" className="hover:underline mx-2 cursor-pointer">Contact</NavLink>
      </ul>



      <div className="flex gap-4 text-l">
        <FaSearch />
        <FaUser />
        <FaShoppingBag />
      </div>
    </nav>
  )
}

export default Navbar


// import React from 'react';
// import { Link, NavLink } from "react-router-dom";
// import { FaSearch, FaShoppingBag, FaUser } from "react-icons/fa";

// const Navbar = () => {
//   return (
//     <nav className="flex justify-between items-center px-10 py-4 bg-white shadow-sm">
//       <header className="text-2xl font-bold text-blue-500">
//         <Link to="/" className="flex items-center gap-3">
//           <img
//             src='https://i.pinimg.com/1200x/09/4d/a7/094da7c53bfcc19b048a1ae725c09d71.jpg'
//             alt="brand logo"
//             className="w-12 h-12 object-cover rounded-full"
//           />
//         </Link>
//       </header>

//       <ul className="flex gap-6 font-medium text-gray-700">
//         <li>
//           <NavLink
//             to="/"
//             end
//             className={({ isActive }) =>
//               isActive ? "text-blue-600 underline" : "hover:text-blue-500"
//             }
//           >
//             Home
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/collection"
//             className={({ isActive }) =>
//               isActive ? "text-blue-600 underline" : "hover:text-blue-500"
//             }
//           >
//             Collection
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/about"
//             className={({ isActive }) =>
//               isActive ? "text-blue-600 underline" : "hover:text-blue-500"
//             }
//           >
//             About
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/contact"
//             className={({ isActive }) =>
//               isActive ? "text-blue-600 underline" : "hover:text-blue-500"
//             }
//           >
//             Contact
//           </NavLink>
//         </li>
//       </ul>

//       <div className="flex gap-5 text-gray-600">
//         <FaSearch className="cursor-pointer hover:text-blue-500" />
//         <FaUser className="cursor-pointer hover:text-blue-500" />
//         <FaShoppingBag className="cursor-pointer hover:text-blue-500" />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;   