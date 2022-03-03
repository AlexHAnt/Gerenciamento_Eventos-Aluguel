'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PaymentsSchema extends Schema {
  up() {
    this.create('PAYMENTS', (table) => {
      table.increments()
      table.string('PARCEL', 10)
      table.integer('SERVICE').references('id').inTable('services')
      table.float('VALUE')
      table.string('PAID_DATE', 10)
      table.string('EXPIRATION', 10)
      table.string('PAYMENT_METHOD', 50)
      table.timestamps()
    })
  }

  down() {
    this.drop('PAYMENTS')
  }
}

module.exports = PaymentsSchema
