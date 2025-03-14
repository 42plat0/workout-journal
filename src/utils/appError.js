export default class AppError extends Error{
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;
        this.statusMessage = `${statusCode}`.startsWith("4") ? "failed" : "error";
        
        Error.captureStackTrace(this, this.constructor);
    }
}
