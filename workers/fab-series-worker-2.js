const fabObj = require('../math-logic/fibonacci-series');

process.on('message', (number) => {
    const fab = fabObj.calculateFibonacciValue(number);
    console.log(`Worker 2 PID is ${process.pid}`)
    process.send(fab);
})