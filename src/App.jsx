import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footerbar from './components/Footerbar';
import Navigation from './components/Navigation';
import Home from './pages/Home/Home';

function App() {
	return (
		<div className="App">
			<Navigation />
			<Home />
			<Footerbar />
		</div>
	);
}

export default App;
