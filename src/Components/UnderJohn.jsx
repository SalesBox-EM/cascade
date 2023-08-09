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
import card5 from '../Assets/5.png'
import card6 from '../Assets/6.png'
import card7 from '../Assets/7.png'
import card8 from '../Assets/8.png'
import card9 from '../Assets/9.png'
import card10 from '../Assets/10.png'
import card11 from '../Assets/11.png'
import card12 from '../Assets/12.png'
import card13 from '../Assets/13.png'
import card14 from '../Assets/14.png'
import Insight from './Inight'

const UnderJohn = () => {
    return (
        <div className='w-full h-full md:mt-10 lg:mt-6 flex flex-col p-6 gap-10 bg-gradient-to-b from-white via-sky-200 to-sky-100  items-center justify-center'>
            <div className='w-full lg:hidden '>
                <h1 className='text-black lg:w-[50%] lg:text-4xl w-[100%] text-2xl  text-center'>Building Purpose Driven Businesses</h1>
            </div>
            <div className='w-[95%] lg:w-[85%] relative grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 items-center justify-center gap-6 h-full'>
                <div className='w-full hidden max-w-[258px] h-full  max-h-[258px] lg:flex items-center justify-center rounded-lg '>
                    <h1 className='text-black lg:w-[50%] lg:text-4xl w-[100%] text-2xl text-start'>Building Purpose Driven Businesses</h1>
                </div>
                <div className=' p-3  group bg-white max-w-[150px] max-h-[150px] md:max-w-[258px] md:max-h-[258px] relative  shadow-lg shadow-black/50 w-full h-full  flex items-center justify-center rounded-lg '>
                    <img className='opacity-100 group-hover:opacity-0 transition-opacity duration-700 ' src={first} alt="" />
                    <img className='opacity-0 group-hover:opacity-100 absolute w-full h-full transition-opacity duration-700 ' src={card1} alt="" />
                </div>
                <div className=' p-3  group bg-white max-w-[150px] max-h-[150px] md:max-w-[258px] md:max-h-[258px] relative  shadow-lg shadow-black/50 w-full h-full  flex items-center justify-center rounded-lg '>
                    <img className='opacity-100 group-hover:opacity-0 transition-opacity duration-700 ' src={second} alt="" />
                    <img className='opacity-0 group-hover:opacity-100 absolute w-full h-full transition-opacity duration-700 ' src={card2} alt="" />
                </div>
                <div className=' p-3  group bg-white max-w-[150px] max-h-[150px] md:max-w-[258px] md:max-h-[258px] relative  shadow-lg shadow-black/50 w-full h-full  flex items-center justify-center rounded-lg '>
                    <img className='opacity-100 group-hover:opacity-0 transition-opacity duration-700 ' src={third} alt="" />
                    <img className='opacity-0 group-hover:opacity-100 absolute w-full h-full transition-opacity duration-700 ' src={card3} alt="" />
                </div>
                <div className=' p-3  group bg-white max-w-[150px] max-h-[150px] md:max-w-[258px] md:max-h-[258px] relative  shadow-lg shadow-black/50 w-full h-full  flex items-center justify-center rounded-lg '>
                    <img className='opacity-100 group-hover:opacity-0 transition-opacity duration-700 ' src={fourth} alt="" />
                    <img className='opacity-0 group-hover:opacity-100 absolute w-full h-full transition-opacity duration-700 ' src={card4} alt="" />
                </div>
                <img src={Line} className='absolute bottom-[-20px]' alt="" />
            </div>
            <div className='w-[80%]  h-full   lg:hidden'>
                <h3 className='text-black text-2xl  leading-loose'>
                    A Career Implementing Simple Solutions to Solve Complex Problems for
                    World-Class Brands
                </h3>
            </div>
            <div className='w-[95%] lg:w-[85%]    relative flex flex-col lg:flex-row items-center justify-center gap-6 h-full'>
                <div className=' w-[100%]   grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 h-full'>
                    <div className='group  bg-white  relative   shadow-lg shadow-black/50    rounded-2xl '>
                        <img className='opacity-100 group-hover:opacity-0 w-full h-full   transition-opacity duration-700 ' src={logo1} alt="" />
                        <img className='opacity-0 group-hover:opacity-100 absolute top-0 w-full h-full transition-opacity duration-700 ' src={card5} alt="" />
                    </div>
                    <div className='group bg-white  relative   shadow-lg shadow-black/50    rounded-2xl '>
                        <img className='opacity-100 group-hover:opacity-0 w-full h-full   transition-opacity duration-700 ' src={logo2} alt="" />
                        <img className='opacity-0 group-hover:opacity-100 absolute top-0 w-full h-full transition-opacity duration-700 ' src={card6} alt="" />
                    </div>
                    <div className='group bg-white  relative   shadow-lg shadow-black/50    rounded-2xl '>
                        <img className='opacity-100 group-hover:opacity-0 w-full h-full   transition-opacity duration-700 ' src={logo3} alt="" />
                        <img className='opacity-0 group-hover:opacity-100 absolute top-0 w-full h-full transition-opacity duration-700 ' src={card7} alt="" />
                    </div>
                    <div className='group bg-white  relative   shadow-lg shadow-black/50    rounded-2xl '>
                        <img className='opacity-100 group-hover:opacity-0 w-full h-full   transition-opacity duration-700 ' src={logo4} alt="" />
                        <img className='opacity-0 group-hover:opacity-100 absolute top-0 w-full h-full transition-opacity duration-700 ' src={card8} alt="" />
                    </div>
                    <div className='group bg-white  relative   shadow-lg shadow-black/50    rounded-2xl '>
                        <img className='opacity-100 group-hover:opacity-0 w-full h-full   transition-opacity duration-700 ' src={logo5} alt="" />
                        <img className='opacity-0 group-hover:opacity-100 absolute top-0 w-full h-full transition-opacity duration-700 ' src={card9} alt="" />
                    </div>
                    <div className='group bg-white  relative   shadow-lg shadow-black/50    rounded-2xl '>
                        <img className='opacity-100 group-hover:opacity-0 w-full h-full   transition-opacity duration-700 ' src={logo6} alt="" />
                        <img className='opacity-0 group-hover:opacity-100 absolute top-0 w-full h-full transition-opacity duration-700 ' src={card10} alt="" />
                    </div>
                    <div className='group bg-white  relative   shadow-lg shadow-black/50    rounded-2xl '>
                        <img className='opacity-100 group-hover:opacity-0 w-full h-full   transition-opacity duration-700 ' src={logo7} alt="" />
                        <img className='opacity-0 group-hover:opacity-100 absolute top-0 w-full h-full transition-opacity duration-700 ' src={card11} alt="" />
                    </div>
                    <div className='group bg-white  relative   shadow-lg shadow-black/50    rounded-2xl '>
                        <img className='opacity-100 group-hover:opacity-0 w-full h-full   transition-opacity duration-700 ' src={logo8} alt="" />
                        <img className='opacity-0 group-hover:opacity-100 absolute top-0 w-full h-full transition-opacity duration-700 ' src={card12} alt="" />
                    </div>
                    <div className='group bg-white  relative   shadow-lg shadow-black/50    rounded-2xl '>
                        <img className='opacity-100 group-hover:opacity-0 w-full h-full   transition-opacity duration-700 ' src={logo9} alt="" />
                        <img className='opacity-0 group-hover:opacity-100 absolute top-0 w-full h-full transition-opacity duration-700 ' src={card13} alt="" />
                    </div>
                    <div className='group bg-white  relative   shadow-lg shadow-black/50    rounded-2xl '>
                        <img className='opacity-100 group-hover:opacity-0 w-full h-full   transition-opacity duration-700 ' src={logo10} alt="" />
                        <img className='opacity-0 group-hover:opacity-100 absolute top-0 w-full h-full transition-opacity duration-700 ' src={card14} alt="" />
                    </div>
                </div>
                <div className='w-[30%] hidden lg:flex  h-full'>
                    <h3 className='text-black text-2xl leading-loose hidden lg:flex'>
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

export default UnderJohn