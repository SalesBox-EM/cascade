import React from 'react'
import Jon from '../Assets/Group 26941.png'
import LinkedIn from '../Assets/Group (1).svg'
const John = () => {
    return (
        <div className='w-full h-full min-h-[30vh] hidden md:flex     relative'>
            <div className='flex absolute  flex-col top-[50px] sm:top-[70px] xl:top-[150px] 2xl:top-[200px]  right-[20%] items-end'>
                <div className='flex items-center justify-center gap-3'>
                    <h1 className='text-[#4388CE] text-base sm:text-2xl md:text-4xl xl:text-6xl 2xl:text-7xl'>Meet John Cuellar</h1>
                    <a href="https://www.linkedin.com/in/cuellar/" target="_blank" rel="noopener noreferrer">
                        <img src={LinkedIn} className='w-5 h-5 lg:w-14 lg:h-full' alt="" />
                    </a>
                </div>
                <h4 className='text-black text-sm md:text-xl xl:text-2xl 2xl:text-4xl'>(pronounced: quay-yar)</h4>
            </div>
            <img src={Jon} className='  select-none bottom-0 min-h-[30vh]     object-fill' alt="" />
        </div>
    )
}

export default John