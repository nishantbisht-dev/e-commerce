import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();

  const parsePrice = (price) =>
    Number(String(price).replace(/[^\d.]/g, ""));

  const subtotal = cartItems.reduce(
    (total, item) => total + parsePrice(item.price) * item.quantity,
    0
  );

  const shipping = subtotal > 0 ? 99 : 0;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-[#f8f8f8] text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-gray-500">
              Your cart
            </p>
            <h1 className="mt-3 text-4xl md:text-5xl font-semibold">
              Shopping Bag
            </h1>
          </div>

          {cartItems.length > 0 && (
            <button
              onClick={clearCart}
              className="w-fit px-5 py-3 rounded-full border border-gray-300 text-sm tracking-widest uppercase text-gray-700 hover:border-black hover:text-black transition"
            >
              Clear Cart
            </button>
          )}
        </div>

        {cartItems.length === 0 ? (
          <div className="bg-white border border-gray-200 rounded-3xl p-10 md:p-16 text-center shadow-sm">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Your cart is empty
            </h2>
            <p className="mt-4 text-gray-500 leading-7">
              Add products to your bag and they will appear here.
            </p>
            <Link
              to="/collection"
              className="inline-block mt-8 px-6 py-3 rounded-full bg-black text-white text-sm tracking-widest uppercase"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Cart items */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item, index) => (
                <div
                  key={`${item.category}-${item.id}-${item.size}-${index}`}
                  className="bg-white border border-gray-200 rounded-3xl p-5 md:p-6 shadow-sm flex flex-col md:flex-row gap-6"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full md:w-40 h-56 md:h-40 object-cover rounded-2xl"
                  />

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div>
                        <p className="uppercase tracking-[0.25em] text-[10px] text-gray-400">
                          {item.category}
                        </p>
                        <h2 className="mt-2 text-2xl font-medium">
                          {item.name}
                        </h2>
                        <p className="mt-2 text-gray-500">
                          Size: {item.size || "N/A"}
                        </p>
                        <p className="text-gray-500">
                          Price: ₹{parsePrice(item.price)}
                        </p>
                      </div>

                      <button
                        onClick={() => removeFromCart(index)}
                        className="text-sm tracking-widest uppercase text-red-500 hover:text-red-700 transition"
                      >
                        Remove
                      </button>
                    </div>

                    <div className="mt-6 flex items-center gap-4">
                      <span className="text-sm uppercase tracking-[0.2em] text-gray-500">
                        Quantity
                      </span>

                      <div className="inline-flex items-center border border-gray-200 rounded-full overflow-hidden">
                        <button
                          onClick={() => updateQuantity(index, "decrease")}
                          className="w-11 h-11 text-xl hover:bg-gray-100 transition"
                        >
                          -
                        </button>

                        <span className="w-14 text-center font-medium">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => updateQuantity(index, "increase")}
                          className="w-11 h-11 text-xl hover:bg-gray-100 transition"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                      <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
                        Item total
                      </p>
                      <p className="text-lg font-semibold">
                        ₹{parsePrice(item.price) * item.quantity}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8 shadow-sm lg:sticky lg:top-6">
              <p className="uppercase tracking-[0.3em] text-xs text-gray-500">
                Order summary
              </p>
              <h2 className="mt-3 text-2xl font-semibold">Summary</h2>

              <div className="mt-8 space-y-4 text-gray-700">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? "Free" : `₹${shipping}`}</span>
                </div>

                <div className="flex justify-between pt-4 border-t border-gray-200 font-semibold text-lg">
                  <span>Total</span>
                  <span>₹{total}</span>
                </div>
              </div>

              {/* <button className="w-full mt-8 px-6 py-4 rounded-full bg-black text-white text-sm tracking-widest uppercase hover:opacity-90 transition">
                Proceed to Checkout
              </button> */}

              <Link
                to="/checkout"
                className="w-full mt-6 block text-center bg-black text-white py-3 tracking-widest"
              >
                PROCEED TO CHECKOUT
              </Link>


              <Link
                to="/collection"
                className="block mt-4 text-center px-6 py-4 rounded-full border border-gray-300 text-sm tracking-widest uppercase text-gray-700 hover:border-black hover:text-black transition"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;