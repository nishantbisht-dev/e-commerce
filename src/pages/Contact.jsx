import React from 'react'

const Contact = () => {
    return (
        <div className='text-gray-900 min-h-screen'>

            {/* Hero  */}
            <section className='px-8 md:px-20 py-20 text-center border-b'>

                <p className='uppercase tracking-[8px] text-sm text-gray-500'>Contact Us</p>

                <h1 className='text-5xl md:text-7xl font-semibold mt-5'>
                    We'd Love To Hear From You
                </h1>

                <p className='max-w-3xl mx-auto mt-8 text-lg text-gray-600 leading-8'>
                    Questions about orders, sizing, partnerships or support?
                    Our team is ready to help.
                </p>
            </section>

            {/* Contain Grid  */}
            <section className='grid md:grid-cols-2 gap-14 px-8 md:px-20 py-20'>

                {/* Left  */}
                <div>
                    <h2 className='text-4xl font-semibold'>
                        Get In Touch
                    </h2>

                    <p className='mt-8 text-lg text-gray-600 leading-8'>
                        Email: support@brandstore.com
                    </p>

                    <p className='mt-4 text-lg text-gray-600'>
                        Phone: +91 98765 43210
                    </p>

                    <p className="mt-4 text-lg text-gray-600">
                        Address: Dehradun, Uttarakhand, India
                    </p>

                    <p className="mt-10 text-gray-500">
                        Monday - Saturday / 10AM - 7PM
                    </p>
                </div>

                {/* Right  */}
                <form className='space-y-6'>
                    <input
                    type='text'
                    placeholder='Your Name'
                    className='w-full border px-3 py-3 outline-none'
                    />

                    <input
                    type='email'
                    placeholder='Your Email'
                    className='w-full border px-3 py-3 outline-none'
                    />

                    <textarea
                    rows='6'
                    placeholder='Your Message'
                    className='w-full border px-3 py-3 outline-none resize-none'
                    />

                    <button className='bg-black text-white px-10 py-4 tracking-widest rounded-md'>SEND MESSAGE</button>
                </form>
            </section>
        </div>
    )
}

export default Contact