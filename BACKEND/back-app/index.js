const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { GraphQLError } = require("graphql");
const fs = require("fs");
const path = require("path")
require("dotenv").config();
const User = require("./Model/User");
const Post = require("./Model/Post")

const resolvers = {
    Query: {
        allUsers: async () => {
            try {
                const users = await User.find();
                return users;
            } catch (err) {
                throw new GraphQLError("Fetching users failed", {
                    extensions: {
                        code: "USERS_NOT_FOUND",
                        err
                    }
                })
            }
        },
        singleUser: async (root, args) => {
            const foundUser = await User.findById(args.id);
            return foundUser;
        },
        allPosts: async () => {
            const posts = await Post.find();
            return posts;
        }

    },
    Mutation: {
        register: async (root, args) => {
            const newUser = new User({ ...args })
            try {
                await newUser.save();
            } catch (err) {
                throw new GraphQLError("User registration failed", {
                    extensions: {
                        code: "BAD_USER_INPUT",
                        invalidArgs: args.firstName,
                        err
                    }
                })
            }
            return newUser;
        },
        login: async (root, args) => {
            const user = await User.findOne({ email: args.email,  password: args.password });
            if(!user) {
                throw new GraphQLError("User not found", {
                    extensions: {
                        code: "BAD_USER_INPUT",
                    }
                })
            }
            return user
        },
        createPost: async (root, args) => {
            try {
                const id = args.userId
                const user = await User.findById(id);
                
                const newPost = new Post({
                    userId: args.userId,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    location: user.location,
                    description: args.description,
                    picturePath: args.picturePath,
                    userPicturePath: user.picturePath
                });
                await newPost.save()
                return newPost;
            } catch (err) {
                throw new GraphQLError("New post creation failed", {
                    extensions: {
                        code: "BAD_USER_INPUT",
                        err
                    }
                })
            }
        }
    }
}

const server = new ApolloServer({
    typeDefs: fs.readFileSync(path.join(__dirname, "Graphql/schema.graphql"), "utf-8"),
    resolvers
});

startStandaloneServer(server, {
    listen: {
        port: 3005
    }
}).then((res) => console.log(`Server running on port ${res.url}`))