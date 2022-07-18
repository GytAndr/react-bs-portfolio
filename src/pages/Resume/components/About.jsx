import Card from 'react-bootstrap/esm/Card';

export default function About() {
	return (
		<Card className="mb-4">
			<Card.Header as="h2" className="text-center">
				Gytis Andriejūnas
			</Card.Header>

			<Card.Body>
				<Card.Text className="lead">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
					orci massa, maximus a velit sit amet, fringilla convallis tellus.
				</Card.Text>
				<Card.Text>
					Morbi auctor consectetur convallis. Suspendisse at lobortis libero.
					Curabitur commodo dapibus rhoncus. Donec accumsan magna et magna
					auctor pretium. Proin lectus augue, tincidunt eu quam in, finibus
					imperdiet lectus. Donec commodo, est eu semper pellentesque, sapien
					arcu tempor leo, quis commodo nisl arcu vitae ligula. Duis et elit ut
					quam finibus accumsan vitae non leo.
				</Card.Text>
				<Card.Text>
					Aenean sit amet feugiat nibh, at tempor quam. Phasellus pretium vitae
					urna sit amet ultrices. Morbi malesuada nulla eu ipsum sagittis, nec
					dignissim turpis iaculis. Nullam laoreet interdum lorem sit amet
					egestas. Quisque ultricies porta dolor, eget dapibus dui. Praesent
					porttitor quam a quam faucibus volutpat. Pellentesque aliquam
					convallis faucibus. Pellentesque rhoncus euismod fermentum.
				</Card.Text>
			</Card.Body>
		</Card>
	);
}
