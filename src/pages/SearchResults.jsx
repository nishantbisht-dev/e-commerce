import React from "react";
// This is the page that shows only matched products.

const SearchResults = ({ searchResults, searchQuery }) => {
  if (!searchQuery) {
    return (
      <div className="px-10 py-16 text-center">
        <h2 className="text-3xl font-semibold">Search your product</h2>
        <p className="mt-4 text-gray-500">
          Click the search icon and type a product name.
        </p>
      </div>
    );
  }

  if (searchResults.length === 0) {
    return (
      <div className="px-10 py-16 text-center">
        <h2 className="text-3xl font-semibold">No products found</h2>
        <p className="mt-4 text-gray-500">
          No item matches "{searchQuery}".
        </p>
      </div>
    );
  }

  return (
    <div className="px-10 py-16">
      <h2 className="text-3xl font-semibold mb-8">Search Results</h2>

      <div className="grid md:grid-cols-4 gap-8">
        {searchResults.map((item) => (
          <div key={item.id} className="group cursor-pointer">
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[420px] object-cover group-hover:scale-105 duration-500"
              />
            </div>

            <h3 className="mt-5 text-xl font-medium">{item.name}</h3>
            <p className="mt-2 text-gray-500">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;