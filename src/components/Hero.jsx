import React from 'react'
import pizzagyal from "../assets/images/pizzagyal.png";
import gingergyal from "../assets/images/gingergyal.png";
import logo from "../assets/images/logo.png";

const Hero = () => {
  return (
    <div>
        <section className='w-11/12 mx-auto flex items-center font-[Poppins] justify-between py-10 bg-gradient-to-r from-[#FBFBFB] to-[#ffc98c]  border-[1px] border-[#cdcdcd] rounded-lg h-100'>
        <div className='flex items-center relative pl-10'>
          <div>
            <h4 className='text-[16px] font-normal'>Order Restaurant food,takeaway and groceries</h4>
            <h1 className='text-[54px] font-bold leading-15'>Feast Your Senses, <br /><span className='text-[#FC8A06]'>Fast and Fresh</span></h1>
            <h4 className='text-[13px] font-normal'>Enter a postcode to see what we deliver</h4>
            <div className="flex w-[320px] bg-white border-1 border-[#bebebe] rounded-full overflow-hidden">
              <input
                type="text"
                placeholder="e.g. EC4R 3TE"
                className="flex-1 px-4 py-3 text-sm outline-none"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm px-10 py-2 rounded-full">
                Search
              </button>
            </div>
          </div>
          {/* Position stuff */}
          {/* <div>
            
          </div> */}
          <div className='flex'>
            <img src={pizzagyal} alt="" className=' h-[400px] z-50 ' />
            <img src={gingergyal} alt="" className='absolute h-[350px] right-40 bottom-0 z-1' />
            <div className='z-2'>
              <div className='border-[1px] border-[#ffffff] bg-[#ffffff]  rounded-lg relative right-10 top-10 py-2 px-10 pl-1'>
                <img src={logo} alt="" className='h-[15px] w-[58px]' />
                <h2 className='text-[12px] font-semibold'>We've Received your order!</h2>
                <h3 className='text-[12px] font-normal'>Awaiting Restaurant acceptance</h3>
              </div>
              <div className='border-[1px] border-[#FFFFFF] bg-[#ffffff] rounded-lg relative right-5 top-25 py-2 px-10 pl-1'>
                <img src={logo} alt="" className='h-[15px] w-[58px]' />
                <h2 className='text-[12px] font-semibold' >Order Accepted! ✅ </h2>
                <h3 className='text-[12px] font-normal text-nowrap'>Your order will be delivered shortly</h3>
              </div>
              <div className='border-[1px] border-[#FFFFFF] bg-[#ffffff]  rounded-lg relative right-10 top-40 py-2 px-10 pl-1'>
                <img src={logo} alt="" className='h-[15px] w-[58px]' />
                <h2 className='text-[12px] font-semibold'>Your rider's nearby 🎉</h2>
                <h3 className='text-[12px] font-normal'>They're almost there - get ready! </h3>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  )
}

export default Hero