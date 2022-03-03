'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')


Route.resource("/service", "ServiceController").apiOnly();
Route.get("/lastDataService", "ServiceController.lastData");


Route.resource("/contat", "ContatController").apiOnly();

Route.resource("/payment", "PaymentController").apiOnly();

Route.resource("/plan", "PlanController").apiOnly();
Route.get("/plan/img/:plan", "PlanController.getImg");

Route.resource("/equipment", "EquipController").apiOnly();
Route.post("/equipment/img", "EquipController.getImg");

