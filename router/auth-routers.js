const express =require("express")
const authController  = require("../controller/auth-controller")
const router = express.Router()
const {registerSchema, loginSchema,} = require("../validators/validators")
const validate = require("../middleware/validate-middleware")

router.route("/").get(authController.home)
router.route("/register").post(validate(registerSchema), authController.register)
router.route("/login").post(validate(loginSchema), authController.login)



module.exports = router