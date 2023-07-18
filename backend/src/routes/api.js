const { express } = require("../helpers/packages");
const router = express.Router();
const {
	createUser,
	allUsers,
	singleUser,
	updateUser,
	deleteUser,
} = require("../controllers/User");

router.post("/create-user", createUser);
router.get("/users", allUsers);
router.get("/single-user/:id", singleUser);
router.put("/update-user/:id", updateUser);
router.delete("/delete-user/:id", deleteUser);

module.exports = router;
