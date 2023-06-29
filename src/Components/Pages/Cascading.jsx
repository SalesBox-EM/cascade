import React from 'react'
import NavBar from '../NavBar'
import LandingImage from '../../Assets/Group 26875.svg'
import Footer from '../Footer/Footer'
import underLine from '../../Assets/UnderLine.svg'
import icon1 from '../../Assets/image 228.svg'
import icon2 from '../../Assets/image 229.svg'
import icon3 from '../../Assets/image 230.svg'
import icon4 from '../../Assets/image 231.svg'
import person1 from '../../Assets/Image4.png'
import person2 from '../../Assets/Image5.png'
import person3 from '../../Assets/Image6.png'
const Cascading = () => {
    return (
        <div id='homecascade' className='w-full h-full '>
            <NavBar />
            <img src={LandingImage} className='pt-[96px]' alt="" />
            <div id='Executive' className='flex flex-col w-full items-center  h-full'>
                <div className='w-[80%] p-10  h-full flex items-start justify-around gap-6'>
                    <div className='w-2/4   relative'>
                        <h1 className='text-[#215488]'>Executive</h1>
                        <h1 className='text-[#215488]'>Business</h1>
                        <h1 className='text-[#215488] mb-6'>Partner</h1>
                        <ul className='text-[#215488] font-normal list-disc p-5'>
                            <li>Save Time.</li>
                            <li className=''>Save Time.
                                Enhance Collaboration & Coordination.
                            </li>
                            <li> Improve Business Outcomes.</li>
                        </ul>
                    </div>
                    <div className=' '>
                        <h4 className='text-black text-2xl font-normal'>Cascade Clarity provides specialist fractional executive-level support.
                            Our Executive Business Partner offering focuses on these Key Activities:</h4>
                        <div className='w-full h-full flex gap-6'>
                            <div className='flex flex-col gap-10 mt-6'>
                                <div className='flex items-center justify-between gap-2'>
                                    <img src={icon1} className='w-[50px]' alt="" />
                                    <h6 className='text-start w-full'>Attend C-Suite meetings and memorialize notes, decisions &
                                        action plans</h6>
                                    <h5 className='bg-gradient-to-b text-[#215488] from-white via-sky-50 to-sky-200/30 p-3 rounded-xl'>"The discipline of writing something down is the first step toward making it happen."
                                        — Lee Iacocca</h5>
                                </div>
                                <div className='flex items-center justify-between gap-2'>
                                    <img src={icon4} className='w-[60px]' alt="" />
                                    <h6 className='text-start  w-full'>Create presentations for C-Suite meetings</h6>
                                </div>
                                <div className='flex items-center justify-between gap-2'>
                                    <img src={icon2} className='w-[60px]' alt="" />
                                    <h6 className='text-start w-full'>Work with individual C-Suite execs to develop & implement cascaded, cross-organizational action plans
                                        to achieve KPIs</h6>
                                </div>
                                <div className='flex items-center justify-between gap-2'>
                                    <img src={icon3} alt="" className='w-[60px]' />
                                    <h6 className='text-start w-full'>Support tracking of KPIs via cross-functional collaboration</h6>
                                </div>
                                <a href="http://" target="_blank" rel="noopener noreferrer" className='text-[#215488]'>The Clarity Methodology {'>'}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id='Revenue' className='flex flex-col w-full items-center  h-full'>
                <div className='w-[80%] h-full flex items-start justify-around gap-6'>
                    <div className='p-10 w-2/4  relative'>
                        <h1 className='text-[#215488]'>Increase
                        </h1>
                        <h1 className='text-[#215488]'> Revenue</h1>
                        <h6 className='mt-10 text-2xl mb-3  font-semibold'>Gain clarity into Sales,
                            Marketing & Product activity.</h6>
                        <h6 className='text-lg'> Cascade Clarity bridges department gaps to facilitate improved data visibility and collaboration. Key Activities include:
                        </h6>
                        <ul className='text-[#215488] font-normal list-disc p-5'>
                            <li>  Benchmarking Marketing and Sales Metrics
                            </li>
                            <li className=''>  Performing Lost Prospect Analysis
                            </li>
                            <li>  Analyzing MQL / SQL productivity</li>
                            <li>   Validating Sales Funnel metrics</li>
                        </ul>
                        <a href="http://" target="_blank" rel="noopener noreferrer" className='text-[#215488]'>The Clarity Methodology {'>'}</a>
                    </div>
                    <div className='p-11 '>
                        <img src={person1} alt="" />
                    </div>
                </div>
            </div>
            <div id='Expenses' className='flex flex-col w-full items-center  h-full'>
                <div className='w-[80%]  h-full flex items-start justify-around gap-6'>
                    <div className=' '>
                        <img src={person2} className='max-h-[650px]' alt="" />
                    </div>
                    <div className='p-10 w-2/4  relative'>
                        <h1 className='text-[#215488]'>Reduce
                        </h1>
                        <h1 className='text-[#215488]'> Expenses</h1>
                        <h6 className='mt-10 text-2xl mb-3  font-semibold'>Gain clarity into innovative, tech-based solutions to reduce costs.</h6>
                        <h6 className='text-lg'>Cascade Clarity surfaces and validates departmental ratios to highlight areas of extraordinary expense. Activities include working with Finance and individual departments to create a Ratio Scorecard to include but not limited to:
                        </h6>
                        <ul className='text-[#215488] font-normal list-disc p-5'>
                            <li>      Sales Expense / Total Revenue
                            </li>
                            <li className=''>    Marketing Expense / Total Revenue
                            </li>
                            <li>   Magic Number = Delta ARR/ S&M expense
                            </li>
                            <li>    Cloud Expense / Total Revenue
                            </li>
                            <li>    Additional areas of need
                            </li>
                        </ul>
                        <a href="http://" target="_blank" rel="noopener noreferrer" className='text-[#215488]'>The Clarity Methodology {'>'}</a>
                    </div>
                </div>
            </div>
            <div id='Processes' className='flex flex-col w-full items-center  h-full'>
                <div className='w-[80%] p-10 mt-6 mb-6  h-full flex items-start justify-around gap-10'>
                    <div className=' '>
                        <img src={person3} className=' max-w-[800px]' alt="" />
                    </div>
                    <div className='w-2/4  relative'>
                        <h1 className='text-[#215488]'>Streamline
                        </h1>
                        <h1 className='text-[#215488]'> Processes</h1>
                        <h6 className='mt-10 text-2xl mb-3  font-semibold'>Gain clarity into organizational structures and processes to boost efficiency.</h6>
                    </div>
                </div>
            </div>
            <div className='flex flex-col w-full items-center  h-full'>
                <div className='w-[80%] -mt-16  p-10   h-full  gap-10'>
                    <h4 className='text-[#215488] text-lg'>
                        Cascade Clarity focuses on improving business processes by crossing organizational boundaries and providing unbiased collaboration and facilitation. Our activities include:
                    </h4>
                    <ul className='p-6 list-disc'>
                        <li>  Set Clear Objectives focusing on desired business outcomes
                        </li>
                        <li> Identify and Map Processes
                        </li>
                        <li> Leverage technology to automate manual tasks and digitize processes wherever possible
                        </li>
                        <li> Foster Collaboration and Communication</li>
                    </ul>
                    <h2 className='text-2xl mb-10'>
                        We tailor our approach to achieve improved outcomes.
                    </h2>
                    <a href="http://" target="_blank" rel="noopener noreferrer" className='text-[#215488] '>The Clarity Methodology {'>'}</a>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Cascading