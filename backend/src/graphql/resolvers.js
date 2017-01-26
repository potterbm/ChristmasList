import { pubsub } from './subscriptions';

import { Users, Ideas } from '../orm/domain';

const resolvers = {
    Query: {
        users() {
            return Users.findAll();
        },
        ideas(_, { forUserId }) {
            return Ideas.findAll({ ideaForId: forUserId });
        }
    },
    Mutation: {
        createIdea(forUserId, byUserId) {

        }
    },
    User: {

    },
    Idea: {
        ideaFor(userId) {
            return Users.findById(userId)
        },
        ideaBy(userId) {
            return Users.findById(userId)
        },
        claimedBy(userId) {
            return Users.findById(userId)
        }
    }
};

export default resolvers;
