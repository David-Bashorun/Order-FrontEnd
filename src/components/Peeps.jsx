import React from 'react'
import People from '../components/People'

const Peeps = () => {
  return (
    <div>
       <section className='w-11/12 font-[Poppins] mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 pt-10'>
          <div className='bg-[url(/src/assets/images/bruno.png)] h-[400px] bg-cover bg-center rounded-lg'>
            <People reason={"Earn more with lower fees"} head={"Signup as a business"} message={"Partner with us"} />
          </div>
          <div className='bg-[url(/src/assets/images/bike.png)] h-[400px] bg-cover bg-center rounded-lg'>
            <People reason={"Avail exclusive perks"} head={"Signup as a rider"} message={"Ride with us"} />
          </div>

        </div>
      </section> 
    </div>
  )
}

export default Peeps