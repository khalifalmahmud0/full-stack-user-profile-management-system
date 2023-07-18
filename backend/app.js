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

const app = express();
dotenv.config();

app.use([
	// Security Middleware
	cors(),
	helmet(),
	expressMongoSanitize(),
	xssClean(),
	hpp(),
	expressRateLimit({
		windowMs: process.env.RATE_LIMIT_WINDOW_MS,
		max: process.env.RATE_LIMIT_MAX_REQUEST_PER_WINDOW_MS,
	}),
	// Others
	express.json({ limit: "500mb" }),
	express.urlencoded({ limit: "500mb", extended: true }), // Set the "extended" option to true
]);

// Route
module.exports = app;
