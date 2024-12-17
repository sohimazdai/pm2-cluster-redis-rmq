const express = require("express");

const fabObj = require("./math-logic/fibonacci-series");

const app = express();

// http://localhost:3000?number=20
app.get("/", (request, response) => {
    console.log(`Worker Process Id - ${process.pid} has accepted the request! Number is ${request.query.number}`);
    let number = fabObj.calculateFibonacciValue(Number.parseInt(request.query.number));
    response.send(`<h1>${number}</h1>`);
});

app.listen(3000, () => console.log("Express App is running on PORT : 3000"));