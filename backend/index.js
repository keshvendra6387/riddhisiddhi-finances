const express=require("express")
const connectToDb = require("./database/db")
const contactRoute=require("./routes/contactRoute")
connectToDb()
const app=express()
app.get("/",(req,res)=>{
    res.send("hello")
})
app.use(express.json())
app.use("/api/user",contactRoute)
app.listen(4000,()=>{
    console.log("Server is running on the port",4000)
})