import Card from 'react-bootstrap/esm/Card';
import ProgressBar from 'react-bootstrap/esm/ProgressBar';
import {
	FaHtml5,
	FaCss3,
	FaJs,
	FaPhp,
	FaReact,
	FaSass,
	FaNpm,
	FaGithub,
	FaChrome,
	FaWordpress,
} from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
export default function Skills() {
	return (
		<Card className="mb-4">
			<Card.Header as="h2" className="text-center">
				Skills
			</Card.Header>
			<Card.Body>
				<h5 className="mb-3">Coding Languages</h5>
				<h6 className="text-muted">
					<FaHtml5 className="me-1" />
					HTML5
				</h6>
				<ProgressBar now={100} variant="secondary" className="mb-3" />
				<h6 className="text-muted">
					<FaCss3 className="me-1" />
					CSS3
				</h6>
				<ProgressBar now={90} variant="secondary" className="mb-3" />
				<h6 className="text-muted">
					<FaJs className="me-1" />
					JavaScript
				</h6>
				<ProgressBar now={80} variant="secondary" className="mb-3" />
				<h6 className="text-muted">
					<FaPhp className="me-1" />
					PHP
				</h6>
				<ProgressBar now={5} variant="secondary" className="mb-3" />
				<h5 className="mb-3">Front-End Frameworks</h5>
				<h6 className="text-muted">
					<FaReact className="me-1" />
					React
				</h6>
				<ProgressBar now={70} variant="secondary" className="mb-3" />
				<h5 className="mb-3">Front-End Tools</h5>
				<h6 className="text-muted">
					<FaSass className="me-1" />
					SASS
				</h6>
				<ProgressBar now={50} variant="secondary" className="mb-3" />
				<h6 className="text-muted">
					<SiTypescript className="me-1" />
					TypeScript
				</h6>
				<ProgressBar now={10} variant="secondary" className="mb-3" />
				<h6 className="text-muted">
					<FaNpm className="me-1" />
					NPM
				</h6>
				<ProgressBar now={70} variant="secondary" className="mb-3" />
				<h6 className="text-muted">
					<FaGithub className="me-1" />
					Github
				</h6>
				<ProgressBar now={65} variant="secondary" className="mb-3" />
				<h6 className="text-muted">
					<FaChrome className="me-1" />
					Chrome Developer Tools
				</h6>
				<ProgressBar now={90} variant="secondary" className="mb-3" />
				<h5 className="mb-3">Content Management Systems</h5>
				<h6 className="text-muted">
					<FaWordpress className="me-1" />
					WordPress
				</h6>
				<ProgressBar now={40} variant="secondary" className="mb-3" />
			</Card.Body>
		</Card>
	);
}
