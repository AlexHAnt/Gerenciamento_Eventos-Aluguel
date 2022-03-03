'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Contats = use("App/Models/Contat")

class ContatController {
  async index() {
    const data = await Contats.all()
    return data
  }

  async show({ params }) {
    const data = await Contats.find(params.id)
    return data
  }

  async store({ request }) {
    const data = request.only(["NAME", "DESCRIPTION", "NUMBER1", "NUMBER2", "EMAIL", "ADDRESS", "CITY", "UF", "COUNTRY", "CEP", "COMPLEMENT"])
    const x = await Contats.create(data)
    return x
  }


  async update({ params, request }) {
    const x = await Contats.findOrFail(params.id);
    const data = request.only(["NAME", "DESCRIPTION", "NUMBER1", "NUMBER2", "EMAIL", "ADDRESS", "CITY", "UF", "COUNTRY", "CEP", "COMPLEMENT"]);
    x.merge(data);
    await x.save();
    return x
  }

  async destroy({ params }) {
    const data = await Contats.findOrFail(params.id);
    await data.delete();
  }
}

module.exports = ContatController
