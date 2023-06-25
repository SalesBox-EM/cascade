import React from 'react';
import Card from '../Assets/card.svg'
import imageOne from '../Assets/Image.png'
import UnderLine from '../Assets/UnderLine.svg';
import { BsChevronRight } from 'react-icons/bs'
const UnderLanding = () => {
	return <div className='w-full bg-gradient-to-b from-white via-sky-200 to-sky-200 flex flex-col items-center justify-center h-full'>
		<div className='w-[90%] h-fit flex items-center justify-center '>
			<h4 className='text-black/70 text-center mt-16 mb-16 w-[90%]  '>
				Achieve your Corporate Objectives with C-suite facilitation, cross-organizational engagement, and integrated, data-driven, AI solutions.
			</h4>
		</div>
		<img src={Card} className='w-full h-full mb-10 object-fit' alt="" />
		<div className='w-full h-full flex relative items-center justify-center'>
			<div className='absolute z-50 h-fit flex flex-col gap-2 text-white xl:top-[30%] left-[50%]'>
				<h1 className='2xl:text-[80px] xl:text-[65px] text-[40px]'>Gain Clarity</h1>
				<img src={UnderLine} alt="" />
				<h5 className='w-[80%] text-xl bg-gradient-to-br text-transparent bg-clip-text font-semibold '>Experience the power of an Executive Business Partner.We'll join your Executive Team as objective facilitators, bringing clarity to your organization.</h5>
				<a className='hover:text-sky-500 flex items-center justify-center transition-all duration-75 ease-in w-fit gap-1' href="http://" target="_blank" rel="noopener noreferrer" >Get started now <BsChevronRight className='text-sm' /> </a>
			</div>
			<img src={imageOne} className='w-full h-full    bottom-0  object-cover' alt="" />
		</div>

	</div>;
};
export default UnderLanding;
