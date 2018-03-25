import * as React from "react";

import {
	FormControl,
	Col,
	Form,
	FormGroup,
	ControlLabel,
	Panel,
	Checkbox,
	Button
} from "react-bootstrap";

export class LoginForm extends React.Component {
	render() {
		return (
			<Panel>
				<Panel.Heading>Kirjaudu sisään</Panel.Heading>
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
								<Checkbox>Muista minut</Checkbox>
							</Col>
						</FormGroup>

						<FormGroup>
							<Col smOffset={2} sm={10}>
								<Button type="submit">Kirjaudu</Button>
							</Col>
						</FormGroup>
					</Form>
				</Panel.Body>
			</Panel>
		);
	}
}
