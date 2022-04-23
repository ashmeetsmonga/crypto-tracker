import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CoinsPage from "./pages/CoinsPage";

function App() {
	return (
		<BrowserRouter>
			<div className='bg-darkGray text-white min-h-screen'>
				<Header />
				<Route path='/' exact component={HomePage} />
				<Route path='/coins/:id' component={CoinsPage} />
			</div>
		</BrowserRouter>
	);
}

export default App;
