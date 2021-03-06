//React Bootstrap imports:
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';

//Images import
import profilePic from '../images/Profile.jpg';
export default function Navigation() {
	return (
		<Navbar bg="light" expand="lg" variant="light">
			<Container>
				<Navbar.Brand href="/portfolio/home">
					<Image
						roundedCircle
						className="align-middle me-2 h-50"
						src={profilePic}
						alt="Profile"
					/>
					Gytis Andriejunas
				</Navbar.Brand>

				<Navbar.Toggle>
					<span className="navbar-toggler-icon"></span>
				</Navbar.Toggle>
				<Navbar.Collapse>
					<Nav className="ms-auto">
						<Nav.Item className="active">
							<Nav.Link href="/portfolio/home">Home</Nav.Link>
						</Nav.Item>
						<Nav.Item className="active">
							<Nav.Link href="/portfolio/resume">Resume</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link href="/portfolio/portfolio-overview">
								Portfolio
							</Nav.Link>
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
