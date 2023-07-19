import React from 'react'
import NavBar from '../NavBar'
import LandingImage from '../../Assets/OrganizationalBG.png'
import UnderLine from '../../Assets/UnderLine.svg'
import LightBulp from '../../Assets/LightBulp.svg'
import GettyImage from '../../Assets/GettyImages-1165320149 2.png'
import GettyImage2 from '../../Assets/GettyImages-1165320149 1.png'
import Footer from '../Footer/Footer'
import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'
import { BsChevronRight } from 'react-icons/bs'
const Organizational = () => {
    const location = useLocation();
    const scrollRefHome = useRef(null);
    const scrollRef1 = useRef(null);
    const scrollRef2 = useRef(null);
    const scrollRef3 = useRef(null);


    return (
        <div id='homeorganize' ref={scrollRefHome} className='w-full h-full overflow-hidden '>
            <NavBar />
            <div className=' w-full h-full relative'>
                <div className='h-full lg:mt-[16px] absolute w-[100%] p-6 sm:p-16 flex flex-col items-start justify-center gap-10 z-40   overflow-hidden'>
                    <div className=' w-full '>
                        <h1 className='z-40 '>
                            Organizational
                        </h1>
                        <h1 className='z-40'>
                            Challenges
                            <img src={UnderLine} className='left-[-100px] lg:w-[40%] mt-6 md:w-[60%] w-[80%]    absolute' alt="" />
                        </h1>
                    </div>
                    <div className='flex flex-col gap-4 mt-4'>
                        <HashLink smooth to="/Organizational/#Silo">
                            <h3 className='text-lg md:text-2xl xl:text-3xl 2xl:text-[40px] font-semibold hover:text-[#215488] transition-all ease-in duration-300'>The Silo Effect</h3>
                        </HashLink>
                        <HashLink smooth to="/Organizational/#Data">
                            <h3 className='text-lg md:text-2xl xl:text-3xl 2xl:text-[40px] font-semibold hover:text-[#215488] transition-all ease-in duration-300'>Data Visibility</h3>
                        </HashLink>
                        <HashLink smooth to="/Organizational/#Cascading">
                            <h3 className='text-lg md:text-2xl xl:text-3xl 2xl:text-[40px] font-semibold hover:text-[#215488] transition-all ease-in duration-300'>Cascading Objectives</h3>
                        </HashLink>
                    </div>
                </div>

                <img src={LandingImage} className='pt-[96px] min-h-[80vh] object-cover w-full  ' alt="" />
            </div>

            <div id='Silo' >
                <h1 className=' text-center  pt-[96px] mb-4 text-[#215488]'>The Silo Effect</h1>
            </div>
            <img src={UnderLine} className='w-[64%]' alt="" />
            <div ref={scrollRef1} className='w-full h-full flex flex-col items-center justify-center'>
                <div className='w-[80%] h-full flex flex-col md:flex-row items-center  p-6 gap-10'>
                    <img src={LightBulp} className='xl:w-[340px] w-[150px]' alt="" />
                    <div className='flex flex-col gap-6 text-xl'>
                        <p>Through decades of experience, we have gained a deep understanding of the challenges organizational structures can create.
                        </p>
                        <p>  One such challenge is the silo effect, a phenomenon more attributable to psychology than any managerial or leadership deficiency. Silos often cause information for strategic decision-making to be biased, incomplete, and obscured.
                        </p>
                        <p>Cascade Clarity provides an unbiased bridge and engagement mechanism for senior leaders, facilitating cross-organizational gaps while deploying smart technology solutions when needed. </p>
                        <p>The result? Neutral, reliable data and metrics for strategic decision-making.</p>
                        <HashLink to="/Connect/#homeConnect">
                            <h5 className='hover:text-sky-500 text-sky-700 text-sky font-semibold text-2xl flex items-center justify-center transition-all duration-75 ease-in w-fit gap-1'>Let's Discuss <BsChevronRight className='text-sm' /></h5>
                        </HashLink>
                    </div>
                </div>
            </div>
            <div ref={scrollRef2} className='w-full h-full relative mb-6'>
                <h1 className=' text-center mt-12  text-[#215488]'>Data Visibility </h1>
                <img src={UnderLine} className='w-[63%] absolute right-0 -bottom-[20px]  ' alt="" />
            </div>
            <div className='w-full h-full flex flex-col items-center justify-center mb-6'>
                <div className='w-[85%] h-full flex flex-col lg:flex-row items-center  p-6 gap-10'>
                    <img src={GettyImage} className='xl:w-[340px]  w-[180px]' alt="" />
                    <div className='flex flex-col gap-6 text-xl w-full'>
                        <p>
                            Unbiased, intelligible, and summarized data for strategic decision-making can be challenging to obtain because of the following reasons:
                        </p>
                        <div>
                            <h5 className='text-[#1a3c5f] font-semibold'> Siloed Data & Systems</h5>
                            <p>
                                Isolated systems and department-specific databases. Lack of communication and integration.
                            </p>
                        </div>
                        <div>
                            <h5 className='text-[#1a3c5f] font-semibold'> Organizational Complexity & Communication Gaps</h5>
                            <p>
                                Several layers of hierarchy, departments, and teams.
                            </p>
                        </div>
                        <div>
                            <h5 className='text-[#1a3c5f] font-semibold'>  Limited Data Accessibility</h5>
                            <p>
                                Minimal transparency with little to no collaboration.
                            </p>
                        </div>
                        <HashLink to="/Connect/#homeConnect">
                            <h5 className='hover:text-sky-500 text-sky-700 text-sky font-semibold text-2xl flex items-center justify-center transition-all duration-75 ease-in w-fit gap-1'>Let's Discuss <BsChevronRight className='text-sm' /></h5>
                        </HashLink>

                    </div>
                </div>
            </div>
            <div id='Cascading' ref={scrollRef3} className='w-full h-full  flex flex-col items-center justify-center mb-6'>
                <div className='w-[80%] h-full flex flex-col md:flex-row items-center justify-between  p-6 gap-10'>
                    <div className=' flex flex-col relative justify-center items-start'>
                        <div className='flex flex-col items-start relative w-full  '>
                            <h1 className=' text-center   text-[#215488] h-fit  mt-24'>Cascading </h1>
                            <h1 className=' text-center   text-[#215488] h-fit mb-3'>Objectives </h1>
                            <img src={UnderLine} className='absolute bottom-0   left-[-200px] ' alt="" />
                        </div>
                        <h5 className='mt-10 mb-3 '>Common Corporate Objectives typically
                            take some form of:
                        </h5>
                        <ul className='list-disc '>
                            <li>Increasing Revenue
                            </li>
                            <li>Reducing Expenses

                            </li>
                            <li> Improving Customer Satisfaction

                            </li>
                            <li> Streamlining Business Processes
                            </li>
                        </ul>
                    </div>
                    <img src={GettyImage2} className='w-[100%] md:w-[50%]' alt="" />
                </div>
                <div className='w-[80%] h-full  mb-6 '>
                    <h5>In each instance, the objective must be broken down into cascaded goals with corresponding Objective and Key Result measurements (OKRs).</h5>
                    <div className='w-full h-full border-2 p-4 rounded-2xl mt-6 border-blue-950/50'>
                        <h5>For example: Increase Sales by 20 %</h5>
                        <ul className='pl-8 pt-2 list-disc'>
                            <li> <b>Marketing Department</b>: Develop and implement targeted marketing campaigns to increase Market Qualified Leads (MQLs) by 30%</li>
                            <li>  <b>Sales Department</b> : Increase the number of sales qualified leads (SQLs) by 40 %</li>
                            <li> <b>Customer Service Department</b>: Improve customer satisfaction ratings by 10 % to improve the quality and quantity of customer referrals</li>
                        </ul>
                    </div>
                    <h5 className='mt-4 mb-6'>However, collaboration and communication usually  <span className='underline text-blue-800 italic'>degrade</span> as objectives cascade.</h5>
                    <h5 className='mb-6'>Cascade Clarity facilitates the smooth execution of interdepartmental efforts so that accurate, unbiased information is gathered and presented to senior leaders.In essence, we provide an in-depth understanding of business performance while facilitating strategic decision making for Senior Leadership.</h5>
                    {/* <a href="http://" target="_blank" className='pb-5' rel="noopener noreferrer">Explore Cascading Solutions</a> */}
                    <HashLink to="/Connect/#homeConnect">
                        <h5 className='hover:text-sky-500 mb-2 text-sky-700 text-sky font-semibold text-2xl flex items-center justify-center transition-all duration-75 ease-in w-fit gap-1'>Let's Discuss <BsChevronRight className='text-sm' /></h5>
                    </HashLink>
                </div>

            </div>
            <Footer />
        </div >
    )
}

export default Organizational



