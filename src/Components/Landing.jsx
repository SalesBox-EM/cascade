import React, { useState } from 'react';
import BGImage from '../Assets/div.tp-bgimg.png';
import UnderLine from '../Assets/UnderLine.svg';
import NavBar from './NavBar';
const Landing = () => {

	return (
		<div className='w-full h-[100vh] flex items-start justify-center overflow-hidden'>
			<NavBar />
			<img
				src={BGImage}
				alt=''
				className='w-full absolute  z-0 h-full  object-cover '
			/>
			<div className='2xl:w-[700px]  xl:w-[550px] flex gap-4 items-center justify-center  text-white right-[5%] h-[70px] bg-[#1E4976]/80 absolute bottom-0 rounded-t-[10px] '>
				<h4 className='xl:text-2xl 2xl:text-3xl'>
					Executive Business Partner
				</h4>
				<h4 className='xl:text-2xl 2xl:text-3xl'>
					|
				</h4>
				<h4 className='xl:text-2xl 2xl:text-3xl'>
					Smart Technology
				</h4>
			</div>
			<div className='h-full mt-[16px] relative w-[100%] p-16 flex flex-col items-start justify-center gap-10 z-40   overflow-hidden'>
				<div className='  '>
					<h1 className='z-40'>
						Consulting Services for
					</h1>
					<h1 className='z-40'>
						CEOs & Senior Leadership
						<img src={UnderLine} className='left-[-100px] w-[60%]  mt-4  absolute' alt="" />
					</h1>
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
