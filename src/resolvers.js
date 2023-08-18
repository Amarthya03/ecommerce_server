import prisma from "./database";

const resolvers = {
	Product: {
		id: (parent, args, context, info) => parent.id,
		name: (parent) => parent.name,
		price: (parent) => parent.price,
		brand: (parent) => parent.brand,
		image: (parent) => parent.image,
		info: (parent) => parent.info,
		color: (parent) => parent.color,
		category: (parent) => parent.category,
		sizes: (parent) => parent.sizes,
	},
	Query: {
		products: (parent, args) => {
			return prisma.product.findMany();
		},
	},
	Mutation: {
		addProduct: (parent, args) => {
			return prisma.product.create({
				data: {
					name: args.name,
					price: args.price,
					brand: args.brand,
					image: args.image,
					info: args.info,
					color: args.color,
					category: args.category,
					sizes: args.sizes,
				},
			});
		},
	},
};

export default resolvers;
