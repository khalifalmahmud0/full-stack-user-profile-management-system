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
	express.json({ limit: "1gb" }),
	express.urlencoded({ limit: "1gb", extended: true }), // Set the "extended" option to true
]);
// Route
app.use("/api/v1", require("./src/routes/api")).use("*", (req, res) => {
	new Error(res, 404, {});
});
module.exports = app;
