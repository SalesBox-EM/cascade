import React, { useState } from 'react'
import Logo from '../Assets/Logo.png'
import LogoText from '../Assets/logoText.svg'
import Burger from '../Assets/BurgerMenu.svg'
import { NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { Turn as Hamburger, Turn } from 'hamburger-react'
const NavBar = () => {
    let activeClassName =
        "text-white text-lg font-normal ";
    const inActiveClassName = "text-black text-lg font-normal";
    const [organizational, setOrganizational] = useState(false)
    const [cascading, setcascading] = useState(false)
    const [smart, setSmart] = useState(false)
    const [burger, setBurger] = useState(false)
    const handleMouseEnter = () => {
        setOrganizational(true);
        setcascading(false);
        setSmart(false);
    };
    const setBurgerParent = () => {
        setBurger(!burger)
        setOrganizational(false);
        setcascading(false);
        setSmart(false);
    }

    const handleMouseLeave = () => {
        setOrganizational(false);
        setcascading(false);
        setSmart(false);
    };
    const handleMouseEnter1 = () => {
        setOrganizational(false);
        setcascading(true);
        setSmart(false);
    };

    const handleMouseLeave1 = () => {
        setOrganizational(false);
        setcascading(false);
        setSmart(false);
    };
    const handleMouseEnter2 = () => {
        if (burger === false) {
            setOrganizational(false);
            setcascading(false);
            setSmart(true);
        }
        else {
            setOrganizational(false);
            setcascading(false);
            setSmart(false);
        }
    };
    const handleMouseEnterHamburger = () => {
        setOrganizational(false);
        setcascading(false);
        setSmart(false);
    }

    const handleMouseLeave2 = () => {
        setOrganizational(false);
        setcascading(false);
        setSmart(false);
    };


    return (
        <div className='bg-[#F5F7F9] shadow-black shadow-sm w-full h-[96px] z-50 fixed navBar flex items-center justify-center'>
            <div className='flex w-[90%] justify-between items-center'>
                <NavLink to={{ pathname: '/', search: '?scrollTo=Home' }}>
                    <div className='flex items-center justify-center gap-2'>
                        <img src={Logo} alt="" className='h-[65px]' />
                        <img src={LogoText} alt="" className=' mt-1 h-[50px]' />
                    </div>
                </NavLink>
                <div className='flex items-center gap-14 '>
                    <div onMouseEnter={handleMouseEnter}
                        className='relative group'>
                        <NavLink className={({ isActive }) =>
                            isActive ? " text-blue-950 font-semibold" : " text-black font-normal"
                        } to={{ pathname: '/Organizational', search: '?scrollTo=homeorganize' }}>
                            Organizational Challenges
                        </NavLink>
                        <div
                            onMouseLeave={handleMouseLeave}
                            className={`w-[260px] absolute h-[190px] gap-5 bg-[#0c2d4e] top-[63px] left-[-30px] flex-col items-start p-10 justify-center ${organizational ? 'flex' : 'hidden'
                                }`}
                        >
                            <HashLink smooth to="/Organizational/#Silo">
                                <h5 className='text-white/90 text-lg font-bold'>The Silo Effect</h5>
                            </HashLink>
                            <HashLink smooth to="/Organizational/#Data">
                                <h5 className='text-white/90 text-lg font-bold'>Data Visibility</h5>
                            </HashLink>
                            <HashLink smooth to="/Organizational/#Cascading">
                                <h5 className='text-white/90 text-lg font-bold'>Cascading Objectives</h5>
                            </HashLink>
                        </div>
                    </div>
                    <div onMouseEnter={handleMouseEnter1}
                        className='relative group'>
                        <NavLink className={({ isActive }) =>
                            isActive ? " text-blue-950 font-semibold" : " text-black font-normal"
                        } to={{ pathname: '/Cascading', search: '?scrollTo=homecascade' }}>
                            Cascading Solutions
                        </NavLink>
                        <div
                            onMouseLeave={handleMouseLeave1}
                            className={`w-[300px] absolute h-[250px] gap-5 bg-[#0c2d4e] top-[63px] left-[-30px] flex-col items-start p-10 justify-center ${cascading ? 'flex' : 'hidden'
                                }`}
                        >
                            <NavLink to={{ pathname: '/Cascading', search: '?scrollTo=Executive' }}>
                                <h5 className='text-white/90 text-lg font-bold '>Executive Business Partner</h5>
                            </NavLink>
                            <NavLink to={{ pathname: '/Cascading', search: '?scrollTo=Revenue' }}>
                                <h5 className='text-white/90 text-lg font-bold '>Increase Revenue</h5>
                            </NavLink>
                            <NavLink to={{ pathname: '/Cascading', search: '?scrollTo=Expenses' }}>
                                <h5 className='text-white/90 text-lg font-bold '>Reduce Expenses</h5>
                            </NavLink>
                            <NavLink to={{ pathname: '/Cascading', search: '?scrollTo=Processes' }}>
                                <h5 className='text-white/90 text-lg font-bold '>Streamline Processes</h5>

                            </NavLink>
                        </div>
                    </div>
                    <div onMouseEnter={handleMouseEnter2}
                        className='relative group'>
                        <NavLink className={({ isActive }) =>
                            isActive ? " text-blue-950 font-semibold" : " text-black font-normal"
                        } to={{ pathname: '/SmartTech', search: '?scrollTo=homeTech' }}>
                            Smart Technology
                        </NavLink>
                        <div
                            onMouseLeave={handleMouseLeave2}
                            className={`w-[260px] absolute h-[150px] gap-5 bg-[#0c2d4e] top-[63px] left-[-30px] flex-col items-start p-10 justify-center ${smart ? 'flex' : 'hidden'
                                }`}
                        >
                            <NavLink to={{ pathname: '/SmartTech', search: '?scrollTo=Definition' }}>
                                <h5 className='text-white/90 text-lg font-bold '>Definition & Approach</h5>
                            </NavLink>
                            <NavLink to={{ pathname: '/SmartTech', search: '?scrollTo=Methodology' }}>
                                <h5 className='text-white/90 text-lg font-bold '>Clarity Methodology</h5>
                            </NavLink>

                        </div>
                    </div>
                    <div className='relative'>
                        <Turn onMouseEnter={handleMouseEnterHamburger} toggled={burger} toggle={setBurgerParent} />
                        {/* <img onMouseEnter={handleMouseEnterHamburger} className='cursor-pointer' onClick={handleBurger} src={Burger} alt="" /> */}
                        <div
                            className={`w-[260px] absolute h-[190px] gap-5 bg-[#0c2d4e] -right-[160%]  top-[72px]  flex-col items-start p-10 justify-center ${burger ? 'flex' : 'hidden'
                                }`}
                        >

                            <NavLink to={{ pathname: '/Whycascade', search: '?scrollTo=homewhy' }}>
                                <h5 className='text-white text-lg font-normal'>Why Cascade Clarity</h5>
                            </NavLink>
                            <NavLink to={{ pathname: '/Insights', search: '?scrollTo=homeInsights' }}>
                                <h5 className='text-white text-lg font-normal'>Insights</h5>
                            </NavLink>
                            <NavLink to={{ pathname: '/Connect', search: '?scrollTo=homeConnect' }}>
                                <h5 className='text-white text-lg font-normal'>Let's Connect</h5>
                            </NavLink>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default NavBar