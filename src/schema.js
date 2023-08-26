import { gql } from "apollo-server";

const typeDefs = gql`
	type Product {
		id: ID!
		name: String!
		price: Int!
		discount: Int
		brand: String!
		image: String!
		info: String!
		color: String!
		rating: Float!
		category: String!
		sizes: [String!]!
	}

	type Query {
		products: [Product!]!
		productById(id: ID!): Product!
	}

	type Mutation {
		addProduct(
			name: String!
			price: Int!
			discount: Int
			brand: String!
			image: String!
			info: String!
			color: String!
			rating: Float!
			category: String!
			sizes: [String!]!
		): Product!
	}
`;

export default typeDefs;
