import { Link, Outlet, useNavigate } from "react-router-dom";

function AdminLayout() {
    const navigate = useNavigate();

    // const handleLogout = () => {
    //     localStorage.removeItem("adminLogged")
    //     navigate("/admin")
    // };

    const handleLogout = () => {
        localStorage.removeItem("adminToken"); // localstorage se admintoken remove ho jayega yhan se
        localStorage.removeItem("adminLoggedIn"); // localstorage se adminloggedin remove ho jayega yhan se
        navigate("/admin/login"); // or usse hum redirect kara denge login page mein
    };

    return (
        <div className="min-h-screen bg-[#f8f8f8] text-gray-900 flex">

            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-gray-200 min-h-screen p-6 hidden md:flex flex-col">
                <div>
                    <p className="uppercase tracking-[0.3em] text-xs text-gray-500">
                        Admin Panel
                    </p>

                    <h1 className="mt-3 text-2xl font-semibold">BrandStore</h1>
                </div>

                <nav className="mt-10 space-y-3">
                    <Link
                        to="/admin/dashboard"
                        className="block px-4 py-3 rounded-full hover:bg-gray-100 transition"

                    >
                        Dashboard
                    </Link>

                    <Link
                        to="/admin/add-product"
                        className="block px-4 py-3 rounded-full hover:bg-gray-100 transition"

                    >
                        Add Product
                    </Link>

                    <Link
                        to="/admin/orders"
                        className="block px-4 py-3 rounded-full hover:bg-gray-100 transition"

                    >
                        Orders
                    </Link>
                </nav>

                <button
                    onClick={handleLogout}
                    className="mt-auto bg-black text-white rounded-full py-3 text-sm tracking-widest uppercase hover:opacity-90 transition"

                >
                    Logout
                </button>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
                {/* Topbar */}
                <header className="bg-white border-b border-gray-200 px-6 md:px-10 py-4 flex items-center justify-between">
                    <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                            Admin Dashboard
                        </p>
                        <h2 className="text-xl font-semibold mt-1">
                            Manage your store
                        </h2>
                    </div>

                    <button
                        onClick={handleLogout}
                        className="md:hidden bg-black text-white px-4 py-2 rounded-full text-sm"
                    >
                        Logout
                    </button>
                </header>

                <main className="p-6 md:p-10">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default AdminLayout;
