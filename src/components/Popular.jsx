import React from 'react'
import Foodie from '../components/Foodie'
import burger from "../assets/images/burger.png"
import salad from "../assets/images/Americansaviour.png"
import pasta from "../assets/images/pasta.png"
import pizza from "../assets/images/pizza.png"
import brekkie from "../assets/images/brekkie.png"
import soup from "../assets/images/soup.png"

const Popular = () => {
  return (
    <div>
        <section className='w-11/12 font-[Poppins] mx-auto'>
        <div className='flex items-center h-[70px] justify-between py-12'>
          <h1 className='text-[32px] font-bold flex text-nowrap'>Order.uk Popular Categories 🤩</h1>
        </div>
      </section>
      {/* Fat Fucks */}
      <section className='w-11/12 font-[Poppins] mx-auto  grid grid-cols-1 md:grid-cols-6 gap-4'>
        <Foodie Dream={burger} Food={"Burger & Fast food"} Dealers={"21 restaurants"} />
        <Foodie Dream={salad} Food={"Salads"} Dealers={"32 restaurants"} />
        <Foodie Dream={pasta} Food={"Pasta & Casuals"} Dealers={"4 restaurants"} />
        <Foodie Dream={pizza} Food={"Pizza"} Dealers={"32 restaurants"} />
        <Foodie Dream={brekkie} Food={"Breakfast"} Dealers={"4 restaurants"} />
        <Foodie Dream={soup} Food={"Soups"} Dealers={"32 restaurants"} />
      </section>
    </div>
  )
}

export default Popular