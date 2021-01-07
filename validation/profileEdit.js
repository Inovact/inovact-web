const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateProfileEditInput(data) {
    let errors = {};
// Convert empty fields to an empty string so we can use validator functions
    data.firstname = !isEmpty(data.firstname) ? data.firstname : "";
    data.lastname = !isEmpty(data.lastname) ? data.lastname : "";
// firstname checks
    if (Validator.isEmpty(data.firstname)) {
        errors.firstname = "firstname field is required";
    }
// firstname checks
    if (Validator.isEmpty(data.lastname)) {
        errors.lastname = "lastname field is required";
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };
};