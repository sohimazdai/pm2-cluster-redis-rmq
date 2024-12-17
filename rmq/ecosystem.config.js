module.exports = {
    apps: [
        {
            name: 'Express App',
            script: 'rmq/express.js',
            watch: '.',
            instances: 2,
            autorestart: true,
            max_memory_restart: '1G',
            exec_mode: 'cluster',
        },
        {
            name: 'Worker1',
            script: 'rmq/workers/consumer1.js',
            instances: 1,
        },
        {
            name: 'Worker2',
            script: 'rmq/workers/consumer2.js',
            instances: 1,
        },
    ]
};
