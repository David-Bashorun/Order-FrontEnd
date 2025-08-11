import React from 'react'

const Progress = ({ head, image, para }) => {
    return (
        <>
            <div className='bg-[#D9D9D9] flex items-center text-center w-[200px] rounded-lg'>
                <div className='py-4 px-2'>
                    <h1 className='font-bold text-[18px]'>{head}</h1>
                    <img src={image} alt="" className='mx-auto' />
                    <p className='text-[16px]'>{para}</p>
                </div>
            </div>
        </>
    )
}

export default Progress