// this code i sfr defining any tiype of error happen and this is use in whereerrorhandeling needed

class ApiError extends Error{
    constructor(
        statusCode,
        message= "SOMETHING WRONG",
        errors = [],
        statck=""
    ){
        super(message)
        this.statusCode=statusCode
        this.data= null
        this.message=message
        this.succes=false;
        this.errors=errors


        // the bellow code is for error happens in which page or code
        if(statck){
            this.stack=statck
        }
        else{
            Error.captureStackTrace(this, this.constructure)
        }
    }
}
export {ApiError}