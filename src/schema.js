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

	type Cart {
		cartId: ID!
		productId: Int!
		userId: String!
	}

	type Wishlist {
		wishlistId: ID!
		productId: Int!
		userId: String!
	}

	type Orders {
		orderId: ID!
		productId: Int!
		userId: String!
	}

	type Query {
		products: [Product!]!
		productById(id: ID!): Product!
		cart: [Cart!]!
		wishlist: [Wishlist!]!
		orders: [Orders!]!
		orderById(id: ID!): Orders!
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
		addToCart(productId: Int!, userId: String!): Cart!
		addToWishlist(productId: Int!, userId: String!): Wishlist!
		addToOrders(productId: Int!, userId: String!): Orders!
		removeFromCart(productId: Int!, userId: String!): Cart!
		removeFromWishlist(productId: Int!, userId: String!): Wishlist!
		removeFromOrders(productId: Int!, userId: String!): Orders!
	}
`;

export default typeDefs;
