const Flash = require('../models/FlashSchema');

const findAll = async () => {
    try {
        return await Flash.find();
    } catch (error) {
        throw error;
    }
}

const create = async (req) => {
    try {
        const {question, answer} = req.body;

        const flash = new Flash({
            question,
            answer
        });

        return await flash.save();
    } catch (error) {
        throw error;
    }
}

const findById = async (req) => {
    try {
        const {id} = req.params;

        return await Flash.findById(id);
    } catch (error) {
        throw error;
    }
}

const update = async (req) => {
    try {
        const {id} = req.params;
        const {question, answer} = req.body;

        const flash = await Flash.findById(id);
        /*if (!flash) {
            throw new NotFoundError("Book not found. Try again!");
        }*/

        return await Flash.findByIdAndUpdate(id, {question, answer});
    } catch (error) {
        throw error;
    }
}

const deleteFlash = async (req) => {
    try {
        const {id} = req.params;

        return await Flash.findByIdAndDelete(id);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    findAll,
    create,
    findById,
    update,
    deleteFlash
}