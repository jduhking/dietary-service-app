const Patient = require("../models/Patient.js");
module.exports = function (router) {
  router.post("/add-restrictions", addRestrictions);
};

async function addRestrictions(req, res) {
  try {
    if (req.body.mrn == null) throw "No mrn on request";
    console.log(
      "New restrictions request for: " + req.body.mrn
    );

    const restrictionsUpdate = await Patient.updateOne(
      { mrn: req.body.mrn },
      {
        $push: {
          dietRestrictions: { $each: req.body.restrictions },
        },
      }
    );
    if(restrictionsUpdate.modifiedCount != 1) throw "Could not update diet restrictions"
    return res
      .status(200)
      .json({ m: "restrictions added successfully" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ e: error });
  }
}
