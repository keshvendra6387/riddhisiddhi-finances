const mongoose= require('mongoose');

const businesspartnerSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true,
        min: 5,
        max: 20
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        min: 5,
        max: 20
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    mobile:{
        type:String,
    },
    degree:{
        type:String
    },
    postaladdress:{
        type:String
    },
    state:{
        type:String
    },
    pincode:{
        type:Number
    },

    city:{
        type:String,
    },
    occupation:{
        type:String,
    },
    


});

const BusinessPartner = mongoose.model('BusinessPartner', businesspartnerSchema);

module.exports= BusinessPartner;