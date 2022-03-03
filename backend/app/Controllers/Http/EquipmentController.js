// 'use strict'

// /** @typedef {import('@adonisjs/framework/src/Request')} Request */
// /** @typedef {import('@adonisjs/framework/src/Response')} Response */
// /** @typedef {import('@adonisjs/framework/src/View')} View */

// const Equipments = use("App/Models/Equipment");
// const Database = use('Database')
// const fs = require('fs')

// class EquipmentController {
  // async index() {
  //   return await Database
  //     .table('EQUIPMENTS')
  //   // const data = await Equipments.all()
  //   // return data
  // }

  // async show({ params }) {
  //   return await Database
  //     .table('EQUIPMENTS')
  //     .where('id', params.id)
  // }
  
  // async getImg({ request }) {
  //   console.log(request.body)
  //   var img1Base64 = await fs.readFileSync(`C:/Users/a_hen/Documents/Apolo Som/Equipamentos/${request.body.plan}/1.jpg`, "base64", (err, data) => {
  //     return data
  //   }
  //   )
  //   var img2Base64 = await fs.readFileSync(`C:/Users/a_hen/Documents/Apolo Som/Equipamentos/${request.body.plan}/2.jpg`, "base64", (err, data) => {
  //     return data
  //   }
  //   )
  //   var img3Base64 = await fs.readFileSync(`C:/Users/a_hen/Documents/Apolo Som/Equipamentos/${request.body.plan}/3.jpg`, "base64", (err, data) => {
  //     return data
  //   }
  //   )
  //   var img4Base64 = await fs.readFileSync(`C:/Users/a_hen/Documents/Apolo Som/Equipamentos/${request.body.plan}/4.jpg`, "base64", (err, data) => {
  //     return data
  //   }
  //   )
  //   // console.log(imgBase64)
  //   return [img1Base64, img2Base64, img3Base64, img4Base64]
  // }
 

  // async store({ request }) {
  //   return await Database
  //     .table('EQUIPMENTS')
  //     .insert({ NAME: request.body.NAME, DESCRIPTION: request.body.DESCRIPTION, PRICE: request.body.PRICE })
  //   // const data = request.only(["NAME", "DESCRIPTION", "PRICE"])
  //   // console.log(data)
  //   // const x = await Equipments.create(data)
  //   // return x
  // }

  // /**
  //  * @param {object} ctx
  //  * @param {Request} ctx.request
  //  * @param {Response} ctx.response
  //  */
  // async update({ params, request }) {
  //   console.log(request.body)
  //   return await Database
  //     .where('id', params.id)
  //     .update({ NAME: request.body.NAME, DESCRIPTION: request.body.DESCRIPTION, PRICE: request.body.PRICE })

  // }

  // /**
  //  * @param {object} ctx
  //  * @param {Request} ctx.request
  //  * @param {Response} ctx.response
  //  */
  // async destroy({ params }) {
  //   return await Database
  //     .table('EQUIPMENTS')
  //     .where('id', params.id)
  //     .delete()
  // }
// }

// module.exports = EquipmentController
