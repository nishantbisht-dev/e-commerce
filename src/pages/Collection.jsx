// import React, { useMemo, useState } from "react";
// import { menProducts, shoesProducts, womenProducts } from "../data/products";

// const Collection = () => {
//   const [category, setCategory] = useState("all");
//   const [maxPrice, setMaxPrice] = useState(1000);
//   const [sortBy, setSortBy] = useState("");

//   const parsePrice = (price) => Number(String(price).replace(/[^\d.]/g, ""));

//   const allProducts = useMemo(() => {
//     return [
//       ...menProducts.map((item) => ({ ...item, category: "men" })),
//       ...womenProducts.map((item) => ({ ...item, category: "women" })),
//       ...shoesProducts.map((item) => ({ ...item, category: "shoes" })),
//     ];
//   }, []);

//   const filteredProducts = useMemo(() => {
//     let result = [...allProducts];

//     if (category !== "all") {
//       result = result.filter((item) => item.category === category);
//     }

//     result = result.filter((item) => parsePrice(item.price) <= maxPrice);

//     if (sortBy === "low-high") {
//       result = [...result].sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
//     } else if (sortBy === "high-low") {
//       result = [...result].sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
//     }

//     return result;
//   }, [allProducts, category, maxPrice, sortBy]);

//   return (
//     <div>
//       {/* hero section */}
//       <section className="grid grid-cols-2 mx-20 mt-10 border p-4">
//         {/* left portion */}
//         <div className="flex flex-col justify-center px-20">
//           <p className="uppercase text-gray-500 mb-4">Our Bestsellers</p>
//           <h2 className="text-4xl font-light mb-4">Latest Arrivals</h2>

//           <button className="border w-40 py-2 hover:bg-black hover:text-white duration-300">
//             Shop Now
//           </button>
//         </div>

//         {/* right section */}
//         <img
//           src="https://i.pinimg.com/1200x/15/4f/a5/154fa541587cdab59bbe15a3184b7372.jpg"
//           alt="shopping"
//           className="w-full h-full object-cover"
//         />
//       </section>

//       {/* Collection */}
//       <section className="text-center mt-10">
//         <h2 id="collection" className="text-4xl font-light">
//           Latest <span className="font-bold text-gray-500">Collection</span>
//         </h2>

//         <p className="mt-4 text-gray-500 mx-2">
//           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
//           esse, iusto id quod mollitia repudiandae fuga dolorum nobis! Velit,
//           adipisci.
//         </p>

//         {/* filtering + sorting */}
//         <div className="mt-10 flex flex-col md:flex-row gap-6 items-center justify-between">
//           <div className="flex gap-3 flex-wrap">
//             <button
//               onClick={() => setCategory("all")}
//               className={`px-5 py-2 border ${
//                 category === "all" ? "bg-black text-white" : ""
//               }`}
//             >
//               All
//             </button>
//             <button
//               onClick={() => setCategory("men")}
//               className={`px-5 py-2 border ${
//                 category === "men" ? "bg-black text-white" : ""
//               }`}
//             >
//               Men
//             </button>
//             <button
//               onClick={() => setCategory("women")}
//               className={`px-5 py-2 border ${
//                 category === "women" ? "bg-black text-white" : ""
//               }`}
//             >
//               Women
//             </button>
//             <button
//               onClick={() => setCategory("shoes")}
//               className={`px-5 py-2 border ${
//                 category === "shoes" ? "bg-black text-white" : ""
//               }`}
//             >
//               Shoes
//             </button>
//           </div>

//           <div className="flex items-center gap-4">
//             <label className="text-gray-700 font-medium">Sort:</label>
//             <select
//               value={sortBy}
//               onChange={(e) => setSortBy(e.target.value)}
//               className="border px-4 py-2 outline-none"
//             >
//               <option value="">Default</option>
//               <option value="low-high">Price: Low to High</option>
//               <option value="high-low">Price: High to Low</option>
//             </select>
//           </div>
//         </div>

//         <div className="mt-8 max-w-md mx-auto">
//           <label className="block mb-2 font-medium text-gray-700">
//             Max Price: ₹{maxPrice}
//           </label>
//           <input
//             type="range"
//             min="50"
//             max="1000"
//             step="10"
//             value={maxPrice}
//             onChange={(e) => setMaxPrice(Number(e.target.value))}
//             className="w-full"
//           />
//         </div>

//         {/* filtered products only */}
//         <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-4">
//           {filteredProducts.length > 0 ? (
//             filteredProducts.map((item) => (
//               <div key={`${item.category}-${item.id}`} className="group">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-full h-[380px] object-cover"
//                 />
//                 <h3 className="mt-4 text-xl font-medium">{item.name}</h3>
//                 <p className="text-gray-600">₹{parsePrice(item.price)}</p>
//               </div>
//             ))
//           ) : (
//             <div className="col-span-full py-10 text-gray-500">
//               No products found for this filter.
//             </div>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Collection;


import React, { useEffect, useState } from "react";
import { menProducts, shoesProducts, womenProducts } from "../data/products";

