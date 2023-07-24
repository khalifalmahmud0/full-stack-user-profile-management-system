// Importing required packages
const { express } = require("../helpers/packages");

// Create an Express router
const router = express.Router();

// Importing user controller functions
const {
	createUser,
	allUsers,
	singleUser,
	updateUser,
	deleteUser,
} = require("../controllers/User");

// Define routes and associate them with corresponding controller functions

// Route for creating a new user using HTTP POST method
router.post("/create-user", createUser);

// Route for fetching all users using HTTP GET method
router.get("/users", allUsers);

// Route for fetching a single user by their ID using HTTP GET method
router.get("/single-user/:id", singleUser);

// Route for updating a user by their ID using HTTP PUT method
router.put("/update-user/:id", updateUser);

// Route for deleting a user by their ID using HTTP DELETE method
router.delete("/delete-user/:id", deleteUser);

// Export the router to be used in other parts of the application
module.exports = router;
