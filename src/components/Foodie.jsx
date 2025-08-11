import React from 'react'

const Foodie = ({Dream , Food, Dealers}) => {
    return (
        <>
            <div>
                <img src={Dream} alt="" />
                <div className='bg-[#F5F5F5] rounded-b-lg pl-4 pt-2 border-x-[#e5e5e5] border-x-[2px] border-b-[#e5e5e5] border-b-[2px] pb-2'>
                    <h2 className='text-[18px] text-[#03081F] font-bold'>{Food}</h2>
                    <h3 className='text-[#FC8A06]'>{Dealers}</h3>
                </div>
            </div>
        </>
    )
}

export default Foodie