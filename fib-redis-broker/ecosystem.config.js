module.exports = {
    apps: [
        {
            name: 'express + redis broker + cache',
            script: 'fib-redis-broker/index.js',
            instances: 2,
            autorestart: true,
            exec_mode: 'cluster',
            watch: true,
            max_memory_restart: '1G',
        },
        {
            name: 'Subscriber 1',
            script: 'fib-redis-broker/subscribers/subscriber-1.js',
            instances: 1
        },
        {
            name: 'Subscriber 2',
            script: 'fib-redis-broker/subscribers/subscriber-2.js',
            instances: 1
        },
    ]
}