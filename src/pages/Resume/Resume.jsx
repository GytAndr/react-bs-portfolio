import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import About from './components/About';
import WorkExp from './components/WorkExp';
import Education from './components/Education';
import Testimonials from './components/Testimonials';
import Contacts from './components/Contacts';
export default function Resume() {
	return (
		<Container as="main" className="mt-4">
			<Row>
				<Col lg="8" className="col-12">
					<About />
					<WorkExp />
					<Education />
					<Testimonials />
				</Col>
				<Col lg="4" className="col-12">
					<Contacts />
				</Col>
			</Row>
		</Container>
	);
}
