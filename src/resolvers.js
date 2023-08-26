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
	Query: {
		products: (parent, args) => {
			return prisma.product.findMany();
		},
		productById: (parent, args) => {
			return prisma.product.findUnique({
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
	},
};

export default resolvers;
