import { gql } from "apollo-server";

const typeDefs = gql`
	type Product {
		id: ID!
		name: String!
		price: Int!
		brand: String!
		image: String!
		info: String!
		color: String!
		category: String!
		sizes: [String!]!
	}

	type Query {
		products: [Product!]!
	} 

	type Mutation {
		addProduct(
			name: String!
			price: Int!
			brand: String!
			image: String!
			info: String!
			color: String!
			category: String!
			sizes: [String!]!
		): Product!
	}
`;

export default typeDefs;
