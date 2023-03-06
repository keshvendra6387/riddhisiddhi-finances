const mongoose= require('mongoose');

const contactSchema = new mongoose.Schema({
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
    loantype:{
        type:String,
    },
    creditscore:{
        type:String,
    },
    itrstatus:{
        type:String,
    },
    city:{
        type:String,
    },
    occupation:{
        type:String,
    },
    


});

const Contact = mongoose.model('Contact', contactSchema);

module.exports= Contact;