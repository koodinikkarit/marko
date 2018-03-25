import * as React from "react";

import { ChildProps } from "react-apollo";

// import { Switch, Route } from "react-router";
import { LoginPage, RegisterAdminPage } from "./pages";
import { withPageViewer } from "./servergql";
import { getPageViewerQuery } from "./types/operation-results-types";

type InputProps = {};

interface IResponseProps extends getPageViewerQuery {}

interface IRoutesProps extends ChildProps<InputProps, IResponseProps> {
	aa: string;
}

export const Routes = withPageViewer((props: IRoutesProps) => {
	if (props.data.loading) {
		return <div />;
	}

	if (!props.data.viewer.hasAdminUser) {
		return <RegisterAdminPage />;
	}

	if (!props.data.viewer.user) {
		return <LoginPage />;
	}

	return <h1>Terve {props.data.viewer.user.userName} </h1>;

	// return (
	// 	<Switch>
	// 		<Route path="/login" component={LoginPage} />
	// 		<Route path="/" component={FrontPage} exact={true} />
	// 	</Switch>
	// );
});
