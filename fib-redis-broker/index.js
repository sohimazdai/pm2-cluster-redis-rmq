const express = require('express');
const { redisClient } = require('./redis');

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
    console.log('Process PID is ', process.pid);

    const number = req.query.number;

    redisClient.get(number, (error, reply) => {
        if (reply) {
            console.log('from redis', number, ' -> ', reply);
            res.send(reply);
        } else {
            console.log('has no redis value', number);

            try {
                if (number % 2 === 0) {
                    redisClient.publish('math-1', number);
                } else {
                    redisClient.publish('math-2', number);
                }

                res.send('<h1>Wait an email please!</h1>');
            } catch (e) {
                res.send(e);
            }
        }
    })
});

app.listen(PORT, () => console.log('App started at PORT ', PORT));