module.exports = {
    apps: [{
        name: 'express rest api + redis',
        script: './redis-cache/index.js',
        instances: 'MAX',
        autorestart: true,
        exec_mode: 'cluster',
        watch: true,
        max_memory_restart: '1G',
        env: {
            NODE_ENV: 'development',
        },
        env_production: {
            NODE_ENV: 'production',
        },
    }]
}