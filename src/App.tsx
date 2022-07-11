import { Footer } from './components/Footer';
import { MainContent } from './components/MainContent';
import { Navbar } from './components/Navbar';

function App() {
	return (
		<div className="flex flex-col h-screen">
			<Navbar />
			<MainContent />
			<Footer />
		</div>
	);
}

export default App;
