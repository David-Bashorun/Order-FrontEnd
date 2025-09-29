import React from 'react'
import FoodCard from './FoodCard';

const Deals = () => {
  return (
    <div>
        <section className='w-11/12 font-[Poppins] mx-auto'>
        <div className='flex items-center h-[70px] justify-between py-12'>
          <h1 className='text-[32px] font-bold flex text-nowrapwrap'>Up to -40% 🎊 Order.uk exclusive deals</h1>
          <div>
            <ul className='flex items-center justify-between w-[600px] text-[16px] pl-8'>
              <li className='px-8 py-3  rounded-full '>Vegan</li>
              <li className='px-8 py-3 flex rounded-full text-nowrap letter '>Sushi</li>
              <li className='px-8 py-3 flex rounded-full text-[#FC8A06] border-[1px] border-[#FC8A06] text-nowrap '>Pizza & Fast food</li>
              <li className='px-8 py-3 flex rounded-full text-nowrap '>others</li>
            </ul>
          </div>
        </div>
      </section>
      <section className='w-11/12 font-[Poppins] mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <div className='bg-[url(/src/assets/images/1pic.png)] h-[300px] bg-cover bg-center rounded-lg'>
            <FoodCard title={"Chef Burgers London"} deal={"-40%"} />
          </div>
          <div className='bg-[url(/src/assets/images/2pic.png)] h-[300px] bg-cover bg-center rounded-lg'>
            <FoodCard title={"Grand Ai Cafe London"} deal={"-20%"} />
          </div>
          <div className='bg-[url(/src/assets/images/3pic.png)] h-[300px] bg-cover bg-center rounded-lg'>
            <FoodCard title={"Chef Burgers London"} deal={"-17%"} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Deals