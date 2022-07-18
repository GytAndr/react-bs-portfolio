import Card from 'react-bootstrap/esm/Card';
import Collapse from 'react-bootstrap/esm/Collapse';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

export default function WorkExp() {
	const [open, setOpen] = useState(false);
	return (
		<Card className="mb-4">
			<Card.Header as="h2" className="text-center">
				Work Experiance
			</Card.Header>
			<Card.Body>
				<div className="d-flex align-items-start mb-2">
					<i className="bi bi-person-workspace text-primary display-6 me-3"></i>
					<div className="flex-grow-1">
						<h4 className=" mb-1">Compliance Team Lead</h4>
						<div className="d-sm-flex justify-content-sm-between align-items-sm-baseline">
							<h5 className="mb-0">
								<a
									href="https://guidehouse.com/"
									target="_blank"
									className="text-decoration-none"
								>
									Guidehouse
								</a>
							</h5>
							<small className="text-uppercase fw-bold text-muted">
								<time>May 2021</time> &ndash; <time>January 2022</time>
							</small>
						</div>
					</div>
				</div>
				<Card.Text>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</Card.Text>
				<hr />
				<div className="d-flex align-items-start mb-2">
					<i className="bi bi-person-workspace text-primary display-6 me-3"></i>
					<div className="flex-grow-1">
						<h4 className=" mb-1">Compliance Team Lead</h4>
						<div className="d-sm-flex justify-content-sm-between align-items-sm-baseline">
							<h5 className="mb-0">
								<a
									href="https://guidehouse.com/"
									target="_blank"
									className="text-decoration-none"
								>
									Guidehouse
								</a>
							</h5>
							<small className="text-uppercase fw-bold text-muted">
								<time>May 2021</time> &ndash; <time>January 2022</time>
							</small>
						</div>
					</div>
				</div>
				<Card.Text>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</Card.Text>
				<hr />
				<Collapse in={open}>
					<div className="collapse-box">
						<div className="d-flex align-items-start mb-2">
							<i className="bi bi-person-workspace text-primary display-6 me-3"></i>
							<div className="flex-grow-1">
								<h4 className=" mb-1">Compliance Team Lead</h4>
								<div className="d-sm-flex justify-content-sm-between align-items-sm-baseline">
									<h5 className="mb-0">
										<a
											href="https://guidehouse.com/"
											target="_blank"
											className="text-decoration-none"
										>
											Guidehouse
										</a>
									</h5>
									<small className="text-uppercase fw-bold text-muted">
										<time>May 2021</time> &ndash; <time>January 2022</time>
									</small>
								</div>
							</div>
						</div>
						<Card.Text>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</Card.Text>
						<hr />
					</div>
				</Collapse>
				<Button
					variant="outline-primary"
					type="button"
					size="sm"
					onClick={() => setOpen(!open)}
				>
					Show {open ? 'less' : 'all'}
				</Button>
			</Card.Body>
		</Card>
	);
}
