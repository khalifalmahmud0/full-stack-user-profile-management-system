const { mongoose } = require("./src/helpers/packages"),
	app = require("./app");
mongoose.set("strictQuery", false);
let port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server running on port ${port}`));
