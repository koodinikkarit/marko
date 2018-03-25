import * as React from "react";
import {
	Panel,
	Form,
	FormGroup,
	ControlLabel,
	Col,
	FormControl,
	Button
} from "react-bootstrap";

export class RegisterUserForm extends React.Component {
	render() {
		return (
			<Panel>
				<Panel.Heading>Luo tili</Panel.Heading>
				<Panel.Body>
					<Form horizontal={true}>
						<FormGroup>
							<Col componentClass={ControlLabel} sm={2}>
								Käyttäjänimi
							</Col>
							<Col sm={10}>
								<FormControl
									type="text"
									placeholder="Käyttäjänimi"
								/>
							</Col>
						</FormGroup>
						<FormGroup>
							<Col componentClass={ControlLabel} sm={2}>
								Salasana
							</Col>
							<Col sm={10}>
								<FormControl
									type="password"
									placeholder="Salasana"
								/>
							</Col>
						</FormGroup>
						<FormGroup>
							<Col smOffset={2} sm={10}>
								<Button type="submit">Luo tili</Button>
							</Col>
						</FormGroup>
					</Form>
				</Panel.Body>
			</Panel>
		);
	}
}
