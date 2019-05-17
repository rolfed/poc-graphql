import { users } from "./db";

const resolvers = {
  Query: {
    user: (parent, { id }, context, info) => {
      console.log('ID: ', id);
      console.log('CONTEXT: ', context);
      return users.find(user => user.id === id);
    },
    users: (parent, args, context, info) => {
      console.log('ARGS: ', args);
      console.log('CONTEXT: ', context);
      return users;
    }
  },
  Mutation: {
    createUser: (parent, { id, name, email, age }, context, info) => {
      const newUser = {id, name, email, age };
      console.log('NEW USER: ', newUser);
      users.push(newUser);

      return newUser;
    },

    updateUser: (parent, {id, name, email, age }, context, info) => {
      let updateUser = users.find(user => user.id === id);

      updateUser.name = name;
      updateUser.email = email;
      updateUser.age = age;

      return updateUser;
    },

    deleteUser: (parent, { id }, context, info) => {
      const userIndex = users.findIndex(user => user.id === id);
      console.log('USER INDEX: ', userIndex);

      if (userIndex === -1) throw new Error("User not found");

      const deleteUser = users.splice(userIndex, 1);

      return deleteUsers[0];
    }

  }
};

export default resolvers;
