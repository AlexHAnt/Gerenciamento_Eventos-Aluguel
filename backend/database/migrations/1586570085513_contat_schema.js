'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ContatSchema extends Schema {
  up () {
    this.create('CONTATS', (table) => {
      table.increments()
      table.string('NAME', 50).notNull()
      table.string('DESCRIPTION', 500)
      table.string('NUMBER1', 15)
      table.string('NUMBER2', 15)
      table.string('EMAIL', 100)
      table.string('ADDRESS', 50)
      table.string('CITY', 50)
      table.string('UF', 2)
      table.string('COUNTRY', 50 )
      table.string('CEP', 10)
      table.string('COMPLEMENT', 20)
      table.timestamps()
    })
  }

  down () {
    this.drop('CONTATS')
  }
}

module.exports = ContatSchema
