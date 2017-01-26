import { makeExecutableSchema } from 'graphql-tools';

import resolvers from './resolvers';

const schema = `
type Query {
    users: [User]
    ideasFor(forUserId: Int!): [Idea]
    ideasBy(byUserId: Int!): [Idea]
    claimedBy(claimedById: Int!): [Idea]
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
    ideasFor: [Idea]
    ideasBy: [Idea]
    ideasClaimed: [Idea]
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
