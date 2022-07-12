import { Dashboard } from './Dashboard';
import { Meetings } from './Meetings';
import { Menus } from './Menus';
import { WelcomeBox } from './WelcomeBox';

export function MainContent() {
	return (
		<div className="grid grid-rows-1 grid-flow-row grid-cols-1 gap-6 w-full p-8 mt-18 pb-8 mb-18 md:grid-cols-3 md:pr-[10%] md:pl-[10%]">
			<div className="md:col-span-2 space-y-6">
				<WelcomeBox />
				<Dashboard />
			</div>
			<div>
				<Meetings />
			</div>
			<div className="md:col-span-3">
				<Menus />
			</div>
		</div>
	);
}
