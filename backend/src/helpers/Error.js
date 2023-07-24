// Importing the "knowYourHttpWell" package from "./packages"
const { knowYourHttpWell } = require("./packages");

// Extracting the "statusCodesToPhrases" object from "knowYourHttpWell" package and assigning it to "phraseWell"
const phraseWell = knowYourHttpWell.statusCodesToPhrases;

// Define a custom "Error" class
class Error {
	// Constructor method for the "Error" class
	constructor(res, statuscode, err) {
		// When an instance of the class is created, immediately call the "errorHandler" method
		this.errorHandler(res, statuscode, err);
	}

	// "errorHandler" method to handle error responses
	errorHandler = (res, statuscode, err) => {
		// Set the HTTP status code of the response using "statuscode"
		// Send a JSON response with the status code, corresponding phrase, and error message
		res.status(statuscode).json({
			status: {
				code: statuscode,
				phrase: phraseWell[statuscode], // Retrieve the corresponding phrase for the status code
			},
			result: { error: err }, // Include the error message in the response
		});
	};
}

// Export the "Error" class to be used in other parts of the application
module.exports = Error;
