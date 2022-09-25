const Patient = require("../models/Patient.js");
const FoodItem = require("../models/FoodItem");
const OrderRecord = require("../models/OrderRecord");
module.exports = function (router) {
  router.post("/place-order", placeOrder);
};

async function placeOrder(req, res) {
  console.log("Place order request for: " + req.body.mrn);
  try {
    if (req.body.orderItems?.length == 0)
      throw "No order items on request";
    if (req.body.mrn == null) throw "No patient on request";

    const patient = await Patient.findOne({ mrn: req.body.mrn }).lean();
    if (patient == null) throw "No patient with that mrn";
    const order = await FoodItem.find({
      _id: { $in: req.body.orderItems },
    }).lean();
    if (order == null) throw "No food items found";
    console.log(order);
    let orderIds = [];
    for(let item of order)
        orderIds.push(item._id);
    await OrderRecord.create({
      patient: patient,
      items: orderIds,
    });
    return res.status(200).json({ m: "success" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ e: error });
  }
}
