const { AuthenticationError } = require("apollo-server-express");
const { User, Pet } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "pets.savedPets",
          populate: "savedPets",
          populate: "pets",
        });

        return user;
      }

      throw new AuthenticationError("Not logged in");
    },

    pets: async (parent, { _id }) => {
      return pets;
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
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email: email });
      console.log(user, email, password);
      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },

    addPet: async (_, args, context) => {
      console.log(args, context);
      if (context.user) {
        const response = await Pet.create(args);
        const user = await User.findOneAndUpdate(
          { _id: context.user._id },
          {
            $push: {
              pets: response,
            },
          }
        );
        return { response }
      }
      throw new AuthenticationError("Not logged in");
    },
  },
};

module.exports = resolvers;
