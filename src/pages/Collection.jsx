// ----------------------------------------------------------


// import { useMemo, useState } from "react";
// import { Link } from "react-router-dom";
// import { menProducts, shoes, womenProducts } from "../data/products";

// const Collection = () => {
//   const [category, setCategory] = useState("all");
//   const [maxPrice, setMaxPrice] = useState(3000);
//   const [sortBy, setSortBy] = useState("");

//   const parsePrice = (price) =>
//     Number(String(price).replace(/[^\d.]/g, ""));

//   const allProducts = useMemo(
//     () => [
//       ...menProducts.map((item) => ({ ...item, category: "men" })),
//       ...womenProducts.map((item) => ({ ...item, category: "women" })),
//       ...shoes.map((item) => ({ ...item, category: "shoes" })),
//     ],
//     []
//   );

//   const filteredProducts = useMemo(() => {
//     let result = [...allProducts];

//     if (category !== "all") {
//       result = result.filter((item) => item.category === category);
//     }

//     result = result.filter((item) => parsePrice(item.price) <= maxPrice);

//     if (sortBy === "low-high") {
//       result = [...result].sort(
//         (a, b) => parsePrice(a.price) - parsePrice(b.price)
//       );
//     } else if (sortBy === "high-low") {
//       result = [...result].sort(
//         (a, b) => parsePrice(b.price) - parsePrice(a.price)
//       );
//     }

//     return result;
//   }, [allProducts, category, maxPrice, sortBy]);

//   return (
//     <div>
//       <div className="mt-10 flex flex-col md:flex-row gap-6 items-center justify-between">
//         <div className="flex gap-3 flex-wrap">
//           <button
//             onClick={() => setCategory("all")}
//             className={`px-5 py-2 border ${category === "all" ? "bg-black text-white" : ""
//               }`}
//           >
//             All
//           </button>

//           <button
//             onClick={() => setCategory("men")}
//             className={`px-5 py-2 border ${category === "men" ? "bg-black text-white" : ""
//               }`}
//           >
//             Men
//           </button>

//           <button
//             onClick={() => setCategory("women")}
//             className={`px-5 py-2 border ${category === "women" ? "bg-black text-white" : ""
//               }`}
//           >
//             Women
//           </button>

//           <button
//             onClick={() => setCategory("shoes")}
//             className={`px-5 py-2 border ${category === "shoes" ? "bg-black text-white" : ""
//               }`}
//           >
//             Shoes
//           </button>
//         </div>

//         <div className="flex items-center gap-4">
//           <label className="text-gray-700 font-medium">Sort:</label>
//           <select
//             value={sortBy}
//             onChange={(e) => setSortBy(e.target.value)}
//             className="border px-4 py-2 outline-none"
//           >
//             <option value="">Default</option>
//             <option value="low-high">Price: Low to High</option>
//             <option value="high-low">Price: High to Low</option>
//           </select>
//         </div>
//       </div>

//       <div className="mt-8 max-w-md mx-auto">
//         <label className="block mb-2 font-medium text-gray-700">
//           Max Price: ₹{maxPrice}
//         </label>
//         <input
//           type="range"
//           min="50"
//           max="3000"
//           step="10"
//           value={maxPrice}
//           onChange={(e) => setMaxPrice(Number(e.target.value))}
//           className="w-full"
//         />
//       </div>

//       <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-4">
//         {filteredProducts.map((item) => (
//           <Link
//             to={`/product/${item.category}-${item.id}`}
//             key={`${item.category}-${item.id}`}
//             className="group block"
//           >
//             <img
//               src={item.image}
//               alt={item.name}
//               className="w-full h-[380px] object-cover"
//             />
//             <h3 className="mt-4 text-xl font-medium">{item.name}</h3>
//             <p className="text-gray-600">₹{parsePrice(item.price)}</p>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Collection;

// ----------------------------------------------------------

// import { useMemo, useState } from "react";
// import { Link } from "react-router-dom";
// import { menProducts, shoes, womenProducts, accessories } from "../data/products";

// const Collection = () => {
//   const [category, setCategory] = useState("all");
//   const [maxPrice, setMaxPrice] = useState(3000);
//   const [sortBy, setSortBy] = useState("");

