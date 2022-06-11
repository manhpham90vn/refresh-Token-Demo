const jwt = require('jsonwebtoken');
const config = require('../config');

module.exports = (req, res, next) => {
    const authorization = req.headers.authorization
    const [ type, token ] = authorization.split(' ');
    if (type === "Bearer") {
        if (token) {
            jwt.verify(token, config.secret, function(error, decoded) {
                if (error) {
                    return res.status(401).json({"status": "error", "message": "Unauthorized access"})
                }
                req.decoded = decoded;
                next();
            })
        } else {
            return res.status(403).json({"status": "error", "message": "No Token provided"});
        }
    } else {
        return res.status(403).json({"status": "error", "message": "Token must is Bearer"});
    }
}