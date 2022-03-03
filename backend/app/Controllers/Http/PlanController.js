'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Plans = use("App/Models/Plan");
const fs = require('fs');

class PlanController {

  async index() {
    const data = await Plans.all()
    return data
  }

  // async getImg({ params }) {
  //   var imgBase64 = await fs.readFileSync(`C:/Users/a_hen/Desktop/youtube-html-js-audio-player-master/base/files/junior-pleno-ou-senior-qual-a-diferenca.MP3`, (err, data) => {
  //     return data
  //   }
  //   )
  //   // var imgBase64 =  new Audio(`file:///C:/Users/a_hen/Desktop/youtube-html-js-audio-player-master/base/files/junior-pleno-ou-senior-qual-a-diferenca.MP3`)
  //   console.log(imgBase64)
  //   return imgBase64
  // }

  async getImg({ params }) {
    var img1Base64 = await fs.readFileSync(`C:/Users/a_hen/Documents/ALEX/Apolo Som/Planos/${params.plan}/1.png`, "base64", (err, data) => {
      return data
    }
    )
    var img2Base64 = await fs.readFileSync(`C:/Users/a_hen/Documents/ALEX/Apolo Som/Planos/${params.plan}/2.png`, "base64", (err, data) => {
      return data
    }
    )
    var img3Base64 = await fs.readFileSync(`C:/Users/a_hen/Documents/ALEX/Apolo Som/Planos/${params.plan}/3.png`, "base64", (err, data) => {
      return data
    }
    )
    var img4Base64 = await fs.readFileSync(`C:/Users/a_hen/Documents/ALEX/Apolo Som/Planos/${params.plan}/4.png`, "base64", (err, data) => {
      return data
    }
    )
    return [img1Base64, img2Base64, img3Base64, img4Base64]
  }

  async show({ params }) {
    const data = await Plans.find(params.id)
    return data
  }

  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const data = request.only(["NAME", "DESCRIPTION", "EQUIPMENTS", "PRICE"])
    const x = await Plans.create(data)
    return x
  }

  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const x = await Plans.findOrFail(params.id);
    const data = request.only(["NAME", "DESCRIPTION", "EQUIPMENTS", "PRICE"]);
    x.merge(data);
    await x.save();

    return x
  }

  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params }) {
    const data = await Plans.findOrFail(params.id);
    await data.delete();
  }
}

module.exports = PlanController
