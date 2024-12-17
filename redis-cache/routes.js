const express = require('express');

const redisMW = require('./middlewares/redis-mw');

const usersApi = require('./jsonplaceholders/users');
const postsApi = require('./jsonplaceholders/posts');
const commentsApi = require('./jsonplaceholders/comments');
const { redisClient } = require('./redis');

const routes = express.Router();

routes.use(redisMW);

routes.get('/posts', (request, response, next) => {
    console.log('Route is posts');

    postsApi.fetch().then(
        data => data.json(),
    ).then(
        data => {
            console.log('Data fetched. PID is ', process.pid);
            redisClient.set("posts", JSON.stringify(data));
            response.send(data).end();
            return;
        },
    )
});

routes.get('/users', (request, response, next) => {
    console.log('Route is users');

    usersApi.fetch().then(
        data => data.json(),
    ).then(
        data => {
            console.log('Data fetched. PID is ', process.pid);
            redisClient.set("users", JSON.stringify(data));
            response.send(data).end();
            return;
        },
    )
});

routes.get('/comments', (request, response, next) => {
    console.log('Route is comments');

    commentsApi.fetch().then(
        data => data.json(),
    ).then(
        data => {
            console.log('Data fetched. PID is ', process.pid);
            redisClient.set("comments", JSON.stringify(data));
            response.send(data).end();
            return;
        },
    )
});

module.exports = routes;
