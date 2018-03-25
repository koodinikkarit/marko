import gql from "graphql-tag";
import { graphql } from "react-apollo";

export const PAGE_VIEWER_QUERY = gql`
	query getPageViewer {
		viewer {
			token
			user {
				id
				userName
			}
			hasAdminUser
		}
	}
`;

export const withPageViewer = graphql(PAGE_VIEWER_QUERY);
