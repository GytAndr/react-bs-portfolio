import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
export default function Footerbar() {
	return (
		<footer className="bg-light py-4">
			<Container>
				<Row>
					<Col md={6}>
						<div className="d-flex align-items-center mb-2">
							<div className="bg-secondary rounded-circle">
								<i className="bi bi-code-slash text-white p-1 " />
							</div>
							<h5 className="my-1 mx-2">Code</h5>
						</div>
						<ul className="list-unstyled">
							<li>
								<i className="bi bi-github text-muted me-1"></i>
								<a href="#0">Github</a>
							</li>
							<li>
								<i className="bi bi-stack-overflow text-muted me-1"></i>
								<a href="#0">Stack Overflow</a>
							</li>
						</ul>
					</Col>
					<Col md={6}>
						<div className="d-flex align-items-center mb-2">
							<div className="bg-secondary rounded-circle">
								<i className="bi bi-brush text-white p-1 " />
							</div>
							<h5 className="my-1 mx-2">Design</h5>
						</div>
						<ul className="list-unstyled">
							<li>
								<i className="bi bi-behance text-muted me-1"></i>
								<a href="#0">Behance</a>
							</li>
							<li>
								<i className="bi bi-dribbble text-muted me-1"></i>
								<a href="#0">Dribbble</a>
							</li>
						</ul>
					</Col>
				</Row>
				<p className="text-center text-muted mb-0">
					&copy; 2022 Gytis Andriejunas. All rights reserved.
				</p>
			</Container>
		</footer>
	);
}
