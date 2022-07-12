export function Dashboard() {
	return (
		<div>
			<h1 className="text-3xl font-bold">Resumo de atividades</h1>
			<div className="rounded-lg grid grid-cols-1 items-center gap-3 md:grid-rows-1">
				<div className="grid gap-3 md:grid-cols-2">
					<button className="grid grid-cols-1 p-4 overflow-y-auto bg-orange-500 text-left rounded-lg w-full h-full border-2 border-transparent hover:border-prog-dark-blue focus:border-prog-dark-blue focus:outline-none">
						<span className="text-3xl font-bold">3</span>
						<span className="text-xl">Solicitações que vencem hoje</span>
					</button>
					<button className="grid grid-cols-1 p-4 overflow-y-auto bg-orange-400 text-left rounded-lg w-full h-full border-2 border-transparent hover:border-prog-dark-blue focus:border-prog-dark-blue focus:outline-none">
						<span className="text-3xl font-bold">3</span>
						<span className="text-xl">Solicitações próximas do vencimento</span>
					</button>
				</div>
				<div className="grid gap-3 md:grid-cols-3">
					<button className="grid grid-cols-1 p-4 overflow-y-auto bg-white text-black rounded-lg text-left w-full h-full border-2 border-transparent hover:border-prog-dark-blue focus:border-prog-dark-blue focus:outline-none">
						<span className="text-3xl font-bold">6</span>
						<span className="text-xl">Tarefas para hoje</span>
					</button>
					<button className="grid grid-cols-1 p-4 overflow-y-auto bg-white text-black rounded-lg text-left w-full h-full border-2 border-transparent hover:border-prog-dark-blue focus:border-prog-dark-blue focus:outline-none">
						<span className="text-3xl font-bold">9</span>
						<span className="text-xl">Tarefas em aberto</span>
					</button>
					<button className="grid grid-cols-1 p-4 overflow-y-auto bg-white text-black rounded-lg text-left w-full h-full border-2 border-transparent hover:border-prog-dark-blue focus:border-prog-dark-blue focus:outline-none">
						<span className="text-3xl font-bold">2</span>
						<span className="text-xl">Reuniões hoje</span>
					</button>
				</div>
			</div>
		</div>
	);
}
