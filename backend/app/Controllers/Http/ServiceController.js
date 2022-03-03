'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Service = use("App/Models/Service");

class ServiceController {
  async index() {
    // const x = await Service.query().with("defects").with("equipmentCategories").with("responsibles").fetch()
    const data = await Service.all()
    return data
  }


  async lastData() {
    const y = await Service.last()
    return y
  }

  async show({ params }) {
    // const data = await Service.query().with("defects").with("equipmentCategories").with("responsibles").where('id', params.id).first()
    const data = await Service.find(params.id)
    return data
  }

  async store({ request }) {
    const data = request.only(["NAME", "DESCRIPTION", "OBS", "PLAN", "PRICE", "DISCOUNT", "DATE", "LOCALE"])
    const x = await Service.create(data)
    return x
  }


  async update({ params, request }) {
    const x = await Service.findOrFail(params.id);
    const data = request.only(["NAME", "DESCRIPTION", "OBS", "PLAN", "PRICE", "DISCOUNT", "DATE", "LOCALE"]);
    x.merge(data);
    await x.save();

    return x
  }

  async destroy({ params }) {
    const data = await Service.findOrFail(params.id);
    await data.delete();
  }
}

module.exports = ServiceController
