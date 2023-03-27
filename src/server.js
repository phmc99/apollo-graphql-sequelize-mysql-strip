const { ApolloServer, gql } = require("apollo-server")
const fs = require("node:fs")

const resolvers = require("./graphql/resolvers")
const typeDefs = gql(fs.readFileSync("./src/graphql/typeDefs.graphql", {encoding: "utf-8"}))

const server = new ApolloServer({ typeDefs, resolvers })

server.listen(5000).then(({url}) => {
  console.log(`Server is running at ${url}`);
})
