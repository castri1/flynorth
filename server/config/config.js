const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    root: rootPath,
    port: process.env.PORT || 3001,
    secret: process.env.SECRET_TOKEN || 'ctr1123',
    db: {
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'ctr1_flynorth'
    }
  },
  production: {
    root: rootPath,
    port: process.env.PORT || 3001,
    secret: process.env.SECRET_TOKEN || 'ctr1123',
    db: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE
  }
  }
};

module.exports = config[env];