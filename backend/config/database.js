'use strict'

/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env')

/** @type {import('@adonisjs/ignitor/src/Helpers')} */

module.exports = {

  connection: Env.get('DB_CONNECTION', 'mssql'),

  mssql: {
    client: 'mssql',
    connection: {
      type: 'mssql',
      host: Env.get('DB_HOST', 'localhost'), 
      user: Env.get('DB_USER', 'root'), 
      password: Env.get('DB_PASSWORD', ''), 
      database: Env.get('DB_DATABASE', 'adonis'), 
      options: {
        encrypt: Env.get('DB_ENCRYPT', false) 
      }
    }
  }
}