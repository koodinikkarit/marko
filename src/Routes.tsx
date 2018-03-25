import * as React from "react";

import { graphql, ChildProps } from "react-apollo";

import { Switch, Route } from "react-router";
import { FrontPage, LoginPage, RegisterAdminPage } from "./pages";
import { PAGE_VIEWER_QUERY } from "./servergql";
import { getPageViewerQuery } from "./types/operation-results-types";

type InputProps = {};

interface IResponseProps extends getPageViewerQuery {}

interface IRoutesProps extends ChildProps<InputProps, IResponseProps> {
	aa: string;
}

const withPageViewer = graphql(PAGE_VIEWER_QUERY);

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

	return (
		<Switch>
			<Route path="/login" component={LoginPage} />
			<Route path="/" component={FrontPage} exact={true} />
		</Switch>
	);
});
