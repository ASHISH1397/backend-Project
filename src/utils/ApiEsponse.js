// this page isfor checking response error

class ApiResponse {
    constructor(
        statusCode,
        data,
        message="success"
    ) {
        this.statusCode=statusCode,
        this.data=data,
        this.message=message,
        this.success=statusCode < 400
    }
}