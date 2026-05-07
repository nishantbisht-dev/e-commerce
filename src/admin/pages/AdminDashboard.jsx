import { Link } from "react-router-dom";

function AdminDashboard() {
    const stats = [
        { label: "Total Products", value: "128" },
        { label: "Total Orders", value: "54" },
        { label: "Pending Orders", value: "12" },
        { label: "Revenue ", value: "₹1,24,500" },
    ];

    const quickLinks = [
        { title: "Add Product", path: "/admin/add-product" },
        { title: "List Products", path: "/admin/list-products" },
        { title: "Orders", path: "/admin/orders" },
    ];

    return (
        <div className="m-8">
            <div className="mb-10">
                <p className="uppercase tracking-[0.3em] text-xs text-gray-500">
                    Overview
                </p>
                <h1 className="mt-3 text-3xl md:text-5xl font-semibold">
                    Welcome back, Admin
                </h1>
                <p className="mt-3 text-gray-500 max-w-2xl leading-7">
                    Manage your products,  track orders and keep your store organized from one clean dashboard.
                </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                {
                    stats.map((item) => (
                        <div
                            key={item.label}
                            className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm"
                        >
                            <p className="text-sm text-gray-500 uppercase tracking-[0.2em]">
                                {item.label}
                            </p>
                            <h2 className="mt-4 text-3xl font-semibold">
                                {item.value}
                            </h2>
                        </div>
                    ))
                }
            </div>

            {/* Quick Actions */}
            <div className="mt-10 bg-white border border-gray-200 rounded-3xl p-6 md:p-8 shadow-sm">
                <p className="uppercase tracking-[0.3em] text-xs text-gray-500">
                    Quick Actions
                </p>
                <h2 className="mt-3 text-2xl font-semibold">
                    Go to important pages
                </h2>

                <div className="mt-6 flex flex-wrap gap-4">
                    {
                        quickLinks.map((item) => (
                            <Link
                                key={item.title}
                                to={item.path}
                                className="px-6 py-3 rounded-full border border-gray-300 text-sm tracking-widest uppercase text-gray-700 hover:border-black hover:text-black transition"
                            >
                                {item.title}
                            </Link>
                        ))
                    }
                </div>
            </div>

            {/* Recent Activity */}
            <div className="mt-10 bg-white border border-gray-200 rounded-3xl p-6 md:p-8 shadow-sm">
                <p className="uppercase tracking-[0.3em] text-xs text-gray-500">
                    Recent Activity
                </p>
                <h2 className="mt-3 text-2xl font-semibold">
                    Latest updates
                </h2>

                <div className="mt-6 space-y-4">
                    <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                        <div>
                            <p className="font-medium">
                                New order placed
                            </p>
                            <p className="text-sm text-gray-500">Order #10021 received</p>

                        </div>
                        <span className="text-sm text-gray-500">2 min ago</span>

                    </div>

                    <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                        <div>
                            <p className="font-medium">New product added
                            </p>
                            <p className="text-sm text-gray-500">
                                Summer T-Shirt uploaded
                            </p>
                        </div>
                        <span className="text-sm text-gray-500">1 hour ago</span>
                    </div>

                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium">Payment completed</p>
                            <p className="text-sm text-gray-500">₹4,200 credited successfully</p>
                        </div>
                        <span className="text-sm text-gray-500">Today</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard;