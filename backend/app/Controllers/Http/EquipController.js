'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Equipments = use("App/Models/Equip");
const fs = require('fs')


class EquipController {

  async index() {
    const data = await Equipments.all()
    return data
  }


  async getImg({ request }) {
    var img1Base64 = await fs.readFileSync(`C:/Users/a_hen/Documents/Apolo Som/Equipamentos/${request.body.plan}/1.jpg`, "base64", (err, data) => {
      return data
    }
    )
    var img2Base64 = await fs.readFileSync(`C:/Users/a_hen/Documents/Apolo Som/Equipamentos/${request.body.plan}/2.jpg`, "base64", (err, data) => {
      return data
    }
    )
    return [img1Base64, img2Base64]
  }


  async show({ params }) {
    const data = await Equipments.find(params.id)
    return data
  }


  async store({ request }) {
    const data = request.only(["NAME", "DESCRIPTION", "PRICE"])
    const x = await Equipments.create(data)
    return x
  }


  async update({ params, request }) {
    const x = await Equipments.findOrFail(params.id);
    const data = request.only(["NAME", "DESCRIPTION", "PRICE"]);
    x.merge(data);
    await x.save();

    return x
  }


  async destroy({ params }) {
    const data = await Equipments.findOrFail(params.id);
    await data.delete();
  }
}

module.exports = EquipController