//   const parsePrice = (price) =>
//     Number(String(price).replace(/[^\d.]/g, ""));

//   const allProducts = useMemo(
//     () => [
//       ...menProducts.map((item) => ({ ...item, category: "men" })),
//       ...womenProducts.map((item) => ({ ...item, category: "women" })),
//       ...shoes.map((item) => ({ ...item, category: "shoes" })),
//       ...accessories.map((item) => ({ ...item, category: "accessories"})),
//     ],
//     []
//   );

//   const filteredProducts = useMemo(() => {
//     let result = [...allProducts];



//     if (category !== "all") {
//       result = result.filter((item) => item.category === category);
//     }

//     result = result.filter((item) => parsePrice(item.price) <= maxPrice);

//     if (sortBy === "low-high") {
//       result = [...result].sort(
//         (a, b) => parsePrice(a.price) - parsePrice(b.price)
//       );
//     } else if (sortBy === "high-low") {
//       result = [...result].sort(
//         (a, b) => parsePrice(b.price) - parsePrice(a.price)
//       );
//     }

//     return result;
//   }, [allProducts, category, maxPrice, sortBy]);

//   return (
//     <div className="min-h-screen bg-[#f8f8f8] text-gray-900">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         {/* Header */}
//         <div className="text-center max-w-3xl mx-auto">
//           <p className="uppercase tracking-[0.35em] text-xs text-gray-500">
//             Curated Collection
//           </p>
//           <h1 className="mt-4 text-4xl md:text-6xl font-light tracking-tight">
//             Discover Modern Essentials
//           </h1>
//           <p className="mt-5 text-gray-500 text-base md:text-lg leading-8">
//             Minimal, premium, and everyday wearable pieces designed to feel
//             refined in every season.
//           </p>
//         </div>

//         {/* Filters */}
//         <div className="mt-12 rounded-3xl border border-gray-200 bg-white/80 backdrop-blur-sm shadow-sm p-5 md:p-6">
//           <div className="flex flex-col lg:flex-row gap-6 lg:items-center lg:justify-between">
//             <div className="flex flex-wrap gap-3">
//               {["all", "men", "women", "shoes", "accessories"].map((item) => (
//                 <button
//                   key={item}
//                   onClick={() => setCategory(item)}
//                   className={`px-5 py-2.5 rounded-full border text-sm font-medium transition ${
//                     category === item
//                       ? "bg-black text-white border-black"
//                       : "bg-white text-gray-700 border-gray-200 hover:border-gray-400 hover:text-black"
//                   }`}
//                 >
//                   {item.charAt(0).toUpperCase() + item.slice(1)}
//                 </button>
//               ))}
//             </div>

//             <div className="flex flex-col sm:flex-row sm:items-center gap-4">
//               <div className="flex items-center gap-3">
//                 <label className="text-sm font-medium text-gray-700 whitespace-nowrap">
//                   Sort by
//                 </label>
//                 <select
//                   value={sortBy}
//                   onChange={(e) => setSortBy(e.target.value)}
//                   className="w-full sm:w-auto rounded-full border border-gray-200 bg-white px-4 py-2 text-sm outline-none focus:border-black"
//                 >
//                   <option value="">Default</option>
//                   <option value="low-high">Price: Low to High</option>
//                   <option value="high-low">Price: High to Low</option>
//                 </select>
//               </div>
//             </div>
//           </div>

//           <div className="mt-6 max-w-md">
//             <div className="flex items-center justify-between mb-2">
//               <label className="text-sm font-medium text-gray-700">
//                 Max Price
//               </label>
//               <span className="text-sm text-gray-500">₹{maxPrice}</span>
//             </div>

//             <input
//               type="range"
//               min="50"
//               max="3000"
//               step="10"
//               value={maxPrice}
//               onChange={(e) => setMaxPrice(Number(e.target.value))}
//               className="w-full accent-black"
//             />
//           </div>
//         </div>

