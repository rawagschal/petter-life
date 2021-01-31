const { AuthenticationError } = require('apollo-server-express');
const { User, Pet } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      console.log(args, context);
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
     
      //check if user is logged in
      if (context.user) {
        //if a user is logged in, create a new pet
        const pet = await Pet.create(args);
        //push the new pet into that user's ownedPets array
        await User.findByIdAndUpdate(context.user._id, { $push: { ownedPets: pet } });
        return pet;
      }
    }

  }
};

module.exports = resolvers;