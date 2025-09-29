import React from 'react'
import Progress from '../components/Progress';
import serve from '../assets/images/serve.png';
import drink from '../assets/images/drink.png';
import fries from '../assets/images/fries.png';

const Know = () => {
  return (
    <div>
        <section className='w-11/12 font-[Poppins] mx-auto bg-[#d9d9d9] mt-10 rounded-lg pb-30'>
        <div className=''>
          <div className='flex w-10/12 mx-auto items-center justify-between py-10'>
            <h1 className='text-[32px] font-bold '>Know more about us</h1>
            <ul className='flex'>
              <li className='px-8 py-3  rounded-full border-[#FC8A06] border-[1px]'>Frequent Questions</li>
              <li className='px-8 py-3  rounded-full '>Who we are?</li>
              <li className='px-8 py-3  rounded-full '>Partner Program</li>
              <li className='px-8 py-3  rounded-full '>Help & Support</li>
            </ul>
          </div>
          <div className='w-10/12 mx-auto bg-white rounded-lg flex items-center justify-between py-10 px-5'>
            <div>
              <ul className=''>
                <li className='px-4 py-3  rounded-full font-bold bg-[#FC8A06] text-[18px] '>How does Order.UK work?</li>
                <li className='px-4 py-3  rounded-full font-bold text-[18px]'>What payment methods are accepted?</li>
                <li className='px-4 py-3  rounded-full font-bold text-[18px] '>Can I track my order in real-time</li>
                <li className='px-4 py-3  rounded-full font-bold text-[18px]'>Are there any special discounts or <br /> promotions available?</li>
                <li className='px-4 py-3 rounded-full font-bold text-[18px]'>Is Order.UK available in area?</li>
              </ul>
            </div>
            <div className='text-center mt-8'>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-10'>
                <Progress head={"Place an Order!"} image={serve} para={"Place order through our website or Mobile app"} />
                <Progress head={"Track Progress"} image={drink} para={"You can track your order status with delivery time"} />
                <Progress head={"Get your Orders"} image={fries} para={"Receive your order at a lightning fast speed!"} />
              </div>
              <p className='text-[16px] font-normal'>Order.UK simplifies the food ordering process. Browse through our diverse menu,<br /> select your favorite dishes, and proceed to checkout. Your delicious meal will be <br /> on its way to your doorstep in no time!</p>

            </div>
          </div>
        </div >
      </section >
    </div>
  )
}

export default Know