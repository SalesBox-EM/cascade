import React from 'react'
import OurTeamImage from '../../Assets/BgImageLeaderShip.png'
import NavBar from '../NavBar'
import Footer from '../Footer/Footer'
import JohnsImage from '../../Assets/JohnsImage.png'
import DonRudolph from '../../Assets/DonRudolph.png'
import MargaretAnn from '../../Assets/Margaret.png'
import UsmansImage from '../../Assets/headshot_3465 1.png'
import JonathanGoldin from '../../Assets/Picture1 (1).png'
const OurTeam = () => {
    return (
        <div id='homeLeadership' className='w-full h-full'>
            <NavBar />
            <div className='w-full h-full relative'>
                <div className='absolute w-full h-full flex  items-center justify-start'>
                    <div className='mt-12' >
                        <h1 className='pl-12 text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl'>
                            Leadership
                        </h1>
                        <svg className='w-[250px] h-[6px] lg:w-[500px]' viewBox="0 0 733 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M733 0H-10V8H733V0Z" fill="url(#paint0_linear_2042_4070)" />
                            <defs>
                                <linearGradient id="paint0_linear_2042_4070" x1="-10" y1="4.03454" x2="732.954" y2="4.03454" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#6245F1" />
                                    <stop offset="0.1724" stop-color="#615FEC" />
                                    <stop offset="0.5426" stop-color="#5EA3DF" />
                                    <stop offset="1" stop-color="#5AFFCE" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
                <img src={OurTeamImage} alt="Cascade Clarity Leadership " className='w-full pt-[96px] object-cover min-h-[450px]' />
            </div>
            <div className='w-full h-full flex flex-col items-center justify-center'>

                <div className='w-[95%]  lg:w-[90%] 2xl:w-[85%] grid grid-cols-1 gap-10 lg:gap-16 mt-16 mb-16'>
                    <div className='w-full h-full  flex flex-col lg:flex-row items-center lg:items-start justify-start gap-6'>
                        <div>
                            <img src={JohnsImage} className='w-[300px] shadow-lg  ' alt="John Cuellar" />
                        </div>
                        <div className='flex flex-col justify-start items-center lg:items-start h-full w-full gap-2'>
                            <div>
                                <h2 className='text-[#4388CE] text-2xl text-center w-full  font-bold xl:text-3xl 2xl:text-4xl'>John Cuellar</h2>
                                <h3 className='text-black text-base mb-1 lg:mb-0  xl:text-lg 2xl:text-xl'>
                                    Founder & CEO
                                </h3>
                            </div>
                            <p className='text-[15px]'>
                                John’s professional background includes the co-founding of SyncHR and leading the company through its early growth stage. John then served as CTO of SyncHR for 10+ years. Prior to co-founding SyncHR, John was the CEO of Harbor Technology Group, since acquired by Mellon Financial Corporation - a systems integration company focused on web-based solutions that automated HR processes for fortune 500 companies.Before Harbor Technology Group, he spent an internship with the Swiss Bank Corporation in their derivatives pricing and trading group and worked as a senior manager for the US Navy.John received  his Bachelor of Science degree in Electrical and Computer Engineering from the University of California at Santa Barbara, and his Master of Business Administration from the Haas School of Business at the University of California at Berkeley.
                            </p>
                            <p className='text-[15px]'>
                                More About John:
                                John lives in San Francisco and enjoys outdoor sports such as snowboarding, surfing, golf, cycling, and running. He likes to exercise the "other" side of his brain by playing the guitar and piano. John also has two sons that are both currently working in the Tech Industry.
                            </p>
                        </div>
                    </div>
                    <div className='w-full h-full  flex flex-col lg:flex-row items-center lg:items-start justify-start gap-6'>
                        <div>
                            <img src={MargaretAnn} className='w-[300px] rounded-[10px] shadow-lg ' alt="MAC" />
                        </div>
                        <div className='flex flex-col justify-start items-center lg:items-start h-full w-full '>
                            <div>
                                <h2 className='text-[#4388CE] -mt-3 text-2xl font-bold xl:text-3xl 2xl:text-4xl'>Margaret-Ann Cole</h2>
                                <h3 className='text-black text-base  xl:text-lg mb-1 lg:mb-0 2xl:text-xl'>
                                    Founding Member
                                </h3>
                            </div>
                            <p className='text-[15px]'>
                                Margaret-Ann is a global business leader with expertise in developing more effective and efficient ways of leveraging individual potential within organizations to achieve business success. With 25+ years’ experience developing leaders on all aspects of strategic planning and workforce transformation, she is a recognized thought leader and spokesperson in areas of human resources, talent, leadership, and culture. Working with organizations of all sizes and industries, she works to unleash the potential of talent and up-level core business operations.
                                Her experience includes:
                            </p>
                            <ul className='list-disc text-[14px] pl-6'>
                                <li>
                                    Serving as Chief People and Transformation Officer for a global purpose driven PR communications company, Porter Novelli.
                                </li>
                                <li>
                                    MD and NA leader for Workforce Transformation practice at Accenture.
                                </li>
                                <li>
                                    SVP and Leader of the NA Career and Talent practice for Right Management.
                                </li>
                                <li>
                                    Founder of Margaret-Ann Cole Associates, a global People and Workforce Strategy consulting firm.
                                </li>
                                <li>
                                    Leader of hundreds of strategy and transformation projects over the last 25+ years.
                                </li>
                            </ul>

                            <p className='mt-1 text-[15px]'>Margaret-Ann received her Bachelor of Science degree in Psychology and Economics from Fordham University and her Master of Business Administration from TRIUM, an alliance of the New York University Stern School, the London School of Economics and Politics, and the HEC School of Management in Paris.</p>
                        </div>
                    </div>
                    <div className='w-full h-full  flex flex-col lg:flex-row items-center lg:items-start justify-start gap-6'>
                        <div>
                            <img src={DonRudolph} className='w-[300px] rounded-[10px] shadow-lg ' alt="Don Rudolph" />
                        </div>
                        <div className='flex flex-col justify-start items-center lg:items-start h-full w-full gap-2'>
                            <div>
                                <h2 className='text-[#4388CE] text-2xl font-bold xl:text-3xl 2xl:text-4xl'>Don Rudolph</h2>
                                <h3 className='text-black text-base  xl:text-lg 2xl:text-xl'>
                                    Advisor
                                </h3>
                            </div>
                            <p className='text-[15px]'>
                                Don is a senior information technology executive and strategic business partner with extensive experience in a wide range of companies and industries. Don specializes in Information Security strategy, management, and governance. A background in FFIEC, PCI, HIPAA, SOC 1&2, and ISO 27001 regulatory regimes in a variety of industries and organizations gives him a real world perspective on information security compliance. He has a demonstrated history of successfully implementing innovative technical solutions that meet strategic and tactical business objectives. Recognized as an effective collaborator, mentor, and servant leader, he helps individuals and organizations reach their highest potential. His strong service ethic produces a successful customer service culture on teams he leads. Don has the ability to communicate technical information to business partners with clarity. An effective change agent, he is ready to engage with others in the creative change process.
                            </p>

                        </div>
                    </div>
                    <div className='w-full h-full  flex flex-col lg:flex-row items-center lg:items-start justify-start gap-6'>
                        <div>
                            <img src={JonathanGoldin} className='w-[300px] h-full rounded-[10px] shadow-lg ' alt="Jonathan Goldin" />
                        </div>
                        <div className='flex flex-col justify-start items-center lg:items-start h-full w-full gap-2'>
                            <div>
                                <h2 className='text-[#4388CE] text-2xl font-bold xl:text-3xl 2xl:text-4xl'>Jonathan Goldin</h2>
                                <h3 className='text-black text-base  xl:text-lg 2xl:text-xl'>
                                    Advisor
                                </h3>
                            </div>
                            <p className='text-[15px]'>
                                Jonathan is a growth focused global human capital, transformation, and business executive who works with leaders and stakeholders to develop and scale more aligned, productive, engaged, and agile workplaces that drive business results. Jonathan brings a breadth and depth of experience, working with businesses of all sizes, complexity and industry, to ensure an organization’s talent, culture, process and technology practices enable business strategy, drive growth, and deliver value. Working with an effective balance of strategic vision and tactical execution, Jonathan helps identify critical value drivers, assess needs and gaps in capabilities, translate opportunities into action plans, and mobilize stakeholders to drive execution. Jonathan’s experience includes leadership roles as a Chief People Officer, private equity operating executive, VP of HR Strategy & Transformation at a Global Fortune 500, human capital & business transformation consultant, and General Counsel and Head of Business Development at a successful start-up.
                            </p>
                            <p className='text-[15px]'>
                                Jonathan is a graduate of Hobart & William Smith Colleges, and earned his law degree, cum laude, from the University of Maine School of Law. He lives near the beach in New Jersey with his wife, Cathy, and 3 children, where he enjoys running, biking, SUP surfing, skiing, ice hockey, and struggling on the banjo, all in an attempt to stay young at heart.
                            </p>

                        </div>
                    </div>

                    <div className='w-full h-full  flex flex-col lg:flex-row items-center lg:items-start justify-start gap-6'>
                        <div>
                            <img src={UsmansImage} className='w-[300px] h-full rounded-[10px] shadow-lg ' alt="Usman Raza" />
                        </div>
                        <div className='flex flex-col justify-start items-center lg:items-start h-full w-full gap-2'>
                            <div>
                                <h2 className='text-[#4388CE] text-2xl font-bold xl:text-3xl 2xl:text-4xl'>Usman Raza</h2>
                                <h3 className='text-black text-base  xl:text-lg 2xl:text-xl'>
                                    Advisor
                                </h3>
                            </div>
                            <p className='text-[15px]'>
                                Usman is an accomplished physician-turned-product leader, known for his impressive track record in building scalable digital health and virtual care products. Over the last seven years in the tech industry, Usman has spearheaded the development of patient-facing chatbots, digital therapeutics for mental disorders and lifestyle interventions, data platforms for generating business insights and real-world evidence, patient services platforms and more.
                                Prior to transitioning to the tech industry, Usman spent almost a decade as a physician and public health professional. He has led large-scale public health interventions for HIV, polio vaccination, maternal child health services, nutrition programs, and digital transformation initiatives at public and private organizations. Usman has also consulted for UN agencies, federal and state health departments on epidemic modeling, monitoring and evaluation, and capacity building for health professionals.
                                Usman is driven by his passion for utilizing game-changing technologies to revolutionize access to care, improve patient outcomes, and transform the way providers deliver care.
                                Born and raised in Pakistan, Usman earned his medical degree and residency from Khyber Medical College before receiving his MS degree from Harvard School of Public Health and MIMS from UC Berkeley School of Information.
                            </p>

                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default OurTeam
