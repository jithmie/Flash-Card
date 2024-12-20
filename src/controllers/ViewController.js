const flashService = require('../services/FlashService');

const index = (req, resp, next) => {
    resp.redirect("signup");
};

const login = (req, resp, next) => {
    resp.render("login");
};

const signup = (req, resp, next) => {
    resp.render("signup");
};

const dashboard = async (req, resp, next) => {
    const flashes = await flashService.findAll();
    resp.render("dashboard", {flashes});
};

const update = async (req, resp, next) => {
    const flash = await flashService.findById(req);

    if (flash) {
        resp.render("update", {flash});
    }
};

module.exports = {
    index,
    login,
    signup,
    dashboard,
    update
}