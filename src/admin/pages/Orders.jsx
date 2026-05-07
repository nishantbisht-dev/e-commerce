import { useState } from "react";

function Orders() {
  const [orders] = useState([
    {
      id: "ORD-10021",
      customer: "Rahul Sharma",
      email: "rahul@gmail.com",
      total: "₹2,499",
      status: "Pending",
      date: "2026-05-01",
      items: 3,
      address: "Delhi, India",
    },
    {
      id: "ORD-10022",
      customer: "Neha Verma",
      email: "neha@gmail.com",
      total: "₹1,799",
      status: "Delivered",
      date: "2026-05-02",
      items: 2,
      address: "Mumbai, India",
    },
    {
      id: "ORD-10023",
      customer: "Aman Singh",
      email: "aman@gmail.com",
      total: "₹3,299",
      status: "Shipped",
      date: "2026-05-03",
      items: 4,
      address: "Bangalore, India",
    },
  ]);

  const getStatusStyle = (status) => {
    if (status === "Delivered") {
      return "bg-green-100 text-green-700 border-green-200";
    }
    if (status === "Shipped") {
      return "bg-blue-100 text-blue-700 border-blue-200";
    }
    return "bg-yellow-100 text-yellow-700 border-yellow-200";
  };

  return (
    <div>
      <div className="p-10">
        <p className="uppercase tracking-[0.3em] text-xs text-gray-500">
          Order Management
        </p>
        <h1 className="mt-3 text-3xl md:text-5xl font-semibold">
          Orders
        </h1>
        <p className="mt-3 text-gray-500 max-w-2xl leading-7">
          Track customer orders, delivery status, and order details from one place.
        </p>
      </div>

      <div className="grid gap-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8 shadow-sm"
          >
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h2 className="text-2xl font-semibold">{order.id}</h2>
                  <span
                    className={`px-4 py-1 rounded-full border text-sm ${getStatusStyle(
                      order.status
                    )}`}
                  >
                    {order.status}
                  </span>
                </div>

                <p className="mt-3 text-gray-600">
                  Customer: <span className="text-gray-900 font-medium">{order.customer}</span>
                </p>
                <p className="mt-1 text-gray-600">
                  Email: <span className="text-gray-900 font-medium">{order.email}</span>
                </p>
                <p className="mt-1 text-gray-600">
                  Address: <span className="text-gray-900 font-medium">{order.address}</span>
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:min-w-[520px]">
                <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                    Total
                  </p>
                  <p className="mt-2 text-lg font-semibold">{order.total}</p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                    Items
                  </p>
                  <p className="mt-2 text-lg font-semibold">{order.items}</p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                    Date
                  </p>
                  <p className="mt-2 text-lg font-semibold">{order.date}</p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                    Status
                  </p>
                  <p className="mt-2 text-lg font-semibold">{order.status}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button className="px-6 py-3 rounded-full bg-black text-white text-sm tracking-widest uppercase hover:opacity-90 transition">
                View Details
              </button>
              <button className="px-6 py-3 rounded-full border border-gray-300 text-sm tracking-widest uppercase text-gray-700 hover:border-black hover:text-black transition">
                Update Status
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;