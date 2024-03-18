module.exports = {
    apps: [
      {
        name: 'UAT',
        script: 'dist/src/main.js',
  
        // Configure the number of PM2 instances based on the server's CPU cores
        instances: 1,
        exec_mode: 'cluster', // Use cluster mode for better CPU utilization
  
        // Set an appropriate memory threshold for automatic restart
        max_memory_restart: '500M',
  
        // Enable monitoring and logging
        watch: false,
        log_date_format: 'YYYY-MM-DD HH:mm:ss',
        merge_logs: true,
        error_file: 'logs/pm2-error.log',
        out_file: 'logs/pm2-out.log',
        pid_file: 'logs/pm2.pid',
  
        // Set maximum restart attempts within a specific time frame
        max_restarts: 10,
        restart_delay: 3000,
  
        // Enable automatic restart when the application crashes
        autorestart: true,
  
        env: {
          TZ: 'Asia/Yangon',
          PORT: 8000,
          DB_DATABASE_URL:"postgresql://postgres:postgres@localhost:5432/lotaya?schema=lotayaschema"
        },
      },
    ],
  };