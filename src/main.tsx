import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import BaseStore from "stores/Base.store";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<Provider store={BaseStore}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Provider>
);