//         {/* Products */}
//         <div className="mt-12 flex items-center justify-between mb-6">
//           <p className="text-sm text-gray-500">
//             Showing{" "}
//             <span className="text-gray-900 font-medium">
//               {filteredProducts.length}
//             </span>{" "}
//             products
//           </p>
//         </div>

//         {filteredProducts.length === 0 ? (
//           <div className="mt-10 rounded-3xl border border-dashed border-gray-300 bg-white p-16 text-center">
//             <h2 className="text-2xl font-semibold">No products found</h2>
//             <p className="mt-3 text-gray-500">
//               Try changing category, price range, or sort option.
//             </p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {filteredProducts.map((item) => (
//               <Link
//                 to={`/product/${item.category}-${item.id}`}
//                 key={`${item.category}-${item.id}`}
//                 className="group rounded-3xl overflow-hidden bg-white border border-gray-200 hover:border-gray-300 hover:shadow-lg transition duration-300"
//               >
//                 <div className="relative overflow-hidden">
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-500"
//                   />
//                   <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent" />
//                 </div>

//                 <div className="p-5">
//                   <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
//                     {item.category}
//                   </p>
//                   <h3 className="mt-2 text-lg font-medium text-gray-900 line-clamp-2">
//                     {item.name}
//                   </h3>
//                   <div className="mt-4 flex items-center justify-between">
//                     <p className="text-base font-semibold text-gray-900">
//                       ₹{parsePrice(item.price)}
//                     </p>
//                     <span className="text-sm text-gray-500 group-hover:text-black transition">
//                       View details
//                     </span>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Collection;



import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { menProducts, womenProducts, shoes, accessories } from "../data/products";

