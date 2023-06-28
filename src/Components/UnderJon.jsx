import React from 'react'
import first from '../Assets/Icons/image 160.svg'
import second from '../Assets/Icons/image 161.svg'
import third from '../Assets/Icons/image 162.svg'
import fourth from '../Assets/Icons/image 163.svg'
import Line from '../Assets/Icons/Line 16.svg'
import logo1 from '../Assets/Icons/image_160.svg'
import logo2 from '../Assets/Icons/image_161.svg'
import logo3 from '../Assets/Icons/image_162.svg'
import logo4 from '../Assets/Icons/image_163.svg'
import logo5 from '../Assets/Icons/image_164.svg'
import logo6 from '../Assets/Icons/image_165.svg'
import logo7 from '../Assets/Icons/image_166.svg'
import logo8 from '../Assets/Icons/image_167.svg'
import logo9 from '../Assets/Icons/image_168.svg'
import logo10 from '../Assets/Icons/image_169.svg'
import card1 from '../Assets/1.png'
import card2 from '../Assets/2.png'
import card3 from '../Assets/3.png'
import card4 from '../Assets/4.png'
import Insight from './Inight'

const UnderJon = () => {
    return (
        <div className='w-full h-full mt-10 flex flex-col p-6 gap-10 bg-gradient-to-b from-white via-sky-200 to-sky-100  items-center justify-center'>
            <div className='w-[85%] relative grid grid-cols-2 lg:grid-cols-5 items-center justify-center gap-6 h-full'>
                <div className='w-full max-w-[258px] h-full min-h-[200px] max-h-[258px] flex items-center justify-center rounded-lg '>
                    <h1 className='text-black w-[50%] text-4xl'>Building Purpose Driven Businesses</h1>
                </div>
                <div className=' p-3 min-h-[200px] group bg-white relative  shadow-lg shadow-black/50 w-full h-full  flex items-center justify-center rounded-lg '>
                    <img className='opacity-100 group-hover:opacity-0 transition-opacity duration-700 ' src={first} alt="" />
                    <img className='opacity-0 group-hover:opacity-100 absolute w-full h-full transition-opacity duration-700 ' src={card1} alt="" />
                </div>
                <div className=' p-3 min-h-[200px] group bg-white relative  shadow-lg shadow-black/50 w-full h-full  flex items-center justify-center rounded-lg '>
                    <img className='opacity-100 group-hover:opacity-0 transition-opacity duration-700 ' src={second} alt="" />
                    <img className='opacity-0 group-hover:opacity-100 absolute w-full h-full transition-opacity duration-700 ' src={card2} alt="" />
                </div>
                <div className=' p-3 min-h-[200px] group bg-white relative  shadow-lg shadow-black/50 w-full h-full  flex items-center justify-center rounded-lg '>
                    <img className='opacity-100 group-hover:opacity-0 transition-opacity duration-700 ' src={third} alt="" />
                    <img className='opacity-0 group-hover:opacity-100 absolute w-full h-full transition-opacity duration-700 ' src={card3} alt="" />
                </div>
                <div className=' p-3 min-h-[200px] group bg-white relative  shadow-lg shadow-black/50 w-full h-full  flex items-center justify-center rounded-lg '>
                    <img className='opacity-100 group-hover:opacity-0 transition-opacity duration-700 ' src={fourth} alt="" />
                    <img className='opacity-0 group-hover:opacity-100 absolute w-full h-full transition-opacity duration-700 ' src={card4} alt="" />
                </div>
                <img src={Line} className='absolute bottom-[-20px]' alt="" />
            </div>
            <div className='w-[85%] relative flex items-center justify-center gap-6 h-full'>
                <div className='w-[80%] grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 h-full'>
                    <div className='w-[163px] flex items-center justify-center h-[163px] bg-white rounded-lg shadow-lg shadow-black/50'>
                        <img src={logo1} className='w-[60%]' alt="" />
                    </div>
                    <div className='w-[163px] flex items-center justify-center h-[163px] bg-white rounded-lg shadow-lg shadow-black/50'>
                        <img src={logo2} className='w-[60%]' alt="" />
                    </div>
                    <div className='w-[163px] flex items-center justify-center h-[163px] bg-white rounded-lg shadow-lg shadow-black/50'>
                        <img src={logo3} className='w-[60%]' alt="" />
                    </div>
                    <div className='w-[163px] flex items-center justify-center h-[163px] bg-white rounded-lg shadow-lg shadow-black/50'>
                        <img src={logo4} className='w-[60%]' alt="" />
                    </div>
                    <div className='w-[163px] flex items-center justify-center h-[163px] bg-white rounded-lg shadow-lg shadow-black/50'>
                        <img src={logo5} className='w-[60%]' alt="" />
                    </div>
                    <div className='w-[163px] flex items-center justify-center h-[163px] bg-white rounded-lg shadow-lg shadow-black/50'>
                        <img src={logo6} className='w-[60%]' alt="" />
                    </div>
                    <div className='w-[163px] flex items-center justify-center h-[163px] bg-white rounded-lg shadow-lg shadow-black/50'>
                        <img src={logo7} className='w-[60%]' alt="" />
                    </div>
                    <div className='w-[163px] flex items-center justify-center h-[163px] bg-white rounded-lg shadow-lg shadow-black/50'>
                        <img src={logo8} className='w-[60%]' alt="" />
                    </div>
                    <div className='w-[163px] flex items-center justify-center h-[163px] bg-white rounded-lg shadow-lg shadow-black/50'>
                        <img src={logo9} className='w-[60%]' alt="" />
                    </div>
                    <div className='w-[163px] flex items-center justify-center h-[163px] bg-white rounded-lg shadow-lg shadow-black/50'>
                        <img src={logo10} className='w-[60%]' alt="" />
                    </div>

                </div>
                <div className='w-[30%]  h-full'>
                    <h3 className='text-black text-2xl leading-loose'>
                        A Career Implementing Simple Solutions to Solve Complex Problems for
                        World-Class Brands
                    </h3>
                </div>
            </div>
            <h2 className='mt-12  text-center text-7xl font-bold text-[#215488]'>Insights</h2>
            <Insight />
        </div>
    )
}

export default UnderJon