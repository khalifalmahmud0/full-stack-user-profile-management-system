// Import the "User" model from "../models/User"
const User = require("../models/User");

// Import the custom "Success" and "Error" classes from "../helpers"
const Success = require("../helpers/Success");
const Error = require("../helpers/Error");

// Export an object with controller functions for different CRUD operations
module.exports = {
	// Controller function to create a new user
	createUser: async (req, res) => {
		try {
			// Create a new user document in the database with the data from the request body
			const newUser = await User.create(req.body);

			// Send a success response with status code 200 and the newly created user data
			return new Success(res, 200, newUser);
		} catch (err) {
			// If an error occurs during user creation, send an error response with status code 400 and the error message
			return new Error(res, 400, err);
		}
	},

	// Controller function to fetch all users
	allUsers: async (req, res) => {
		try {
			// Find all user documents in the database
			const users = await User.find();

			// Send a success response with status code 200 and the array of user data
			return new Success(res, 200, users);
		} catch (err) {
			// If an error occurs during fetching all users, send an error response with status code 400 and the error message
			return new Error(res, 400, err);
		}
	},

	// Controller function to fetch a single user by their ID
	singleUser: async (req, res) => {
		try {
			// Find a user document by the provided ID in the request parameters
			const user = await User.findById(req.params.id);

			// If the user with the provided ID is not found, send an error response with status code 400
			if (!user) {
				return new Error(res, 400);
			}

			// Send a success response with status code 200 and the user data
			return new Success(res, 200, user);
		} catch (err) {
			// If an error occurs during fetching the single user, send an error response with status code 400 and the error message
			return new Error(res, 400, err);
		}
	},

	// Controller function to update a user by their ID
	updateUser: async (req, res) => {
		try {
			// Find a user document by the provided ID in the request parameters and update it with the data from the request body
			const updatedUser = await User.findByIdAndUpdate(
				req.params.id,
				req.body,
				{
					new: true,
				}
			);

			// If the user with the provided ID is not found, send an error response with status code 400
			if (!updatedUser) {
				return new Error(res, 400);
			}

			// Send a success response with status code 200 and the updated user data
			return new Success(res, 200, updatedUser);
		} catch (err) {
			// If an error occurs during updating the user, send an error response with status code 400 and the error message
			return new Error(res, 400, err);
		}
	},

	// Controller function to delete a user by their ID
	deleteUser: async (req, res) => {
		try {
			// Find a user document by the provided ID in the request parameters and delete it
			const deletedUser = await User.findByIdAndDelete(req.params.id);

			// If the user with the provided ID is not found, send an error response with status code 400
			if (!deletedUser) {
				return new Error(res, 400);
			}

			// Send a success response with status code 200 and the deleted user data
			return new Success(res, 200, deletedUser);
		} catch (err) {
			// If an error occurs during deleting the user, send an error response with status code 400 and the error message
			return new Error(res, 400, err);
		}
	},
};
