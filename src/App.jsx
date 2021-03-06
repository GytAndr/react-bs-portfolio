import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footerbar from './components/Footerbar';
import Navigation from './components/Navigation';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import PortfolioItem from './pages/Portfolio-item/PortfolioItem';
import Resume from './pages/Resume/Resume';

function App() {
	return (
		<div className="App">
			<Navigation />
			<BrowserRouter>
				<Routes>
					<Route path="/portfolio/home" element={<Home />} />
					<Route path="/portfolio/resume" element={<Resume />} />
					<Route path="/portfolio/portfolio-overview" element={<Portfolio />} />
					<Route path="/portfolio/portfolio-item" element={<PortfolioItem />} />
				</Routes>
			</BrowserRouter>
			<Footerbar />
		</div>
	);
}

export default App;
