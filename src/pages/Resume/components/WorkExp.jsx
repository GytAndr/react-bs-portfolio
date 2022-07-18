import Card from 'react-bootstrap/esm/Card';
import Collapse from 'react-bootstrap/esm/Collapse';
import Button from 'react-bootstrap/Button';
import GH from '../../../images/GH.webp';
import WU from '../../../images/WU.webp';
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
					<img className="img-fluid me-2" src={GH} height="50" />
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
					<h6>Responsibilities</h6>
					<ul>
						<li>
							Managing and overseeing the production and quality of a team of
							analysts and researchers.
						</li>
						<li>
							Providing day-to-day quality assurance, monitoring, coaching and
							feedback across Service Provider's wider team.
						</li>
						<li>
							Monitor adherence to individual and team production and quality
							metrics.
						</li>
						<li>
							Providing one-on-one support to analysts not meeting production or
							quality standards to improve work product.
						</li>
						<li>
							Supporting the Project Manager by providing client deliverables on
							time, ensuring quality standards, and assisting in project
							governance at the team level.
						</li>
						<li>
							Ensuring adherence to any messaging or communications, including
							SOP changes, delivered by Client.
						</li>
						<li>
							Monitoring team progress to identify areas for additional training
							and communicate such needs to the Trainer and Project Manager.
						</li>
						<li>
							Administration of day-to-day schedules and attendance for the
							analyst team.
						</li>
					</ul>
					<h6>Highlights</h6>
					<ul>
						<li>
							Managed team of 9 AML compliance analysts. Provided coaching,
							training, scheduling, quality assurance and everything in-between
							to ensure quality and success of project.
						</li>
						<li>
							Helped HR to hire more than 30 new specialists into the company,
							by interviewing and testing applicants.
						</li>
						<li>
							Reduced time needed to manage business intelligence by tenfold and
							eliminated manual work, by developing automatic Power BI
							dashboards to track and analyze entire project's performance data.
						</li>
					</ul>
				</Card.Text>
				<hr />
				<Collapse in={open}>
					<div className="collapse-box">
						<div className="d-flex align-items-start mb-2">
							<img src={WU} className="me-2" />
							<div className="flex-grow-1">
								<h4 className=" mb-1">AML Compliance Senior Specialist</h4>
								<div className="d-sm-flex justify-content-sm-between align-items-sm-baseline">
									<h5 className="mb-0">
										<a
											href="https://www.westernunion.com/lt/en/home.html"
											target="_blank"
											className="text-decoration-none"
										>
											Western Union
										</a>
									</h5>
									<small className="text-uppercase fw-bold text-muted">
										<time>Sep 2020</time> &ndash; <time>May 2021</time>
									</small>
								</div>
							</div>
						</div>
						<Card.Text>
							<h6>Responsibilities</h6>
							<ul>
								<li>
									Analyze trends and develop recommendations for business
									policies and operational efficiencies.
								</li>
								<li>
									Create procedures and documentation, make recommendations and
									escalate specific cases to business partners.
								</li>
								<li>Perform system testing.</li>
								<li>New hire training.</li>
								<li>
									Help team members to evaluate investigation findings, identify
									financial crimes and effectively mitigate the risks.
								</li>
								<li>
									Forecasting staffing needs and allocating resources to ensure
									a timely completion of work.
								</li>
								<li>
									Setting, evaluating and analyzing the Quality Assurance
									standards and controls in regards to Financial Crimes
									Compliance Operations processes.
								</li>
								<li></li>
							</ul>
							<h6>Highlights</h6>
							<ul>
								<li>
									Worked as team supervisors “right hand”. Analyzed risk trends,
									created procedures and documentation, system testing,
									training, quality assurance, helped junior team members to
									evaluate investigation findings and effectively mitigate
									risks, foretasted staffing needs.
								</li>
								<li>
									Acted as interim supervisor for 2 months. Led team of 7
									specialists in critical period and ensured transfer of
									knowledge to the new supervisor.
								</li>
							</ul>
						</Card.Text>
						<hr />
						<div className="d-flex align-items-start mb-2">
							<img src={WU} className="me-2" />
							<div className="flex-grow-1">
								<h4 className=" mb-1">Compliance Specialist</h4>
								<div className="d-sm-flex justify-content-sm-between align-items-sm-baseline">
									<h5 className="mb-0">
										<a
											href="https://www.westernunion.com/lt/en/home.html"
											target="_blank"
											className="text-decoration-none"
										>
											Western Union
										</a>
									</h5>
									<small className="text-uppercase fw-bold text-muted">
										<time>Dec 2017</time> &ndash; <time>Sep 2020</time>
									</small>
								</div>
							</div>
						</div>
						<Card.Text>
							<h6>Responsibilities</h6>
							<ul>
								<li>
									Conduct research and analysis of complex, critical issues
									concerning the patterns and trends associated with money
									laundering and any other potential risks related to Western
									Union transactions.
								</li>
								<li>
									Prepare regulatory reporting as required by law and by the
									Company's policies and procedures.
								</li>
								<li>
									Assist and support AML compliance team members in order to
									ensure Compliance requirements are being met.
								</li>
								<li>
									Utilize a wide variety of research tools, systems and
									criteria.
								</li>
							</ul>
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
