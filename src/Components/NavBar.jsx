import React, { useState } from 'react'
import Logo from '../Assets/Logo.png'
import LogoText from '../Assets/logoText.svg'
import { NavLink } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import { HashLink, NavHashLink } from 'react-router-hash-link';
import { Turn as Hamburger, Turn } from 'hamburger-react'
import {
    useLocation
} from "react-router-dom";
const NavBar = () => {

    const [organizational, setOrganizational] = useState(false)
    const [cascading, setcascading] = useState(false)
    const [smart, setSmart] = useState(false)
    let location = useLocation();
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
        setBurger(false)
    };
    const handleMouseEnter1 = () => {
        setOrganizational(false);
        setcascading(true);
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



    return (
        <div onMouseLeave={handleMouseLeave} className='bg-[#F5F7F9] shadow-black shadow-sm w-full h-[96px] z-[1000] fixed  navBar flex items-center justify-center'>
            <div className='flex w-[90%] justify-between items-center'>
                <HashLink to="/#Home">
                    <div className='flex items-center justify-center min-w-[100px] gap-2'>
                        <img src={Logo} alt="" className='h-[65px]' />
                        <img src={LogoText} alt="" className=' mt-1 h-[50px]' />
                    </div>
                </HashLink>
                <div className='flex items-center gap-14 '>
                    <div onMouseEnter={handleMouseEnter}
                        className='relative group hidden lg:flex '>
                        <NavHashLink
                            to="/Organizational/#homeorganize"
                            className={`${location.pathname}${location.hash}` === '/Organizational/#homeorganize' ? "text-blue-600" : "text-black"}>
                            Organizational Challenges
                        </NavHashLink>
                        <div
                            onMouseLeave={handleMouseLeave}
                            className={`w-[260px] absolute h-[190px] gap-5 bg-[#0c2d4e] top-[63px] left-[-30px] flex-col items-start p-10 justify-center ${organizational ? 'flex' : 'hidden'
                                }`}
                        >
                            <NavHashLink to="/Organizational/#Silo">
                                <h5 className='text-white/90 text-lg font-bold'>The Silo Effect</h5>
                            </NavHashLink>
                            <NavHashLink to="/Organizational/#Data">
                                <h5 className='text-white/90 text-lg font-bold'>Data Visibility</h5>
                            </NavHashLink>
                            <NavHashLink to="/Organizational/#Cascading">
                                <h5 className='text-white/90 text-lg font-bold'>Cascading Objectives</h5>
                            </NavHashLink>
                        </div>
                    </div>
                    <div onMouseEnter={handleMouseEnter1}
                        className='relative group hidden lg:flex'>
                        <NavHashLink
                            to="/Cascading/#homecascade"
                            className={`${location.pathname}${location.hash}` === '/Cascading/#homecascade' ? "text-blue-600" : "text-black"}>
                            Cascading Solutions
                        </NavHashLink>
                        <div
                            onMouseLeave={handleMouseLeave}
                            className={`w-[300px] absolute h-[250px] gap-5 bg-[#0c2d4e] top-[63px] left-[-30px] flex-col items-start p-10 justify-center ${cascading ? 'flex' : 'hidden'
                                }`}
                        >
                            <HashLink to="/Cascading/#Executive">
                                <h5 className='text-white/90 text-lg font-bold '>Executive Business Partner</h5>
                            </HashLink>
                            <HashLink to="/Cascading/#Revenue">
                                <h5 className='text-white/90 text-lg font-bold '>Increase Revenue</h5>
                            </HashLink>
                            <HashLink to="/Cascading/#Expenses">
                                <h5 className='text-white/90 text-lg font-bold '>Reduce Expenses</h5>
                            </HashLink>
                            <HashLink to="/Cascading/#Processes">
                                <h5 className='text-white/90 text-lg font-bold '>Streamline Processes</h5>
                            </HashLink>
                        </div>
                    </div>
                    <div onMouseEnter={handleMouseEnter2}
                        className='relative group hidden lg:flex'>
                        <NavHashLink
                            to="/SmartTech/#homeTech"
                            className={`${location.pathname}${location.hash}` === '/SmartTech/#homeTech' ? "text-blue-600" : "text-black"}>
                            Smart Technology
                        </NavHashLink>

                        <div
                            onMouseLeave={handleMouseLeave}
                            className={`w-[260px] absolute h-[150px] gap-5 bg-[#0c2d4e] top-[63px] left-[-30px] flex-col items-start p-10 justify-center ${smart ? 'flex' : 'hidden'
                                }`}
                        >
                            <HashLink to="/SmartTech/#Definition">
                                <h5 className='text-white/90 text-lg font-bold '>Definition & Approach</h5>
                            </HashLink>
                            <HashLink to="/SmartTech/#Methodology">
                                <h5 className='text-white/90 text-lg font-bold '>Clarity Methodology</h5>
                            </HashLink>
                        </div>
                    </div>
                    <div className='relative'>
                        <Turn onMouseEnter={handleMouseEnterHamburger} toggled={burger} toggle={setBurgerParent} />
                        {/* <img onMouseEnter={handleMouseEnterHamburger} className='cursor-pointer' onClick={handleBurger} src={Burger} alt="" /> */}
                        <div
                            className={`w-[280px] absolute h-[380px] lg:h-[190px] gap-5 bg-[#0c2d4e] -right-[140%] lg:-right-[200%]  top-[72px]  flex-col items-start p-10 justify-center ${burger ? 'flex' : 'hidden'
                                }`}
                        >
                            <div className='grid gap-5 lg:hidden'>
                                <NavHashLink
                                    to="/Organizational/#homeorganize"
                                    className={`${location.pathname}${location.hash}` === '/Organizational/#homeorganize' ? "text-blue-600  text-lg font-normal" : " text-white text-lg font-normal"}>
                                    Organizational Challenges
                                </NavHashLink>
                                <NavHashLink
                                    to="/Cascading/#homecascade"
                                    className={`${location.pathname}${location.hash}` === '/Cascading/#homecascade' ? "text-blue-600  text-lg font-normal" : " text-white text-lg font-normal"}>
                                    Cascading Solutions
                                </NavHashLink>
                                <NavHashLink
                                    to="/SmartTech/#homeTech"
                                    className={`${location.pathname}${location.hash}` === '/SmartTech/#homeTech' ? "text-blue-600  text-lg font-normal" : " text-white text-lg font-normal"}>
                                    Smart Technology
                                </NavHashLink>
                                <div className='w-full border-b border-white'>

                                </div>
                            </div>
                            <HashLink to="/Whycascade/#homewhy">
                                <h5 className='text-white text-lg font-normal'>Why Cascade Clarity</h5>
                            </HashLink>
                            <HashLink to="/Insights/#homeInsights">
                                <h5 className='text-white text-lg font-normal'>Insights</h5>
                            </HashLink>
                            <HashLink to="/Connect/#homeConnect">
                                <h5 className='text-white text-lg font-normal'>Let's Connect</h5>
                            </HashLink>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default NavBar