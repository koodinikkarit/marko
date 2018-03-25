import * as React from "react";
import "./App.css";

import { BrowserRouter } from "react-router-dom";
import { NavigationBar } from "./NavigationBar";
import { Routes } from "./Routes";

// import loader from "./spinner.gif";
// import asd from "./logo.svg";

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<NavigationBar />
					<Routes />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
