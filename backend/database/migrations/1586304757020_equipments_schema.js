'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EquipmentsSchema extends Schema {
  up() {
    this.create('EQUIPMENTS', (table) => {
      table.increments()
      table.string('NAME', 50).notNull()
      table.string('DESCRIPTION', 500)
      table.float('PRICE', 10)
      table.boolean('AVAILABLE')
      table.timestamps()
    })
  }

  down() {
    this.drop('EQUIPMENTS')
  }
}

module.exports = EquipmentsSchema
