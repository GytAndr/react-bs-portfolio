import About from './components/About';
import Container from 'react-bootstrap/Container';
import FeaturedProjects from './components/FeaturedProjects';
import Testimonials from './components/Testimonials';

export default function Home() {
	return (
		<Container as="main" className="mt-4">
			<About />
			<FeaturedProjects />
			<Testimonials />
		</Container>
	);
}
