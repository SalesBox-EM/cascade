import React from 'react'
import Logo from '../../Assets/Vector.png'
import LinkedIn from '../../Assets/Vector.svg'
import { NavLink } from 'react-router-dom'
import LogoText from '../../Assets/Group 26781.svg'
const Footer = () => {
    return (
        <div className='w-full h-full flex p-12 flex-col items-center justify-center bg-[#0C2239]'>
            <div className='w-[95%] h-full flex gap-10 items-start justify-between '>
                <div className='w-2/6 flex flex-col items-start gap-3 justify-center'>
                    <NavLink to='/' onClick={() => {
                        const navbarHeight = 0; // Height of your fixed navbar in pixels
                        const executiveDiv = document.getElementById('home');
                        if (executiveDiv) {
                            const topOffset = executiveDiv.offsetTop - navbarHeight;
                            window.scrollTo({
                                top: topOffset,
                                behavior: 'smooth'
                            });
                        }
                    }}>
                        <div className='flex items-center justify-center gap-2'>
                            <img src={Logo} alt="" />
                            <img src={LogoText} alt="" />
                        </div>
                    </NavLink>
                    <h4 className='text-sm  lg:text-lg tracking-tight w-[75%] text-gray-500'>
                        Cascade Clarity creates company cohesion and empowers executives, allowing organizations and people to achieve peak potential.
                        <span className="inline-flex items-center">
                            <a href="https://www.linkedin.com/in/cuellar/" target="_blank" rel="noopener noreferrer">
                                <img src={LinkedIn} alt="" className="ml-1 w-4 h-4" />
                            </a>
                        </span>
                    </h4>

                </div>
                <div className=' h-full grid grid-cols-4 gap-6 items-start justify-around'>
                    <div className='flex flex-col '>
                        <NavLink to='/Organizational' onClick={() => {
                            const navbarHeight = 0; // Height of your fixed navbar in pixels
                            const executiveDiv = document.getElementById('homeorganize');
                            if (executiveDiv) {
                                const topOffset = executiveDiv.offsetTop - navbarHeight;
                                window.scrollTo({
                                    top: topOffset,
                                    behavior: 'smooth'
                                });
                            }
                        }}>
                            <div className='flex group'>
                                <h2 className='text-xl  text-white transition-all duration-150 group-hover:text-[#00D2AD] mb-5' >Organizational</h2>
                                <h2 className='text-xl  text-white transition-all duration-150 group-hover:text-[#00D2AD] mb-5' > Challenges</h2>
                            </div>
                        </NavLink>
                        <NavLink to='/Organizational' onClick={() => {
                            const navbarHeight = 96; // Height of your fixed navbar in pixels
                            const executiveDiv = document.getElementById('Silo');
                            if (executiveDiv) {
                                const topOffset = executiveDiv.offsetTop - navbarHeight;
                                window.scrollTo({
                                    top: topOffset,
                                    behavior: 'smooth'
                                });
                            }
                        }}>
                            <h6 className='text-[#A5A5A5] text-lg mb-2'>The Silo Effect
                            </h6>
                        </NavLink>
                        <NavLink to='/Organizational' onClick={() => {
                            const navbarHeight = 96; // Height of your fixed navbar in pixels
                            const executiveDiv = document.getElementById('Data');
                            if (executiveDiv) {
                                const topOffset = executiveDiv.offsetTop - navbarHeight;
                                window.scrollTo({
                                    top: topOffset,
                                    behavior: 'smooth'
                                });
                            }
                        }}>
                            <h6 className='text-[#A5A5A5] text-lg mb-2 '> Data Visibility</h6>
                        </NavLink>
                        <NavLink to='/Organizational' onClick={() => {
                            const navbarHeight = 96; // Height of your fixed navbar in pixels
                            const executiveDiv = document.getElementById('Cascading');
                            if (executiveDiv) {
                                const topOffset = executiveDiv.offsetTop - navbarHeight;
                                window.scrollTo({
                                    top: topOffset,
                                    behavior: 'smooth'
                                });
                            }
                        }}>
                            <h6 className='text-[#A5A5A5] text-lg mb-2'> Cascading Objectives</h6>
                        </NavLink>
                    </div>
                    <div className='flex flex-col'>
                        <NavLink to='/Cascading' onClick={() => {
                            const navbarHeight = 0; // Height of your fixed navbar in pixels
                            const executiveDiv = document.getElementById('homecascade');
                            if (executiveDiv) {
                                const topOffset = executiveDiv.offsetTop - navbarHeight;
                                window.scrollTo({
                                    top: topOffset,
                                    behavior: 'smooth'
                                });
                            }
                        }} >
                            <h2 className='text-xl text-white transition-all duration-150 hover:text-[#00D2AD] mb-5 '> Cascading
                                Solutions</h2>
                        </NavLink>
                        <NavLink to='/Cascading' onClick={() => {
                            const navbarHeight = 96; // Height of your fixed navbar in pixels
                            const executiveDiv = document.getElementById('Executive');
                            if (executiveDiv) {
                                const topOffset = executiveDiv.offsetTop - navbarHeight;
                                window.scrollTo({
                                    top: topOffset,
                                    behavior: 'smooth'
                                });
                            }
                        }}>
                            <h6 className='text-[#A5A5A5] text-lg mb-2'>Executive Business Partner
                            </h6>
                        </NavLink>
                        <NavLink to='/Cascading' onClick={() => {
                            const navbarHeight = 96; // Height of your fixed navbar in pixels
                            const executiveDiv = document.getElementById('Revenue');
                            if (executiveDiv) {
                                const topOffset = executiveDiv.offsetTop - navbarHeight;
                                window.scrollTo({
                                    top: topOffset,
                                    behavior: 'smooth'
                                });
                            }
                        }}>
                            <h6 className='text-[#A5A5A5] text-lg mb-2'>Increase Revenue</h6>

                        </NavLink>
                        <NavLink to='/Cascading' onClick={() => {
                            const navbarHeight = 96; // Height of your fixed navbar in pixels
                            const executiveDiv = document.getElementById('Expenses');
                            if (executiveDiv) {
                                const topOffset = executiveDiv.offsetTop - navbarHeight;
                                window.scrollTo({
                                    top: topOffset,
                                    behavior: 'smooth'
                                });
                            }
                        }}>
                            <h6 className='text-[#A5A5A5] text-lg mb-2'>Reduce Expenses</h6>

                        </NavLink>
                        <NavLink to='/Cascading' onClick={() => {
                            const navbarHeight = 96; // Height of your fixed navbar in pixels
                            const executiveDiv = document.getElementById('Processes');
                            if (executiveDiv) {
                                const topOffset = executiveDiv.offsetTop - navbarHeight;
                                window.scrollTo({
                                    top: topOffset,
                                    behavior: 'smooth'
                                });
                            }
                        }}>
                            <h6 className='text-[#A5A5A5] text-lg mb-2'> Streamline Processes   </h6>

                        </NavLink>
                    </div>
                    <div className='flex flex-col'>
                        <NavLink to='/SmartTech' onClick={() => {
                            const navbarHeight = 0; // Height of your fixed navbar in pixels
                            const executiveDiv = document.getElementById('homeTech');
                            if (executiveDiv) {
                                const topOffset = executiveDiv.offsetTop - navbarHeight;
                                window.scrollTo({
                                    top: topOffset,
                                    behavior: 'smooth'
                                });
                            }
                        }}>
                            <h2 className='text-xl text-white transition-all duration-150 hover:text-[#00D2AD] mb-5 '>Smart
                                Technology</h2>
                        </NavLink>
                        <NavLink to='/SmartTech' onClick={() => {
                            const navbarHeight = 96; // Height of your fixed navbar in pixels
                            const executiveDiv = document.getElementById('Definition');
                            if (executiveDiv) {
                                const topOffset = executiveDiv.offsetTop - navbarHeight;
                                window.scrollTo({
                                    top: topOffset,
                                    behavior: 'smooth'
                                });
                            }
                        }}>
                            <h6 className='text-[#A5A5A5] text-lg mb-2'>Definition & Approach
                            </h6>
                        </NavLink>
                        <NavLink to='/SmartTech' onClick={() => {
                            const navbarHeight = 96; // Height of your fixed navbar in pixels
                            const executiveDiv = document.getElementById('Methodology');
                            if (executiveDiv) {
                                const topOffset = executiveDiv.offsetTop - navbarHeight;
                                window.scrollTo({
                                    top: topOffset,
                                    behavior: 'smooth'
                                });
                            }
                        }}>
                            <h6 className='text-[#A5A5A5] text-lg mb-2'> Clarity Methodology</h6>
                        </NavLink>
                    </div>
                    <div className='flex flex-col'>
                        <NavLink to='/Whycascade' onClick={() => {
                            const navbarHeight = 0; // Height of your fixed navbar in pixels
                            const executiveDiv = document.getElementById('homewhy');
                            if (executiveDiv) {
                                const topOffset = executiveDiv.offsetTop - navbarHeight;
                                window.scrollTo({
                                    top: topOffset,
                                    behavior: 'smooth'
                                });
                            }
                        }}>
                            <h2 className='text-xl text-white transition-all duration-150 hover:text-[#00D2AD] mb-5 '>Why Cascade Clarity</h2>
                        </NavLink>
                        <NavLink to='/Insights' onClick={() => {
                            const navbarHeight = 0; // Height of your fixed navbar in pixels
                            const executiveDiv = document.getElementById('homeInsights');
                            if (executiveDiv) {
                                const topOffset = executiveDiv.offsetTop - navbarHeight;
                                window.scrollTo({
                                    top: topOffset,
                                    behavior: 'smooth'
                                });
                            }
                        }}>
                            <h6 className='text-[#A5A5A5] mb-2'>Insights</h6>
                        </NavLink>
                        <NavLink to='/Connect' onClick={() => {
                            const navbarHeight = 0; // Height of your fixed navbar in pixels
                            const executiveDiv = document.getElementById('homeConnect');
                            if (executiveDiv) {
                                const topOffset = executiveDiv.offsetTop - navbarHeight;
                                window.scrollTo({
                                    top: topOffset,
                                    behavior: 'smooth'
                                });
                            }
                        }}>
                            <h6 className='text-[#A5A5A5] mb-2'>Let’s Connect</h6>
                        </NavLink>
                        {/* <NavLink to='/Whycascade' onClick={() => {
                            const navbarHeight = 96; // Height of your fixed navbar in pixels
                            const executiveDiv = document.getElementById('aboutUs');
                            if (executiveDiv) {
                                const topOffset = executiveDiv.offsetTop - navbarHeight;
                                window.scrollTo({
                                    top: topOffset,
                                    behavior: 'smooth'
                                });
                            }
                        }}>
                            <h6 className='text-[#A5A5A5] mb-2'>About us</h6>
                        </NavLink> */}
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center mt-12'>
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