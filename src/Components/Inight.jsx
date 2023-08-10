import React from 'react'
import ImageOne from '../Assets/1.jpg.png'
import ImageTwo from '../Assets/1.jpg (1).png'
import ImageThree from '../Assets/1.jpg (2).png'
import { HashLink } from 'react-router-hash-link'
const Insight = () => {
    return (
        <div className='w-full  h-full flex items-center justify-center'>
            <div className='w-[90%] mt-10 mb-10 h-full'>
                <div className='w-full h-full  grid lg:grid-cols-3 gap-6 items-start justify-center'>
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
                    <div className='w-full flex flex-col items-start gap-4  max-w-[500px] h-full'>
                        <img src={ImageThree} alt="" />
                        <div className='w-full flex flex-col justify-between h-full gap-3 '>
                            <h3 className='text-black text-2xl md:text-3xl mb-3 w-full md:w-2/3'>Actionable Ideas Need Engaged Execs</h3>
                            <h6>May 10, 2023</h6>
                            <div className='inline-flex items-baseline flex-wrap '>
                                <h5 className='text-xl italic  '>Staying relevant in the ever-changing business landscape requires ongoing innovation and adaptation. Often leveraging the latest ... <HashLink className='hover:text-blue-600 not-italic transition-all duration-100 ease-in' to={'/Blog_EngagedExecs/#head'}>Read More</HashLink> </h5>
                            </div>
                        </div>
                        {/* 
                        <h5 className='text-xl line-clamp-3'>While tech trends are tipping towards automation, execs must remain present. According to a recent notable study relationships ...</h5>
                        <a href="/" className='w-full text-end '>Read More</a> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Insight