const flashService = require('../services/FlashService');

// const findAll = async (req, resp, next) => {
//     const flashes = await flashService.findAll();
// };

const create = async (req, resp, next) => {
    const flash = await flashService.create(req);

    if (flash) {
        resp.redirect("/dashboard");
    }
};

// const findById = async (req, resp, next) => {
//     const flash = await flashService.findById(req);
// };

const update = async (req, resp, next) => {
    await flashService.update(req);
    resp.redirect("/dashboard");
};

const deleteFlash = async (req, resp, next) => {
    await flashService.deleteFlash(req);
    resp.redirect("/dashboard");
};

module.exports = {
    // findAll,
    create,
    // findById,
    update,
    deleteFlash
}