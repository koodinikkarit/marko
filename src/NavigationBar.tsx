import * as React from "react";
import { Navbar, NavItem, Nav } from "react-bootstrap";
import { withPageViewer, withLogout } from "./servergql";
import { getPageViewerQuery, logoutMutation } from "./types";
import { ChildProps, compose, MutationResult } from "react-apollo";

type InputProps = {};

interface IResponseProps extends getPageViewerQuery {}

interface INavigationBarProps extends ChildProps<InputProps, IResponseProps> {
	logout: () => Promise<MutationResult<logoutMutation>>;
}

export const NavigationBar = compose(withPageViewer, withLogout)(
	(props: INavigationBarProps) => {
		return (
			<Navbar>
				<Navbar.Header>
					<Navbar.Brand>Marko</Navbar.Brand>
				</Navbar.Header>
				<Nav>
					<NavItem>lol</NavItem>
				</Nav>
				<Nav pullRight={true}>
					{!props.data.loading &&
						props.data.viewer &&
						props.data.viewer.user && (
							<NavItem
								eventKey={1}
								onClick={() => {
									props.logout().then(res => {
										if (res.data.logout.success) {
											window.location.replace("/");
										}
									});
								}}
							>
								Kirjaudu ulos
							</NavItem>
						)}
				</Nav>
			</Navbar>
		);
	}
);
