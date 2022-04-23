import React from "react";
import Carousel from "./Carousel";

const Banner = () => {
	return (
		<div className="bg-[url('../public/banner.jpg')] h-[300px] flex flex-col justify-around items-center">
			<div className='flex flex-col items-center space-y-2'>
				<h1 className='font-bold text-5xl'>Crypto Tracker</h1>
				<p className='text-gray-300'>
					Get all the info regarding your favourite cryptocurrency
				</p>
			</div>
			<Carousel />
		</div>
	);
};

export default Banner;