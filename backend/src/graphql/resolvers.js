import { pubsub } from './subscriptions';

import { Users, Ideas } from '../orm/domain';

function ideasFor(userId) {
    return Ideas.findAll({ where: { ideaForId: userId } });
}

function ideasBy(userId) {
    return Ideas.findAll({ where: { ideaById: userId } });
}

function ideasClaimed(userId) {
    return Ideas.findAll({ where: { claimedById: userId } });
}

const resolvers = {
    Query: {
        users() {
            return Users.findAll();
        },
        ideasFor(_, { forUserId }) {
            return ideasFor(forUserId);
        },
        ideasBy(_, { byUserId }) {
            return ideasBy(byUserId);
        },
        claimedBy(_, { claimedById }) {
            return ideasClaimed(claimedById);
        }
    },
    Mutation: {
        createIdea(forUserId, byUserId) {

        }
    },
    User: {
        ideasFor(user) {
            return ideasFor(user.id);
        },
        ideasBy(user) {
            return ideasBy(user.id);
        },
        ideasClaimed(user) {
            return ideasClaimed(user.id);
        }
    },
    Idea: {
        ideaFor(idea) {
            return Users.findById(idea.ideaForId);
        },
        ideaBy(idea) {
            return Users.findById(idea.ideaById);
        },
        claimedBy(idea) {
            return Users.findById(idea.claimedById);
        }
    }
};

export default resolvers;
