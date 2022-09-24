const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mrn:{
        type: String,
        required: true,
        unique: true,
    },
    dietRestrictions:{
        type: [String],
        default: [],
    },
    history:{
        type:[String],
        default:[],
    }
})
module.exports = mongoose.model("Patient", PatientSchema);
