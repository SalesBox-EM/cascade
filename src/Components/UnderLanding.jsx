import React from 'react';
import Card from '../Assets/card.png'
import imageOne from '../Assets/Image.png'
import UnderLine from '../Assets/UnderLine.svg';
import { BsChevronRight } from 'react-icons/bs'
import { HashLink } from 'react-router-hash-link';
const UnderLanding = () => {
	return <div className='w-full   bg-gradient-to-b  flex flex-col items-center justify-center h-full'>
		<div className='w-full bg-gradient-to-b from-white to-[#C4E6E0] h-fit flex flex-col items-center justify-center '>
			<h4 className='text-black/80 text-center mt-6 hidden lg:flex    '>
				Achieve your Corporate Objectives with C-suite facilitation, cross-organizational
			</h4>
			<h4 className='text-black/80 text-center mb-16 hidden lg:flex'>
				engagement, and integrated, data-driven, AI solutions.
			</h4>
			<h4 className='text-black/80 text-center p-6  flex lg:hidden    '>
				Achieve your Corporate Objectives with C-suite facilitation, cross-organizational engagement, and integrated, data-driven, AI solutions.
			</h4>

		</div>
		<img src={Card} className='w-full h-full min-h-[35vh] hidden md:flex      object-cover   ' alt="" />
		<div className='w-full h-full  flex relative items-center justify-center'>
			<div className='absolute z-40 h-fit flex flex-col gap-2 text-white xl:top-[30%] left-[30%] lg:left-[50%]'>
				<h1 className='2xl:text-[80px] lg:text-[65px] text-[25px]'>Gain Clarity</h1>
				<img src={UnderLine} alt="" />
				<h5 className='w-[100%] lg:w-[80%] lg:text-2xl text-[18px] bg-gradient-to-br from-sky-400 to-emerald-500 text-transparent bg-clip-text font-semibold '>Experience the power of an Executive Business Partner. We'll join your Executive Team as objective facilitators, bringing clarity to your organization.</h5>
				<HashLink to="/Connect/#homeConnect">
					<h5 className='hover:text-sky-500 text-white flex items-center justify-center transition-all duration-75 ease-in w-fit gap-1'>Get Started Now <BsChevronRight className='text-sm' /></h5>
				</HashLink>
			</div>
			<img src={imageOne} className='w-full h-full min-h-[50vh]  select-none bottom-0  object-cover' alt="" />
		</div>

	</div>;
};
export default UnderLanding;
