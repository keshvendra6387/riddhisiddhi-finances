const mongoose= require('mongoose');

const getAppointmentSchema = new mongoose.Schema({
    name: {
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
    appointmentfor:{
        type:String,
    },
    address:{
        type:String,
    },

    


});

const GetAppointment = mongoose.model('GetAppointment', getAppointmentSchema);

module.exports= GetAppointment;