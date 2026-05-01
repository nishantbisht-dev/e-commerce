import React from 'react'

const About = () => {
    return (
        <div className='text-gray-900 min-h-screen mb-10'>
            {/* main  */}
            <section className='px-8 md:px-20 py-24 text-center border-b'>
                <p className='uppercase tracking-[8px] text-sm text-gray-500'>Our Story</p>
                <h1 className='text-5xl md:text-7xl font-semibold mt-6'>Crafted For Modern Style</h1>
                <p className='max-w-3xl mx-auto mt-8 text-lg text-gray-600 leading-8'>Inspired by timeless fashion houses and street culture, we create
                    premium essentials for everyday confidence. Minimal design,
                    quality fabrics, and bold identity.</p>
            </section>

            {/* Brand Story  */}
            <section className='grid md:grid-cols-2 gap-12 px-8 md:px-20 py-18 items-center'>
                <img
                    src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80"
                    alt="fashion"
                    className='w-full h-[600px] object-cover'
                />

                <div>
                    <p className='uppercase tracking-[6px] text-sm text-gray-500'>Who We Are</p>

                    <h2 className='text-5xl font-semibold mt-5'>Luxury Meets Everyday Wear</h2>

                    <p className='mt-8 text-gray-600 leading-8 text-lg'>
                        We believe fashion should feel powerful and effortless.
                        Every collection is built with premium comfort, clean cuts,
                        and bold confidence.
                    </p>
                    <p className='mt-6 text-gray-600 leading-8 text-lg'>
                        From city streets to elevated occasions, our products are made
                        to move with your lifestyle.
                    </p>
                </div>
            </section>

            {/* Values  */}
            <section className='bg-black text-white font-semibold text-center mt-16'>
                <h2 className='text-5xl font-semibold text-center py-12'>Our Values</h2>

                <div className='grid md:grid-cols-3 gap-12 text-center py-5
                '>
                    <div>
                        <h3 className='text-2xl font-semibold'>Quality</h3>
                        <p className='my-2 text-gray-300'>Premium materials with lasting comfort.
                        </p>
                    </div>

                    <div>
                        <h3 className='text-2xl font-semibold'>Design</h3>
                        <p className='my-2 text-gray-300'>Clean silhouettes inspired by global brands.</p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold">Confidence</h3>
                        <p className="my-2 text-gray-300">Clothing built to elevate your presence.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About