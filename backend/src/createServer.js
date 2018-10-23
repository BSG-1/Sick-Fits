//GraphQl Yoga is an express erver between the Apollo server and the Prisma DB

//importing graphql yoga
const { GraphQlServer } = require('graphql-yoga');

//Resolvers - where does this data come from, and what does this data do
const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');

//db
const db = require('./db');

//create the graphql server
function createSersver() {
    return new GraphQlServer({
        typeDefs: 'src/schema.graphql',
        resolvers: {
            Mutation,
            Query
        },
        resolverValidationOptions: {
            requireResolversForResolveType: false,

        },
        context: req => ({ ...req, db }),//access database from resolvers
    });
}

module.exports = createServer;
