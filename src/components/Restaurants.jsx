import React from 'react'
import Company from "../components/Company"
import Mags from "../assets/images/Mags.png"
import Nigga from "../assets/images/Nigga.png"
import Papa from "../assets/images/Papa.png"
import Paradise from "../assets/images/Paradise.png"
import Sharwarma from "../assets/images/Sharwarma.png"
import Tex from "../assets/images/Tex.png"

const Restaurants = () => {
  return (
    <div>
        <section className='w-11/12 font-[Poppins] mx-auto'>
        <div className='flex items-center h-[70px] justify-between py-12'>
          <h1 className='text-[32px] font-bold flex text-nowrap'>Popular Restaurants</h1>
        </div>
      </section>
      <section className='w-11/12 font-[Poppins] mx-auto  grid grid-cols-1 md:grid-cols-6 gap-4'>
        <Company Dream={Mags} Restaurant={"McDonald's London"} />
        <Company Dream={Papa} Restaurant={"Papa John's"} />
        <Company Dream={Paradise} Restaurant={"KFC West London"} />
        <Company Dream={Tex} Restaurant={"Texas Chicken"} />
        <Company Dream={Nigga} Restaurant={"Burger King"} />
        <Company Dream={Sharwarma} Restaurant={"Shaurma 1"} />
      </section>
    </div>
  )
}

export default Restaurants