import React from 'react'
import Logo from '../Assets/Logo.svg'
import Burger from '../Assets/BurgerMenu.svg'
const NavBar = () => {
    return (
        <div className='bg-[#F5F7F9] w-full h-[124px] z-50 fixed navBar flex items-center justify-center'>
            <div className='flex w-[90%] justify-between items-center'>
                <div className=''>
                    <a href="/" rel="noopener noreferrer">

                        <img src={Logo} alt="" className='h-[70px]' />
                    </a>
                </div>
                <div className='flex items-center gap-14 '>
                    <a href="/" target="_blank" className='hidden lg:flex' rel="noopener noreferrer">Organizational Challenges</a>
                    <a href="/" target="_blank" className='hidden lg:flex' rel="noopener noreferrer">Cascading Solutions</a>
                    <a href="/" target="_blank" className='hidden lg:flex' rel="noopener noreferrer">Smart Technology</a>
                    <img src={Burger} alt="" />
                </div>
            </div>
        </div>
    )
}

export default NavBar