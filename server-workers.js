const express = require("express");
const cluster = require("cluster");
const totalCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    console.log(`Master process PID is ${process.pid}`);

    const worker1 = require('child_process').fork('./workers/fab-series-worker-1');
    const worker2 = require('child_process').fork('./workers/fab-series-worker-2');

    console.log(`Child process PID is ${worker1.pid}`);
    console.log(`Child process PID is ${worker2.pid}`);

    worker1.on('message', (num) => { console.log(`Fab from Child Process - 1 is ${num}`); });
    worker2.on('message', (num) => { console.log(`Fab from Child Process - 2 is ${num}`); });

    cluster.on("online", worker => {
        console.log(`Message received from - ${worker.process.pid}`);
        worker.on('message', num => {
            if (num % 2 === 0) {
                worker1.send(num);
            } else {
                worker2.send(num);
            }
        });
    });

    for (let i = 0; i < 2; i++) {
        let worker = cluster.fork();
        console.log(`Worker started on PID ${worker.process.pid}`);
    }

    console.log(`Total number of CPU is ${totalCPUs}`);
} else {
    const app = express();
    app.get("/", (request, response) => {
        process.send(request.query.number);
        console.log(`Process with Id - ${process.pid} received the request! Number is ${request.query.number}`);
        response.send(`<h3>The request has been received</h3>`);
    });

    app.listen(3000, () => console.log("Express App is running on PORT : 3000"));
}