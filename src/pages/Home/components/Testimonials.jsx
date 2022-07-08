//React Bootstrap imports
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Figure from 'react-bootstrap/Figure';

export default function Testimonials() {
	return (
		<>
			<h3>Testimonials</h3>
			<Row className="mb-4">
				<Col lg={4}>
					<Figure>
						<blockquote class="blockquote">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
								pulvinar purus vitae nisl semper, a ornare purus euismod.
								Quisque id dapibus ligula, vel finibus lectus. Aliquam neque
								diam, iaculis non arcu a, fringilla viverra libero.
							</p>
						</blockquote>
						<Figure.Caption>Firstname Lastname</Figure.Caption>
					</Figure>
				</Col>
				<Col lg={4}>
					<Figure>
						<blockquote class="blockquote">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
								pulvinar purus vitae nisl semper, a ornare purus euismod.
								Quisque id dapibus ligula, vel finibus lectus. Aliquam neque
								diam, iaculis non arcu a, fringilla viverra libero.
							</p>
						</blockquote>
						<Figure.Caption>Firstname Lastname</Figure.Caption>
					</Figure>
				</Col>
				<Col lg={4}>
					<Figure>
						<blockquote class="blockquote">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
								pulvinar purus vitae nisl semper, a ornare purus euismod.
								Quisque id dapibus ligula, vel finibus lectus. Aliquam neque
								diam, iaculis non arcu a, fringilla viverra libero.
							</p>
						</blockquote>
						<Figure.Caption>Firstname Lastname</Figure.Caption>
					</Figure>
				</Col>
			</Row>
		</>
	);
}
