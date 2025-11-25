const crypto = require("crypto");

const generateApiToken = () => {
    return crypto.randomBytes(32).toString("hex");
};

console.log(generateApiToken());