import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const adminEmail = "admin@gmail.com";
        const adminPassword = "admin123";

        if (email === adminEmail && password === adminPassword) {
            localStorage.setItem("adminToken", "fake-admin-token"); // admin token mein yhan pe hum token ki value fake-admin-token dere hai
            localStorage.setItem("adminLoggedIn", "true"); // or waise hi yhan pe adminloggedin ki value true dere hai
            navigate("/admin/dashboard"); // or isse hum dashboard page pe bhej denge
        } else {
            alert("Invalid admin credentials");
        }
    };

    return (
        <div className="min-h-screen bg-[#f8f8f8] flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-white border border-gray-200 rounded-3xl shadow-sm p-8 md:p-10">
                <p className="uppercase tracking-[0.3em] text-xs text-gray-500 text-center">
                    Admin Access
                </p>

                <h1 className="mt-4 text-3xl md:text-4xl font-semibold text-center text-gray-900">
                    Login to Admin Panel
                </h1>

                <p className="mt-3 text-center text-gray-500 leading-7">
                    Enter your admin email and password to manage products and orders.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="adminExample@gmail.com"
                            className="w-full border border-gray-200 rounded-full px-5 py-3 outline-none focus:border-black transition"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="admin pass"
                            className="w-full border border-gray-200 rounded-full px-5 py-3 outline-none focus:border-black transition"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-black text-white rounded-full py-3.5 text-sm tracking-widest uppercase hover:opacity-90 transition"
                    >
                        Login
                    </button>
                </form>

                <div className="mt-6 rounded-2xl bg-gray-50 border border-gray-200 p-4 text-sm text-gray-600 leading-7">
                    Demo Credentials:
                    <br />
                    Email: <span className="font-medium text-gray-900">adminExample@gmail.com</span>
                    <br />
                    Password: <span className="font-medium text-gray-900">admin pass</span>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin;