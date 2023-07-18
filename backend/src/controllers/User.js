const User = require("../models/User");
const Success = require("../helpers/Success");
const Error = require("../helpers/Error");

module.exports = {
	createUser: async (req, res) => {
		try {
			const newUser = await User.create(req.body);
			return new Success(res, 200, newUser);
		} catch (err) {
			return new Error(res, 400, err);
		}
	},

	allUsers: async (req, res) => {
		try {
			const users = await User.find();
			return new Success(res, 200, users);
		} catch (err) {
			return new Error(res, 400, err);
		}
	},

	singleUser: async (req, res) => {
		try {
			const user = await User.findById(req.params.id);
			if (!user) {
				return new Error(res, 400);
			}
			return new Success(res, 200, user);
		} catch (err) {
			return new Error(res, 400, err);
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
				return new Error(res, 400);
			}
			return new Success(res, 200, updatedUser);
		} catch (err) {
			return new Error(res, 400, err);
		}
	},

	deleteUser: async (req, res) => {
		try {
			const deletedUser = await User.findByIdAndDelete(req.params.id);
			if (!deletedUser) {
				return new Error(res, 400);
			}
			return new Success(res, 200, deletedUser);
		} catch (err) {
			return new Error(res, 400, err);
		}
	},
};
