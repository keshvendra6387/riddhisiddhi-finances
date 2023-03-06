const Contact =require("../models/contactSchema")
const GetAppointment =require("../models/getAppointmentSchema")
const JoinAssociate =require("../models/joinAssociateSchema")
const BusinessPartner =require("../models/businesspartnerSchema")
const userContact=async(req,res)=>{
    const {firstname,lastname,email,mobile,creditscore,itrstatus,occupation,loantype,city}=req.body
    const user=await Contact.create({
        firstname,
        lastname,
        email,
        mobile,
        creditscore,
        itrstatus,
        occupation,
        loantype,
        city
    })
    if(user){
        res.json({
            firstname:user.firstname,
            lastname:user.lastname,
            email:user.email,
            mobile:user.mobile,
            creditscore:user.creditscore,
            itrstatus:user.itrstatus,
            occupation:user.occupation,
            loantype:user.loantype,
            city:user.city
        })
    }
    
}

const getAppointment=async(req,res)=>{
    const {name,email,mobile,appointmentfor,address}=req.body
    const user=await GetAppointment.create({
        name,
        email,
        mobile,
        appointmentfor,
        address
    })
    if(user){
        res.json({
            name:user.name,
            email:user.email,
            mobile:user.mobile,
            appointmentfor:user.appointmentfor,
            address:user.address

        })
    }
    
}

const joinAssociate=async(req,res)=>{
    const {firstname,lastname,email,mobile,occupation,city,degree,postaladdress,state,pincode}=req.body
    const user=await JoinAssociate.create({
        firstname,
        lastname,
        email,
        mobile,
        city,
        occupation,
        degree,
        postaladdress,
        state,
        pincode
    })
    if(user){
        res.json({
            firstname:user.firstname,
            lastname:user.lastname,
            email:user.email,
            mobile:user.mobile,
            occupation:user.occupation,
            degree:user.degree,
            postaladdress:user.postaladdress,
            state:user.state,
            pincode:user.pincode,
            city:user.city,

        })
    }
    
}

const businessPartner=async(req,res)=>{
    const {firstname,lastname,email,mobile,occupation,city,degree,postaladdress,state,pincode}=req.body
    const user=await BusinessPartner.create({
        firstname,
        lastname,
        email,
        mobile,
        city,
        occupation,
        degree,
        postaladdress,
        state,
        pincode
    })
    if(user){
        res.json({
            firstname:user.firstname,
            lastname:user.lastname,
            email:user.email,
            mobile:user.mobile,
            occupation:user.occupation,
            degree:user.degree,
            postaladdress:user.postaladdress,
            state:user.state,
            pincode:user.pincode,
            city:user.city,

        })
    }
    
}
module.exports={userContact,getAppointment,joinAssociate,businessPartner}