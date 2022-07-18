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
									Gytis has successfully built well performing and engaged team.
									Besides his robust skillset to successfully drive team's daily
									operations he has also grown his leadership competencies.
									Extensive data analysis and Power BI knowledge has well served
									the whole workstream in data reporting and analytics. Always
									professional, result oriented, fact based decision maker- it
									was a pleasure to work with you!
								</p>
							</blockquote>
							<figcaption className="blockquote-footer">
								Agne Asauske, former Manager at Guidehouse 2021
							</figcaption>
						</Figure>
					</Carousel.Item>
					<Carousel.Item interval={4000}>
						<Figure className="text-center mb-4">
							<blockquote className="blockquote">
								<p>
									Gytis is wonderful to work with, and has expertise in
									compliance, great attention to detail. I was impressed by
									Gytis ability to handle any situation calmly and patiently,
									even in the toughest situations. This natural skill of his has
									helped my team grow and build trustworthy environment. I’m
									happy I got the chance to work with him.
								</p>
							</blockquote>
							<figcaption className="blockquote-footer">
								Deimante Miksiene, former Supervisor at Western Union 2021
							</figcaption>
						</Figure>
					</Carousel.Item>
					<Carousel.Item interval={4000}>
						<Figure className="text-center mb-4">
							<blockquote className="blockquote">
								<p>
									Gytis is an exceptional employee and colleague who has always
									stood out in delivering expected results, going above and
									beyond in assigned project or task with consistency, showing
									his fast learning abilities and always ready and available to
									take new challenges and rend help when needed. He has greatly
									mastered the skill of complex suspicious activity
									investigations and SARs preparation. He is a true inspiration
									to the whole team as he has also developed his leadership
									capabilities with multiple initiatives within the team. I look
									forward to working with you in the future.
								</p>
							</blockquote>
							<figcaption className="blockquote-footer">
								Musa Malone Lawal, former Supervisor at Wester Union 2020
							</figcaption>
						</Figure>
					</Carousel.Item>
				</Carousel>
			</Card.Body>
		</Card>
	);
}
