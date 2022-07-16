export function Menus() {
	return (
		<div className="h-full rounded-lg grid grid-cols-1 auto-rows-fr gap-6 md:grid-cols-3">
			<button className="grid grid-cols-1 text-left bg-prog-dark-blue rounded-lg p-4 h-32 w-full outline-hidden hover:outline-offset-2 hover:outline outline-white">
				<span className="text-5xl font-bold place-self-end justify-self-start">SCAT</span>
				<span className="text-base">Sistemas de controle de atividades</span>
			</button>
			<button className="grid grid-cols-1 text-left bg-prog-dark-blue rounded-lg p-4 h-32 w-full outline-hidden hover:outline-offset-2 hover:outline outline-white">
				<span className="text-5xl font-bold place-self-end justify-self-start">SISDOC</span>
				<span className="text-base">Sistemas de documentos</span>
			</button>
			<button className="grid grid-cols-1 text-left bg-prog-dark-blue rounded-lg p-4 h-32 w-full outline-hidden hover:outline-offset-2 hover:outline outline-white">
				<span className="text-5xl font-bold place-self-end justify-self-start">SIQ</span>
				<span className="text-base">Sistema de indicadores de qualidade</span>
			</button>
			<button className="grid grid-cols-1 text-left bg-prog-dark-blue rounded-lg p-4 h-32 w-full outline-hidden hover:outline-offset-2 hover:outline outline-white">
				<span className="text-5xl font-bold place-self-end justify-self-start">OCS</span>
				<span className="text-base">Ordem de compras</span>
			</button>
			<button className="grid grid-cols-1 text-left bg-prog-dark-blue rounded-lg p-4 h-32 w-full outline-hidden hover:outline-offset-2 hover:outline outline-white">
				<span className="text-5xl font-bold place-self-end justify-self-start">RH</span>
				<span className="text-base">Recursos Humanos</span>
			</button>
			<button className="grid grid-cols-1 text-left bg-prog-dark-blue rounded-lg p-4 h-32 w-full outline-hidden hover:outline-offset-2 hover:outline outline-white">
				<span className="text-3xl font-bold place-self-end justify-self-start">Ferramentas</span>
				<span className="text-base"></span>
			</button>
		</div>
	);
}
