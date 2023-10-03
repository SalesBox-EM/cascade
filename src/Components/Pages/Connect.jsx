import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer/Footer'
import mail from '../../Assets/mail.svg'
import phone from '../../Assets/Phone.svg'
import other from '../../Assets/Location.svg'
import bgImage from '../../Assets/contactImg.png'
import Logo from '../../Assets/Logo.png'
import LogoText from '../../Assets/logoText.svg'
import calendar from '../../Assets/calendar.png'
import underline from '../../Assets/UnderLine.svg'

import { InlineWidget } from 'react-calendly';
import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { AiOutlineClockCircle } from 'react-icons/ai'
import { BiVideo } from 'react-icons/bi'
const Connect = () => {
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
            if (scrollTo === 'homeConnect' && scrollRefHome.current) {
                smoothScrollToDiv(scrollRefHome, navbarHeight);
                setIsScrollPerformed(true);
            }
        }
    }, [location.search, isScrollPerformed]);
    return (
        <div id='homeConnect' ref={scrollRefHome} className='w-full h-full'>
            <NavBar />
            <div className='w-full p-6 lg:p-0  absolute top-[40%]'>
                <div className='relative w-fit'>
                    <h1 className='mb-3 lg:ml-20'>Let’s Connect</h1>
                    <img src={underline} className='absolute left-[-100px] min-w-[350px]' alt="" />
                </div>
            </div>
            <img src={bgImage} className='pt-[96px] min-h-[500px] object-cover' alt="" />
            <div className='w-full h-full flex items-center justify-center'>
                <div className='lg:w-[80%] w-[90%] mt-10 mb-10 h-full flex flex-col lg:flex-row items-center justify-evenly gap-6'>
                    <div className='flex flex-col   justify-between  lg:w-1/3 p-6 h-full  gap-8 mt-6 mb-6'>
                        <div className='flex flex-col gap-3'>
                            <div className='flex gap-3 mt-5'>
                                <img src={mail} alt="" />
                                <a href="mailto:gainclarity@cascadeclarity.com
                                ">
                                    <h5 className='text-xl lg:text-2xl'>gainclarity@cascadeclarity.ai</h5>
                                </a>

                            </div>
                            <div className='flex gap-3 mt-5'>
                                <img src={phone} alt="" />
                                <a href="tel:+1(510) 831 2782
                                "> <h5 className='text-xl lg:text-2xl'> +1 510-831-2782</h5></a>

                            </div>
                            <div className='flex gap-3 mt-5'>
                                <img src={other} alt="" />
                                <a href="https://maps.app.goo.gl/df5VXR963dvr7HGn9" target="_blank" rel="noopener noreferrer">
                                    <h5 className='text-xl lg:text-2xl'>447 Sutter Street, Suite 405, San Francisco, CA 94108.</h5>
                                </a>

                            </div>
                        </div>
                    </div>
                    <div className='border flex rounded-2xl p-1 '>
                        <div className=' hidden lg:flex w-fit flex-col items-center justify-start'>
                            <div className='flex w-fit items-center justify-center  mt-6 gap-3'>
                                <img src={Logo} className='w-[100px] h-[100px]' alt="" />
                                <img src={LogoText} className='w-[100px] h-[100px] ' alt="" />
                            </div>
                            <div className='flex flex-col w-fit items-start p-6'>
                                <h5 className='text-start mb-3'>Cascade Clairty </h5>
                                <h3 className='text-2xl max-w-[350px] text-black  font-bold'>Cascade Clairty - 30 Minute Introductory Meeting</h3>
                                <div className='flex gap-4 items-center mt-10 justify-center'>
                                    <AiOutlineClockCircle className='text-2xl' />
                                    <h5>
                                        30 min
                                    </h5>
                                </div>
                                <div className='flex gap-4 mt-3 w-4/5 items-center justify-center'>
                                    <BiVideo className='text-3xl' />
                                    <h5>
                                        Web conferencing details provided upon confirmation.</h5>
                                </div>

                            </div>
                        </div>
                        <InlineWidget
                            url='https://calendly.com/cascadeclarity/30min'
                            pageSettings={{
                                backgroundColor: 'ffffff',
                                hideEventTypeDetails: true,
                                hideLandingPageDetails: true,
                                hideGdprBanner: true,
                                primaryColor: '00a2ff',
                                textColor: '4d5055'
                            }}
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default Connect