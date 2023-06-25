import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from 'firebase/app';
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
		<App />
	</React.StrictMode>
);
