import React from 'react'
import NavBar from '../NavBar'
import LandingImage from '../../Assets/Group 26874.svg'
import UnderLine from '../../Assets/UnderLine.svg'
import LightBulp from '../../Assets/LightBulp.svg'
import GettyImage from '../../Assets/GettyImages-1165320149 2.png'
import GettyImage2 from '../../Assets/GettyImages-1165320149 1.png'
import Footer from '../Footer/Footer'
const Organizational = () => {
    return (
        <div id='homeorganize' className='w-full h-full'><NavBar />
            <img src={LandingImage} className='pt-[96px] w-full  ' alt="" />
            <h1 id='Silo' className=' text-center mt-12 mb-4 text-[#215488]'>The Silo Effect</h1>
            <img src={UnderLine} className='w-[64%]' alt="" />
            <div className='w-full h-full flex flex-col items-center justify-center'>
                <div className='w-[80%] h-full flex items-center  p-6 gap-10'>
                    <img src={LightBulp} className='xl:w-[340px] w-[150px]' alt="" />
                    <div className='flex flex-col gap-6 text-xl'>
                        <p>Through decades of experience, we have gained a deep understanding of the challenges organizational structures can create.
                        </p>
                        <p>  One such challenge is the silo effect, a phenomenon more attributable to psychology than any managerial or leadership deficiency. Silos often cause information for strategic decision-making to be biased, incomplete, and obscured.

                        </p>
                        <p>Cascade Clarity provides an unbiased bridge and engagement mechanism for senior leaders, facilitating cross-organizational gaps while deploying smart technology solutions when needed. The result? Neutral, reliable data and metrics for strategic decision-making.</p>
                        <a href="http://" className='text-[#345D8A] text-3xl' target="_blank" rel="noopener noreferrer">Let's Discuss</a>
                    </div>
                </div>
            </div>
            <div id='Data' className='w-full h-full relative mb-6'>
                <h1 className=' text-center mt-12  text-[#215488]'>Data Visibility </h1>
                <img src={UnderLine} className='w-[63%] absolute right-0 -bottom-[20px]  ' alt="" />
            </div>
            <div className='w-full h-full flex flex-col items-center justify-center mb-6'>
                <div className='w-[80%] h-full flex items-center  p-6 gap-10'>
                    <img src={GettyImage} className='xl:w-[340px]  w-[150px]' alt="" />
                    <div className='flex flex-col gap-6 text-xl'>
                        <p>
                            Unbiased, intelligible, and summarized data for strategic decision-making can be challenging to obtain because of the following reasons:
                        </p>
                        <div>
                            <h5 className='text-[#1a3c5f] font-semibold'> Siloed Data and Systems</h5>
                            <p>
                                Isolated systems and department-specific databases. Lack of communication and integration.
                            </p>
                        </div>
                        <div>
                            <h5 className='text-[#1a3c5f] font-semibold'> Organizational Complexity and Communication Gaps</h5>
                            <p>
                                Several layers of hierarchy, departments, and teams.
                            </p>
                        </div>
                        <div>
                            <h5 className='text-[#1a3c5f] font-semibold'>  Limited Data Accessibility</h5>
                            <p>

                                Minimal transparency with little to no collaboration.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div id='Cascading' className='w-full h-full  flex flex-col items-center justify-center mb-6'>
                <div className='w-[80%] h-full flex items-center justify-between  p-6 gap-10'>
                    <div className=' flex flex-col relative justify-center items-start'>
                        <h1 className=' text-center   text-[#215488] h-fit mt-24'>Cascading </h1>
                        <h1 className=' text-center   text-[#215488] h-fit'>Objectives </h1>
                        <h5 className='mt-10 mb-8'>Common Corporate Objectives typically
                            take some form of:
                        </h5>
                        <ul className='list-disc'>
                            <li>Increasing Revenue
                            </li>
                            <li>Reducing Expenses

                            </li>
                            <li> Improving Customer Satisfaction

                            </li>
                            <li> Streamlining Business Processes
                            </li>
                        </ul>
                    </div>
                    <img src={GettyImage2} className='w-[50%]' alt="" />
                </div>
                <div className='w-[80%] h-full mt-6 mb-6 '>
                    <h5>In each instance, the objective must be broken down into cascaded goals with corresponding Objective and Key Result measurements(OKRs).</h5>
                    <div className='w-full h-full border-2 p-4 rounded-2xl mt-6 border-blue-950'>
                        <h5>For example: Increase Sales by 20 %</h5>
                        <ul className='pl-8 pt-2 list-disc'>
                            <li> <b>Marketing Department</b>: Develop and implement targeted marketing campaigns to increase Market Qualified Leads(MQLs) by 30 %</li>
                            <li>  <b>Sales Department</b> : Increase the number of sales qualified leads(SQLs) by 40 %</li>
                            <li> <b>Customer Service Department</b>: Improve customer satisfaction ratings by 10 % to improve the quality and quantity of customer referrals</li>
                        </ul>
                    </div>
                    <h5 className='mt-4 mb-6'>However, collaboration and communication usually  <span className='underline text-blue-800 italic'>degrade</span> as objectives cascade.</h5>
                    <h5 className='mb-10'>Cascade Clarity facilitates the smooth execution of interdepartmental efforts so that accurate, unbiased information is gathered and presented to senior leaders.In essence, we provide an in -depth understanding of business performance while facilitating decision - making for C - Suite execs.</h5>
                    <a href="http://" target="_blank" className='pb-5' rel="noopener noreferrer">Explore Cascading Solutions</a>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default Organizational



