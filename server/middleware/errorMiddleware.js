// Unsupported (404) routes 
const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`)
    res.status(404);
    next(error);
}

//Middleware to handle Errors
const Errorhandler= (error, req, res, next) => {
    if(res.headersent) {
        return next(error)
    }

    res.status(error.code || 500).json({message: error.message || "An unknown error occured"})
} 

module.exports = {notFound, Errorhandler}