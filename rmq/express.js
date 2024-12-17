const express = require("express");

const { fabQueue1 } = require("./queues/producer1");
const { fabQueue2 } = require("./queues/producer2");

const app = express();

// http://localhost:3000?number=20
app.get("/", (request, response) => {
    const num = request.query.number;

    if (num % 2 === 0) {
        fabQueue1(num);
    } else {
        fabQueue2(num);
    }

    response.send('<h1>OK. Wait please!</h1>');
});

app.listen(3000, () => console.log("Express App is running on PORT : 3000"));