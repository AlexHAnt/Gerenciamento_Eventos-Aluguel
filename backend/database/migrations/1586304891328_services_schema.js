'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ServicesSchema extends Schema {
  up() {
    this.create('SERVICES', (table) => {
      table.increments()
      table.string('NAME', 50).notNull()
      table.string('DESCRIPTION', 500)
      table.string('OBS', 500)
      table.integer('PLAN').references('id').inTable('plans')
      table.float('PRICE', 10)
      table.float('DISCOUNT', 10)
      table.string('DATE', 10)
      table.string('LOCALE', 50)
      table.timestamps()
    })
  }

  down() {
    this.drop('SERVICES')
  }
}

module.exports = ServicesSchema
