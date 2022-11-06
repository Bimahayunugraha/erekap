import { Provider } from "react-redux";
import "./App.css";
import SetupRouter from "./routes";
import { store } from "./stores";

function App() {
	return (
		<>
			<Provider store={store}>
				<SetupRouter />
			</Provider>
		</>
	);
}

export default App;
