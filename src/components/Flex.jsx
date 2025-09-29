import React from 'react'

const Flex = () => {
  return (
    <div>
        <section>
                <div className="bg-[#FC8A06] font-[Poppins] text-white rounded-xl border-2  border-blue-400 p-6 flex justify-around items-center space-x-6 max-w-11/12 mx-auto mt-10">
                  <div className="text-center">
                    <div className="text-6xl font-light">546+</div>
                    <div className="text-lg font-bold">Registered Riders</div>
                  </div>
                  <div className="h-16 border-l border-white"></div>
                  <div className="text-center">
                    <div className="text-6xl font-light">789,900+</div>
                    <div className="text-lg font-bold">Orders Delivered</div>
                  </div>
                  <div className="h-16 border-l border-white"></div>
                  <div className="text-center">
                    <div className="text-6xl font-light">690+</div>
                    <div className="text-lg font-bold">Restaurants Partnered</div>
                  </div>
                  <div className="h-16 border-l border-white"></div>
                  <div className="text-center">
                    <div className="text-6xl font-light">17,457+</div>
                    <div className="text-lg font-bold">Food items</div>
                  </div>
                </div>
        
              </section>
    </div>
  )
}

export default Flex