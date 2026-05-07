import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// add more functionality later

function AddProduct() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        price: "",
        category: "men",
        image: "",
        description: "",
        sizes: [],
    });

    const availableSizes = ["S", "M", "L", "XL", "XXL"];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSizeChange = (size) => {
        setFormData((prev) => ({
            ...prev,
            sizes: prev.sizes.includes(size)
                ? prev.sizes.filter((item) => item !== size)
                : [...prev.sizes, size],
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newProduct = {
            id: Date.now(),
            ...formData,
        };

        const existingProducts =
            JSON.parse(localStorage.getItem("adminProducts")) || [];

        localStorage.setItem(
            "adminProducts",
            JSON.stringify([...existingProducts, newProduct])
        );

        alert("Product added successfully");

        setFormData({
            name: "",
            price: "",
            category: "men",
            image: "",
            description: "",
            sizes: [],
        });

        navigate("/admin/list-products");
    };

    return (
        <div className="max-w-4xl mx-auto p-10">
            <div className="mb-8">
                <p className="uppercase tracking-[0.3em] text-xs text-gray-500">
                    Product Management
                </p>
                <h1 className="mt-3 text-3xl md:text-5xl font-semibold">
                    Add New Product
                </h1>
                <p className="mt-3 text-gray-500 max-w-2xl leading-7">
                    Create a new product for your store and store it locally for now.
                </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8 shadow-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Product Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter product name"
                                className="w-full border border-gray-200 rounded-full px-5 py-3 outline-none focus:border-black transition"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Price
                            </label>
                            <input
                                type="text"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                placeholder="ex - ₹999"
                                className="w-full border border-gray-200 rounded-full px-5 py-3 outline-none focus:border-black transition"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Category
                            </label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="w-full border border-gray-200 rounded-full px-5 py-3 outline-none focus:border-black transition bg-white"
                            >
                                <option value="men">Men</option>
                                <option value="women">Women</option>
                                <option value="shoes">Shoes</option>
                                <option value="accessories">Accessories</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Image URL
                            </label>
                            <input
                                type="text"
                                name="image"
                                value={formData.image}
                                onChange={handleChange}
                                placeholder="Paste image link"
                                className="w-full border border-gray-200 rounded-full px-5 py-3 outline-none focus:border-black transition"
                                required />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Description
                        </label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows="5"
                            placeholder="Write product description"
                            className="w-full border border-gray-200 rounded-3xl px-5 py-4 outline-none focus:border-black transition resize-none"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                            Available Sizes
                        </label>
                        <div className="flex flex-wrap gap-3">
                            {
                                availableSizes.map((size) => (
                                    <button
                                        type="button"
                                        key={size}
                                        onClick={() => handleSizeChange(size)}
                                        className={`px-5 py-2.5 rounded-full border text-sm transition ${formData.sizes.includes(size)
                                            ? "bg-black text-white border-black"
                                            : "bg-white text-gray-700 border-gray-200 hover:border-gray-400"
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))
                            }
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <button
                            type="submit"
                            className="px-8 py-4 rounded-full bg-black text-white text-sm tracking-widest uppercase hover:opacity-90 transition"

                        >
                            Save Product
                        </button>

                        <Link
                            to="/admin/list-products"
                            className="px-8 py-4 rounded-full border border-gray-300 text-sm tracking-widest uppercase text-gray-700 hover:border-black hover:text-black transition text-center"
                        >
                            View Products
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddProduct;