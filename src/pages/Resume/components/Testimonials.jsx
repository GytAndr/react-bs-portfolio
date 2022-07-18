import Card from 'react-bootstrap/esm/Card';
import Carousel from 'react-bootstrap/esm/Carousel';
import Figure from 'react-bootstrap/esm/Figure';

export default function Testimonials() {
	return (
		<Card className="mb-4">
			<Card.Header as="h2" className="text-center">
				Recommendations
			</Card.Header>
			<Card.Body>
				<Carousel slide indicators={false}>
					<Carousel.Item interval={4000}>
						<Figure className="text-center mb-4 ">
							<blockquote className="blockquote">
								<p>
									1111Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Excepturi, hic?
								</p>
							</blockquote>
							<figcaption className="blockquote-footer">
								Name Surname
							</figcaption>
						</Figure>
					</Carousel.Item>
					<Carousel.Item interval={4000}>
						<Figure className="text-center mb-4">
							<blockquote className="blockquote">
								<p>
									2222Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Excepturi, hic?
								</p>
							</blockquote>
							<figcaption className="blockquote-footer">
								Name Surname
							</figcaption>
						</Figure>
					</Carousel.Item>
					<Carousel.Item interval={4000}>
						<Figure className="text-center mb-4">
							<blockquote className="blockquote">
								<p>
									333Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Excepturi, hic?
								</p>
							</blockquote>
							<figcaption className="blockquote-footer">
								Name Surname
							</figcaption>
						</Figure>
					</Carousel.Item>
				</Carousel>
			</Card.Body>
		</Card>
	);
}
