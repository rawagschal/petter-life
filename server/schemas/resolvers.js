const { AuthenticationError } = require('apollo-server-express');
const { parseType } = require('graphql');
const { User, Pet } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id)

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },

    pet: async (parent, { _id }) => {
      const pet = await Pet;
      return pet;
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },

    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },

    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },

    addOwnedPet: async (parent, args, context) => {
      if (context.user) {

        try {
          const pet = await Pet.create({ ...args, username: context.user.username });

          const user = await User.findByIdAndUpdate(
            { _id: context.user._id },
            { $push: { ownedPets: pet._id } },
            { new: true }
          );

          return pet;

          // ._doc to get raw data from object
          // return { ...pet._doc };
        } catch (e) {
          console.log(e)
        }
      }
    }
  }
};

module.exports = resolvers;    