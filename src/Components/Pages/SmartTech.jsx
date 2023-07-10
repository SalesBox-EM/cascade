import React from 'react'
import NavBar from '../NavBar'
import bgimage from '../../Assets/Group 26876.png'
import underLine from '../../Assets/UnderLine.svg'
import logo1 from '../../Assets/robotic-arm 1.svg'
import logo2 from '../../Assets/gears-set 1.svg'
import logo6 from '../../Assets/brain 1.svg'
import logo3 from '../../Assets/system-integration 1.svg'
import logo4 from '../../Assets/bar-chart 1.svg'
import logo5 from '../../Assets/ai 1.svg'
import logo7 from '../../Assets/Group 26865.svg'
import logo8 from '../../Assets/Group 26861.svg'
import logo9 from '../../Assets/Group 26859.svg'
import logo10 from '../../Assets/Group 26860.svg'
import Footer from '../Footer/Footer'
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
const SmartTech = () => {
    const location = useLocation();
    const scrollRef4 = useRef(null);
    const scrollRefHome = useRef(null);
    const scrollRef5 = useRef(null);
    const scrollRef6 = useRef(null);
    const scrollRef7 = useRef(null);
    useEffect(() => {
        const scrollToDiv = () => {
            const navbarHeight = 90; // Height of your fixed navbar in pixels
            const topOffset = scrollRefHome.current.offsetTop - navbarHeight;
            window.scrollTo({
                top: topOffset,
                behavior: 'smooth'
            });
        };

        const queryParams = new URLSearchParams(location.search);
        const scrollTo = queryParams.get('scrollTo');
        if (scrollTo === 'homeTech' && scrollRefHome.current) {
            scrollToDiv();
        }
    }, [location.search]);
    useEffect(() => {
        const scrollToDiv = () => {
            const navbarHeight = 90; // Height of your fixed navbar in pixels
            const topOffset = scrollRef4.current.offsetTop - navbarHeight;
            window.scrollTo({
                top: topOffset,
                behavior: 'smooth'
            });
        };

        const queryParams = new URLSearchParams(location.search);
        const scrollTo = queryParams.get('scrollTo');
        if (scrollTo === 'Definition' && scrollRef4.current) {
            scrollToDiv();
        }
    }, [location.search]);
    useEffect(() => {
        const scrollToDiv = () => {
            const navbarHeight = 80; // Height of your fixed navbar in pixels
            const topOffset = scrollRef5.current.offsetTop - navbarHeight;
            window.scrollTo({
                top: topOffset,
                behavior: 'smooth'
            });
        };

        const queryParams = new URLSearchParams(location.search);
        const scrollTo = queryParams.get('scrollTo');
        if (scrollTo === 'Methodology' && scrollRef5.current) {
            scrollToDiv();
        }
    }, [location.search]);

    useEffect(() => {
        const scrollToDiv = () => {
            const navbarHeight = 80; // Height of your fixed navbar in pixels
            const topOffset = scrollRef7.current.offsetTop - navbarHeight;
            window.scrollTo({
                top: topOffset,
                behavior: 'smooth'
            });
        };

        const queryParams = new URLSearchParams(location.search);
        const scrollTo = queryParams.get('scrollTo');
        if (scrollTo === 'Processes' && scrollRef7.current) {
            scrollToDiv();
        }
    }, [location.search]);
    return (
        <div id='homeTech' ref={scrollRefHome} className='w-full h-full'>
            <NavBar />
            <img src={bgimage} className='pt-[96px]' alt="" />
            <div id='Definition' ref={scrollRef4} className='w-fit p-10 relative  h-full'>
                <h1 className='text-[#215488]  ml-20'>Definition</h1>
                <h1 className='text-[#215488] -mt-3  ml-20'>&Approach</h1>
                <img src={underLine} className='absolute w-[90%] mt-6 left-0' alt="" />
            </div>
            <div className='h-full w-full flex flex-col items-center justify-center'>
                <div className='w-[80%] h-full flex flex-col items-center'>
                    <h5>At Cascade Clarity, we use smart technology to bridge the gap between desired outcomes and actual results.</h5>
                    <h2 className='text-3xl font-bold text-[#0D223A] mt-10 '>Smart Technology incorporates</h2>
                    <div className='w-full h-full grid lg:grid-cols-3 grid-cols-2 gap-16 justify-center items-center p-10 '>
                        <div className='flex items-center gap-4'>
                            <img src={logo1} alt="" />
                            <h5>Robotic Process Automation</h5>
                        </div>
                        <div className='flex items-center gap-4'>
                            <img src={logo6} alt="" />
                            <h5>Robotic Process Automation</h5>
                        </div>
                        <div className='flex items-center gap-4'>
                            <img src={logo2} alt="" />
                            <h5>Robotic Process Automation</h5>
                        </div>
                        <div className='flex items-center gap-4'>
                            <img src={logo3} alt="" />
                            <h5>Robotic Process Automation</h5>
                        </div>
                        <div className='flex items-center gap-4'>
                            <img src={logo4} alt="" />
                            <h5>Robotic Process Automation</h5>
                        </div>
                        <div className='flex items-center gap-4'>
                            <img src={logo5} alt="" />
                            <h5>Robotic Process Automation</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div id='Methodology' ref={scrollRef5} className='w-fit p-20 relative  h-full'>
                <h1 className='text-[#215488]  ml-20'>Clarity </h1>
                <h1 className='text-[#215488] -mt-3  ml-20'>Methodology</h1>
                <img src={underLine} className='absolute w-[90%] mt-6 left-0' alt="" />
            </div>
            <div className='h-full w-full  flex flex-col items-center justify-center'>
                <div className='w-[80%] h-full flex flex-col items-center'>
                    <h2 className='text-3xl font-bold text-[#0D223A] mt-10 '>4 Phase Methodology</h2>
                    <div className='w-full h-full grid lg:grid-cols-2 grid-cols-1  gap-12 justify-center items-center p-10 '>
                        <div className='flex items-start h-full w-full gap-4'>
                            <img src={logo7} alt="" />
                            <div>
                                <h5 className='font-bold p-1'>
                                    1.Define Expected Business Outcomes
                                </h5>
                                <h5>
                                    Formalize and record business goals. Create executive sponsorship and project steering committee with meeting cadence.
                                </h5>
                            </div>
                        </div>

                        <div className='flex items-start h-full w-full gap-4'>
                            <img src={logo8} alt="" />
                            <div className=''>
                                <h5 className='font-bold p-1'>
                                    2.Project Discovery
                                </h5>
                                <h5>
                                    Analyze requirements and data sources, and develop an action plan.
                                </h5>
                            </div>
                        </div>
                        <div className='flex items-start h-full w-full gap-4'>
                            <img src={logo9} alt="" />
                            <div>
                                <h5 className='font-bold p-1'>3.Implementation, Analysis, and Iteration
                                </h5>
                                <h5>Smart technology deployment and execution. Executive presentation of results against business outcomes. Ongoing Iteration and presentation
                                </h5>
                            </div>
                        </div>
                        <div className='flex items-start h-full w-full gap-4'>
                            <img src={logo10} alt="" />
                            <div className=''>
                                <h5 className='font-bold p-1'>
                                    4.Go Live

                                </h5>
                                <h5>
                                    Complete project and handover of smart technology tools and processes.
                                </h5>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SmartTech