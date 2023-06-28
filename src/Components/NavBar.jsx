import React, { useState } from 'react'
import Logo from '../Assets/Logo.png'
import LogoText from '../Assets/logoText.svg'
import Burger from '../Assets/BurgerMenu.svg'
import { NavLink } from "react-router-dom";

const NavBar = () => {
    const [organizational, setOrganizational] = useState(false)
    const [cascading, setcascading] = useState(false)
    const [smart, setSmart] = useState(false)
    const [burger, setBurger] = useState(false)
    const handleMouseEnter = () => {
        setOrganizational(true);
        setcascading(false);
        setSmart(false);
    };

    const handleMouseLeave = () => {
        setOrganizational(false);
    };
    const handleMouseEnter1 = () => {
        setOrganizational(false);
        setcascading(true);
        setSmart(false);
    };

    const handleMouseLeave1 = () => {
        setcascading(false);
    };
    const handleMouseEnter2 = () => {
        setOrganizational(false);
        setcascading(false);
        setSmart(true);
    };

    const handleMouseLeave2 = () => {
        setSmart(false);
    };
    const handleBurger = () => {
        setOrganizational(false);
        setcascading(false);
        setSmart(false);
        setBurger(!burger);
    };

    return (
        <div className='bg-[#F5F7F9] shadow-black shadow-sm w-full h-[96px] z-50 fixed navBar flex items-center justify-center'>
            <div className='flex w-[90%] justify-between items-center'>
                <NavLink to={'/'}>
                    <div className='flex items-center justify-center gap-2'>
                        <img src={Logo} alt="" className='h-[65px]' />
                        <img src={LogoText} alt="" className=' mt-1 h-[50px]' />
                    </div>
                </NavLink>
                <div className='flex items-center gap-14 '>
                    <div onMouseEnter={handleMouseEnter}
                        className='relative group'>
                        <NavLink to='/Organizational'>
                            <h5 className='text-black text-lg font-normal'>Organizational Challenges</h5>
                        </NavLink>
                        <div
                            onMouseLeave={handleMouseLeave}
                            className={`w-[260px] absolute h-[190px] gap-5 bg-[#0c2d4e] top-[63px] left-[-30px] flex-col items-start p-10 justify-center ${organizational ? 'flex' : 'hidden'
                                }`}
                        >
                            <a href='/' className='text-white/90'>The Silo Effect</a>
                            <a href='/' className='text-white/90'>Data Visibility</a>
                            <a href='/' className='text-white/90'>Cascading Objectives</a>
                        </div>
                    </div>
                    <div onMouseEnter={handleMouseEnter1}
                        className='relative group'>
                        <NavLink to='/Cascading'>
                            <h5 className='text-black text-lg font-normal'>Cascading Solutions</h5>
                        </NavLink>
                        <div
                            onMouseLeave={handleMouseLeave1}
                            className={`w-[280px] absolute h-[250px] gap-5 bg-[#0c2d4e] top-[63px] left-[-30px] flex-col items-start p-10 justify-center ${cascading ? 'flex' : 'hidden'
                                }`}
                        >
                            <a href="/" className='text-white/90'>Executive Business Partner</a>
                            <a href="/" className='text-white/90'>Increase Revenue</a>
                            <a href="/" className='text-white/90'>Reduce Expenses</a>
                            <a href="/" className='text-white/90'>Streamline Processes </a>
                        </div>
                    </div>
                    <div onMouseEnter={handleMouseEnter2}
                        className='relative group'>
                        <NavLink to='/SmartTech'>
                            <h5 className='text-black text-lg font-normal'>Smart Technology</h5>
                        </NavLink>
                        <div
                            onMouseLeave={handleMouseLeave2}
                            className={`w-[260px] absolute h-[150px] gap-5 bg-[#0c2d4e] top-[63px] left-[-30px] flex-col items-start p-10 justify-center ${smart ? 'flex' : 'hidden'
                                }`}
                        >
                            <a href="/" className='text-white/90'>Definition & Approach</a>
                            <a href="/" className='text-white/90'>Clarity Methodology</a>
                        </div>
                    </div>
                    <div className='relative'>

                        <img className='cursor-pointer' onClick={handleBurger} src={Burger} alt="" />
                        <div
                            className={`w-[260px] absolute h-[190px] gap-5 bg-[#0c2d4e] -right-[400%]  top-[55px]  flex-col items-start p-10 justify-center ${burger ? 'flex' : 'hidden'
                                }`}
                        >
                            <NavLink to='/Whycascade'>
                                <h5 className='text-white text-lg font-normal'>Why Cascade Clarity</h5>
                            </NavLink>  <NavLink to='/Insights'>
                                <h5 className='text-white text-lg font-normal'>Insights</h5>
                            </NavLink>  <NavLink to='/Connect'>
                                <h5 className='text-white text-lg font-normal'>Let's Connect</h5>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar