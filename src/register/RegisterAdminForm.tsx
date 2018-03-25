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
import { graphql, ChildProps } from "react-apollo";
import { CREATE_ADMIN_USER_MUTATION } from "../servergql";
import {
	createAdminAccountMutationVariables,
	createAdminAccountMutation
} from "../types/operation-results-types";
import { Loader } from "../common";

type InputProps = {};

interface IResponseProps {}

interface IRgisterAdminProps extends ChildProps<InputProps, IResponseProps> {
	createAdminAccount: (
		args: {
			variables: createAdminAccountMutationVariables;
		}
	) => Promise<{
		data: createAdminAccountMutation;
	}>;
}

const withCreateAdmin = graphql<
	InputProps,
	IResponseProps,
	createAdminAccountMutationVariables,
	ChildProps
>(CREATE_ADMIN_USER_MUTATION, {
	name: "createAdminAccount"
});

export const RegisterAdminForm = withCreateAdmin(
	class extends React.Component<IRgisterAdminProps> {
		state = {
			password: "",
			creatingAdminAccount: false
		};

		render() {
			return (
				<Panel>
					<Panel.Heading>Luo admin tili</Panel.Heading>
					<Panel.Body>
						<Form horizontal={true}>
							<FormGroup>
								<Col componentClass={ControlLabel} sm={2}>
									Käyttäjänimi
								</Col>
								<Col sm={10}>
									<FormControl
										disabled={true}
										type="text"
										placeholder="Käyttäjänimi"
										value="admin"
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
										value={this.state.password}
										onChange={e => {
											const target = e.target as HTMLInputElement;
											this.setState({
												password: target.value
											});
										}}
									/>
								</Col>
							</FormGroup>
							<FormGroup>
								<Col smOffset={2} sm={10}>
									{this.state.creatingAdminAccount ? (
										<Loader />
									) : (
										<Button
											type="submit"
											onClick={e => {
												e.preventDefault();
												this.setState({
													creatingAdminAccount: true
												});
												this.props
													.createAdminAccount({
														variables: {
															password: this.state
																.password
														}
													})
													.then(res => {
														if (
															res.data
																.createAdminAccount
																.success
														) {
															location.replace(
																"/"
															);
														}
													});
											}}
										>
											Luo admin tili
										</Button>
									)}
								</Col>
							</FormGroup>
						</Form>
					</Panel.Body>
				</Panel>
			);
		}
	}
);
