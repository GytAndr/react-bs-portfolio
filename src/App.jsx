import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footerbar from './components/Footerbar';
import Navigation from './components/Navigation';
// import Home from './pages/Home/Home'; //TO DO: Add router for home/portfolio switch
import Portfolio from './pages/Portfolio/Portfolio';

function App() {
	return (
		<div className="App">
			<Navigation />
			<Portfolio />
			<Footerbar />
		</div>
	);
}

export default App;
