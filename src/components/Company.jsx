import React from 'react'

const Company = ({ Dream, Restaurant }) => {
    return (
        <>
            {/* <div>
                <img src={Dream} alt="" />
                <div className='bg-[#FC8A06] rounded-b-lg pt-2  border-x-[#e5e5e5] border-x-[2px] border-b-[#e5e5e5] border-b-[2px] pb-2 mx-auto flex items-center'>
                    <h2 className='text-[18px] text-[#ffffff] font-bold mx-auto flex items-center '>{Restaurant}</h2>
                </div>
            </div> */}
            <div className=" rounded-lg overflow-hidden shadow-lg">
                <div className=" flex justify-center items-center ">
                    <img src={Dream} alt="McDonald's Logo"  />
                </div>
                <div className="bg-orange-500 text-white text-center py-4 font-bold text-[18px">
                    {Restaurant}
                </div>
            </div>
        </>
    )
}

export default Company