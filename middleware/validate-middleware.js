const validate = (schema) => async (req,res,next)=>{
    try {
        const parseBody = await schema.parseAsync(req.body)
        req.body = parseBody
        
        next()
        
    } catch (error) {
        const parsedError = JSON.parse(error.message)
        const err ={
            status:error.status || 400,
            message: parsedError[0].message,
            extraDetails: "Validation Error"
        }
        next(err)
        
    }
}
module.exports = validate