const { redisClient } = require('../redis');

function redisMW(req, res, next) {
    const client = redisClient;
    const path = req.url.replace('/', '');

    client.get(path, (err, reply) => {
        if (reply) {
            console.log(`${path} from redis!`);
            res.send(reply);
        } else {
            next();
        }
    });
}

module.exports = redisMW;