import React from 'react'
import Logo from '../../Assets/Vector.png'
import LinkedIn from '../../Assets/Vector.svg'
import LogoText from '../../Assets/Group 26781.svg'
const Footer = () => {
    return (
        <div className='w-full h-full flex p-12 flex-col items-center justify-center bg-[#0C2239]'>
            <div className='w-[80%] h-full flex gap-10 items-start justify-between '>
                <div className='w-2/5 flex flex-col items-start gap-3 justify-center'>
                    <div className='flex items-center justify-center gap-2'>
                        <img src={Logo} alt="" />
                        <img src={LogoText} alt="" />
                    </div>
                    <h4 className='text-sm  lg:text-base tracking-tight w-[75%] text-gray-500 inline-block'>Cascade Clarity creates company cohesion and empowers executives, allowing organizations and people to achieve peak potential. <a href="http://" className='flex items-center w-fit' target="_blank" rel="noopener noreferrer"><img src={LinkedIn} alt="" /></a></h4>
                </div>
                <div className=' h-full grid grid-cols-4 gap-4 items-start justify-center'>
                    <div className='flex flex-col '>
                        <h2 className='text-xl text-[#00D2AD] mb-5' >Organizational Challenges</h2>
                        <h6 className='text-[#A5A5A5] mb-2'>The Silo Effect
                        </h6>
                        <h6 className='text-[#A5A5A5] mb-2'> Data Visibility</h6>
                        <h6 className='text-[#A5A5A5] mb-2'> Cascading Objectives</h6>
                    </div>
                    <div className='flex flex-col'>
                        <h2 className='text-xl text-[#00D2AD] mb-5 '> Cascading
                            Solutions</h2>
                        <h6 className='text-[#A5A5A5] mb-2'>Executive Business Partner
                        </h6>
                        <h6 className='text-[#A5A5A5] mb-2'>Increase Revenue</h6>
                        <h6 className='text-[#A5A5A5] mb-2'>Reduce Expenses</h6>
                        <h6 className='text-[#A5A5A5] mb-2'> Streamline Processes   </h6>
                    </div>
                    <div className='flex flex-col'>
                        <h2 className='text-xl text-[#00D2AD] mb-5 '>Smart
                            Technology</h2>
                        <h6 className='text-[#A5A5A5] mb-2'>Definition & Approach
                        </h6>
                        <h6 className='text-[#A5A5A5] mb-2'> Clarity Methodology</h6>
                    </div>
                    <div className='flex flex-col'>
                        <h2 className='text-xl text-[#00D2AD] mb-5 '>Why
                            Cascade Clarity</h2>
                        <h6 className='text-[#A5A5A5] mb-2'>About Us

                        </h6>
                        <h6 className='text-[#A5A5A5] mb-2'>Insights</h6>
                        <h6 className='text-[#A5A5A5] mb-2'>    Let’s Connect</h6>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center mt-12'>
                <h3 className='text-lg text-[#00D2AD]'>Privacy Policy & Terms of Use.</h3>
                <h3 className='text-lg text-[#9B9B9B]'>© 2023 powered by Salesmrkt.com</h3>
            </div>
        </div>
    )
}

export default Footer