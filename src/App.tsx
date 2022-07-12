import { Footer } from './components/Footer';
import { MainContent } from './components/MainContent';
import { Header } from './components/Header';

function App() {
	return (
		<div className="h-screen scrollbar-thumb-prog-dark-blue scrollbar-track-transparent scrollbar-thin overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full font-poppins">
			<Header />
			<MainContent />
			<Footer />
		</div>
	);
}

export default App;
