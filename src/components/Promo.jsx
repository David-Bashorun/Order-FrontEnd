
import location from "../assets/images/location.png";
import cart from "../assets/images/cart.png";
import arrow from "../assets/images/arrow.png";



const Promo = () => {
  return (
    <div>
        <section className='w-11/12 bg-[#fafafa] mx-auto rounded-b-lg border-[1px] border-[#cdcdcd] font-[Poppins] font-medium ' >
                <div className='flex items-center justify-between pl-3 '>
                  <div className='flex'>
                    <h2 className=''><span className='h-[25px] w-[25px] text-[20px]'>🌟</span> Get 5% Off your first order, <span className='text-[#FC8A06] font-bold underline underline-offset-2'>Promo: ORDER5</span> </h2>
                  </div>
                  <div className='flex'>
                    <img src={location} alt="" className='md:h-[25px] w-[25px]' />
                    <h2>Regent Street, <span className='underline underline-offset-2'>A4</span>, A4201, London</h2>
                    <h2 className='text-[#FC8A06]  underline underline-offset-2 pl-2'>Change Location</h2>
                  </div>
                  <div className='bg-[#028643] md:flex md:justify-between  md:items-center text-white  h-[70px] grid grid-cols-3 divide-x-1 divide-solid divide-gray-500 rounded-b-lg'>
                    <div className='py-2 px-3 h-full flex items-center'><img src={cart} alt="" className='md:h-[43px] md:w-[43px] p-1' /></div>
                    <div className='py-2 px-3 h-full flex items-center'><h2 className='flex '>23 items</h2></div>
                    <div className='py-2 px-3 h-full flex items-center'><h2 >GBP 78.89</h2></div>
                    <div className='py-2 px-3  flex items-center'><img src={arrow} alt="" className='rotate-90 md:h-[38px] md:w-[38px]  ' /></div>
                  </div>
                </div>
              </section>
    </div>
  )
}

export default Promo