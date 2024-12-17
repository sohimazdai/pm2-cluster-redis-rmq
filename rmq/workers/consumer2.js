const rmq = require('amqplib/callback_api');

rmq.connect('amqp://localhost', (error, connection) => {
    console.log('Worker 2 - PID:', process.pid);
    if (error) process.exit();
    else {
        const queueName = 'FabSeries2';
        connection.createChannel((error, channel) => {
            if (error) {
                console.log(error);
                process.exit();
            } else {
                channel.assertQueue(queueName, { durable: false });
                channel.consume(queueName, (message) => {
                    console.log('Waiting for messages - PID:', process.pid);
                    console.log(queueName, ' - ', message.content.toString());
                }, { noAck: true });
            }
        })
    }
})