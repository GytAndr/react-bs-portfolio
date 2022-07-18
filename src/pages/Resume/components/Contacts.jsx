import Card from 'react-bootstrap/esm/Card';

export default function Contacts() {
	return (
		<Card className="mb-4">
			<Card.Header as="h2" className="text-center">
				Contact Info
			</Card.Header>
			<Card.Body>
				<div className="d-flex align-items-start">
					<i class="bi bi-person-circle text-primary fs-4 me-3"></i>
					<div className="flex-grow-1 fs-5 ">
						Gytis Andriejūnas
						<hr />
					</div>
				</div>
				<div className="d-flex align-items-start">
					<i class="bi bi-calendar-event text-primary fs-4 me-3"></i>
					<div className="flex-grow-1 fs-5 ">
						1991-05-25 <hr />
					</div>
				</div>
				<div className="d-flex align-items-start">
					<i class="bi bi-telephone text-primary fs-4 me-3"></i>
					<div className="flex-grow-1 fs-5 ">
						+370 63516745 <hr />
					</div>
				</div>
				<div className="d-flex align-items-start">
					<i class="bi bi-envelope text-primary fs-4 me-3"></i>
					<div className="flex-grow-1 fs-5 ">
						<a
							href="mailto:andriejunas@gmail.com"
							className="text-decoration-none"
						>
							andriejunas@gmail.com
						</a>
						<hr />
					</div>
				</div>
				<div className="d-flex align-items-start">
					<i class="bi bi-house-door text-primary fs-4 me-3"></i>
					<div className="flex-grow-1 fs-5 ">
						Panevėžys, Lithuania <hr />
					</div>
				</div>
				<div className="d-flex align-items-start">
					<i class="bi bi-github text-primary fs-4 me-3"></i>
					<div className="flex-grow-1 fs-5 ">
						<a
							href="https://github.com/GytAndr"
							className="text-decoration-none"
							target="_blank"
						>
							github.com/GytAndr
						</a>
						<hr />
					</div>
				</div>
				<div className="d-flex align-items-start">
					<i class="bi bi-linkedin text-primary fs-4 me-3"></i>
					<div className="flex-grow-1 fs-5 ">
						<a
							href="https://www.linkedin.com/in/gytis-andriejunas/"
							className="text-decoration-none"
							target="_blank"
						>
							linkedin.com/in/gytis-andriejunas/
						</a>
						<hr />
					</div>
				</div>
			</Card.Body>
		</Card>
	);
}
