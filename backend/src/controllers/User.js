const User = require("../models/User");
const Success = require("../helpers/Success");
const Error = require("../helpers/Error");

module.exports = {
	createUser: async (req, res) => {
		try {
			const newUser = await User.create(req.body);
			return Success(res, "User created successfully.", newUser);
		} catch (err) {
			return Error(res, "Error creating user.", err);
		}
	},

	allUsers: async (req, res) => {
		try {
			const users = await User.find();
			return Success(res, "All users fetched successfully.", users);
		} catch (err) {
			return Error(res, "Error fetching users.", err);
		}
	},

	singleUser: async (req, res) => {
		try {
			const user = await User.findById(req.params.id);
			if (!user) {
				return Error(res, "User not found.");
			}
			return Success(res, "User fetched successfully.", user);
		} catch (err) {
			return Error(res, "Error fetching user.", err);
		}
	},

	updateUser: async (req, res) => {
		try {
			const updatedUser = await User.findByIdAndUpdate(
				req.params.id,
				req.body,
				{
					new: true,
				}
			);
			if (!updatedUser) {
				return Error(res, "User not found.");
			}
			return Success(res, "User updated successfully.", updatedUser);
		} catch (err) {
			return Error(res, "Error updating user.", err);
		}
	},

	deleteUser: async (req, res) => {
		try {
			const deletedUser = await User.findByIdAndDelete(req.params.id);
			if (!deletedUser) {
				return Error(res, "User not found.");
			}
			return Success(res, "User deleted successfully.", deletedUser);
		} catch (err) {
			return Error(res, "Error deleting user.", err);
		}
	},
};
