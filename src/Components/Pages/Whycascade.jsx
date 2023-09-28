import React from 'react'
import bgImage from '../../Assets/WhyCascade.png'
import NavBar from '../NavBar'
import Footer from '../Footer/Footer'
import underline from '../../Assets/UnderLine.svg'
import logo from '../../Assets/Vector23.svg'
import logo1 from '../../Assets/image 215.svg'
import logo2 from '../../Assets/image 211.svg'
import logo3 from '../../Assets/image 212.svg'
import logo4 from '../../Assets/image 213.svg'
import logo5 from '../../Assets/image 214.svg'
import CEOLogo from '../../Assets/Group 26909.png'
import FooterImg from '../../Assets/Group 26879.png'
import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
const Whycascade = () => {
    const smoothScrollToDiv = (ref, navbarHeight) => {
        const topOffset = ref.current.offsetTop - navbarHeight;
        window.scrollTo({
            top: topOffset,
            behavior: 'smooth'
        });
    };
    const location = useLocation();
    const scrollRefHome = useRef(null);
    const [isScrollPerformed, setIsScrollPerformed] = useState(false);
    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const scrollTo = queryParams.get('scrollTo');
        const navbarHeight = 120; // Height of your fixed navbar in pixels
        if (!isScrollPerformed) {
            if (scrollTo === 'homewhy' && scrollRefHome.current) {
                smoothScrollToDiv(scrollRefHome, navbarHeight);
                setIsScrollPerformed(true);
            }
        }
    }, [location.search, isScrollPerformed]);
    return (
        <div className=' h-full w-full '>
            <NavBar />
            <div id='homewhy' ref={scrollRefHome} className='w-full h-full'>
                <img src={bgImage} className=' z-0 pt-[96px] min-h-[500px]  object-cover ' alt="" />
            </div>
            <div className='w-full p-6 lg:p-0  absolute top-[40%]'>
                <div className='relative w-fit'>
                    <h1 className='mb-3 lg:ml-20'>Why Cascade Clarity?</h1>
                    <img src={underline} className='absolute lg:left-0 left-[-100px]' alt="" />
                </div>
            </div>
            <div id='aboutUs' className='w-full h-full flex mt-10 mb-10 flex-col items-center justify-center'>
                <div className='w-[80%] h-full '>
                    <h5 className='text-2xl font-semibold'>
                        At Cascade Clarity, our purpose is clear: to create organizational harmony.
                    </h5>
                    <h5 className='mt-6 font-normal'>
                        We empower businesses with the knowledge and tools to successfully implement and monitor their corporate goals as they cascade through the organization. With decades of experience combatting the "organizational silo effect," we eliminate this barrier through objective engagement and innovative technology, data, and integration.
                    </h5>
                    <div className='w-full h-full flex flex-col lg:flex-row items-center justify-center p-3 mt-6 gap-6'>
                        <img src={logo} className='w-[100px] md:w-[150px] xl:w-[200px] ' alt="" />
                        <h5 className='font-medium'>By providing executives with a clear understanding of progress, they can reach their corporate goals, allowing them to make informed, strategic decisions based on unbiased information. In addition, we promote clarity, alignment, and success throughout the organization by simplifying complex business processes.</h5>
                    </div>
                    <h3 className='text-black text-center mt-6 mb-6'>Cascade Clarity prioritizes achieving outcomes above all else...</h3>
                    <div className='w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  items-center justify-center gap-6 '>
                        <div className='flex items-center justify-evenly lg:justify-center mt-6 mb-6 gap-3 min-w-[250px] bg-white shadow-xl p-2 pt-4 pb-4 rounded-xl hover:shadow-black/30 transition-all ease-in-out duration-500'>
                            <img src={logo1} alt="" />
                            <div className='w-1/2'>
                                <h6 className='font-bold text-xl'>Goals-Oriented</h6>
                                <p>We strive to achieve specific, measurable outcomes</p>
                            </div>
                        </div>
                        <div className='flex items-center justify-evenly lg:justify-center mt-6 mb-6 gap-3 min-w-[250px] bg-white shadow-xl p-2 pt-4 pb-4 rounded-xl hover:shadow-black/30 transition-all ease-in-out duration-500'>
                            <img src={logo2} alt="" />
                            <div className='w-1/2'>
                                <h6 className='font-bold text-xl'>Data-Driven</h6>
                                <p>We rely on data and objective analytics</p>
                            </div>
                        </div>
                        <div className='flex items-center justify-evenly lg:justify-center mt-6 mb-6 gap-3 min-w-[250px] bg-white shadow-xl p-2 pt-4 pb-4 rounded-xl hover:shadow-black/30 transition-all ease-in-out duration-500'>
                            <img src={logo3} alt="" />
                            <div className='w-1/2'>
                                <h6 className='font-bold text-xl'>Client-Centric</h6>
                                <p>We put the need of our clients first</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex flex-col lg:flex-row items-center justify-evenly lg:justify-center gap-8 '>
                        <div className='flex items-center lg:w-1/3 justify-evenly lg:justify-center  gap-3 min-w-[250px] bg-white shadow-xl p-2 pt-4 pb-4 rounded-xl hover:shadow-black/30 transition-all ease-in-out duration-500'>
                            <img src={logo4} alt="" />
                            <div >
                                <h6 className='font-bold text-xl'>Metrics-Driven</h6>
                                <p className='lg:w-2/3'>We obtain transparent objective KPIs and Key Results</p>
                            </div>
                        </div>
                        <div className='flex items-center lg:w-1/3 justify-evenly lg:justify-center  gap-3 min-w-[250px] bg-white shadow-xl p-2 pt-4 pb-4 rounded-xl hover:shadow-black/30 transition-all ease-in-out duration-500'>
                            <img src={logo5} alt="" />
                            <div >
                                <h6 className='font-bold text-xl'>Results-Oriented Culture</h6>
                                <p className='w-3/3 font-light'>We prioritize results and reward employees who consistently deliver outcomes for their clients.</p>
                            </div>
                        </div>
                    </div>
                    <h3 className='text-black mt-6 lg:mb-6 lg:p-6 text-xl lg:text-3xl'>We do things with integrity, fostering connection and ensuring a collaborative experience to enable our clients to reach their full potential in an ever-changing world.</h3>
                </div>
            </div>
            <div className='w-full h-full relative flex items-center justify-center'>
                <div className='absolute h-full flex flex-col items-center justify-center min-h-[350px]  w-[80%]'>
                    <div className='w-full flex flex-col lg:flex-row gap-6 items-center justify-center'>
                        <img src={CEOLogo} className='w-[200px] lg:w-[300px]' alt="" />
                        <h3 className='mb-6 text-base md:text-lg lg:text-3xl xl:text-4xl'>
                            "John and his team at Cascade Clarity deliver extraordinary value making every dollar spent worth it. Their professionalism, attention to detail, and commitment to excellence shine through in every interaction. I consider Cascade Clarity a strategic partner and highly recommend engaging with John and his team to help with your challenging corporate initiatives."
                        </h3>
                    </div>
                    <h1 className='text-xl md:text-2xl lg:text-3xl 2xl:text-5xl'> – Pam Glick, CEO of Lumena Inc</h1>
                </div>
                <img src={FooterImg} className='min-h-[550px] w-full object-cover' alt="" />
            </div>
            <Footer />
        </div>
    )
}

export default Whycascade