// Importing the "knowYourHttpWell" package from "./packages"
const { knowYourHttpWell } = require("./packages");

// Extracting the "statusCodesToPhrases" object from "knowYourHttpWell" package and assigning it to "phraseWell"
const phraseWell = knowYourHttpWell.statusCodesToPhrases;

// Define a custom "Success" class
class Success {
	// Constructor method for the "Success" class
	constructor(res, statuscode, data) {
		// When an instance of the class is created, immediately call the "errorHandler" method
		this.errorHandler(res, statuscode, data);
	}

	// "errorHandler" method to handle success responses
	errorHandler = (res, statuscode, data) => {
		// Set the HTTP status code of the response using "statuscode"
		// Send a JSON response with the status code, corresponding phrase, and success data
		res.status(statuscode).json({
			status: {
				code: statuscode,
				phrase: phraseWell[statuscode], // Retrieve the corresponding phrase for the status code
			},
			result: { success: data }, // Include the success data in the response
		});
	};
}

// Export the "Success" class to be used in other parts of the application
module.exports = Success;
