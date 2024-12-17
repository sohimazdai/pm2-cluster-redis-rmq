const redis = require('redis');
const keys = require('../keys');

let redisClient = redis.createClient({ host: keys.host, port: keys.port });

module.exports = { redisClient };