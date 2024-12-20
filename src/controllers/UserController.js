const userService = require('../services/UserService');

const signup = async (req, resp, next) => {
    const user = await userService.create(req);

    if (user) {
        resp.redirect("/login");
    }
};

const login = async (req, resp, next) => {
    const {email, password} = req.body;

    const user = await userService.login(email, password);

    if (user) {
        resp.redirect("/dashboard");
    }
};

module.exports = {
    signup,
    login
}