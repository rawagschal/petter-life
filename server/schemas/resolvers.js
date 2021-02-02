const { AuthenticationError } = require("apollo-server-express");
const { parseType } = require("graphql");
const { User, Pet } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);

        return user;
      }

      throw new AuthenticationError("Not logged in");
    },

    pet: async (parent, { _id }) => {
      return await Pet.findById(_id);
    },

    pets: async () => {
      // const params = username ? { username } : {};
      return Pet.find();
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

    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

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

    addOwnedPet: async (parent, args, context) => {
      //check if user is logged in
      console.log("context", context.user);

      if (context.user) {
        try {
          const ownedPet = await Pet.create({
            ...args,
            username: context.user.username,
          });

          console.log("ownedPet", ownedPet);

          const user = await User.findByIdAndUpdate(
            { _id: context.user._id },
            // changed from `{ ownedPets: pet._id }` because we want to 
            // push the entire new Pet object, which we defined as ownedPet on line 69
            { $push: { ownedPets: ownedPet } },
            { new: true }
          );
          
          // this should now log the user with a populated ownedPets array
          // that includes all data for each ownedPet
          console.log("user", user);
          // changed from `return: pet` for the same reason as above comment
          return ownedPet;
         
        } catch (e) {
          console.log(e);
        }
      }
    },

    //add a liked pet to a user's model when they like a pet
    addLikedPet: async (parent, args, context) => {
      if (context.user) {
        const likedPet = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { likedPets: pet._id } },
          { new: true }
        );
      } else {
        return;
      }
    },
  },
};

module.exports = resolvers;
