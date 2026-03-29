const {z} = require("zod")

const registerSchema = z.object({
    username:z.
    string({required_error:"Username is required"}).
    trim().
    min(3, {message: "Username must be at least 3 characters long"}).
    max(20, {message: "Username cannot exceed 20 characters"}),

    email:z.
    email({required_error:"Email is required"}).trim().
    min(5, {message: "Email must be at least 5 characters long"}).
    max(50, {message: "Email cannot exceed 50 characters"}),

    phone:z.
    string({required_error:"Phone is required"}).
    trim().
    min(10, {message: "Phone must be at least 10 characters long"}).
    max(15, {message: "Phone cannot exceed 15 characters"}),
    
    password:z.
    string({required_error:"Password is required"}).
    trim().
    min(6, {message: "Password must be at least 6 characters long"}).
    max(50, {message: "Password cannot exceed 50 characters"})
})

const loginSchema = z.object({
  email:z.
    email({required_error:"Email is required"}).trim().
    min(5, {message: "Email must be at least 5 characters long"}).
    max(50, {message: "Email cannot exceed 50 characters"}),
    password:z.
    string({required_error:"Password is required"}).
    trim().
    min(6, {message: "Password must be at least 6 characters long"}).
    max(50, {message: "Password cannot exceed 50 characters"})
})  

const contactFormSchema = z.object({
    username:z.
    string({required_error:"Username is required"}).
    trim().
    min(3, {message: "Username must be at least 3 characters long"}).
    max(20, {message: "Username cannot exceed 20 characters"}),

    email:z.
    email({required_error:"Email is required"}).trim().
    min(5, {message: "Email must be at least 5 characters long"}).
    max(50, {message: "Email cannot exceed 50 characters"}),
    
    message:z.
    string({required_error:"Message is required"}).
    trim().
    min(10, {message: "Message must be at least 10 characters long"}).
    max(255, {message: "Message cannot exceed 255 characters"})
})

module.exports = {registerSchema, loginSchema, contactFormSchema}