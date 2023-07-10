import React from 'react'
import NavBar from '../NavBar'
import bgImage from '../../Assets/Group insights.png'
import Footer from '../Footer/Footer'
import Insight from '../Inight'
import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
const Insights = () => {
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
            if (scrollTo === 'homeInsights' && scrollRefHome.current) {
                smoothScrollToDiv(scrollRefHome, navbarHeight);
                setIsScrollPerformed(true);
            }
        }
    }, [location.search, isScrollPerformed]);
    return (
        <div id='homeInsights' className='w-full h-full'>
            <NavBar />
            <img src={bgImage} className='pt-[96px]' alt="" />
            <Insight />
            <Footer />
        </div>
    )
}

export default Insights