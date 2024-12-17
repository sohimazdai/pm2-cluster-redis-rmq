const express = require("express");
const cluster = require("cluster");
const totalCPUs = require('os').cpus().length;

const fabObj = require("./math-logic/fibonacci-series");

console.log(cluster.isMaster);
if (cluster.isMaster) {

    console.log(`Total Number of CPU Counts is ${totalCPUs}`);

    for (var i = 0; i < totalCPUs / 3; i++) {
        cluster.fork();
    }
    cluster.on("online", worker => {
        console.log(`Worker Id is ${worker.id} and PID is ${worker.process.pid}`);
    });
    cluster.on("exit", worker => {
        console.log(`Worker Id ${worker.id} and PID is ${worker.process.pid} is offline`);
        console.log("Let's fork new worker!");
        cluster.fork();
    });
}
else {
    const app = express();
    app.get("/", (request, response) => {
        console.log(`Worker Process Id - ${cluster.worker.process.pid} has accepted the request! Number is ${request.query.number}`);
        let number = fabObj.calculateFibonacciValue(Number.parseInt(request.query.number));
        response.send(`<h1>${number}</h1>`);
    });

    app.listen(3000, () => console.log("Express App is running on PORT : 3000"));
}