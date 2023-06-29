import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer/Footer'
import mail from '../../Assets/mail.svg'
import phone from '../../Assets/Phone.svg'
import location from '../../Assets/Location.svg'
import bgImage from '../../Assets/Group 26880.png'
import calendar from '../../Assets/calendar.png'
const Connect = () => {
    return (
        <div id='homeConnect' className='w-full h-full'>
            <NavBar />
            <img src={bgImage} className='pt-[96px]' alt="" />
            <div className='w-full h-full flex items-center justify-center'>
                <div className='w-[80%] mt-10 mb-10 h-full flex items-start justify-center gap-6'>
                    <div className='flex flex-col   justify-between  w-1/3 p-6 h-full min-h-[300px] gap-8 mt-6 mb-6'>
                        <div>
                            <label className='' htmlFor="">Name</label>
                            <input type="text" placeholder='Jhon Doe' className='w-full outline mt-1 outline-1 p-2  rounded-md outline-gray-600' name="" id="" />
                        </div>
                        <div className='flex  gap-6'>
                            <div className='w-full'>
                                <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
                                <input type="email" placeholder='example@example.com' className='w-full outline outline-1 mt-1 p-2  rounded-md outline-gray-600' required name="" id="" />
                            </div>

                            <div className='w-full'>
                                <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 ">Phone number</label>
                                <input type="tel" id="phone" className="w-full outline mt-1 p-2 outline-1  rounded-md outline-gray-600 " placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required></input>
                            </div>
                        </div>
                        <div className='w-full'>
                            <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 ">Website</label>
                            <input type="text" placeholder='www.' className='w-full outline outline-1 mt-1 p-2  rounded-md outline-gray-600' name="" id="" />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <div className='flex gap-3 mt-5'>
                                <img src={mail} alt="" />
                                <h5>gainclarity@cascadeclarity.com</h5>
                            </div>
                            <div className='flex gap-3 mt-5'>
                                <img src={phone} alt="" />
                                <h5>+1(510) 123 4567</h5>
                            </div>
                            <div className='flex gap-3 mt-5'>
                                <img src={location} alt="" />
                                <h5>Oakland, CA - United States</h5>
                            </div>

                        </div>
                    </div>
                    <img src={calendar} alt="" />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Connect