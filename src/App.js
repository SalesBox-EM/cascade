import Jhon from './Components/Jhon';
import Landing from './Components/Landing';
import NavBar from './Components/NavBar';
import UnderJon from './Components/UnderJon';
import UnderLanding from './Components/UnderLanding';
import footer from './Assets/Fotter.svg';
import Footer from './Components/Footer/Footer';

function App() {
	return (
		<div className='App h-full '>
			<Landing />
			<UnderLanding />
			<Jhon />
			<UnderJon />
			<Footer />
		</div>
	);
}

export default App;
