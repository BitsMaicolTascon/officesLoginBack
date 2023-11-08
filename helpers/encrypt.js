const crypto = require('crypto');
module.exports.encrypt = function(secret, wordKey) {
    const wordkey = wordKey;
    const hmac = crypto.createHmac('sha256', secret).update(wordkey).digest('hex');
    return hmac;
};