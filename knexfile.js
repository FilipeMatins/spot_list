require('dotenv').config()

const databaseConfig = require('./SRC/config/database')

module.exports = {
  local: databaseConfig.local,
  staging: databaseConfig.staging,
  production: databaseConfig.production,
}
