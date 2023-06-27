import "./App.css";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar";

function App() {
	const [blogs, setBlogs] = useState([]);

	return (
		<div className="App">
			<NavBar />
			<h1>App Component</h1>
			<Outlet context={{ blogs, setBlogs }} />
		</div>
	);
}

export default App;
