import John from './Components/John';
import Landing from './Components/Landing';
import NavBar from './Components/NavBar';
import UnderJohn from './Components/UnderJohn';
import UnderLanding from './Components/UnderLanding';
import footer from './Assets/Fotter.svg';
import Footer from './Components/Footer/Footer';

function App() {
	return (
		<div className='App h-full '>
			<Landing />
			<UnderLanding />
			<John />
			<UnderJohn />
			<Footer />
		</div>
	);
}

export default App;
