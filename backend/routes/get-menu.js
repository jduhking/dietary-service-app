const Patient = require("../models/Patient.js");
const FoodItem = require("../models/FoodItem.js");
module.exports = function (router) {
  router.post("/get-menu", getMenu);
};

async function getMenu(req, res) {
  try {
    if (req.body.mrn == null) throw "No mrn on menu request";

    const patient = await Patient.findOne({
      mrn: req.body.mrn,
    }).lean();
    if (patient == null) throw "No patient found";
    const menu = await FoodItem.find().lean();

    const restrictedMenu = [];

    for (let item of menu) {
      const restricted = item.restrictionCategories.some(
        (restriction) =>
          patient.dietRestrictions.includes(restriction)
      );
      if(!restricted) restrictedMenu.push(item);
    }
    console.log(menu);
    console.log(restrictedMenu);
    return res.status(200).json({ m: restrictedMenu });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ e: error });
  }
}
