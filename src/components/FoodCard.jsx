import React from 'react'

const FoodCard = ({ title, deal }) => {
    return (
        <>

            <div className='bg-[#03081F] h-[66px] w-[88px] text-white font-bold text-[18px] items-center justify-center flex rounded-b-lg ml-87'>{deal}</div>
            <div className='mt-35 ml-10'>
                <h3 className='text-[#FC8A06] text-[18px] font-medium'>Restaurant</h3>
                <h2 className='text-white text-[24px] font-bold'>{title}</h2>
            </div>

        </>
    )
}

export default FoodCard