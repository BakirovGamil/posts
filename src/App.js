import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Nav from "./components/UI/nav/Nav";
import {publicRoutes} from "./routes/routes";

function App() {
	return (
		<BrowserRouter>
			<Nav>
				<Link to="/posts" className="nav__link">Посты</Link>
				<Link to="/nothing" className="nav__link">Что-то еще</Link>
			</Nav>
			<Routes>
				{publicRoutes.map(route => {
					return (
						<Route key={route.path} path={route.path} element={route.element} />
					);
				})}
			</Routes>
  		</BrowserRouter>
	);
}

export default App;