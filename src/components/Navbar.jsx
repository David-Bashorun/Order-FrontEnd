import React from 'react'
import logo from "../assets/images/logo.png";
import guy from "../assets/images/guy.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
              <section className='w-11/12 mx-auto font-[Poppins]' >
                <div className='flex items-center h-[70px] gap-45 py-12'>
                  <div><img src={logo} alt="" className='h-13 w-54' /></div>
                  <div>
                    <ul className='flex items-center justify-between w-[600px] text-[16px] pl-8'>
                      <li className='px-8 py-2 text-white bg-[#FC8A06] rounded-full '>Home</li>
                      <li className='px-8 py-2 flex rounded-full text-nowrap '><Link to="/menu">Browse Menu</Link></li>
                      <li className='px-8 py-2 flex rounded-full text-nowrap '><Link to ="/favorites">Favorites</Link></li>
                      <li className='px-8 py-2 flex rounded-full text-nowrap '>Restaurants</li>
                      <li className='px-8 py-2 flex rounded-full text-nowrap '><Link to="/cart">Cart</Link></li>
                      <li className='flex px-10 py-2 bg-[#03081F] rounded-full text-white justify-center'><img src={guy} alt="" className='h-7 w-7' /> <h2 className='pl-2'><Link to= "/signin">Login/Signup</Link></h2></li>
                    </ul>
                  </div>
                </div>
              </section>
    </div>
  )
}

export default Navbar