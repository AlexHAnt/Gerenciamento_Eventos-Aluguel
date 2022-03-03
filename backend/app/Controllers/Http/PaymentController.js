'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */


const Payment = use("App/Models/Payment")


class PaymentController {
  async index() {
    const data = await Payment.all()
    return data
  }

  async show({ params }) {
    const data = await Payment.find(params.id)
    return data
  }

  async store({ request }) {
    const data = request.only(["PARCEL", "SERVICE", "VALUE", "PAID_DATE", "EXPIRATION", "PAYMENT_METHOD"])
    const x = await Payment.create(data)
    return x
  }


  async update({ params, request }) {
    const x = await Payment.findOrFail(params.id);
    const data = request.only(["PARCEL", "SERVICE", "VALUE", "PAID_DATE", "EXPIRATION", "PAYMENT_METHOD"])
    x.merge(data);
    await x.save();
    return x
  }

  async destroy({ params }) {
    const data = await Payment.findOrFail(params.id);
    await data.delete();
  }
}

module.exports = PaymentController
