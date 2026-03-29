const express = require("express")  
const app = express();
const authRouter = require("./router/auth-routers")
const contactRouter = require("./router/contact-router")
const connectDB = require("./Utils/db-connection");
const errorMiddleware = require("./middleware/error-middleware")
require("dotenv").config();



app.use(express.json())

app.use("/api/auth",authRouter)
app.use("/api/form",contactRouter)
app.use(errorMiddleware)


const PORT =1234

connectDB().then(()=>{
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})
}).catch((error)=>{
    console.log("Error connecting to the database:", error);
})