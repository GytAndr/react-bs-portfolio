//React Bootstrap imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
//image import
import aboutImg from '../images/690x400.png';

export default function About() {
	return (
		<Container className="mt-4">
			<h2 className="display-4 mb-4">
				Firstname Lastname
				<small className="d-block text-muted">Job position</small>
			</h2>
			<Row className="mb-4">
				<Col lg={6} className="mb-4 mb-lg-0">
					<Image fluid rounded src={aboutImg} />
				</Col>
				<Col lg={6}>
					<h3>About</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
						quis quisquam, temporibus, quae nulla placeat optio quidem repellat,
						reprehenderit rerum sed dolore obcaecati quos quo eum nam officia
						illum molestias?
					</p>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
						quis quisquam, temporibus, quae nulla placeat optio quidem repellat,
						reprehenderit rerum sed dolore obcaecati quos quo eum nam officia
						illum molestias?
					</p>
				</Col>
			</Row>
		</Container>
	);
}
