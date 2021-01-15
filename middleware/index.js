const jwtFunctions = require("./jwtFunctions");
const validateFunctions = require("./validateFunctions");

module.exports = {
    validateFunctions: jwtFunctions,
    jwtFunctions: validateFunctions
};
//TODO czy to jest wgl potrzebne?