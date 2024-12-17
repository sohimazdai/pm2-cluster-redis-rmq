const rmq = require('amqplib/callback_api');
const fibonacciSeries = require('../../math-logic/fibonacci-series');

function fabQueue2(num) {
    console.log('Queue 2: ', num);

    rmq.connect('amqp://localhost', (error, connection) => {
        if (error) process.exit();
        else {
            const queueName = 'FabSeries2';

            connection.createChannel((error, channel) => {
                if (error) {
                    console.log('Error in - ', queueName, error);
                    process.exit();
                } else {
                    const fabNum = fibonacciSeries.calculateFibonacciValue(num);
                    channel.assertQueue(queueName, { durable: false });
                    channel.sendToQueue(queueName, Buffer.from(fabNum.toString()));
                    console.log('Queue name is - ', queueName);
                }
            })
        }
    })
}

module.exports = { fabQueue2 };