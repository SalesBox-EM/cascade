import React from 'react'
import Logo from '../../Assets/Vector.png'
import LinkedIn from '../../Assets/Vector.svg'
import { NavLink } from 'react-router-dom'
import LogoText from '../../Assets/Group 26781.svg'
import { HashLink, NavHashLink } from 'react-router-hash-link'
const Footer = () => {
    return (
        <div className='w-full h-full flex p-6 lg:p-12 flex-col items-center justify-center bg-[#0C2239]'>
            <div className='w-[95%] h-full flex flex-col md:flex-row gap-10 items-start mt-3 justify-between '>
                <div className='md:w-2/6 flex flex-col items-start gap-3 p-r justify-center'>
                    <HashLink to="/#Home">
                        <div className='flex items-center justify-center  gap-2'>
                            <img src={Logo} alt="" />
                            <img src={LogoText} alt="" />
                        </div>
                    </HashLink>

                    <h4 className='text-sm  lg:text-xl tracking-tight w-[100%] md:w-[75%] text-gray-400'>
                        Cascade Clarity creates company cohesion and empowers executives, allowing organizations and people to achieve peak potential.
                        <span className="inline-flex items-center">
                            <a href="https://www.linkedin.com/company/cascadeclarity-ai" target="_blank" rel="noopener noreferrer">
                                <img src={LinkedIn} alt="" className="ml-1 w-4 h-4" />
                            </a>
                        </span>
                    </h4>

                </div>
                <div className=' h-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full items-start justify-around'>
                    <div className='flex flex-col group '>
                        <NavHashLink
                            to="/Organizational/#homeorganize"
                            className={'mb-5'}
                        >
                            <h2 className='text-xl  text-white transition-all duration-150 group-hover:text-[#00D2AD] ' >Organizational{' '}</h2>
                            <h2 className='text-xl  text-white transition-all duration-150 group-hover:text-[#00D2AD] ' > Challenges</h2>
                        </NavHashLink>
                        <HashLink to="/Organizational/#Silo">
                            <h6 className='text-[#A5A5A5] hover:text-white transition-all ease-in duration-300 text-lg mb-2'>The Silo Effect
                            </h6>
                        </HashLink>
                        <HashLink to="/Organizational/#Data">
                            <h6 className='text-[#A5A5A5] hover:text-white transition-all ease-in duration-300 text-lg mb-2 '> Data Visibility</h6>
                        </HashLink>
                        <HashLink to="/Organizational/#Cascading">
                            <h6 className='text-[#A5A5A5] hover:text-white transition-all ease-in duration-300 text-lg mb-2'> Cascading Objectives</h6>
                        </HashLink>
                    </div>
                    <div className='flex flex-col group  '>
                        <NavHashLink
                            to="/Cascading/#homecascade"
                        >

                        </NavHashLink>
                        <NavHashLink
                            to="/Cascading/#homecascade"
                            className={'mb-5'}
                        >
                            <h2 className='text-xl  text-white transition-all duration-150 group-hover:text-[#00D2AD] ' > Cascading{' '}</h2>
                            <h2 className='text-xl  text-white transition-all duration-150 group-hover:text-[#00D2AD]  ' > Solutions</h2>
                        </NavHashLink>
                        <HashLink to="/Cascading/#Executive">
                            <h5 className='text-[#A5A5A5] hover:text-white transition-all w-4/4 ease-in duration-300 text-lg mb-2 font-semibold '>Executive Business Partner</h5>
                        </HashLink>
                        <HashLink to="/Cascading/#Revenue">
                            <h5 className='text-[#A5A5A5] hover:text-white transition-all w-4/4 ease-in duration-300 text-lg mb-2 font-semibold '>Increase Revenue</h5>
                        </HashLink>
                        <HashLink to="/Cascading/#Expenses">
                            <h5 className='text-[#A5A5A5] hover:text-white transition-all w-4/4 ease-in duration-300 text-lg mb-2 font-semibold '>Reduce Expenses</h5>
                        </HashLink>
                        <HashLink to="/Cascading/#Processes">
                            <h5 className='text-[#A5A5A5] hover:text-white transition-all w-4/4 ease-in duration-300 text-lg mb-2 font-semibold '>Streamline Processes</h5>
                        </HashLink>

                    </div>
                    <div className='flex flex-col group'>
                        <NavHashLink
                            className={'mb-5'}
                            to="/SmartTech/#homeTech"
                        >
                            <h2 className='text-xl font-semibold  text-white transition-all duration-150 group-hover:text-[#00D2AD] ' > Smart{' '}</h2>
                            <h2 className='text-xl font-semibold  text-white transition-all duration-150 group-hover:text-[#00D2AD] ' > Technology</h2>
                        </NavHashLink>
                        <HashLink to="/SmartTech/#Definition">
                            <h6 className='text-[#A5A5A5] hover:text-white transition-all ease-in duration-300 text-lg mb-2'>Definition & Approach
                            </h6>
                        </HashLink>
                        <HashLink to="/SmartTech/#Methodology">
                            <h6 className='text-[#A5A5A5] hover:text-white transition-all ease-in duration-300 text-lg mb-2'> Clarity Methodology</h6>
                        </HashLink>
                    </div>
                    <div className='flex flex-col '>
                        <HashLink to="/Whycascade/#homewhy">
                            <div className='flex flex-col group mb-5'>
                                <h2 className='text-xl  text-white transition-all duration-150 group-hover:text-[#00D2AD] ' > Why{' '}</h2>
                                <h2 className='text-xl  text-white transition-all duration-150 group-hover:text-[#00D2AD] ' > Cascade Clarity?</h2>
                            </div>
                        </HashLink>
                        <HashLink to="/Insights/#homeInsights">
                            <h6 className='text-[#A5A5A5] hover:text-white transition-all ease-in duration-300 text-lg mb-2'>Insights</h6>

                        </HashLink>
                        <HashLink to="/Connect/#homeConnect">
                            <h6 className='text-[#A5A5A5] hover:text-white transition-all ease-in duration-300 text-lg mb-2'>Let’s Connect</h6>

                        </HashLink>

                        {/* <NavLink to='/Whycascade' onClick={() => {
                            const navbarHeight = 96; // Height of your fixed navbar in pixels
                            const executiveDiv = document.getElementById('aboutUs');
                            if (executiveDiv) {
                                const topOffset = executiveDiv.offsetTop - navbarHeight;
                                window.scrollTo({
                                    top: topOffset,
                                    behavior: ''
                                });
                            }
                        }}>
                            <h6 className='text-[#A5A5A5] mb-2'>About us</h6>
                        </NavLink> */}
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center mt-16'>
                <div className='flex gap-1'>
                    <h3 className='text-lg text-[#00D2AD]'>Privacy Policy </h3>
                    <h3 className='text-lg'> & </h3>
                    <h3 className='text-lg text-[#00D2AD]'> Terms of Use</h3>
                </div>
                <h3 className='text-lg text-[#9B9B9B]'>© 2023 powered by <a href="https://www.salesbox.io/" className='hover:text-lime-500 transition-all' target="_blank" rel="noopener noreferrer">Salesmrkt.com</a></h3>
            </div>
        </div>
    )
}

export default Footer