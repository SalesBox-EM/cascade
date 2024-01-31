import React from 'react'
import ImageOne from '../Assets/1.jpg.png'
import ImageTwo from '../Assets/1.jpg (1).png'
import ImageThree from '../Assets/1.jpg (2).png'
import ImageFour from '../Assets/optimize_preview.jpg'
import ImageFive from '../Assets/white_preview 1.png'
import ImageSix from '../Assets/Navigate_Preview.jpg'
import { HashLink } from 'react-router-hash-link'
const Insight = () => {
    return (
        <div className='w-full  h-full flex items-center justify-center'>
            <div className='w-[90%] mt-10 mb-10 h-full'>
                <div className='w-full h-full  grid lg:grid-cols-3 gap-10 items-start justify-center'>
                    <div className='w-full flex flex-col items-start gap-4  max-w-[500px] h-full'>
                        <img src={ImageThree} alt="" />
                        <div className='w-full flex flex-col justify-between h-full gap-3 '>
                            <h3 className='text-black text-2xl md:text-3xl mb-3 w-full md:w-2/3'>Operational AI Needs Adaptable Execs</h3>
                            <h6>January 30, 2024</h6>
                            <div className='inline-flex items-baseline flex-wrap '>
                                <h5 className='text-xl italic  '>The success of most modern companies hinges on their ability to adapt, innovate, and evolve. Getting this right often means ... <HashLink className='hover:text-blue-600 not-italic transition-all duration-100 ease-in' to={'/Blog_EngagedExecs/#head'}>Read More</HashLink> </h5>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex flex-col items-start gap-4  max-w-[500px] h-full'>
                        <img src={ImageFour} alt="Optimizing Sales and Marketing for 2024" />
                        <div className='w-full flex flex-col justify-between h-full gap-3 '>
                            <h3 className='text-black text-2xl md:text-3xl mb-3 w-full md:w-2/3'>Optimizing Sales and Marketing for 2024</h3>
                            <h6>December 13, 2023</h6>
                            <div className='inline-flex items-baseline flex-wrap '>
                                <h5 className='text-xl italic  '>Budget season is underway as organizations focus on 2024, with many engaged in fiscal decision-making and strategic planning for the coming year ... <HashLink className='hover:text-blue-600 not-italic transition-all duration-100 ease-in' to={'/Blog_OptimizingSales/#head'}>Read More</HashLink> </h5>
                            </div>
                        </div>

                    </div>
                    <div className='w-full flex flex-col items-start gap-4  max-w-[500px] h-full'>
                        <img src={ImageFive} alt="White Space Metric®: A Case Study" />
                        <div className='w-full flex flex-col justify-between h-full gap-3 '>
                            <h3 className='text-black text-2xl md:text-3xl mb-3 w-full md:w-2/3'>White Space Metric®: A Case Study</h3>
                            <h6>November 8, 2023</h6>
                            <div className='inline-flex items-baseline flex-wrap '>
                                <h5 className='text-xl italic  '>In the consistently changing software sector, the ability to adapt and innovate reigns supreme, meaning minimizing cross-organizational friction ... <HashLink className='hover:text-blue-600 not-italic transition-all duration-100 ease-in' to={'/Blog_WhiteSpace/#head'}>Read More</HashLink> </h5>
                            </div>
                        </div>

                    </div>
                    <div className='w-full flex flex-col items-start gap-4  max-w-[500px] h-full'>
                        <img src={ImageSix} alt="Navigating Cross-Organizational Challenges: Insights from Senior Leadership in Software" />
                        <div className='w-full flex flex-col justify-between h-full gap-3 '>
                            <h3 className='text-black text-2xl md:text-3xl mb-3 w-full '>Navigating Cross-Organizational Challenges: Insights from Senior Leadership in Software</h3>
                            <h6>September 20, 2023</h6>
                            <div className='inline-flex items-baseline flex-wrap '>
                                <h5 className='text-xl italic  '>Modern business tells many tales of organizations that had the potential to succeed but struggled due to the misalignment of internal processes ... <HashLink className='hover:text-blue-600 not-italic transition-all duration-100 ease-in' to={'/Blog_CrossOrganizationalChallenges/#head'}>Read More</HashLink> </h5>
                            </div>
                        </div>

                    </div>
                    <div className='w-full flex flex-col items-start gap-4  max-w-[500px] h-full'>
                        <img src={ImageOne} alt="" />
                        <div className='w-full flex flex-col justify-between h-full gap-3 '>
                            <h3 className='text-black text-2xl md:text-3xl mb-3 w-full  '>The Invisible Barrier to Business Breakthroughs</h3>
                            <h6>May 10, 2023</h6>
                            <div className='inline-flex items-baseline flex-wrap '>
                                <h5 className='text-xl italic  '>In today's competitive corporate landscape, consistent breakthroughs are essential for organizations to stay ahead. However ...
                                    <HashLink className='hover:text-blue-600 not-italic transition-all duration-100 ease-in' to={'/Blog_BusinessBreakthroughs/#head'}>Read More</HashLink>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex flex-col items-start gap-4  max-w-[500px] h-full'>
                        <img src={ImageTwo} alt="" />
                        <div className='w-full flex flex-col justify-between h-full gap-3   '>
                            <h3 className='text-black text-2xl md:text-3xl mb-3 w-full md:w-2/3 '>AI & Beyond: Leadership
                                Adaption</h3>
                            <h6>May 10, 2023</h6>
                            <div className='inline-flex  items-baseline flex-wrap '>
                                <h5 className='text-xl italic   '>Artificial Intelligence (AI) technology threatens to topple businesses and execs that refuse to adapt to change. But with ...  <HashLink className='hover:text-blue-600 not-italic transition-all duration-100 ease-in' to={'/Blog_LeadershipAdaption/#head'}>Read More</HashLink> </h5>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Insight