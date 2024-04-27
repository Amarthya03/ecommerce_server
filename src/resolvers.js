import prisma from "./database";

const resolvers = {
	Product: {
		id: (parent, args, context, info) => parent.id,
		name: (parent) => parent.name,
		price: (parent) => parent.price,
		discount: (parent) => parent.discount,
		brand: (parent) => parent.brand,
		image: (parent) => parent.image,
		info: (parent) => parent.info,
		color: (parent) => parent.color,
		rating: (parent) => parent.rating,
		category: (parent) => parent.category,
		sizes: (parent) => parent.sizes,
	},
	Cart: {
		cartId: (parent) => parent.cartId,
		productId: (parent) => parent.productId,
		userId: (parent) => parent.userId,
	},
	Wishlist: {
		wishlistId: (parent) => parent.wishlistId,
		productId: (parent) => parent.productId,
		userId: (parent) => parent.userId,
	},
	Orders: {
		orderId: (parent) => parent.orderId,
		productId: (parent) => parent.productId,
		userId: (parent) => parent.userId,
	},
	Query: {
		products: (parent, args) => {
			return prisma.product.findMany();
		},
		cart: (parent, args) => {
			return prisma.cart.findMany();
		},
		wishlist: (parent, args) => {
			return prisma.wishlist.findMany();
		},
		orders: (parent, args) => {
			return prisma.orders.findMany();
		},
		productById: (parent, args) => {
			return prisma.product.findUnique({
				where: {
					id: Number(args.id),
				},
			});
		},
		orderById: (parent, args) => {
			return prisma.orders.findUnique({
				where: {
					id: Number(args.id),
				},
			});
		},
	},
	Mutation: {
		addProduct: (parent, args) => {
			return prisma.product.create({
				data: {
					name: args.name,
					price: args.price,
					discount: args.discount,
					brand: args.brand,
					image: args.image,
					info: args.info,
					color: args.color,
					rating: args.rating,
					category: args.category,
					sizes: args.sizes,
				},
			});
		},
		addToCart: (parent, args) => {
			return prisma.cart.create({
				data: {
					productId: args.productId,
					userId: args.userId,
				},
			});
		},
		addToWishlist: (parent, args) => {
			return prisma.wishlist.create({
				data: {
					productId: args.productId,
					userId: args.userId,
				},
			});
		},
		addToOrders: (parent, args) => {
			return prisma.orders.create({
				data: {
					productId: args.productId,
					userId: args.userId,
				},
			});
		},
	},
};

export default resolvers;
