import "./App.css";
import LaunchList from "./LaunchList/LaunchList";
import GetRockets from "./Rockets/Rockets";

function App() {
	return (
		<>
			<h1>SpaceX Rockets 🚀</h1>
			<LaunchList limit={1} />
			<GetRockets />
		</>
	);
}

export default App;
