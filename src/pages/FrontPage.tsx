import * as React from "react";
import { Grid } from "react-bootstrap";
import { LoginForm } from "../login";
import { RegisterAdminForm, RegisterUserForm } from "../register";

export const FrontPage = () => {
	return (
		<Grid>
			<LoginForm />
			<RegisterAdminForm />
			<RegisterUserForm />
		</Grid>
	);
};
