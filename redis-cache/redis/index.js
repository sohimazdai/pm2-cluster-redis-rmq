const redis = require('redis');
const keys = require('../middlewares/keys');

let redisClient = redis.createClient({ host: keys.host, port: keys.port });

module.exports = { redisClient };