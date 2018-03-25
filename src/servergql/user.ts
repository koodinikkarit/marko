import gql from "graphql-tag";

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
