import { Dashboard } from './Dashboard';
import { WelcomeBox } from './WelcomeBox';

export function MainContent() {
	return (
		<div className="flex-grow p-4 md:pl-[10%] md:pt-8">
			<WelcomeBox />
			<Dashboard />
		</div>
	);
}
