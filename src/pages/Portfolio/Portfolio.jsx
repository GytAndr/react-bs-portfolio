import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Card from 'react-bootstrap/esm/Card';
import Badge from 'react-bootstrap/esm/Badge';
import Button from 'react-bootstrap/esm/Button';
//image import
import portfolioImg from 'C:/Users/andri/repos/bootstrap/react-bs-portfolio/src/images/510x400.png';

export default function Portfolio() {
	return (
		<Container as="main" className="mt-4">
			<Row>
				<Col md={6} xl={4} className="mb-4">
					<Card>
						<Badge bg="primary" className="position-absolute mt-3 ms-3">
							HTML
						</Badge>
						<Card.Img
							variant="top"
							src={portfolioImg}
							alt="Portfolio Item Heading"
						/>
						<Card.Body>
							<Card.Title>Portfolio Item Heading</Card.Title>
							<Card.Text>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
								condimentum sapien et ipsum laoreet, nec interdum ante
								malesuada.
							</Card.Text>
							<Button
								href="#portfolio-item"
								variant="primary"
								className="w-100 stretched-link"
							>
								See Item
							</Button>
						</Card.Body>
						<Card.Footer className="small">Created DD-MM-YYYY</Card.Footer>
					</Card>
				</Col>
				<Col md={6} xl={4} className="mb-4">
					<Card>
						<Badge bg="primary" className="position-absolute mt-3 ms-3">
							HTML
						</Badge>
						<Card.Img
							variant="top"
							src={portfolioImg}
							alt="Portfolio Item Heading"
						/>
						<Card.Body>
							<Card.Title>Portfolio Item Heading</Card.Title>
							<Card.Text>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
								condimentum sapien et ipsum laoreet, nec interdum ante
								malesuada.
							</Card.Text>
							<Button
								href="#portfolio-item"
								variant="primary"
								className="w-100 stretched-link"
							>
								See Item
							</Button>
						</Card.Body>
						<Card.Footer className="small">Created DD-MM-YYYY</Card.Footer>
					</Card>
				</Col>
				<Col md={6} xl={4} className="mb-4">
					<Card>
						<Badge bg="primary" className="position-absolute mt-3 ms-3">
							HTML
						</Badge>
						<Card.Img
							variant="top"
							src={portfolioImg}
							alt="Portfolio Item Heading"
						/>
						<Card.Body>
							<Card.Title>Portfolio Item Heading</Card.Title>
							<Card.Text>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
								condimentum sapien et ipsum laoreet, nec interdum ante
								malesuada.
							</Card.Text>
							<Button
								href="#portfolio-item"
								variant="primary"
								className="w-100 stretched-link"
							>
								See Item
							</Button>
						</Card.Body>
						<Card.Footer className="small">Created DD-MM-YYYY</Card.Footer>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}
