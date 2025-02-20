const dotenv = require('dotenv');
const path = require('path');

// Load environment variables from .env file
dotenv.config({ path: path.join(__dirname, '../../.env') });

const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  mongoUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/api-demo',
  jwtSecret: process.env.JWT_SECRET || 'your-secret-key',
  jwtExpirationInterval: process.env.JWT_EXPIRATION_MINUTES || 60,
  logs: process.env.NODE_ENV === 'production' ? 'combined' : 'dev',
  corsOrigin: process.env.CORS_ORIGIN || '*',
  database: {
    client: 'sqlite3',
    connection: {
      filename: process.env.DB_FILE || 'src/database/dev.sqlite3'
    },
    useNullAsDefault: true
  }
};

// Validate required environment variables
const requiredEnvVars = ['NODE_ENV'];
requiredEnvVars.forEach((envVar) => {
  if (!process.env[envVar]) {
    throw new Error(`Environment variable ${envVar} is required`);
  }
});

module.exports = config;
