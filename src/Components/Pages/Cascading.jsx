import React from 'react'
import NavBar from '../NavBar'
import LandingImage from '../../Assets/Group 26906.png'
import Footer from '../Footer/Footer'
import underLine from '../../Assets/UnderLine.svg'
import icon1 from '../../Assets/image 228.svg'
import icon2 from '../../Assets/image 229.svg'
import icon3 from '../../Assets/image 230.svg'
import icon4 from '../../Assets/image 231.svg'
import person1 from '../../Assets/Image4.png'
import person2 from '../../Assets/Image5.png'
import person3 from '../../Assets/Image6.png'
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'
const Cascading = () => {
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
        if (scrollTo === 'homecascade' && scrollRefHome.current) {
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
        if (scrollTo === 'Executive' && scrollRef4.current) {
            scrollToDiv();
        }
    }, [location.search]);
    useEffect(() => {
        const scrollToDiv = () => {
            const navbarHeight = 90; // Height of your fixed navbar in pixels
            const topOffset = scrollRef5.current.offsetTop - navbarHeight;
            window.scrollTo({
                top: topOffset,
                behavior: 'smooth'
            });
        };

        const queryParams = new URLSearchParams(location.search);
        const scrollTo = queryParams.get('scrollTo');
        if (scrollTo === 'Revenue' && scrollRef5.current) {
            scrollToDiv();
        }
    }, [location.search]);
    useEffect(() => {
        const scrollToDiv = () => {
            const navbarHeight = 120; // Height of your fixed navbar in pixels
            const topOffset = scrollRef6.current.offsetTop - navbarHeight;
            window.scrollTo({
                top: topOffset,
                behavior: 'smooth'
            });
        };

        const queryParams = new URLSearchParams(location.search);
        const scrollTo = queryParams.get('scrollTo');
        if (scrollTo === 'Expenses' && scrollRef6.current) {
            scrollToDiv();
        }
    }, [location.search]);
    useEffect(() => {
        const scrollToDiv = () => {
            const navbarHeight = 90; // Height of your fixed navbar in pixels
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
        <div id='homecascade' ref={scrollRefHome} className='w-full h-full '>
            <NavBar />
            <div className=' w-full h-full relative'>
                <div className='flex flex-col top-[62%] gap-6 left-[8%] absolute'>
                    <HashLink smooth to="/Cascading/#Executive">
                        <h5 className='text-lg md:text-xl xl:text-3xl 2xl:text-[40px] font-semibold text-white hover:text-[#215488] transition-all ease-in duration-300 '>Executive Business Partner</h5>
                    </HashLink>
                    <HashLink smooth to="/Cascading/#Revenue">
                        <h5 className='text-lg md:text-xl xl:text-3xl 2xl:text-[40px] font-semibold text-white hover:text-[#215488] transition-all ease-in duration-300 '>Increase Revenue</h5>
                    </HashLink>
                    <HashLink smooth to="/Cascading/#Expenses">
                        <h5 className='text-lg md:text-xl xl:text-3xl 2xl:text-[40px] font-semibold text-white hover:text-[#215488] transition-all ease-in duration-300 '>Reduce Expenses</h5>
                    </HashLink>
                    <HashLink smooth to="/Cascading/#Processes">
                        <h5 className='text-lg md:text-xl xl:text-3xl 2xl:text-[40px] font-semibold text-white hover:text-[#215488] transition-all ease-in duration-300 '>Streamline Processes</h5>
                    </HashLink>
                </div>
                <img src={LandingImage} className='pt-[96px] min-h-[500px] w-full  ' alt="" />
            </div>

            <div id='Executive' ref={scrollRef4} className='flex pt-[96px]  flex-col w-full items-center  h-full'>
                <div className='w-[80%] p-10  h-full flex items-start justify-around gap-6'>
                    <div className='w-2/4   relative'>
                        <h1 className='text-[#215488]'>Executive</h1>
                        <h1 className='text-[#215488]'>Business</h1>
                        <h1 className='text-[#215488] mb-3'>Partner</h1>
                        <img src={underLine} className='min-w-[650px] absolute left-[-300px]' alt="" />
                        <ul className='text-[#215488] font-normal list-disc p-5'>
                            <li>Save Time.</li>
                            <li className=''>
                                Enhance Collaboration & Coordination.
                            </li>
                            <li> Improve Business Outcomes.</li>
                        </ul>
                    </div>
                    <div className=' '>
                        <h4 className='text-black text-2xl mb-2  font-semibold'>Cascade Clarity provides fractional executive-level support.
                        </h4>
                        <h4 className='text-black text-2xl   font-semibold'> Our Executive Business Partner offering focuses on these Key Activities:
                        </h4>
                        <div className='w-full h-full flex gap-6'>
                            <div className='flex flex-col gap-10 mt-6'>
                                <div className='flex items-center justify-between gap-2'>
                                    <img src={icon1} className='w-[50px]' alt="" />
                                    <h6 className='text-start w-full'>Attend C-Suite meetings and memorialize notes, decisions &
                                        action plans</h6>
                                    <h5 className='bg-gradient-to-b text-[#215488] from-white via-sky-50 to-sky-200/30 p-3 rounded-xl'>"The discipline of writing something down is the first step toward making it happen."
                                        — Lee Iacocca</h5>
                                </div>
                                <div className='flex items-center justify-between gap-2'>
                                    <img src={icon4} className='w-[60px]' alt="" />
                                    <h6 className='text-start  w-full'>Create presentations for C-Suite meetings</h6>
                                </div>
                                <div className='flex items-center justify-between gap-2'>
                                    <img src={icon2} className='w-[60px]' alt="" />
                                    <h6 className='text-start w-full'>Work with individual C-Suite execs to develop & implement cascaded, cross-organizational action plans
                                        to achieve KPIs</h6>
                                </div>
                                <div className='flex items-center justify-between gap-2'>
                                    <img src={icon3} alt="" className='w-[60px]' />
                                    <h6 className='text-start w-full'>Support tracking of KPIs via cross-functional collaboration</h6>
                                </div>
                                <HashLink to="/SmartTech/#Methodology">
                                    <h5 id='Revenue' className=' text-xl font-bold text-[#215488] hover:text-sky-600 transition-all ease-in duration-300 w-fit '>The Clarity Methodology {'>'}</h5>
                                </HashLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div ref={scrollRef5} className='flex flex-col w-full items-center  h-full'>
                <div className='w-[80%] h-full flex items-start justify-around gap-6'>
                    <div className='p-10 w-2/4  relative'>
                        <h1 className='text-[#215488]'>Increase
                        </h1>
                        <h1 className='text-[#215488] mb-3'> Revenue</h1>
                        <img src={underLine} className='min-w-[500px] absolute left-[-200px]' alt="" />

                        <h6 className='mt-10 text-2xl mb-3  font-semibold'>Gain clarity into Sales,
                            Marketing & Product activity.</h6>
                        <h6 className='text-lg'> Cascade Clarity bridges department gaps to facilitate improved data visibility and collaboration. Key Activities include:
                        </h6>
                        <ul className='text-[#215488] font-normal list-disc p-5'>
                            <li>  Benchmarking Marketing and Sales Metrics
                            </li>
                            <li className=''>  Performing Lost Prospect Analysis
                            </li>
                            <li>  Analyzing MQL / SQL productivity</li>
                            <li>   Validating Sales Funnel metrics</li>
                        </ul>
                        <HashLink to="/SmartTech/#Methodology">
                            <h5 id='Expenses' className=' text-xl font-bold text-[#215488] hover:text-sky-600 transition-all ease-in duration-300 w-fit '>The Clarity Methodology {'>'}</h5>
                        </HashLink>
                    </div>
                    <div className='p-11 '>
                        <img src={person1} alt="" />
                    </div>
                </div>
            </div>
            <div ref={scrollRef6} className='flex flex-col w-full items-center  h-full overflow-hidden'>
                <div className='w-[80%]  h-full flex items-start justify-around gap-6 '>
                    <div className=' '>
                        <img src={person2} className='max-h-[650px]' alt="" />
                    </div>
                    <div className='p-10 w-2/4  relative'>
                        <h1 className='text-[#215488] mb-3'> Reduce Expenses</h1>
                        <img src={underLine} className='min-w-[860px] absolute right-[-300px]' alt="" />
                        <h6 className='mt-10 text-2xl mb-3  font-semibold'>Gain clarity into business expenses with deep dive, unbiased data driven analysis</h6>
                        <h6 className='text-lg'>Cascade Clarity surfaces and validates departmental ratios to highlight areas of extraordinary expense. Activities include working with Finance and individual departments to create a Ratio Scorecard to include but not limited to:
                        </h6>
                        <ul className='text-[#215488] font-normal list-disc p-5'>
                            <li>      Sales Expense / Total Revenue
                            </li>
                            <li className=''>    Marketing Expense / Total Revenue
                            </li>
                            <li>   Magic Number = Delta ARR/ S&M expense
                            </li>
                            <li>    Cloud Expense / Total Revenue
                            </li>
                            <li>    Additional areas of need
                            </li>
                        </ul>
                        <HashLink to="/SmartTech/#Methodology">
                            <h5 id='Processes' className=' text-xl font-bold text-[#215488] mt-3 hover:text-sky-600 transition-all ease-in duration-300 w-fit '>The Clarity Methodology {'>'}</h5>
                        </HashLink>
                    </div>
                </div>
            </div>
            <div ref={scrollRef7} className='flex flex-col w-full items-center overflow-hidden  h-full'>
                <div className='w-[80%] p-10 mt-6 mb-6  h-full flex items-start justify-around gap-10'>
                    <div className=' '>
                        <img src={person3} className=' max-w-[800px]' alt="" />
                    </div>
                    <div className='w-2/4  relative'>
                        <h1 className='text-[#215488]'>Streamline
                        </h1>
                        <h1 className='text-[#215488] mb-3'> Processes</h1>
                        <img src={underLine} className='min-w-[530px] absolute right-[-200px]' alt="" />

                        <h6 className='mt-10 text-2xl mb-3  font-semibold'>Gain clarity into organizational structures and processes to boost efficiency.</h6>
                    </div>
                </div>
            </div>
            <div className='flex flex-col w-full items-center  h-full'>
                <div className='w-[80%] -mt-16  p-10   h-full  gap-10'>
                    <h4 className='text-[#215488] font-semibold text-lg'>
                        Cascade Clarity focuses on improving business processes by crossing organizational boundaries
                    </h4>
                    <h4 className='text-[#215488] font-semibold text-lg'>
                        and providing unbiased collaboration and facilitation. Our activities include:
                    </h4>
                    <ul className='p-6 list-disc'>
                        <li>  Set Clear Objectives focusing on desired business outcomes
                        </li>
                        <li> Identify and Map Processes
                        </li>
                        <li> Leverage technology to automate manual tasks and digitize processes wherever possible
                        </li>
                        <li> Foster Collaboration and Communication</li>
                    </ul>
                    <h2 className='text-2xl mb-6'>
                        We tailor our approach to achieve improved outcomes.
                    </h2>
                    <HashLink to="/SmartTech/#Methodology">
                        <h5 className=' text-xl font-bold text-[#215488] hover:text-sky-600 transition-all ease-in duration-300 w-fit '>The Clarity Methodology {'>'}</h5>
                    </HashLink>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Cascading