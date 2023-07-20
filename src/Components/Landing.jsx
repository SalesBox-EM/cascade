import React, { useState } from 'react';
import BGImage from '../Assets/div.tp-bgimg.png';
import UnderLine from '../Assets/UnderLine.svg';
import VideoBG from '../Assets/executive-team-people-listening-ceo-discussing-pap-2021-09-03-22-01-43-utc.mp4'
import NavBar from './NavBar';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';
const Landing = () => {
	// const location = useLocation();
	// const scrollRefHome = useRef(null);
	// useEffect(() => {
	// 	const scrollToDiv = () => {
	// 		const navbarHeight = 90; // Height of your fixed navbar in pixels
	// 		const topOffset = scrollRefHome.current.offsetTop - navbarHeight;
	// 		window.scrollTo({
	// 			top: topOffset,
	// 			behavior: 'smooth',
	// 		});
	// 	};

	// 	const queryParams = new URLSearchParams(location.search);
	// 	const scrollTo = queryParams.get('scrollTo');
	// 	if (scrollTo === 'Home' && scrollRefHome.current) {
	// 		scrollToDiv();
	// 	}
	// }, [location.search]);
	return (
		<div
			id='Home' className='w-full h-[100vh] flex items-start justify-center overflow-hidden'>
			<NavBar />
			<div className='w-full h-full absolute bg-black/20 z-20'>
			</div>
			<div className='w-full h-full absolute bg-gradient-to-r from-black/90 z-20'>
			</div>
			<video
				className="w-[100%] opacity-100 h-full object-cover absolute aspect-video z-0"
				src={VideoBG}
				loop
				autobuffer='true'
				autoPlay
				muted
				playsInline
				disablePictureInPicture
				preload={"auto"}
				type={"video/mp4"}
			></video>
			<div className='2xl:w-[700px]  xl:w-[550px] w-[320px] lg:w-[400px] z-50 flex gap-4 items-center justify-center   text-white lg:right-[5%] sm:right-0 h-[70px] bg-[#1E4976]/80 absolute bottom-0 rounded-t-[10px] '>

				<HashLink to="/Cascading/#Executive">
					<h4 className='xl:text-2xl 2xl:text-3xl text-base text-center hover:text-[#00D2AD] transition-all ease-in duration-300 z-50 cursor-pointer'>
						Executive Business Partner
					</h4>
				</HashLink>
				<h4 className='xl:text-2xl 2xl:text-3xl text-base'>
					|
				</h4>
				<NavLink className={({ isActive }) =>
					isActive ? " text-blue-950 font-semibold" : " text-black font-normal"
				} to={{ pathname: '/SmartTech', search: '?scrollTo=homeTech' }}>

					<h4 className='xl:text-2xl 2xl:text-3xl text-center text-base hover:text-[#00D2AD] transition-all ease-in duration-300 z-50 cursor-pointer'>
						Smart Technology
					</h4>
				</NavLink>
			</div>
			<div className='h-full lg:mt-[16px] relative w-[100%] p-6 lg:p-16 flex flex-col items-start justify-center gap-10 z-40   overflow-hidden'>
				<div className=' w-full '>
					<h1 className='z-40 hidden lg:flex '>
						Consulting Services for
					</h1>
					<h1 className='z-40 flex lg:hidden '>
						Consulting Services for CEOs & Senior Leadership
					</h1>
					<h1 className='z-40 hidden lg:flex'>
						CEOs & Senior Leadership
					</h1>
					<img src={UnderLine} className='left-[-100px] lg:w-[60%] w-[80%]  mt-4  absolute' alt="" />
				</div>
				<div>
					<h3 className=''>
						Empowering Strategic Decision-Making
					</h3>
					<h3 className=' '>
						Through Top-Down Solutions
					</h3>
				</div>
			</div>

		</div >
	);
};

export default Landing;
