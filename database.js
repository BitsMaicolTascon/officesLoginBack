const mongoose = require('mongoose');
const db = {
    Mongoose: mongoose,
    mongoose: mongoose.connect('mongodb://' + process.env.MONGODBHOST + '/' + process.env.MONGODBNAME, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }),
    //  useCreateIndex: mongoose.set('useCreateIndex', true)
};
module.exports = db;