const db = require('../database');


const Schema = db.Mongoose.Schema,
    ObjectId = Schema.ObjectId;


const UsersTable = db.Mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Este campo es requerido']
    },
    nickname: {
        type: String,
        required: false
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Este campo es requerido'],
        lowercase: true
    },
    password: {
        type: String,
        required: [true, 'Este campo es requerido']
    },
    organization: {
        type: String,
        required: false
    },

});


const Users = db.Mongoose.model('users', UsersTable);

module.exports = Users;