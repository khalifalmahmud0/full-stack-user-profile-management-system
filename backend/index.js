// Importing required packages
const { mongoose } = require("./src/helpers/packages");
const app = require("./app");

// Disable strict query mode in Mongoose (optional)
mongoose.set("strictQuery", false);

// Define the port for the server to listen on
let port = process.env.PORT || 8080;

// An async function to connect to the MongoDB database and start the server
(async () => {
	try {
		// Connecting to the MongoDB database with provided options
		await mongoose.connect(process.env.MONGODB_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		// If the database connection is successful, log a success message
		console.log("DB Connection Success!!");

		// Start the server and make it listen on the specified port
		app.listen(port, () => console.log(`Server running on port ${port}`));
	} catch (error) {
		// If there's an error during the connection or server setup, log the error
		console.error(error);

		// Exit the process with a non-zero status code to indicate an error
		process.exit(1);
	}
})();
