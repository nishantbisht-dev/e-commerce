import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Collection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [category, setCategory] = useState("all");
  const [maxPrice, setMaxPrice] = useState(3000);
  const [sortBy, setSortBy] = useState("");

  const parsePrice = (price) => {
    if (typeof price === "number") return price;
    return Number(String(price).replace(/[^\d.]/g, "")) || 0;
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await axios.get("http://localhost:8000/api/products");
        setProducts(res.data);
      } catch (err) {
        setError("Failed to load products from server.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    let result = [...products];

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
  }, [products, category, maxPrice, sortBy]);

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
          to={`/product/${item._id}`}
          key={item._id}
          className="group rounded-3xl overflow-hidden bg-white border border-gray-200 hover:shadow-lg transition duration-300"
        >
          <div className="relative overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          <div className="p-5">
            <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
              {item.category}
            </p>
            <h3 className="mt-2 text-lg font-medium text-gray-900 line-clamp-2">
              {item.name}
            </h3>
            <div className="mt-4 flex items-center justify-between">
              <p className="text-base font-semibold text-gray-900">
                ₹{parsePrice(item.price)}
              </p>
              <span className="text-sm text-gray-500 group-hover:text-black transition">
                View details
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f8f8f8] text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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

        <div className="mt-12 rounded-3xl border border-gray-200 bg-white/80 backdrop-blur-sm shadow-sm p-5 md:p-6">
          <div className="flex flex-col lg:flex-row gap-6 lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-3">
              {["all", "men", "women", "shoes", "accessories"].map((item) => (
                <button
                  key={item}
                  onClick={() => setCategory(item)}
                  className={`px-5 py-2.5 rounded-full border text-sm font-medium transition ${
                    category === item
                      ? "bg-black text-white border-black"
                      : "bg-white text-gray-700 border-gray-200 hover:border-gray-400 hover:text-black"
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <label className="text-sm font-medium text-gray-700 whitespace-nowrap">
                Sort by
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full sm:w-auto rounded-full border border-gray-200 bg-white px-4 py-2 text-sm outline-none focus:border-black"
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

        <div className="mt-12">
          {loading ? (
            <div className="text-center py-20 text-gray-500">
              Loading products...
            </div>
          ) : error ? (
            <div className="text-center py-20 text-red-500">
              {error}
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="mt-10 rounded-3xl border border-dashed border-gray-300 bg-white p-16 text-center">
              <h2 className="text-2xl font-semibold">No products found</h2>
              <p className="mt-3 text-gray-500">
                Try changing category, price range, or sort option.
              </p>
            </div>
          ) : category === "all" ? (
            <div className="space-y-12">
              {categories.map((cat) => {
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
              })}
            </div>
          ) : (
            <section className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2 border-b border-gray-200 pb-5">
                <div>
                  <h2 className="text-2xl md:text-3xl font-semibold">
                    {categories.find((cat) => cat.key === category)?.title ||
                      "Collection"}
                  </h2>
                  <p className="mt-2 text-gray-500">
                    {categories.find((cat) => cat.key === category)?.remark ||
                      "Selected category products"}
                  </p>
                </div>
                <p className="text-sm text-gray-400">
                  {filteredProducts.length} items
                </p>
              </div>

              <div className="mt-8">{renderProducts(filteredProducts)}</div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;