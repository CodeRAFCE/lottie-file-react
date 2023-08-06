import "./App.css";

import Lottie from "react-lottie-player";
import animationData from "./lottie/sharepass-animation.json";

const App = () => {
	return (
		<>
			<div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
				<Lottie loop animationData={animationData} play style={{width: 600, height: 600}} />
			</div>
		</>
	);
};

export default App;
