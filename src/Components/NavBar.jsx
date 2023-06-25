import React from 'react'
import Logo from '../Assets/Logo.png'
import LogoText from '../Assets/logoText.svg'
import Burger from '../Assets/BurgerMenu.svg'
const NavBar = () => {
    return (
        <div className='bg-[#F5F7F9] shadow-black shadow-sm w-full h-[96px] z-50 fixed navBar flex items-center justify-center'>
            <div className='flex w-[90%] justify-between items-center'>
                <div className='flex items-center justify-center gap-2'>
                    <img src={Logo} alt="" className='h-[65px]' />
                    <img src={LogoText} alt="" className=' mt-1 h-[50px]' />
                </div>

                <div className='flex items-center gap-14 '>
                    <div className='relative group'>
                        <a href="/" target="_blank" className='hidden  lg:flex text-lg font-medium' rel="noopener noreferrer">Organizational Challenges</a>
                        <div className='w-[260px] hidden group-hover:flex absolute h-[220px] gap-5 bg-[#0c2d4e] top-[63px] left-[-30px]  flex-col items-start p-10 justify-center'>
                            <a href="/" className='text-white/90'>The Silo Effect</a>
                            <a href="/" className='text-white/90'>Data Visibility</a>
                            <a href="/" className='text-white/90'>Cascading Objectives</a>
                        </div>
                    </div>
                    <div className='relative group'>
                        <a href="/" target="_blank" className='hidden  lg:flex text-lg font-medium' rel="noopener noreferrer">Cascading Solutions</a>
                        <div className='w-[260px] hidden group-hover:flex absolute h-[250px] gap-5 bg-[#0c2d4e] top-[63px] left-[-30px]  flex-col items-start p-10 justify-center'>
                            <a href="/" className='text-white/90'>Executive Business Partner</a>
                            <a href="/" className='text-white/90'>Increase Revenue</a>
                            <a href="/" className='text-white/90'>Reduce Expenses</a>
                            <a href="/" className='text-white/90'>Streamline Processes </a>
                        </div>
                    </div>
                    <div className='relative group'>
                        <a href="/" target="_blank" className='hidden  lg:flex text-lg font-medium' rel="noopener noreferrer">Smart Technology</a>
                        <div className='w-[260px] hidden group-hover:flex absolute h-[180px] gap-5 bg-[#0c2d4e] top-[63px] left-[-30px]  flex-col items-start p-5 justify-center'>
                            <a href="/" className='text-white/90'>Definition & Approach</a>
                            <a href="/" className='text-white/90'>Clarity Methodology</a>
                        </div>
                    </div>

                    <img src={Burger} alt="" />
                </div>
            </div>
        </div>
    )
}

export default NavBar