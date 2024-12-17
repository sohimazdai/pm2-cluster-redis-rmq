const fibonacciSeries = require("../../math-logic/fibonacci-series");
const { redisClient } = require("../redis");

console.log('Subscriber - 1');
const subscriber = redisClient.duplicate();
const cache = redisClient.duplicate();
subscriber.subscribe('math-1');

subscriber.on('message', (channel, message) => {
    console.log('channel is', channel, 'math-1');
    console.log('message is', message);

    const value = fibonacciSeries.calculateFibonacciValue(Number.parseInt(message));
    console.log('fib value is ', value);
    cache.set(message, value);
});