import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Cascading from './Components/Pages/Cascading';
import Organizational from './Components/Pages/Organizational';
import SmartTech from './Components/Pages/SmartTech';
import Whycascade from './Components/Pages/Whycascade';
import { initializeApp } from 'firebase/app';
import Connect from './Components/Pages/Connect';
import Insights from './Components/Pages/Insights';
import Barrier from './Components/Pages/Blogs.jsx/Barrier';
import Leadership from './Components/Pages/Blogs.jsx/Leadership';
import Execs from './Components/Pages/Blogs.jsx/Execs';
import OurTeam from './Components/Pages/OurTeam';
import LinkedIn from './Components/Pages/LinkedIn';
import Optimize from './Components/Pages/Blogs.jsx/Optimize';
import White from './Components/Pages/Blogs.jsx/White';
import Navigate from './Components/Pages/Blogs.jsx/Navigate';
import { HelmetProvider } from 'react-helmet';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDwc6vtoQeuJmqHMOiYyYmlUVp6AsaIuNA',
	authDomain: 'cascade-d156a.firebaseapp.com',
	projectId: 'cascade-d156a',
	storageBucket: 'cascade-d156a.appspot.com',
	messagingSenderId: '1003466941680',
	appId: '1:1003466941680:web:6c5d88c82714625c948e35',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route
					index
					element={<App />}
				/>
				<Route
					path='/Organizational'
					element={<Organizational />}
				/>
				<Route
					path='/LinkedIn'
					element={<LinkedIn />}
				/>
				<Route
					path='/Cascading'
					element={<Cascading />}
				/>
				<Route
					path='/SmartTech'
					element={<SmartTech />}
				/>
				<Route
					path='/Whycascade'
					element={<Whycascade />}
				/>
				<Route
					path='/Connect'
					element={<Connect />}
				/>
				<Route
					path='/Insights'
					element={<Insights />}
				/>
				<Route
					path='/Blog_BusinessBreakthroughs'
					element={<Barrier />}
				/>
				<Route
					path='/Blog_LeadershipAdaption'
					element={<Leadership />}
				/>
				<Route
					path='/Blog_EngagedExecs'
					element={<Execs />}
				/>
				<Route
					path='/Blog_OptimizingSales'
					element={<Optimize />}
				/>
				<Route
					path='/Blog_WhiteSpace'
					element={<White />}
				/>
				<Route
					path='/Blog_WhiteSpace'
					element={<White />}
				/>
				<Route
					path='/Blog_CrossOrganizationalChallenges'
					element={<Navigate />}
				/>
				<Route
					path='/Leadership'
					element={<OurTeam />}
				/>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
