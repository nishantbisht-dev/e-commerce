import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Checkout() {
  const navigate = useNavigate();
  const { cartItems, clearCart } = useCart();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    paymentMethod: "COD",
  });

  const parsePrice = (price) => {
    if (typeof price === "number") return price;
    return Number(String(price).replace(/[^\d.]/g, "")) || 0;
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + parsePrice(item.price) * item.quantity,
    0
  );

  const shipping = subtotal > 0 ? 99 : 0;
  const total = subtotal + shipping;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      alert("Your cart is empty");
      return;
    }

    // Temporary frontend-only order handling
    const orderData = {
      customer: formData,
      items: cartItems,
      subtotal,
      shipping,
      total,
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem("lastOrder", JSON.stringify(orderData));

    clearCart();
    navigate("/order-success");
  };

  return (
    <div className="min-h-screen bg-[#f8f8f8] text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10">
          <p className="uppercase tracking-[0.3em] text-xs text-gray-500">
            Checkout
          </p>
          <h1 className="mt-3 text-4xl md:text-6xl font-light tracking-tight">
            Complete Your Order
          </h1>
          <p className="mt-4 text-gray-500 max-w-2xl leading-7">
            Fill in your details and review your order before placing it.
          </p>
        </div>

        {cartItems.length === 0 ? (
          <div className="bg-white border border-gray-200 rounded-3xl p-10 text-center shadow-sm">
            <h2 className="text-2xl font-semibold">Your cart is empty</h2>
            <p className="mt-3 text-gray-500">
              Add some products before going to checkout.
            </p>
            <Link
              to="/collection"
              className="inline-block mt-6 px-6 py-3 rounded-full bg-black text-white text-sm tracking-widest uppercase"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <form
              onSubmit={handlePlaceOrder}
              className="lg:col-span-2 bg-white border border-gray-200 rounded-3xl p-6 md:p-8 shadow-sm"
            >
              <h2 className="text-2xl font-semibold">Shipping Details</h2>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-200 rounded-full px-5 py-3 outline-none focus:border-black"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-200 rounded-full px-5 py-3 outline-none focus:border-black"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-200 rounded-full px-5 py-3 outline-none focus:border-black"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-200 rounded-full px-5 py-3 outline-none focus:border-black"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    State
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-200 rounded-full px-5 py-3 outline-none focus:border-black"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pincode
                  </label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-200 rounded-full px-5 py-3 outline-none focus:border-black"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Address
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows="4"
                  required
                  className="w-full border border-gray-200 rounded-3xl px-5 py-4 outline-none focus:border-black resize-none"
                />
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Payment Method
                </label>

                <div className="flex flex-wrap gap-3">
                  {["COD", "UPI"].map((method) => (
                    <button
                      key={method}
                      type="button"
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          paymentMethod: method,
                        }))
                      }
                      className={`px-5 py-3 rounded-full border text-sm transition ${
                        formData.paymentMethod === method
                          ? "bg-black text-white border-black"
                          : "bg-white text-gray-700 border-gray-200 hover:border-gray-400"
                      }`}
                    >
                      {method}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="mt-8 px-8 py-4 rounded-full bg-black text-white text-sm tracking-widest uppercase hover:opacity-90 transition"
              >
                Place Order
              </button>
            </form>

            {/* Summary */}
            <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8 shadow-sm h-fit">
              <h2 className="text-2xl font-semibold">Order Summary</h2>

              <div className="mt-6 space-y-4">
                {cartItems.map((item, index) => (
                  <div
                    key={`${item._id}-${item.size}-${index}`}
                    className="flex items-center gap-4 border-b border-gray-100 pb-4"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-2xl"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-sm">{item.name}</p>
                      <p className="text-xs text-gray-500">
                        Size: {item.size || "N/A"} | Qty: {item.quantity}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-3 text-gray-700">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? "Free" : `₹${shipping}`}</span>
                </div>
                <div className="flex justify-between pt-3 border-t border-gray-200 font-semibold text-lg">
                  <span>Total</span>
                  <span>₹{total}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkout;