//React Bootstrap imports
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Contact() {
	return (
		<>
			<h3>Contact Me</h3>
			<Form className="mb-4">
				<Row>
					<Col md={6}>
						<div className="mb-3">
							<Form.Label htmlFor="name">Name</Form.Label>
							<Form.Control
								id="name"
								placeholder="Enter your name"
								type="text"
							></Form.Control>
						</div>
						<div className="mb-3">
							<Form.Label htmlFor="email">Email</Form.Label>
							<Form.Control
								id="email"
								placeholder="Enter your email"
								type="email"
							></Form.Control>
						</div>
					</Col>
					<Col md={6}>
						<div className="mb-3">
							<Form.Label htmlFor="message">Message</Form.Label>
							<Form.Control
								as="textarea"
								rows={3}
								id="message"
								placeholder="Enter your message"
							></Form.Control>
						</div>
					</Col>
				</Row>
				<Button variant="primary">Send Message</Button>
			</Form>
		</>
	);
}
