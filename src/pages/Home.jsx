function Home() {
    const products = [
        {
            id: 1,
            name: "Oversized Cotton Hoodie",
            price: "$89",
            image:
                "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=700&q=80",
        },
        {
            id: 2,
            name: "Premium Street T-Shirt",
            price: "$59",
            image:
                "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=700&q=80",
        },
        {
            id: 3,
            name: "Modern Fit Jacket",
            price: "$129",
            image:
                "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=700&q=80",
        },
        {
            id: 4,
            name: "Essential Cargo Pants",
            price: "$99",
            image:
                "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=700&q=80",
        },
    ];

    return (
        <div className="bg-white text-gray-900">

            {/* Hero Section */}
            <section className="grid md:grid-cols-2 w-4xl min-h-screen">

                <div className="flex flex-col justify-center mt-15 px-8 md:px-15">
                    <p className="uppercase tracking-[8px] text-m text-gray-500">
                        New Season Drop
                    </p>

                    <h1 className="text-5xl md:text-7xl font-semibold leading-tight mt-6">
                        Built For
                        <br />
                        Modern Style
                    </h1>

                    <p className="mt-8 text-lg text-gray-600 max-w-xl leading-8">
                        Premium streetwear essentials crafted with comfort,
                        confidence, and clean aesthetics.
                    </p>

                    <div className="mt-10 mb-2 flex gap-5">
                        <button className="border bg-black text-white hover:bg-gray-800 duration-300 px-10 py-4 tracking-widest cursor-pointer">
                            SHOP NOW
                        </button>

                        <button className="border hover:bg-black hover:text-white duration-300 px-10 py-4 tracking-widest cursor-pointer">
                            EXPLORE
                        </button>
                    </div>
                </div>

                <div className="w-3xl">
                    <img
                        src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80"
                        alt="fashion"
                        className="w-2xl h-l object-cover rounded-2xl m-10"
                    />
                </div>

            </section>

            {/* Collection */}
            <section className="px-8 md:px-20 py-24">

                <div className="text-center">
                    <p className="uppercase tracking-[8px] text-sm text-gray-500">
                        Featured Collection
                    </p>

                    <h2 className="text-5xl font-semibold mt-6">
                        Best Sellers
                    </h2>
                </div>

                <div className="grid md:grid-cols-4 gap-8 mt-16">

                    {products.map((item) => (
                        <div key={item.id} className="group cursor-pointer">

                            <div className="overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-[420px] object-cover group-hover:scale-105 duration-500"
                                />
                            </div>

                            <h3 className="mt-5 text-xl font-medium">
                                {item.name}
                            </h3>

                            <p className="mt-2 text-gray-500">
                                {item.price}
                            </p>

                        </div>
                    ))}

                </div>

            </section>

            {/* Banner */}
            <section className="bg-black text-white text-center py-24 px-8">

                <p className="uppercase tracking-[8px] text-sm text-gray-400">
                    Limited Edition
                </p>

                <h2 className="text-5xl font-semibold mt-6">
                    Elevate Your Everyday Look
                </h2>

                <p className="max-w-2xl mx-auto mt-8 text-gray-300 text-lg leading-8">
                    Discover clean silhouettes, premium materials,
                    and statement essentials built for modern movement.
                </p>

                <button className="mt-10 bg-white text-black hover:bg-gray-700 hover:text-white duration-300 px-10 py-4 tracking-widest cursor-pointer">
                    SHOP COLLECTION
                </button>

            </section>

            {/* Newsletter */}
            <section className="px-8 md:px-20 py-24 text-center">

                <h2 className="text-5xl font-semibold">
                    Join The Community
                </h2>

                <p className="mt-6 text-gray-500 text-lg">
                    Subscribe for exclusive drops & offers.
                </p>

                <div className="mt-10 flex flex-col md:flex-row justify-center gap-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="border px-6 py-4 w-full md:w-[420px] outline-none"
                    />

                    <button className="border bg-black text-white hover:bg-gray-800 duration-300 px-10 py-4 tracking-widest cursor-pointer">
                        SUBSCRIBE
                    </button>
                </div>

            </section>

        </div>
    );
}

export default Home;