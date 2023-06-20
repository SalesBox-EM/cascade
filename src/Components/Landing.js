import React from 'react';
import BGImage from '../Assets/div.tp-bgimg.png';
import NavBar from './NavBar';
const Landing = () => {
	return (
		<div className='w-full h-[100vh] overflow-hidden'>
			<NavBar />
			<img
				src={BGImage}
				alt=''
				className='w-full  z-0 h-[984px] bg-cover'
			/>
			<div className='w-full h-full absolute flex items-center justify-center top-0 z-40'>
				<h1 className='text-black z-10'>
					Consulting Services for CEOs & Senior Leadership
				</h1>
			</div>
		</div>
	);
};

export default Landing;
