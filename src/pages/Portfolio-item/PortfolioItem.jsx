import Container from 'react-bootstrap/esm/Container';
import Badge from 'react-bootstrap/Badge';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Carousel from 'react-bootstrap/Carousel';
import FeaturedProjects from '../Home/components/FeaturedProjects';
import caruselImg from 'C:/Users/andri/repos/bootstrap/react-bs-portfolio/src/images/930x700.png';

export default function PortfolioItem() {
	return (
		<Container as="main" className="mt-4">
			<h2 className="display-4 mb-4">
				<Badge bg="primary">HTML</Badge>Portfolio Item Heading
				<small className="d-block text-muted">Portfolio Item Subheading</small>
			</h2>
			<Row className="mb-4">
				<Col xl="8" className="mb-4 mb-xl-0">
					<Carousel slide>
						<Carousel.Item interval={2000}>
							<img
								className="d-block w-100"
								src={caruselImg}
								alt="first slide"
							/>
							<Carousel.Caption>
								<h3>Caption</h3>
								<p>This text describes the first slide</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item interval={2000}>
							<img
								className="d-block w-100"
								src={caruselImg}
								alt="second slide"
							/>
							<Carousel.Caption>
								<h3>Caption</h3>
								<p>This text describes the second slide</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item interval={2000}>
							<img
								className="d-block w-100"
								src={caruselImg}
								alt="third slide"
							/>
							<Carousel.Caption>
								<h3>Caption</h3>
								<p>This text describes the third slide</p>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</Col>
				<Col xl="4">
					<h3>Project Description</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rutrum
						efficitur finibus. Praesent massa nunc, vehicula et venenatis ut,
						maximus et turpis. Nullam facilisis lacinia nisi, quis tempus ligula
						molestie sit amet. Sed in dolor lacus. Cras tempus enim ipsum, sit
						amet cursus est interdum vel. Curabitur congue malesuada dictum.
						Fusce in sollicitudin ipsum. Suspendisse potenti. Etiam tempus
						auctor ipsum, eu blandit libero viverra et. Suspendisse eget
						efficitur arcu. Mauris commodo ornare lorem quis luctus. Cras
						lobortis quam et odio fermentum finibus. Quisque lobortis eleifend
						convallis.
					</p>
					<h3>Project Details</h3>
					<ul>
						<li>Description of detail</li>
						<li>Description of detail</li>
						<li>Description of detail</li>
						<li>Description of detail</li>
						<li>Description of detail</li>
					</ul>
					<h3>Project Link</h3>
					<i className="bi bi-box-arrow-up-right" />{' '}
					<a href="#0" target="_blank">
						www.portfolioitemheading.com
					</a>
				</Col>
			</Row>
			<FeaturedProjects />
		</Container>
	);
}
