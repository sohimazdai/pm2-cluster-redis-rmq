module.exports = {
  apps: [{
    name: 'Express App',
    script: 'server.js',
    watch: '.',
    instances: 'MAX',
    autorestart: true,
    max_memory_restart: '1G',
    exec_mode: 'cluster',
  }]
};
