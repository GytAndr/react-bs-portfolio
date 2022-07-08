//React Bootstrap imports
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Figure from 'react-bootstrap/Figure';
//Images import
import projectImg from 'C:/Users/andri/repos/bootstrap/react-bs-portfolio/src/images/510x400.png';

export default function FeaturedProjects() {
	return (
		<>
			<h3>Featured Projects</h3>
			<Row className="mb-4">
				<Col md={6} xl={3} className="mb-4">
					<a href="#portfolio-item">
						<Figure>
							<Figure.Image fluid thumbnail src={projectImg} />
							<Figure.Caption>Portfolio Item Heading</Figure.Caption>
						</Figure>
					</a>
				</Col>
				<Col md={6} xl={3} className="mb-4">
					<a href="#portfolio-item">
						<Figure>
							<Figure.Image fluid thumbnail src={projectImg} />
							<Figure.Caption>Portfolio Item Heading</Figure.Caption>
						</Figure>
					</a>
				</Col>
				<Col md={6} xl={3} className="mb-4">
					<a href="#portfolio-item">
						<Figure>
							<Figure.Image fluid thumbnail src={projectImg} />
							<Figure.Caption>Portfolio Item Heading</Figure.Caption>
						</Figure>
					</a>
				</Col>
				<Col md={6} xl={3} className="mb-4">
					<a href="#portfolio-item">
						<Figure>
							<Figure.Image fluid thumbnail src={projectImg} />
							<Figure.Caption>Portfolio Item Heading</Figure.Caption>
						</Figure>
					</a>
				</Col>
			</Row>
		</>
	);
}
