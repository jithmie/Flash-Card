const bcrypt = require('bcrypt');
const User = require('../models/UserSchema');


const create = async (req) => {
    const {email, firstName, lastName, password} = req.body

    try {
        const existingUser = await User.findOne({email});

        /* if (existingUser) {
             res.send('User already exists. Please choose a different email.');
         }*/

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const user = new User({
            email,
            firstName,
            lastName,
            password: hashedPassword
        });

        return await user.save();
    } catch (error) {
        throw error;
    }
}

const login = async (email, password) => {
    try {
        const user = await User.findOne({email}).select('+password');

        /*if (!user) {
            return res.send("User not found");
        }*/

        const isPasswordMatch = await bcrypt.compare(password, user.password);

        /*if (!isPasswordMatch) {
            return res.send("Wrong password or username");
        }*/

        return user;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    create,
    login
}