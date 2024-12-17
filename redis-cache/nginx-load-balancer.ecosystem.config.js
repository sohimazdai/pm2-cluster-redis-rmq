module.exports = {
    apps: [{
        name: 'Express Redis Cache - 1',
        script: './redis-cache/index.js',
        instances: 1,
        args: 'Express Redis Cache - 1',
        autorestart: true,
        watch: true,
        max_memory_restart: '1G',
        env: {
            NODE_ENV: 'development',
            PORT: 3000,
        },
    }, {
        name: 'Express Redis Cache - 2',
        script: './redis-cache/index.js',
        instances: 1,
        args: 'Express Redis Cache - 2',
        autorestart: true,
        watch: true,
        max_memory_restart: '1G',
        env: {
            NODE_ENV: 'development',
            PORT: 3000,
        },
    }]
}