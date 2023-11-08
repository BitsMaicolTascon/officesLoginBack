const jwt = require('jsonwebtoken');

let verifyToken = (req, res, next) => {
    let token = req.get('token');
    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            logger.info(err);
            return res.json({
                ok: false,
                message: 'Token no válido'
            });
        }
        req.user = decoded.user;
        next();
    });
};

module.exports = {
    verifyToken,
};