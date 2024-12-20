const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//----------------------- Routes import
const viewRoute = require('./src/routes/ViewRoute');
const userRoute = require('./src/routes/UserRoute');
const flashRoute = require('./src/routes/FlashRoute');
//-----------------------

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

app.set('view engine', 'ejs');

mongoose.connect('mongodb://0.0.0.0:27017/my_flash').then(() => {
    console.log('Connected to MongoDB');
})

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`server started & running on port ${PORT}`);
});

//----------------------- Routes
app.use('', viewRoute);
app.use('/users', userRoute);
app.use('/flashes', flashRoute);

/*app.all('*', (req, res, next) => {
    const err = new NotFoundError(`Can not find ${req.originalUrl} on the server`);
    next(err);
});*/
//-----------------------