import React from 'react'
const MENU_HOVER = "text-2xl cursor-pointer font-normal after:content-[''] after:duration-300 after:h-1 after:block after:w-0 after:bg-slate-400 hover:after:w-full"
export default function NaBar() {
  return (
    <div className='h-auto px-20'>
        <nav className='grid grid-cols-3 py-10 items-center bg-white'>
            <section className='logo'>
                <img src='nav-img/ARTSY.png'/>
            </section>
            <section className='menu'>
                <ul className='flex gap-10'>
                    <li className={MENU_HOVER}>Home</li>
                    <li className={MENU_HOVER} >MarketPlace</li>
                    <li className={MENU_HOVER} >Auction</li>
                    <li className={MENU_HOVER} >Drop</li>
                </ul>
            </section>
            <section className='icons'>
                <img src='nav_img/search.png' alt='icon'/>
                <img src='./nav_img/cart.png'/>
                <img src='./nav_img/notify.png'/>
            </section>
        </nav>
    </div>
  )
}
