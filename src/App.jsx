import {useState} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Lottie from "react-lottie-player";
import animationData from "./lottie/sharepass-animation.json";

const App = () => {
	return (
		<>
			<Lottie loop animationData={animationData} play style={{width: 600, height: 600}} />
		</>
	);
};

export default App;
