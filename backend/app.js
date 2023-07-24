// Importing required packages
const {
	dotenv,
	express,
	cors,
	helmet,
	expressMongoSanitize,
	xssClean,
	hpp,
	expressRateLimit,
} = require("./src/helpers/packages");

// Create an Express application
const app = express();

// Load environment variables from a .env file (if available)
dotenv.config();

// Middleware setup for security and other purposes
app.use([
	cors(), // Enable Cross-Origin Resource Sharing (CORS)
	helmet(), // Set various HTTP headers to improve security
	expressMongoSanitize(), // Sanitize user input to prevent MongoDB injection attacks
	xssClean(), // Sanitize user input to prevent Cross-Site Scripting (XSS) attacks
	hpp(), // Prevent HTTP Parameter Pollution attacks
	expressRateLimit({
		// Rate limit middleware to limit the number of requests from a client within a specified window
		windowMs: process.env.RATE_LIMIT_WINDOW_MS,
		max: process.env.RATE_LIMIT_MAX_REQUEST_PER_WINDOW_MS,
	}),
	express.json({ limit: "1gb" }), // Parse JSON request bodies and set the size limit to 1GB
	express.urlencoded({ limit: "1gb", extended: true }), // Parse URL-encoded request bodies and set the size limit to 1GB. Set the "extended" option to true.
]);

app
	.use("/api/v1", require("./src/routes/api"))
	// If no route matches, handle the request with a 404 response
	.use("*", (req, res) => {
		new Error(res, 404, {});
	});

// Export the Express application to be used elsewhere
module.exports = app;
