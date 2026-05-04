import { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { menProducts, womenProducts, shoes } from "../data/products";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");

  const parsePrice = (price) =>
    Number(String(price).replace(/[^\d.]/g, ""));

  const allProducts = useMemo(
    () => [
      ...menProducts.map((item) => ({ ...item, category: "men" })),
      ...womenProducts.map((item) => ({ ...item, category: "women" })),
      ...shoes.map((item) => ({ ...item, category: "shoes" })),
    ],
    []
  );

  const [category, productId] = id.split("-");

  const product = allProducts.find(
    (item) => item.category === category && item.id === Number(productId)
  );

  const handleAddToCart = () => {
    if (product.sizes && product.sizes.length > 0 && !selectedSize) {
      alert("Please select size");
      return;
    }

    addToCart(product, quantity, selectedSize);
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-semibold">Product Not Found</h1>
          <p className="mt-4 text-gray-600">
            The product you are looking for does not exist.
          </p>
          <Link
            to="/collection"
            className="inline-block mt-6 bg-black text-white px-6 py-3"
          >
            Back to Collection
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="px-6 md:px-16 py-12 bg-white min-h-screen">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left side image */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[600px] object-cover"
          />
        </div>

        {/* Right side details */}
        <div>
          <p className="uppercase tracking-[6px] text-sm text-gray-500">
            {product.category}
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-semibold text-gray-900">
            {product.name}
          </h1>

          <p className="mt-6 text-2xl font-bold text-gray-900">
            ₹{parsePrice(product.price)}
          </p>

          <p className="mt-6 text-gray-600 leading-8 text-lg">
            {product.description || "No description available for this product."}
          </p>

          {/* Size section */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="mt-8">
              <h2 className="text-lg font-medium text-gray-800">Select Size</h2>

              <div className="flex gap-3 mt-4 flex-wrap">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`border px-5 py-2 transition ${selectedSize === size
                        ? "bg-black text-white"
                        : "bg-white text-gray-800"
                      }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity section */}
          <div className="mt-8">
            <h2 className="text-lg font-medium text-gray-800">Quantity</h2>

            <div className="flex items-center gap-4 mt-4">
              <button
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                className="w-10 h-10 border text-xl"
              >
                -
              </button>

              <span className="text-lg font-medium">{quantity}</span>

              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="w-10 h-10 border text-xl"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to cart */}
          <button
            onClick={handleAddToCart}
            className="mt-10 bg-black text-white px-10 py-4 tracking-widest"
          >
            ADD TO CART
          </button>

          {/* Optional reviews section */}
          <div className="mt-12 border-t pt-8">
            <h2 className="text-2xl font-semibold">Reviews</h2>

            {product.reviews && product.reviews.length > 0 ? (
              <div className="mt-4 space-y-4">
                {product.reviews.map((review, index) => (
                  <div key={index} className="border-b pb-4">
                    <p className="font-medium">{review.name}</p>
                    <p className="text-yellow-500">{review.rating} / 5</p>
                    <p className="text-gray-600 mt-2">{review.comment}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="mt-4 text-gray-600">
                No reviews yet for this product.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;