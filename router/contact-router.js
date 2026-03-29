const express =require("express")
const router = express.Router()
const contactForm = require("../controller/contact-controller")
const {contactFormSchema} = require("../validators/validators")
const validate = require("../middleware/validate-middleware")



router.route("/contact").post(validate(contactFormSchema), contactForm);

module.exports = router