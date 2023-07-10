import React from 'react'
import bgImage from '../../Assets/divWhy.tp-bgimg.png'
import NavBar from '../NavBar'
import Footer from '../Footer/Footer'
import underline from '../../Assets/UnderLine.svg'
import logo from '../../Assets/Vector23.svg'
import logo1 from '../../Assets/image 215.svg'
import logo2 from '../../Assets/image 211.svg'
import logo3 from '../../Assets/image 212.svg'
import logo4 from '../../Assets/image 213.svg'
import logo5 from '../../Assets/image 214.svg'
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
                <img src={bgImage} className=' z-0 pt-[96px]  object-contain ' alt="" />
            </div>
            <div className='w-full  absolute top-[40%]'>
                <div className='relative w-fit'>
                    <h1 className='mb-3 ml-20'>Why Cascade Clarity ?</h1>
                    <img src={underline} className='absolute left-0' alt="" />
                </div>
            </div>
            <div id='aboutUs' className='w-full h-full flex mt-10 mb-10 flex-col items-center justify-center'>
                <div className='w-[80%] h-full '>
                    <h5 className='text-2xl font-semibold'>
                        At Cascade Clarity, our purpose is clear: to create organizational harmony.
                    </h5>
                    <h5 className='mt-6 font-normal'>
                        We aim to empower businesses with the knowledge and tools to successfully implement and monitor their corporate goals as they cascade through the organization. With decades of experience combatting the "organizational silo effect," we eliminate this barrier through objective engagement and innovative technology, data, and integration.
                    </h5>
                    <div className='w-full h-full flex items-center justify-center p-3 mt-6 gap-6'>
                        <img src={logo} className='w-[100px] md:w-[150px] xl:w-[200px] ' alt="" />
                        <h5 className='font-medium'>By providing executives with a clear understanding of progress, they can reach their corporate goals, allowing them to make informed, strategic decisions based on unbiased information. In addition, we promote clarity, alignment, and success throughout the organization by simplifying and aggregating complex business processes.</h5>
                    </div>
                    <h3 className='text-black text-center mt-6 mb-6'>Cascade Clarity prioritizes achieving outcomes above all else.</h3>
                    <div className='w-full h-full grid grid-cols-3  items-center justify-center gap-6 '>
                        <div className='flex items-center justify-center mt-6 mb-6 gap-3'>
                            <img src={logo1} alt="" />
                            <div className='w-1/2'>
                                <h6 className='font-bold text-xl'>Goals-Oriented</h6>
                                <p>We strive to achieve specific, measurable outcomes.</p>
                            </div>
                        </div>
                        <div className='flex items-center justify-center mt-6 mb-6 gap-3'>
                            <img src={logo2} alt="" />
                            <div className='w-1/2'>
                                <h6 className='font-bold text-xl'>Data-Driven</h6>
                                <p>We rely on data and objective analytics</p>
                            </div>
                        </div>
                        <div className='flex items-center justify-center mt-6 mb-6 gap-3'>
                            <img src={logo3} alt="" />
                            <div className='w-1/2'>
                                <h6 className='font-bold text-xl'>Client-Centric</h6>
                                <p>We put the need of our clients first</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex items-center justify-center mt-10 mb-10'>
                        <div className='flex items-center w-1/3 justify-center  gap-3'>
                            <img src={logo4} alt="" />
                            <div >
                                <h6 className='font-bold text-xl'>Metrics-Driven</h6>
                                <p className='w-2/3'>We obtain transparent objective KPIs and Key Results</p>
                            </div>
                        </div>
                        <div className='flex items-center w-1/3 justify-center  gap-3'>
                            <img src={logo5} alt="" />
                            <div >
                                <h6 className='font-bold text-xl'>Results-Oriented Culture</h6>
                                <p className='w-2/3 font-light'>The consulting firm fosters a culture that prioritizes results & rewards employees who consistently deliver outcomes for their clients</p>
                            </div>
                        </div>
                    </div>
                    <h3 className='text-black mt-6 mb-6 p-6 text-3xl'>We do things with integrity, fostering connection and ensuring a collaborative experience to enable our clients to reach their full potential in an ever-changing world.</h3>
                </div>
            </div>
            <div className='w-full h-full relative flex items-center justify-center'>
                <div className='absolute w-[80%]'>
                    <h3>
                        “Working with John and his team is like a breath of fresh air. In less than three months, productivity increased, employees were happier, and I had saved money while streamlining my processes via automation."
                    </h3>
                    <h1> — CEO, Big Enterprise</h1>
                </div>
                <img src={FooterImg} alt="" />
            </div>
            <Footer />
        </div>
    )
}

export default Whycascade