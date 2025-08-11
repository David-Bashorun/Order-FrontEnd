import React from 'react'
import { FaFacebookF, FaInstagram, FaTiktok, FaSnapchatGhost } from "react-icons/fa";
import logus from '../assets/images/logus.png'
import Vector from '../assets/images/Vector.png'

const Footer = () => {
  return (
    <div>
        <section className='font-[Poppins]  mt-10'>
        <footer className="bg-gray-100 py-10 px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Logo and App Links */}
            <div>
              <h1 className="text-4xl font-bold text-gray-900 w-8/12">
                <img src={logus} alt="" />
              </h1>
              <div className="flex gap-2 mt-4 bg-black rounded-lg mr-35">
                <img
                  src={Vector}
                  alt="App Store"
                  className="h-10"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  className="h-10"
                />
              </div>
              <p className="mt-4 text-sm text-gray-600">
                Company # 490039-445, Registered with House of companies.
              </p>
            </div>

            {/* Email Subscription */}
            <div>
              <p className="font-semibold text-gray-800 mb-2">Get Exclusive Deals in your Inbox</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="youremail@gmail.com"
                  className="w-full px-4 py-2 rounded-l-full border border-gray-300 focus:outline-none"
                />
                <button className="bg-orange-500 text-white px-5 rounded-r-full hover:bg-orange-600">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-600 mt-1">
                we won’t spam, read our <a href="#" className="underline">email policy</a>
              </p>
              <div className="flex gap-4 mt-4 text-xl text-gray-800">
                <FaFacebookF />
                <FaInstagram />
                <FaTiktok />
                <FaSnapchatGhost />
              </div>
            </div>

            {/* Legal Pages */}
            <div>
              <p className="font-semibold text-gray-800 mb-2">Legal Pages</p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li><a href="#" className="hover:underline">Terms and conditions</a></li>
                <li><a href="#" className="hover:underline">Privacy</a></li>
                <li><a href="#" className="hover:underline">Cookies</a></li>
                <li><a href="#" className="hover:underline">Modern Slavery Statement</a></li>
              </ul>
            </div>

            {/* Important Links */}
            <div>
              <p className="font-semibold text-gray-800 mb-2">Important Links</p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li><a href="#" className="hover:underline">Get help</a></li>
                <li><a href="#" className="hover:underline">Add your restaurant</a></li>
                <li><a href="#" className="hover:underline">Sign up to deliver</a></li>
                <li><a href="#" className="hover:underline">Create a business account</a></li>
              </ul>
            </div>
          </div>
        </footer>
      </section>
      <section>
        <div className="bg-[#050922] text-gray-300 text-sm py-3  flex flex-col md:flex-row  px-30 justify-between items-center">
          <p className="mb-2 md:mb-0">Order.uk Copyright 2024 All Rights Reserved.</p>
          <div className="flex flex-wrap gap-4 text-xs md:text-sm">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Pricing</a>
            <a href="#" className="hover:underline">Do not sell or share my personal information</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer