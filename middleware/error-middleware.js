const errorMiddleware = (err,req,res,next)=>{
    const statusCode = err.status || 500
    const message = err.message || "Internal Server Error"
    const extraDetails = err.extraDetails || "Error from Backend"
    res.status(statusCode).json({msg:message, extraDetails})
}
module.exports = errorMiddleware