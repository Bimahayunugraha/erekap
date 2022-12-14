import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import "./App.css";
import client from "./graphqls";
import SetupRouter from "./routes";
import { store } from "./stores";

function App() {
	return (
		<>
			<ApolloProvider client={client}>
				<Provider store={store}>
					<SetupRouter />
				</Provider>
			</ApolloProvider>
		</>
	);
}

export default App;
