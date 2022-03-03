'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PlansSchema extends Schema {
  up () {
    this.create('PLANS', (table) => {
      table.increments()
      table.string('NAME', 50).notNull()
      table.string('DESCRIPTION', 500)
      table.string('EQUIPMENTS', 4000)
      table.float('PRICE', 10)
      table.timestamps()
    })
  }

  down () {
    this.drop('PLANS')
  }
}

module.exports = PlansSchema
