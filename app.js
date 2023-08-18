import { ApolloServer } from "apollo-server";
import typeDefs from "./src/schema";
import resolvers from "./src/resolvers";

const PORT = process.env.PORT || 4200;

const server = new ApolloServer({
	resolvers,
	typeDefs,
});

server.listen({ port: PORT }, () => {
	console.log(`Server is running at http://localhost:${PORT}`);
});
