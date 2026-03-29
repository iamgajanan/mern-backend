const User = require("../models/user-model")
const bycrypt = require("bcryptjs")
const home = async(req,res)=>{
    try {
        console.log("Hi there this is route /api get method from controller")
        res.status(200).send("Welcome to the Home Page")
    } catch (error) {
        console.log(error)
    }
}   
const register = async(req,res)=>{
    try {

        console.log(req.body)
        const {username,email,phone,password} = req.body
        const UserExist =await User.findOne({email})
        if(UserExist){
            return res.status(400).send({msg:"Email already exists"})
        }
       const UserCreated = await User.create({ username,email,phone,password})
        res.status(201).send({
            msg:"User registered successfully", 
            user:UserCreated, 
            token: await UserCreated.generateToken(),
            userId:UserCreated._id.toString()
        })
    } catch (error) {
        console.log(error)
    }
} 
const login = async(req,res)=>{
    try {
        const {email,password} = req.body;
        const userExist = await User.findOne({email})
        console.log(userExist)
        if(!userExist){
            return res.status(400).send({msg:"Invalid email or password"})
        }
        const user = await userExist.comparePassword(password);

        if(user){
            res.status(200).send({
                msg:"Login successful",
                token: await userExist.generateToken(),
                userId: userExist._id.toString()
            })
        }else{
            res.status(401).send({msg:"Invalid email or password"})
        }
    } catch (error) {
        console.log(error)
    }
}
module.exports = {home, register, login}