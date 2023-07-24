// Importing the Mongoose package from "../helpers/packages"
const { mongoose } = require("../helpers/packages");

// Define the Mongoose schema for the "User" model
const schema = mongoose.Schema(
	{
		// User name field with a String type, required to be present
		name: {
			type: String,
			required: true,
		},
		// User email field with a String type, required and must be unique
		email: {
			type: String,
			required: true,
			unique: true,
		},
		// User gender field with a String type, required with a default value "male"
		gender: {
			type: String,
			required: true,
			default: "male",
		},
		// User phone field with a String type
		phone: {
			type: String,
		},
		// User date of birth field with a Date type
		dateOfBirth: {
			type: Date,
		},
		// User biography field with a String type
		biography: {
			type: String,
		},
		// User address field with a String type
		address: {
			type: String,
		},
		// User profile picture field with a String type
		profilePicture: {
			type: String,
		},
	},
	// Additional options for the schema
	{
		// Enable timestamps for the "createdAt" and "updatedAt" fields
		timestamps: true,

		// Disable the "__v" field, which tracks the document version by default
		versionKey: false,
	}
);

// Create and export the "User" model based on the defined schema
module.exports = mongoose.model("User", schema);
