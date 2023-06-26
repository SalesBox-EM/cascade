import React from 'react'
import Logo from '../../Assets/Vector.png'
import LogoText from '../../Assets/Group 26781.svg'
const Footer = () => {
    return (
        <div className='w-full h-full flex p-12 flex-col items-center justify-center bg-[#0C2239]'>
            <div className='w-[80%] h-full flex items-start justify-between '>
                <div className='w-2/5 flex flex-col items-start gap-3 justify-center'>
                    <div className='flex items-center justify-center gap-2'>
                        <img src={Logo} alt="" />
                        <img src={LogoText} alt="" />
                    </div>
                    <h4 className='text-sm lg:text-base text-gray-500'>Cascade Clarity creates company cohesion and empowers executives, allowing organizations and people to achieve peak potential.</h4>
                </div>
                <div className='w-2/4 h-full grid grid-cols-4 items-center justify-center'>
                    <div className='flex flex-col '>
                        <h2 >Big Text</h2>
                        <h6>Small Text</h6>
                        <h6>Small Text</h6>
                        <h6>Small Text</h6>
                        <h6>Small Text</h6>
                    </div>
                    <div className='flex flex-col'>
                        <h2>Big Text</h2>
                        <h6>Small Text</h6>
                        <h6>Small Text</h6>
                        <h6>Small Text</h6>
                        <h6>Small Text</h6>
                    </div>
                    <div className='flex flex-col'>
                        <h2>Big Text</h2>
                        <h6>Small Text</h6>
                        <h6>Small Text</h6>
                        <h6>Small Text</h6>
                        <h6>Small Text</h6>
                    </div>
                    <div className='flex flex-col'>
                        <h2>Big Text</h2>
                        <h6>Small Text</h6>
                        <h6>Small Text</h6>
                        <h6>Small Text</h6>
                        <h6>Small Text</h6>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Footer