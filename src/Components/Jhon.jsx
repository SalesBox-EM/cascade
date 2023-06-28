import React from 'react'
import Jon from '../Assets/Group 26883.png'
import LinkedIn from '../Assets/Group (1).svg'
const Jhon = () => {
    return (
        <div className='w-full h-full  relative'>
            <div className='flex absolute  flex-col top-[150px] right-[20%] items-end'>
                <div className='flex items-center justify-center gap-3'>
                    <h1 className='text-[#4388CE]'>Meet John Cuellar</h1>
                    <a href="https://www.linkedin.com/in/cuellar/" target="_blank" rel="noopener noreferrer">
                        <img src={LinkedIn} alt="" />
                    </a>
                </div>
                <h4 className='text-black'>(pronounced: quay-yar)</h4>
            </div>
            <img src={Jon} alt="" />
        </div>
    )
}

export default Jhon