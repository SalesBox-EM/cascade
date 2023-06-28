import React from 'react'
import NavBar from '../NavBar'
import bgImage from '../../Assets/Group insights.png'
import Footer from '../Footer/Footer'
import Insight from '../Inight'
const Insights = () => {
    return (
        <div className='w-full h-full'>
            <NavBar />
            <img src={bgImage} className='pt-[96px]' alt="" />
            <Insight />
            <Footer />
        </div>
    )
}

export default Insights