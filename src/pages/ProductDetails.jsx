import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `http://localhost:8000/api/products/${id}`
        );
        setProduct(res.data);
      } catch (err) {
        setError("Product not found.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product?.sizes?.length > 0 && !selectedSize) {
      alert("Please select size");
      return;
    }

    addToCart(product, quantity, selectedSize);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f8f8f8] flex items-center justify-center">
        <p className="text-gray-500">Loading product...</p>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-[#f8f8f8] flex items-center justify-center px-4">
        <div className="max-w-lg w-full text-center bg-white border border-gray-200 rounded-3xl p-10 shadow-sm">
          <p className="uppercase tracking-[0.3em] text-xs text-gray-500">
            Product page
          </p>
          <h1 className="mt-4 text-3xl md:text-4xl font-semibold text-gray-900">
            Product Not Found
          </h1>
          <p className="mt-4 text-gray-500 leading-7">
            The product you are looking for does not exist.
          </p>
          <Link
            to="/collection"
            className="inline-block mt-8 px-6 py-3 rounded-full bg-black text-white text-sm tracking-widest uppercase"
          >
            Back to Collection
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f8f8] text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[650px] object-cover"
            />
          </div>

          <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-10 shadow-sm">
            <p className="uppercase tracking-[0.3em] text-xs text-gray-500">
              {product.category}
            </p>

            <h1 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight">
              {product.name}
            </h1>

            <div className="mt-6 flex items-center gap-4">
              <p className="text-3xl font-semibold">₹{product.price}</p>
              <span className="text-sm text-gray-400">
                Inclusive of all taxes
              </span>
            </div>

            <p className="mt-6 text-gray-600 leading-8">
              {product.description ||
                "Minimal, premium, and thoughtfully designed for everyday wear."}
            </p>

            {product.sizes && product.sizes.length > 0 && (
              <div className="mt-8">
                <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
                  Select Size
                </h2>

                <div className="flex gap-3 mt-4 flex-wrap">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-12 px-5 py-3 rounded-full border text-sm transition ${selectedSize === size
                        ? "bg-black text-white border-black"
                        : "bg-white text-gray-700 border-gray-200 hover:border-gray-400"
                        }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-8">
              <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
                Quantity
              </h2>

              <div className="mt-4 inline-flex items-center border border-gray-200 rounded-full overflow-hidden">
                <button
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  className="w-12 h-12 text-xl hover:bg-gray-100 transition"
                >
                  -
                </button>

                <span className="w-14 text-center font-medium">{quantity}</span>

                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="w-12 h-12 text-xl hover:bg-gray-100 transition"
                >
                  +
                </button>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleAddToCart}
                className="px-8 py-4 rounded-full bg-black text-white text-sm tracking-widest uppercase hover:opacity-90 transition"
              >
                Add to Cart
              </button>

              <Link
                to="/collection"
                className="px-8 py-4 rounded-full border border-gray-300 text-sm tracking-widest uppercase text-gray-700 hover:border-black hover:text-black transition text-center"
              >
                Continue Shopping
              </Link>
            </div>

            <div className="mt-10 border-t border-gray-200 pt-8">
              <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
                Reviews
              </h2>

              {product.reviews && product.reviews.length > 0 ? (
                <div className="mt-5 space-y-4">
                  {product.reviews.map((review, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-2xl p-4"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <p className="font-medium">{review.name}</p>
                        <p className="text-sm text-gray-500">
                          {review.rating} / 5
                        </p>
                      </div>
                      <p className="mt-2 text-gray-600 leading-7">
                        {review.comment}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="mt-4 text-gray-500">No reviews yet.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;