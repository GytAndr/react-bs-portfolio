import Card from 'react-bootstrap/esm/Card';

export default function Education() {
	return (
		<Card className="mb-4">
			<Card.Header as="h2" className="text-center">
				Education
			</Card.Header>
			<Card.Body>
				<div className="d-flex align-items-start mb-2">
					<i className="bi bi-book text-primary display-6 me-3"></i>
					<div className="flex-grow-1">
						<h4 className=" mb-1">Bachelor's degree, Physical Therapy</h4>
						<div className="d-sm-flex justify-content-sm-between align-items-sm-baseline">
							<h5 className="mb-0">
								<a
									href="https://guidehouse.com/"
									target="_blank"
									className="text-decoration-none"
								>
									Vilnius University
								</a>
							</h5>
							<small className="text-uppercase fw-bold text-muted">
								<time>2013</time> &ndash; <time>2014</time>
							</small>
						</div>
					</div>
				</div>

				<hr />
				<div className="d-flex align-items-start mb-2">
					<i className="bi bi-book text-primary display-6 me-3"></i>
					<div className="flex-grow-1">
						<h4 className=" mb-1">
							Professional Bachelor's degree, Physical Therapy
						</h4>
						<div className="d-sm-flex justify-content-sm-between align-items-sm-baseline">
							<h5 className="mb-0">
								<a
									href="https://guidehouse.com/"
									target="_blank"
									className="text-decoration-none"
								>
									Panevezio Kolegija
								</a>
							</h5>
							<small className="text-uppercase fw-bold text-muted">
								<time>2010</time> &ndash; <time>2013</time>
							</small>
						</div>
					</div>
				</div>
			</Card.Body>
		</Card>
	);
}