const Collection = () => {
  const [category, setCategory] = useState("all");
  const [maxPrice, setMaxPrice] = useState(3000);
  const [sortBy, setSortBy] = useState("");

  const parsePrice = (price) =>
    Number(String(price).replace(/[^\d.]/g, ""));

  const allProducts = useMemo(
    () => [
      ...menProducts.map((item) => ({ ...item, category: "men" })),
      ...womenProducts.map((item) => ({ ...item, category: "women" })),
      ...shoes.map((item) => ({ ...item, category: "shoes" })),
      ...accessories.map((item) => ({ ...item, category: "accessories" })),
    ],
    []
  );

  const filteredProducts = useMemo(() => {
    let result = [...allProducts];

    if (category !== "all") {
      result = result.filter((item) => item.category === category);
    }

    result = result.filter((item) => parsePrice(item.price) <= maxPrice);

    if (sortBy === "low-high") {
      result = [...result].sort(
        (a, b) => parsePrice(a.price) - parsePrice(b.price)
      );
    } else if (sortBy === "high-low") {
      result = [...result].sort(
        (a, b) => parsePrice(b.price) - parsePrice(a.price)
      );
    }

    return result;
  }, [allProducts, category, maxPrice, sortBy]);

  const categories = [
    {
      key: "men",
      title: "Men Collection",
      remark: "Modern essentials for everyday wear",
    },
    {
      key: "women",
      title: "Women Collection",
      remark: "Minimal, elegant, and timeless pieces",
    },
    {
      key: "shoes",
      title: "Shoes Collection",
      remark: "Comfort with a clean premium look",
    },
    {
      key: "accessories",
      title: "Accessories Collection",
      remark: "Small details that complete the look",
    },
  ];

  const renderProducts = (items) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map((item) => (
        <Link
          to={`/product/${item.category}-${item.id}`}
          key={`${item.category}-${item.id}`}
          className="group rounded-3xl overflow-hidden bg-white border border-gray-200 hover:shadow-lg transition duration-300"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-500"
          />

          <div className="p-5">
            <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
              {item.category}
            </p>
            <h3 className="mt-2 text-lg font-medium text-gray-900">
              {item.name}
            </h3>
            <p className="mt-4 text-base font-semibold text-gray-900">
              ₹{parsePrice(item.price)}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f8f8f8] text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="uppercase tracking-[0.35em] text-xs text-gray-500">
            Curated Collection
          </p>
          <h1 className="mt-4 text-4xl md:text-6xl font-light tracking-tight">
            Discover Modern Essentials
          </h1>
          <p className="mt-5 text-gray-500 text-base md:text-lg leading-8">
            Premium clothing, shoes, and accessories organized by category for a cleaner shopping experience.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-12 rounded-3xl border border-gray-200 bg-white p-5 md:p-6">
          <div className="flex flex-col lg:flex-row gap-6 lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-3">
              {["all", "men", "women", "shoes", "accessories"].map((item) => (
                <button
                  key={item}
                  onClick={() => setCategory(item)}
                  className={`px-5 py-2.5 rounded-full border text-sm font-medium transition ${category === item
                      ? "bg-black text-white border-black"
                      : "bg-white text-gray-700 border-gray-200 hover:border-gray-400 hover:text-black"
                    }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <label className="text-sm font-medium text-gray-700">
                Sort by
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm outline-none"
              >
                <option value="">Default</option>
                <option value="low-high">Price: Low to High</option>
                <option value="high-low">Price: High to Low</option>
              </select>
            </div>
          </div>

          <div className="mt-6 max-w-md">
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-gray-700">
                Max Price
              </label>
              <span className="text-sm text-gray-500">₹{maxPrice}</span>
            </div>

            <input
              type="range"
              min="50"
              max="3000"
              step="10"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-black"
            />
          </div>
        </div>

        {/* Category sections */}
        <div className="mt-14 space-y-12">
          {category === "all"
            ? categories.map((cat) => {
              const items = filteredProducts.filter(
                (item) => item.category === cat.key
              );

              if (items.length === 0) return null;

              return (
                <section
                  key={cat.key}
                  className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8"
                >
                  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2 border-b border-gray-200 pb-5">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-semibold">
                        {cat.title}
                      </h2>
                      <p className="mt-2 text-gray-500">{cat.remark}</p>
                    </div>
                    <p className="text-sm text-gray-400">
                      {items.length} items
                    </p>
                  </div>

                  <div className="mt-8">{renderProducts(items)}</div>
                </section>
              );
            })
            : (() => {
              const currentCategory = categories.find(
                (cat) => cat.key === category
              );

              return (
                <section className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2 border-b border-gray-200 pb-5">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-semibold">
                        {currentCategory?.title || "Collection"}
                      </h2>
                      <p className="mt-2 text-gray-500">
                        {currentCategory?.remark || "Selected category products"}
                      </p>
                    </div>
                    <p className="text-sm text-gray-400">
                      {filteredProducts.length} items
                    </p>
                  </div>

                  <div className="mt-8">{renderProducts(filteredProducts)}</div>
                </section>
              );
            })()}
        </div>
      </div>
    </div>
  );
};

export default Collection;


// ----------------------------------------------------------


// import React, { useMemo, useState } from "react";
// import { menProducts, shoes, womenProducts } from "../data/products";

// const Collection = () => {
//   const [category, setCategory] = useState("all");
//   const [maxPrice, setMaxPrice] = useState(1000);
//   const [sortBy, setSortBy] = useState("");

//   const parsePrice = (price) => Number(String(price).replace(/[^\d.]/g, ""));

//   const allProducts = useMemo(() => {
//     return [
//       ...menProducts.map((item) => ({ ...item, category: "men" })),
//       ...womenProducts.map((item) => ({ ...item, category: "women" })),
//       ...shoes.map((item) => ({ ...item, category: "shoes" })),
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
//             max="3000"
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

// --------------------------------------------------------
// --------------------------------------------------------

// import React, { useEffect, useState } from "react";
// import { menProducts, shoes, womenProducts } from "../data/products";
// import { Link } from "react-router-dom";


// const Collection = () => {
//   const [category, setCategory] = useState("all");
//   const [maxPrice, setMaxPrice] = useState(3000);
//   const [sortBy, setSortBy] = useState("");
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   const parsePrice = (price) => Number(String(price).replace(/[^\d.]/g, ""));
//   //   This line removes everything except numbers and decimal points from a price, so things like $, ,, or € are ignored.
//   // It uses regex (/[^\d.]/g) to find and remove all non-numeric characters, leaving just the number. 
//   // For example: "$1,250.99" becomes 1250.99.

//   const allProducts = [
//     ...menProducts.map((item) => ({ ...item, category: "men" })),
//     ...womenProducts.map((item) => ({ ...item, category: "women" })),
//     ...shoes.map((item) => ({ ...item, category: "shoes" })),
//   ];

//   useEffect(() => {
//     let result = [...allProducts];

//     if (category !== "all") {
//       result = result.filter((item) => item.category === category);
//     }
//     // agar category mein all nahi hai toh ye code filter karega item ko or show karega item jo ki selected category mein hai jasie ki men, women and shoes koi bi ek category
//     // ex - agar category = "men" toh yeh sirf wohi items dikahega jo men products mein hogi

//     result = result.filter((item) => parsePrice(item.price) <= maxPrice);
//     // ye line sirf wohi items rakhegi jiski price less than or equal to maximum price ke brabar hogi

//     if (sortBy === "low-high") {
//       result = [...result].sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
//       //   If "low-high" is selected, it sorts items from cheapest to most expensive.
//     } else if (sortBy === "high-low") {
//       result = [...result].sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
//       // if "high-low" is selected, it sorts from most expensive to cheapest.
//     }

//     setFilteredProducts(result);
//   }, [category, maxPrice, sortBy]);

//   return (
//     <div>
//       <div className="mt-10 flex flex-col md:flex-row gap-6 items-center justify-between">
//         <div className="flex gap-3 flex-wrap">
//           <button
//             onClick={() => setCategory("all")}
//             className={`px-5 py-2 border ${category === "all" ? "bg-black text-white" : ""}`}
//           >
//             All
//           </button>
//           <button
//             onClick={() => setCategory("men")}
//             className={`px-5 py-2 border ${category === "men" ? "bg-black text-white" : ""}`}
//           >
//             Men
//           </button>
//           <button
//             onClick={() => setCategory("women")}
//             className={`px-5 py-2 border ${category === "women" ? "bg-black text-white" : ""}`}
//           >
//             Women
//           </button>
//           <button
//             onClick={() => setCategory("shoes")}
//             className={`px-5 py-2 border ${category === "shoes" ? "bg-black text-white" : ""}`}
//           >
//             Shoes
//           </button>
//         </div>

//         <div className="flex items-center gap-4">
//           <label className="text-gray-700 font-medium">Sort:</label>
//           <select
//             value={sortBy}
//             onChange={(e) => setSortBy(e.target.value)}
//             className="border px-4 py-2 outline-none"
//           >
//             <option value="">Default</option>
//             <option value="low-high">Price: Low to High</option>
//             <option value="high-low">Price: High to Low</option>
//           </select>
//         </div>
//       </div>

//       <div className="mt-8 max-w-md mx-auto">
//         <label className="block mb-2 font-medium text-gray-700">
//           Max Price: ₹{maxPrice}
//         </label>
//         <input
//           type="range"
//           min="50"
//           max="1000"
//           step="10"
//           value={maxPrice}
//           onChange={(e) => setMaxPrice(Number(e.target.value))}
//           className="w-full"
//         />
//       </div>

//       <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-4">
//         {filteredProducts.map((item) => (
//           <Link
//             to={`/product/${item.category}-${item.id}`}
//             key={`${item.category}-${item.id}`}
//             className="group block"
//           >
//             <img
//               src={item.image}
//               alt={item.name}
//               className="w-full h-[380px] object-cover"
//             />
//             <h3 className="mt-4 text-xl font-medium">{item.name}</h3>
//             <p className="text-gray-600">₹{parsePrice(item.price)}
//             </p>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Collection;



// ----------------------------------------------------------
// ----------------------------------------------------------

// import React, { useState } from 'react'

// import { menProducts, shoes, womenProducts } from "../data/products";
// import { useMemo } from 'react';

// const Collection = () => {
//     const [category, setCategory] = useState("all");
//     const [maxPrice, setMaxPrice] = useState(3000);
//     const [sortBy, setSortBy] = useState("");

//     const filteredProducts = useMemo(() => {
//         let result = [...menProducts, ...womenProducts, ...shoes];

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

//                         {shoes.map((item) => (
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