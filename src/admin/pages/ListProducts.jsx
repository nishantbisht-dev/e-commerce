import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// add more functionality later

function ListProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("adminProducts")) || [];
    setProducts(storedProducts);
  }, []);

  const handleDelete = (id) => {
    const updatedProducts = products.filter((item) => item.id !== id);
    setProducts(updatedProducts);
    localStorage.setItem("adminProducts", JSON.stringify(updatedProducts));
  };

  return (
    <div className="m-10">
      <div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <p className="uppercase tracking-[0.3em] text-xs text-gray-500">
            Product Inventory
          </p>
          <h1 className="mt-3 text-3xl md:text-5xl font-semibold">
            List Products
          </h1>
          <p className="mt-3 text-gray-500 max-w-2xl leading-7">
            View, manage, and remove products added from the admin panel.
          </p>
        </div>

        <Link
          to="/admin/add-product"
          className="w-fit px-6 py-3 rounded-full bg-black text-white text-sm tracking-widest uppercase hover:opacity-90 transition"
        >
          Add Product
        </Link>
      </div>

      {products.length === 0 ? (
        <div className="bg-white border border-gray-200 rounded-3xl p-10 text-center shadow-sm">
          <h2 className="text-2xl font-semibold">No products added yet</h2>
          <p className="mt-3 text-gray-500">
            Add your first product to start building your store inventory.
          </p>
          <Link
            to="/admin/add-product"
            className="inline-block mt-6 px-6 py-3 rounded-full bg-black text-white text-sm tracking-widest uppercase"
          >
            Add First Product
          </Link>
        </div>
      ) : (
        <div className="bg-white border border-gray-200 rounded-3xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-6 py-4 text-sm font-medium text-gray-600 uppercase tracking-wider">
                    Image
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-medium text-gray-600 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-medium text-gray-600 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-medium text-gray-600 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-medium text-gray-600 uppercase tracking-wider">
                    Sizes
                  </th>
                  <th className="text-left px-6 py-4 text-sm font-medium text-gray-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {products.map((item) => (
                  <tr key={item.id} className="border-b border-gray-100">
                    <td className="px-6 py-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-2xl"
                      />
                    </td>

                    <td className="px-6 py-4">
                      <p className="font-medium text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-500 max-w-xs line-clamp-1">
                        {item.description}
                      </p>
                    </td>

                    <td className="px-6 py-4">
                      <span className="px-4 py-1 rounded-full bg-gray-100 text-sm capitalize">
                        {item.category}
                      </span>
                    </td>

                    <td className="px-6 py-4 text-gray-700">{item.price}</td>

                    <td className="px-6 py-4 text-gray-700">
                      {item.sizes && item.sizes.length > 0
                        ? item.sizes.join(", ")
                        : "N/A"}
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex gap-3">
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="px-4 py-2 rounded-full border border-red-300 text-red-500 text-sm hover:bg-red-500 hover:text-white hover:border-red-500 transition"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default ListProducts;