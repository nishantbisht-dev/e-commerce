import React from 'react'
import { RefreshCcw, BadgeCheck, Headphones } from 'lucide-react'

const Footer = () => {
  return (
    <div>
      {/* footer section  */}
      <div className="min-h-screen py-20">

        {/* features section */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

          {/* card 1 */}
          <div>
            <RefreshCcw className="mx-auto w-14 h-14" />
            <h2 className="mt-2 text-2xl font-semibold text-gray-700">Easy Exchange Policy</h2>
            <p className="mt-2 text-xl text-gray-500">We offer hassle free exchange policy</p>
          </div>

          {/* card 2 */}
          <div>
            <BadgeCheck className="mx-auto w-14 h-14" />
            <h2 className="mt-2 text-2xl font-semibold text-gray-700">
              7 days return Policy
            </h2>
            <p className="mt-2 text-xl text-gray-500">
              We Provide 7 days free return Policy
            </p>
          </div>
          {/* card 3 */}
          <div>             <Headphones className="mx-auto w-14 h-14" />
            <h2 className="mt-2 text-2xl font-semibold text-gray-700">               Best Customer Support
            </h2>             <p className="mt-2 text-xl text-gray-500">
              We provide 24X7 customer support             </p>
          </div>         </div>
        {/* Subscribe Section  */}         <div className="mt-22 text-center">           <h1 className="text-3xl font-semibold text-gray-800">             Subscribe Now & Get 20% Off          </h1>
          <p className="mt-6 text-2xl text-gray-500">             Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, quo nemo. Reprehenderit, officia consequatur repellat cum veniam, deleniti odio earum error, culpa repellendus recusandae illo.           </p>
          <div className="mt-12 flex justify-center">             <input
            type="email"
            placeholder="Enter your email."
            className="w-[400px] px-4 py-3 text-xl border rounded-2xl border-gray-300 outline-none"
          />

            <button className="ml-3 border bg-black text-white hover:bg-gray-900 duration-300 px-12 text-lg font-medium rounded-2xl cursor-pointer">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer