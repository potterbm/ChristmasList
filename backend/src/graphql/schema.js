import { makeExecutableSchema } from 'graphql-tools';

import resolvers from './resolvers';

const schema = `
type Query {
    users: [User]
    ideas(forUserId: Int!): [Idea]
}

type Mutation {
    createIdea(forUserId: Int!, byUserId: Int!): Idea
}

#type Subscription {
#}

# Domain types
type User {
    id: Int!
    firstName: String!
    lastName: String!
    nickName: String!
}

type Idea {
    id: Int!
    name: String!
    description: String!
    ideaFor: User!
    ideaBy: User!
    claimedBy: User
}
`;

export default makeExecutableSchema({
    typeDefs: schema,
    resolvers,
});
