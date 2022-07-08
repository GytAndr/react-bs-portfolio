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
								<i class="bi bi-code-slash text-white p-1 " />
							</div>
							<h5 className="my-1 mx-2">Code</h5>
						</div>
						<ul className="list-unstyled">
							<li>
								<i class="bi bi-github text-muted me-1"></i>
								<a href="#0">Github</a>
							</li>
							<li>
								<i class="bi bi-stack-overflow text-muted me-1"></i>
								<a href="#0">Stack Overflow</a>
							</li>
						</ul>
					</Col>
					<Col md={6}>
						<div className="d-flex align-items-center mb-2">
							<div className="bg-secondary rounded-circle">
								<i class="bi bi-brush text-white p-1 " />
							</div>
							<h5 className="my-1 mx-2">Design</h5>
						</div>
						<ul className="list-unstyled">
							<li>
								<i class="bi bi-behance text-muted me-1"></i>
								<a href="#0">Behance</a>
							</li>
							<li>
								<i class="bi bi-dribbble text-muted me-1"></i>
								<a href="#0">Dribbble</a>
							</li>
						</ul>
					</Col>
				</Row>
				<p className="text-center mb-0">
					&copy; 2020 Firstname Lastname. All rights reserved.
				</p>
			</Container>
		</footer>
	);
}
