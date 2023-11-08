
const Business = require('../models/business.models.js');


module.exports.hello = (req, res) => {
    res.json({
        status: true,
        messages: 'Server is running',
    });
}


module.exports.getBusiness = (req, res) => { 
    Business.find().then((business) => {
        console.log('business', business);
        if (business) { 
            res.send({
                success: true,
                business
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