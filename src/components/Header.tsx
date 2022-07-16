/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';

import logo from '../assets/logo.svg';
import profilePicture from '../assets/img.png';
import { GearSix, Moon } from 'phosphor-react';

export function Header() {
	return (
		<nav className="fixed w-screen h-18 bg-white text-black flex items-center shadow-md shadow-[#2462B6]">
			<div id="Logo" className="flex pl-[10%]">
				<button>
					<img className="w-40 h-10" src={logo}></img>
				</button>
			</div>
			<div id="menuItens" className="hidden md:flex justify-center items-center flex-grow gap-6">
				<button className="w-[10%] h-4 bg-prog-gray rounded-full text-white"></button>
				<button className="w-[10%] h-4 bg-prog-gray rounded-full text-white"></button>
				<button className="w-[10%] h-4 bg-prog-gray rounded-full text-white"></button>
				<button className="w-[10%] h-4 bg-prog-gray rounded-full text-white"></button>
			</div>
			<div id="userInformation" className="hidden md:flex items-center space-x-4 pr-[10%]">
				<button className="w-8 h-8 rounded-md flex justify-center items-center justify-self-end outline-hidden hover:outline-offset-2 hover:outline outline-prog-light-blue">
					<Moon size={32} />
				</button>
				<button className="w-8 h-8 rounded-md flex justify-center items-center justify-self-end outline-hidden hover:outline-offset-2 hover:outline outline-prog-light-blue">
					<GearSix size={32} />
				</button>
				<button className="w-12 h-12 bg-prog-gray rounded-full">
					<img className="w-12 h-12 rounded-full" src={profilePicture}></img>
				</button>
			</div>
		</nav>
	);
}
