const mongoose =require("mongoose")

const connectToDb=()=>{
    try{
        const conn=mongoose.connect("mongodb+srv://keshav:keshav@wishchat.o7s2jac.mongodb.net/?retryWrites=true&w=majority")
        console.log("Database connected successfully")
    }catch(err){
        console.log(err)
    }
}

module.exports=connectToDb;