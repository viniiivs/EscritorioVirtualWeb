/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';

import logo from '../assets/logo.svg';
import profilePicture from '../assets/img.png';

export function Navbar() {
	return (
		<nav className="fixed w-screen h-18 bg-white text-black flex items-center shadow-md shadow-[#2462B6]">
			<div id="Logo" className="flex pl-[10%]">
				<button>
					<img className="w-40 h-10" src=""></img>
				</button>
			</div>
			<div id="menuItens" className="flex justify-center items-center flex-grow space-x-6">
				<button className="w-[10%] h-4 bg-prog-gray rounded-full"></button>
				<button className="w-[10%] h-4 bg-prog-gray rounded-full"></button>
				<button className="w-[10%] h-4 bg-prog-gray rounded-full"></button>
				<button className="w-[10%] h-4 bg-prog-gray rounded-full"></button>
			</div>
			<div id="userInformation" className="flex items-center space-x-4 pr-[10%]">
				<button className="w-8 h-8 bg-prog-gray rounded-md"></button>
				<button className="w-8 h-8 bg-prog-gray rounded-md"></button>
				<button className="w-12 h-12 bg-prog-gray rounded-full">
					<img className="w-12 h-12 rounded-full" src=""></img>
				</button>
			</div>
		</nav>
	);
}
