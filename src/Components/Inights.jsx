import React from 'react'
import ImageOne from '../Assets/1.jpg.png'
import ImageTwo from '../Assets/1.jpg (1).png'
import ImageThree from '../Assets/1.jpg (2).png'
const Inights = () => {
    return (
        <div className='w-full  h-full flex items-center justify-center'>
            <div className='w-[90%] h-full'>
                <h2 className='mt-12 mb-12 text-center text-7xl font-bold text-[#215488]'>Insights</h2>
                <div className='w-full h-full mb-6 flex gap-6 items-start justify-center'>
                    <div className='w-full flex flex-col items-start gap-5 max-w-[500px] h-full'>
                        <img src={ImageOne} alt="" />
                        <h3 className='text-black text-3xl'>The Invisible Barrier to Business Breakthroughs</h3>
                        <h6>May 10, 2023</h6>
                        <h5 className='text-xl '>Sony once had two separate departments simultaneously working on the same plug without either team realizing it. The silo effect has long been...</h5>
                        <a href="/" className='w-full text-end'>Read More</a>
                    </div>
                    <div className='w-full flex flex-col items-start gap-5 max-w-[500px] h-full'>
                        <img src={ImageTwo} alt="" />
                        <h3 className='text-black text-3xl w-[70%]'>AI & Beyond: Leadership
                            Adaption</h3>
                        <h6>May 10, 2023</h6>
                        <h5 className='text-xl'>Sony once had two separate departments simultaneously working on the same plug without either team realizing it. The silo effect has long been...</h5>
                        <a href="/" className='w-full text-end'>Read More</a>
                    </div>
                    <div className='w-full flex flex-col items-start gap-5  max-w-[500px] h-full'>
                        <img src={ImageThree} alt="" />
                        <h3 className='text-black text-3xl'>Actionable Ideas Need Engaged Execs</h3>
                        <h6>May 10, 2023</h6>
                        <h5 className='text-xl'>Sony once had two separate departments simultaneously working on the same plug without either team realizing it. The silo effect has long been...</h5>
                        <a href="/" className='w-full text-end'>Read More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inights