import gql from "graphql-tag";
import { graphql } from "react-apollo";

export const CREATE_ADMIN_USER_MUTATION = gql`
	mutation createAdminAccount($password: String!) {
		createAdminAccount(password: $password) {
			success
			user {
				id
				userName
			}
		}
	}
`;

export const USER_LOGIN_MUTATION = gql`
	mutation login(
		$username: String!
		$password: String!
		$rememberMe: Boolean
	) {
		login(
			username: $username
			password: $password
			rememberMe: $rememberMe
		) {
			success
			user {
				id
				userName
			}
		}
	}
`;

export const USER_LOGOUT_MUTATION = gql`
	mutation logout {
		logout {
			success
		}
	}
`;

export const withLogout = graphql(USER_LOGOUT_MUTATION, {
	name: "logout"
});
