import React from 'react'
import ImageOne from '../Assets/1.jpg.png'
import ImageTwo from '../Assets/1.jpg (1).png'
import ImageThree from '../Assets/1.jpg (2).png'
const Insight = () => {
    return (
        <div className='w-full  h-full flex items-center justify-center'>
            <div className='w-[90%] mt-10 mb-10 h-full'>
                <div className='w-full h-full  grid lg:grid-cols-3 gap-6 items-start justify-center'>
                    <div className='w-full flex flex-col items-start gap-4  max-w-[500px] h-full'>
                        <img src={ImageOne} alt="" />
                        <div className='w-full flex flex-col justify-between h-full gap-3 '>
                            <h3 className='text-black text-2xl md:text-3xl mb-3 w-full md:w-2/3 '>The Invisible Barrier to Business Breakthroughs</h3>
                            <h6>May 10, 2023</h6>
                            <div className='inline-flex items-baseline flex-wrap '>
                                <h5 className='text-xl  '>Sony once had two separate departments simultaneously working on the same plug without... <a href="/" className='whitespace-nowrap ml-1 hover:text-blue-700 transition-all duration-300'>Read More</a> </h5>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex flex-col items-start gap-4  max-w-[500px] h-full'>
                        <img src={ImageTwo} alt="" />
                        <div className='w-full flex flex-col justify-between h-full gap-3   '>
                            <h3 className='text-black text-2xl md:text-3xl mb-3 w-full md:w-2/3 '>AI & Beyond: Leadership
                                Adaption</h3>
                            <h6>May 10, 2023</h6>
                            <div className='inline-flex items-baseline flex-wrap '>
                                <h5 className='text-xl  '>Global business leaders face potential replacement as AI threatens to topple many. As a result ... <a href="/" className='whitespace-nowrap ml-1 hover:text-blue-700 transition-all duration-300'>Read More</a> </h5>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex flex-col items-start gap-4  max-w-[500px] h-full'>
                        <img src={ImageThree} alt="" />
                        <div className='w-full flex flex-col justify-between h-full gap-3 '>
                            <h3 className='text-black text-2xl md:text-3xl mb-3 w-full md:w-2/3'>Actionable Ideas Need Engaged Execs</h3>
                            <h6>May 10, 2023</h6>
                            <div className='inline-flex items-baseline flex-wrap '>
                                <h5 className='text-xl  '>While tech trends are tipping towards automation, execs must remain present. According to a recent... <a href="/" className='whitespace-nowrap ml-1 hover:text-blue-700 transition-all duration-300'>Read More</a> </h5>
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