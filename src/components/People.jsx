import React from 'react'

const People = ({reason,head,message,}) => {
  return (
    <>
        <div className='bg-[#ffffff] ml-15 px-4 py-4 w-1/3 text-black font-bold text-[18px] items-center justify-center flex text-nowrap rounded-b-lg '>{reason}</div>
        <div className='ml-10 mt-40'>
            <h3 className='text-[#FC8A06] text-[18px]'>{head}</h3>
            <h2 className='text-white font-bold text-[44px]'>{message}</h2>
            <button className='bg-[#FC8A06] text-[18px] text-white rounded-full px-10 py-3'>Get Started</button>
        </div>
    </>
  )
}

export default People