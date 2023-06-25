import Jhon from './Components/Jhon';
import Landing from './Components/Landing';
import NavBar from './Components/NavBar';
import UnderJon from './Components/UnderJon';
import UnderLanding from './Components/UnderLanding';
import footer from './Assets/Fotter.svg';
function App() {
	return (
		<div className='App h-full '>
			<Landing />
			<UnderLanding />
			<Jhon />
			<UnderJon />
			<img
				src={footer}
				alt=''
			/>
		</div>
	);
}

export default App;