const Collection = () => {
  const [category, setCategory] = useState("all");
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sortBy, setSortBy] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const parsePrice = (price) => Number(String(price).replace(/[^\d.]/g, ""));
//   This line removes everything except numbers and decimal points from a price, so things like $, ,, or € are ignored.
// It uses regex (/[^\d.]/g) to find and remove all non-numeric characters, leaving just the number. 
// For example: "$1,250.99" becomes 1250.99.

  const allProducts = [
    ...menProducts.map((item) => ({ ...item, category: "men" })),
    ...womenProducts.map((item) => ({ ...item, category: "women" })),
    ...shoesProducts.map((item) => ({ ...item, category: "shoes" })),
  ];

  useEffect(() => {
    let result = [...allProducts];

    if (category !== "all") {
      result = result.filter((item) => item.category === category);
    }
    // agar category mein all nahi hai toh ye code filter karega item ko or show karega item jo ki selected category mein hai
    // ex - agar category = "men" toh yeh sirf wohi items dikahega jo men products mein hogi

    result = result.filter((item) => parsePrice(item.price) <= maxPrice);
    // ye line sirf wohi items rakhegi jiski price less than or equal to maximum price ke brabar hogi

    if (sortBy === "low-high") {
      result = [...result].sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    //   If "low-high" is selected, it sorts items from cheapest to most expensive.
    } else if (sortBy === "high-low") {
      result = [...result].sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    // if "high-low" is selected, it sorts from most expensive to cheapest.
    }

    setFilteredProducts(result);
  }, [category, maxPrice, sortBy]);

  return (
    <div>
      <div className="mt-10 flex flex-col md:flex-row gap-6 items-center justify-between">
        <div className="flex gap-3 flex-wrap">
          <button
            onClick={() => setCategory("all")}
            className={`px-5 py-2 border ${category === "all" ? "bg-black text-white" : ""}`}
          >
            All
          </button>
          <button
            onClick={() => setCategory("men")}
            className={`px-5 py-2 border ${category === "men" ? "bg-black text-white" : ""}`}
          >
            Men
          </button>
          <button
            onClick={() => setCategory("women")}
            className={`px-5 py-2 border ${category === "women" ? "bg-black text-white" : ""}`}
          >
            Women
          </button>
          <button
            onClick={() => setCategory("shoes")}
            className={`px-5 py-2 border ${category === "shoes" ? "bg-black text-white" : ""}`}
          >
            Shoes
          </button>
        </div>

        <div className="flex items-center gap-4">
          <label className="text-gray-700 font-medium">Sort:</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border px-4 py-2 outline-none"
          >
            <option value="">Default</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="mt-8 max-w-md mx-auto">
        <label className="block mb-2 font-medium text-gray-700">
          Max Price: ₹{maxPrice}
        </label>
        <input
          type="range"
          min="50"
          max="1000"
          step="10"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full"
        />
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-4">
        {filteredProducts.map((item) => (
          <div key={`${item.category}-${item.id}`} className="group">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[380px] object-cover"
            />
            <h3 className="mt-4 text-xl font-medium">{item.name}</h3>
            <p className="text-gray-600">₹{parsePrice(item.price)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;



// ----------------------------------------------------------
// import React, { useState } from 'react'

// import { menProducts, shoesProducts, womenProducts } from "../data/products";
// import { useMemo } from 'react';

// const Collection = () => {
//     const [category, setCategory] = useState("all");
//     const [maxPrice, setMaxPrice] = useState(300);
//     const [sortBy, setSortBy] = useState("");

//     const filteredProducts = useMemo(() => {
//         let result = [...menProducts, ...womenProducts, ...shoesProducts];

//         if (category !== "all") {
//             result = result.filter((item) => item.category === category);
//         }
//         result = result.filter(
//             (item) => Number(item.price.toString().replace("$", "")) <= maxPrice
//         );

//         // if (sortBy === "low-high") {
//         //     result.sort((a, b) => a.price - b.price);
//         // } else if (sortBy === "high-low") {
//         //     result.sort((a, b) => b.price - a.price);
//         // }

//         //         if (sortBy === "low-high") {
//         //     result = [...result].sort((a, b) => a.price - b.price);
//         //   } else if (sortBy === "high-low") {
//         //     result = [...result].sort((a, b) => b.price - a.price);
//         //   }


//         if (sortBy === "low-high") {
//             result = [...result].sort(
//                 (a, b) =>
//                     Number(a.price.toString().replace("$", "")) -
//                     Number(b.price.toString().replace("$", ""))
//             );
//         } else if (sortBy === "high-low") {
//             result = [...result].sort(
//                 (a, b) =>
//                     Number(b.price.toString().replace("$", "")) -
//                     Number(a.price.toString().replace("$", ""))
//             );
//         }


//         return result;
//     }, [category, maxPrice, sortBy]);


//     return (
//         <div>
//             {/* hero section */}
//             <section className="grid grid-cols-2 mx-20 mt-10  border p-4">

//                 {/* left portion  */}
//                 <div className="flex flex-col justify-center px-20">
//                     <p className="uppercase text-gray-500 mb-4">
//                         Our Bestsellers
//                     </p>
//                     <h2 className="text-4xl font-light mb-4">Latest Arrivals</h2>

//                     <button className="border w-40 py-2 hover:bg-black hover:text-white duration-300">Shop Now</button>
//                 </div>

//                 {/* right section  */}
//                 <img src="https://i.pinimg.com/1200x/15/4f/a5/154fa541587cdab59bbe15a3184b7372.jpg" alt="shopping" className="w-full h-full object-cover" />
//             </section>

//             {/* Collection  */}
//             <section className="text-center mt-10">
//                 {/* <a href="/collection"></a> */}
//                 <h2 id="collection" className="text-4xl font-light">
//                     Latest <span className="font-bold text-gray-500">Collection</span>
//                 </h2>

//                 <p className="mt-4 text-gray-500 mx-2">
//                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas esse, iusto id quod mollitia repudiandae fuga dolorum nobis! Velit, adipisci.
//                 </p>



//                 {/* sorting */}
//                 <div className="mt-10 flex flex-col md:flex-row gap-6 items-center justify-between">
//                     <div className="flex gap-3 flex-wrap">
//                         <button
//                             onClick={() => setCategory("all")}
//                             className={`px-5 py-2 border ${category === "all" ? "bg-black text-white" : ""}`}
//                         >
//                             All
//                         </button>
//                         <button
//                             onClick={() => setCategory("men")}
//                             className={`px-5 py-2 border ${category === "men" ? "bg-black text-white" : ""}`}
//                         >
//                             Men
//                         </button>
//                         <button
//                             onClick={() => setCategory("women")}
//                             className={`px-5 py-2 border ${category === "women" ? "bg-black text-white" : ""}`}
//                         >
//                             Women
//                         </button>
//                     </div>

//                     <div className="flex items-center gap-4">
//                         <label className="text-gray-700 font-medium">Sort:</label>
//                         <select
//                             value={sortBy}
//                             onChange={(e) => setSortBy(e.target.value)}
//                             className="border px-4 py-2 outline-none"
//                         >
//                             <option value="">Default</option>
//                             <option value="low-high">Price: Low to High</option>
//                             <option value="high-low">Price: High to Low</option>
//                         </select>
//                     </div>
//                 </div>

//                 <div className="mt-8 max-w-md">
//                     <label className="block mb-2 font-medium text-gray-700">
//                         Max Price: ₹{maxPrice}
//                     </label>
//                     <input
//                         type="range"
//                         min="50"
//                         max="300"
//                         step="10"
//                         value={maxPrice}
//                         onChange={(e) => setMaxPrice(Number(e.target.value))}
//                         className="w-full"
//                     />
//                 </div>


//                 <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//                     {filteredProducts.map((item) => (
//                         <div key={item.id} className="group">
//                             <img
//                                 src={item.image}
//                                 alt={item.name}
//                                 className="w-full h-[380px] object-cover"
//                             />
//                             <h3 className="mt-4 text-xl font-medium">{item.name}</h3>
//                             <p className="text-gray-600">₹{item.price}</p>
//                         </div>
//                     ))}
//                 </div>



//                 {/* Clothing section */}
//                 {/* men's section */}
//                 <div className="m-4">
//                     <h3 className="text-2xl font-bold">Men's Section</h3>
//                     <section className="border p-4 flex gap-2 overflow-hidden">
//                         {menProducts.map((item) => (
//                             <div key={item.id}>
//                                 <img
//                                     src={item.image}
//                                     alt={item.name}
//                                     className='w-full h-[420px] object-cover group-hover:scale-105 duration-500'
//                                 />
//                                 <div className="flex justify-between">

//                                     <p>{item.name}</p>
//                                     <p>{item.price}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </section>
//                 </div>

//                 {/* women's section */}
//                 <div className="m-4">
//                     <h1 className="text-2xl font-bold">Women's Section</h1>
//                     <section className="border p-4 flex gap-2 overflow-hidden">

//                         {womenProducts.map((item) => (
//                             <div key={item.id}>
//                                 <img
//                                     src={item.image}
//                                     alt={item.name}
//                                     className='w-full h-[420px] object-cover group-hover:scale-105 duration-500'
//                                 />
//                                 <div className="flex justify-between">

//                                     <p>{item.name}</p>
//                                     <p>{item.price}</p>
//                                 </div>
//                             </div>
//                         ))}

//                     </section>
//                 </div>

//                 {/* shoes section */}
//                 <div className="m-4">
//                     <h1 className="text-2xl font-bold">Shoes's Section</h1>
//                     <section className="border p-4 flex gap-2 overflow-hidden">

//                         {shoesProducts.map((item) => (
//                             <div key={item.id}>
//                                 <img
//                                     src={item.image}
//                                     alt={item.name}
//                                     className='overflow-hidden'
//                                 />
//                                 <div className="flex justify-between">

//                                     <p>{item.name}</p>
//                                     <p>{item.price}</p>
//                                 </div>
//                             </div>
//                         ))}

//                     </section>
//                 </div>
//             </section>
//         </div>
//     )
// }

// export default Collection