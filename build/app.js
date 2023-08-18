"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _apolloServer = require("apollo-server");
var _schema = _interopRequireDefault(require("./src/schema"));
var _resolvers = _interopRequireDefault(require("./src/resolvers"));
var PORT = process.env.PORT || 4200;
var server = new _apolloServer.ApolloServer({
  resolvers: _resolvers["default"],
  typeDefs: _schema["default"]
});
server.listen({
  PORT: PORT
}, function () {
  console.log("Server is running at http://localhost:".concat(PORT));
});
//# sourceMappingURL=app.js.map