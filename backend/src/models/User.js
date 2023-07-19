const { mongoose } = require("../helpers/packages");
const schema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		gender: {
			type: String,
			required: true,
			default: "male",
		},
		phone: {
			type: String,
		},
		dateOfBirth: {
			type: Date,
		},
		biography: {
			type: String,
		},
		address: {
			type: String,
		},
		profilePicture: {
			type: String,
		},
	},
	{ timestamps: true, versionKey: false }
);

module.exports = mongoose.model("User", schema);
