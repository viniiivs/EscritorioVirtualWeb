import { Plus } from 'phosphor-react';

export function Meetings() {
	return (
		<div className="grid grid-flow-row gap-3 grid-rows-4 bg-prog-dark-blue h-full rounded-lg p-4">
			<div className="rounded-lg grid grid-cols-5 items-center p-2">
				<h1 className="col-span-4 text-3xl">Próximas reuniões</h1>
				<button className="bg-prog-gray rounded-lg w-12 h-12 flex justify-center items-center justify-self-end outline-hidden hover:outline-offset-2 hover:outline outline-prog-light-blue">
					<Plus size={32} color="#fff"></Plus>
				</button>
			</div>
			<div className="row-span-3 rounded-lg grid grid-cols-1 gap-3 max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-prog-gray scrollbar-track-transparent overscroll-none p-2">
				<div className="grid gap-3">
					<button className="grid grid-cols-1 p-4 h-32 overflow-hidden bg-white text-black text-left rounded-lg w-full outline-hidden hover:outline-offset-2 hover:outline outline-prog-light-blue">
						<span className="text-2xl font-bold">Cliente 1</span>
						<span className="text-xl">Discutir solicitação 99999</span>
					</button>
					<button className="grid grid-cols-1 p-4 h-32 overflow-hidden bg-white text-black text-left rounded-lg w-full outline-hidden hover:outline-offset-2 hover:outline outline-prog-light-blue">
						<span className="text-2xl font-bold">Cliente 1</span>
						<span className="text-xl">Discutir solicitação 99999</span>
					</button>
					<button className="grid grid-cols-1 p-4 h-32 overflow-hidden bg-white text-black text-left rounded-lg w-full outline-hidden hover:outline-offset-2 hover:outline outline-prog-light-blue">
						<span className="text-2xl font-bold">Cliente 1</span>
						<span className="text-xl">Discutir solicitação 99999</span>
					</button>
					<button className="grid grid-cols-1 p-4 h-32 overflow-hidden bg-white text-black text-left rounded-lg w-full outline-hidden hover:outline-offset-2 hover:outline outline-prog-light-blue">
						<span className="text-2xl font-bold">Cliente 1</span>
						<span className="text-xl">Discutir solicitação 99999</span>
					</button>
					<button className="grid grid-cols-1 p-4 h-32 overflow-hidden bg-white text-black text-left rounded-lg w-full outline-hidden hover:outline-offset-2 hover:outline outline-prog-light-blue">
						<span className="text-2xl font-bold">Cliente 1</span>
						<span className="text-xl">Discutir solicitação 99999</span>
					</button>
				</div>
			</div>
		</div>
	);
}
