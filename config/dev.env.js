'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_ROOT: '"http://202.121.178.254:801/api"',
  SERVICE_ROOT: '"http://localhost:8082/service"',
  SEARCH_ROOT: '"http://localhost:3000/email"'
})
