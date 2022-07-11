import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footerbar from './components/Footerbar';
import Navigation from './components/Navigation';
import Home from './pages/Home/Home'; //TO DO: Add router for home/portfolio switch
import Portfolio from './pages/Portfolio/Portfolio';

function App() {
	return (
		<div className="App">
			<Navigation />
			<BrowserRouter>
				<Routes>
					<Route path="/portfolio/home" element={<Home />} />
					<Route path="/portfolio/portfolio-overview" element={<Portfolio />} />
				</Routes>
			</BrowserRouter>
			<Footerbar />
		</div>
	);
}

export default App;
