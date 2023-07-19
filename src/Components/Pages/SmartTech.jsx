import React from 'react'
import NavBar from '../NavBar'
import bgimage from '../../Assets/Group 269061.png'
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
import { HashLink } from 'react-router-hash-link'
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
            <div className=' w-full h-full relative'>
                <div className='flex flex-col top-[72%] gap-6 left-[8%] absolute'>
                    <HashLink smooth to="/SmartTech/#Definition">
                        <h5 className='text-lg md:text-xl xl:text-3xl 2xl:text-[40px] font-semibold text-white hover:text-[#215488] transition-all ease-in duration-300 '>Definition & Approach</h5>
                    </HashLink>
                    <HashLink smooth to="/SmartTech/#Methodology">
                        <h5 className='text-lg md:text-xl xl:text-3xl 2xl:text-[40px] font-semibold text-white hover:text-[#215488] transition-all ease-in duration-300 '>Clarity Methodology</h5>
                    </HashLink>

                </div>
                <img src={bgimage} className='pt-[96px] min-h-[500px] w-full  ' alt="" />
            </div>

            <div id='Definition' ref={scrollRef4} className='w-fit p-10 pt-[96px] relative  h-full'>
                <h1 className='text-[#215488]  ml-20'>Definition</h1>
                <h1 className='text-[#215488] -mt-3  ml-20'>&Approach</h1>
                <img src={underLine} className='absolute w-[90%] mt-6 left-0' alt="" />
            </div>
            <div className='h-full w-full flex flex-col items-center justify-center'>
                <div className='w-[80%] h-full flex flex-col items-center'>
                    <h5 className='mt-6'>At Cascade Clarity, we use smart technology to bridge the gap between desired outcomes and actual results.</h5>
                    <h2 className='text-3xl font-bold text-[#0D223A] mt-10 '>Smart Technology incorporates</h2>
                    <div className='w-full h-full grid lg:grid-cols-3 grid-cols-2 gap-16 justify-center items-center p-10 '>
                        <div className='flex items-center gap-4 min-w-[250px] bg-white shadow-xl p-6 rounded-xl hover:shadow-black/30 transition-all duration-500 ease-in-out shadow-black/10'>
                            <img src={logo1} alt="" />
                            <h5>Robotic Process Automation</h5>
                        </div>
                        <div className='flex items-center gap-4 min-w-[250px] bg-white shadow-xl p-6 rounded-xl hover:shadow-black/30 transition-all duration-500 ease-in-out shadow-black/10'>
                            <img src={logo6} alt="" />
                            <h5>Intelligent Process Automation</h5>
                        </div>
                        <div className='flex items-center gap-4 min-w-[250px] bg-white shadow-xl p-6 rounded-xl hover:shadow-black/30 transition-all duration-500 ease-in-out shadow-black/10'>
                            <img src={logo2} alt="" />
                            <h5>Machine Learning</h5>
                        </div>
                        <div className='flex items-center gap-4 min-w-[250px] bg-white shadow-xl p-6 rounded-xl hover:shadow-black/30 transition-all duration-500 ease-in-out shadow-black/10'>
                            <img src={logo3} alt="" />
                            <h5>System Integration</h5>
                        </div>
                        <div className='flex items-center gap-4 min-w-[250px] bg-white shadow-xl p-6 rounded-xl hover:shadow-black/30 transition-all duration-500 ease-in-out shadow-black/10'>
                            <img src={logo4} alt="" />
                            <h5>Predictive Analytics</h5>
                        </div>
                        <div className='flex items-center gap-4 min-w-[250px] bg-white shadow-xl p-6 rounded-xl hover:shadow-black/30 transition-all duration-500 ease-in-out shadow-black/10'>
                            <img src={logo5} alt="" />
                            <h5 id='Methodology'>Tailored AI for Business Processes</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div ref={scrollRef5} className='w-fit p-20 -mt-6 relative  h-full'>
                <h1 className='text-[#215488]  ml-20'>Clarity </h1>
                <h1 className='text-[#215488] -mt-3  ml-20'>Methodology</h1>
                <img src={underLine} className='absolute w-[90%] mt-6 left-0' alt="" />
            </div>
            <div className='h-full w-full  flex flex-col items-center justify-center'>
                <div className='w-[80%] h-full flex flex-col items-center'>
                    <h2 className='text-3xl font-bold text-[#0D223A]  '>4 Phase Methodology</h2>
                    <div className='w-full h-full grid lg:grid-cols-2 grid-cols-1  gap-12 justify-center items-center p-10 mb-10 '>
                        <div className='flex items-start h-full w-full gap-4'>
                            <img src={logo7} alt="" className='bg-white shadow-xl shadow-black/20 rounded-full' />
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
                            <img src={logo8} alt="" className='bg-white shadow-xl shadow-black/20 rounded-full' />
                            <div className=''>
                                <h5 className='font-bold p-1'>
                                    2.Project Discovery
                                </h5>
                                <h5>
                                    Analyze requirements and data sources. Develop an action plan
                                </h5>
                            </div>
                        </div>
                        <div className='flex items-start h-full w-full gap-4'>
                            <img src={logo9} alt="" className='bg-white shadow-xl shadow-black/20 rounded-full' />
                            <div>
                                <h5 className='font-bold p-1'>3.Implementation, Analysis, and Iteration
                                </h5>
                                <h5>Smart technology deployment and execution. Executive presentation of results against business outcomes. Ongoing Iteration and presentation.
                                </h5>
                            </div>
                        </div>
                        <div className='flex items-start h-full w-full gap-4'>
                            <img src={logo10} alt="" className='bg-white shadow-xl shadow-black/20 rounded-full' />
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