export function Dashboard() {
	return (
		<>
			<h1 className="text-3xl mt-6">Resumo de atividades</h1>
			<div className="rounded-md md:w-[60%] grid grid-cols-1 items-center gap-3">
				<div className="grid gap-3 md:grid md:grid-cols-2">
					<div className="bg-orange-400 flex flex-col items-left rounded-md w-full h-24">
						<p className="text-2xl">3</p>
						<p className="text-xl">Solicitações próximas do vencimento</p>
					</div>
					<div className="bg-orange-500 flex flex-col items-left rounded-md w-full h-24">
						<p className="text-2xl">3</p>
						<p className="text-xl">Solicitações que vencem hoje</p>
					</div>
				</div>
				<div className="grid gap-3 md:grid md:grid-cols-3">
					<div className="bg-white text-black rounded-md flex flex-col items-left w-full h-24">
						<p className="text-2xl">6</p>
						<p className="text-xl">Tarefas para hoje</p>
					</div>
					<div className="bg-white text-black rounded-md flex flex-col items-left w-full h-24">
						<p className="text-2xl">9</p>
						<p className="text-xl">Tarefas em aberto</p>
					</div>
					<div className="bg-white text-black rounded-md flex flex-col items-left w-full h-24">
						<p className="text-2xl">2</p>
						<p className="text-xl">Reuniões hoje</p>
					</div>
				</div>
			</div>
		</>
	);
}
