const db = require('../database');


const Schema = db.Mongoose.Schema,
    ObjectId = Schema.ObjectId;


const BusinnesTable = db.Mongoose.Schema({
    code: {
        type: String,
        required: [true, 'Este campo es requerido']
    },
    description: {
        type: String,
        required: false
    },
    address: {
        type: String,
        required: [true, 'Este campo es requerido'],
    },
    indentification: {
        type: String,
        required: [true, 'Este campo es requerido']
    },
    currency: {
        type: String,
        required: false
    },

});


const Businnes = db.Mongoose.model('business', BusinnesTable);

module.exports = Businnes;