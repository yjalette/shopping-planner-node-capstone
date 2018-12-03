exports.DATABASE_URL = process.env.DATABASE_URL || global.DATABASE_URL || 'mongodb://admin:admin@ds249707.mlab.com:49707/shopping-planner-node-capstone';
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb://admin:admin@ds249707.mlab.com:49707/shopping-planner-node-capstone';
exports.PORT = process.env.PORT || 8080;

module.exports = {
    mongoURI: "mongodb://admin:admin123@ds151282.mlab.com:51282/hobo-planer",
    secretOrKey: "secret",
    mailKey:
    "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",
    googleKey:
    "199987557104-tcjk9jjsg9i7bbu1ke2r68gpdf0ckvnp.apps.googleusercontent.com",
    googleSecret: "TV0pvR-Qp_GK6KJcZLZFbX9Q",
    googleCallback: "http://localhost:8080/auth/google/callback",
    facebookKey: "371985306679434",
    facebookSecret: "505b1efc7b029e51092939033ea055d6",
    facebookCallback: "http://localhost:8080/auth/facebook/callback"
};
