
const express=require("express")
const {userContact, getAppointment, joinAssociate, businessPartner}=require('../controllers/userController')
const router=express.Router()

router.route("/").post(userContact)
router.route("/getappointment").post(getAppointment)
router.route("/joinassociate").post(joinAssociate)
router.route("/businesspartner").post(businessPartner)



module.exports=router