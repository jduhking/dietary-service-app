const Patient = require("../models/Patient.js");
module.exports = function (router) {
  router.post("/new-patient", newPatient);
};

async function newPatient(req, res) {
  try {
    if (req.body.mrn == null) throw "No mrn on request";
    console.log("New patient request for: " + req.body.mrn);

    await Patient.create({
        name: req.body.name,
        mrn: req.body.mrn,
    })

    return res.status(200).json({m:"patient created successfully"});
  } catch (error) {
    console.log(error);
    return res.status(400).json({ e: error });
  }
}
