const { encrypt } = require('../helpers/encrypt.js');
const jwt = require('jsonwebtoken');
const User = require('../models/users.models.js');


module.exports.hello = (req, res) => {
    res.json({
        status: true,
        messages: 'Server is running',
    });
}


module.exports.login = (req, res) => {
    const pass = encrypt(process.env.SECRET, req.body.password);
    User.find({ email: req.body.email, password: pass }).then((user) => {
        if (user[0]) {
            let token = jwt.sign({
                user: user
            }, process.env.SEED, { expiresIn: process.env.CADUCIDAD_TOKEN });
            res.send({
                success: true,
                message: 'login in app',
                token,
            });
        } else {
            res.send({
                success: false,
                message: 'Correo electronico o contraseña incorrecta'
            });
        }
    }).catch((err) => {
        if (err) {
            console.log(err);
            res.json({
                success: false,
                message: 'Internal server Error',
                err
            });
        } 
    });

}