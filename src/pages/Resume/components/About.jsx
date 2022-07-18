import Card from 'react-bootstrap/esm/Card';

export default function About() {
	return (
		<Card className="mb-4">
			<Card.Header as="h2" className="text-center">
				Gytis Andriejūnas
			</Card.Header>

			<Card.Body>
				<Card.Text className="lead">
					Hi! My name is Gytis Andriejunas. In the beginning of 2022, I decided
					to end my career in AML compliance field and decided to become
					self-thought Web developer.
				</Card.Text>
				<Card.Text>
					I am self-thought Front-End developer with endless desire to learn new
					skills, persistence to deal with complex problems and leadership
					experience to lead self and others into success. Skilled in HTML, CSS,
					JavaScript and React. Seeking my first junior position in company that
					would become my new family.
				</Card.Text>
			</Card.Body>
		</Card>
	);
}
