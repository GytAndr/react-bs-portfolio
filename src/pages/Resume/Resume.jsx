import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

import About from './components/About';
import WorkExp from './components/WorkExp';
export default function Resume() {
	return (
		<Container as="main" className="mt-4">
			<Row>
				<Col lg="8" className="col-12">
					<About />
					<WorkExp />
				</Col>
			</Row>
		</Container>
	);
}
