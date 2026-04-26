import React from 'react'
import { menProducts, womenProducts } from "../data/products";

const Collection = () => {
    return (
        <div>
            {/* hero section */}
            <section className="grid grid-cols-2 mx-20 mt-10  border p-4">

                {/* left portion  */}
                <div className="flex flex-col justify-center px-20">
                    <p className="uppercase text-gray-500 mb-4">
                        Our Bestsellers
                    </p>
                    <h2 className="text-4xl font-light mb-4">Latest Arrivals</h2>

                    <button className="border w-40 py-2 hover:bg-black hover:text-white duration-300">Shop Now</button>
                </div>

                {/* right section  */}
                <img src="https://i.pinimg.com/1200x/15/4f/a5/154fa541587cdab59bbe15a3184b7372.jpg" alt="shopping" className="w-full h-full object-cover" />
            </section>

            {/* Collection  */}
            <section className="text-center mt-10">
                {/* <a href="/collection"></a> */}
                <h2 id="collection" className="text-4xl font-light">
                    Latest <span className="font-bold text-gray-500">Collection</span>
                </h2>

                <p className="mt-4 text-gray-500 mx-2">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas esse, iusto id quod mollitia repudiandae fuga dolorum nobis! Velit, adipisci.
                </p>

                {/* Clothing section */}
                <div className="m-4">
                    <h3 className="text-2xl font-bold">Men's Section</h3>
                    <section className="border p-4 flex gap-2 overflow-hidden">
                        {menProducts.map((item) => (
                            <div key={item.id}>
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className='w-full h-[420px] object-cover group-hover:scale-105 duration-500'
                                />
                                <div className="flex justify-between">

                                    <p>{item.name}</p>
                                    <p>{item.price}</p>
                                </div>
                            </div>
                        ))}
                    </section>
                </div>


                <div className="m-4">
                    <h1 className="text-2xl font-bold">Women's Section</h1>
                    <section className="border p-4 flex gap-2 overflow-hidden">

                        {womenProducts.map((item) => (
                            <div key={item.id}>
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className='w-full h-[420px] object-cover group-hover:scale-105 duration-500'
                                />
                                <div className="flex justify-between">

                                    <p>{item.name}</p>
                                    <p>{item.price}</p>
                                </div>
                            </div>
                        ))}

                    </section>
                </div>
            </section>
        </div>
    )
}

export default Collection