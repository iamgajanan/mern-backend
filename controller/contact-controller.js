const Contact = require("../models/contact-model")

const contactForm = async(req,res)=>{
    try {
        const {username,email,message} = req.body
        const contactCreated = await Contact.create({username,email,message})
        res.status(201).send({
            msg:"Contact form submitted successfully",
            contact:contactCreated
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = contactForm    