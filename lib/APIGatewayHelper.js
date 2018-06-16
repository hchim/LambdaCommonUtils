export default class APIGatewayHelper {

    static response(body, statusCode, headers, callback) {
        const response = {
            statusCode: statusCode
        };

        if (headers) {
            response.headers = headers;
        }

        if (body) {
            response.body = JSON.stringify(body);
        }

        callback(null, response);
    }

    static successResponse(body, callback) {
        this.response(body, 200, null, callback);
    }

    static failureResponse(body, callback) {
        this.response(body, 500, null, callback);
    }

    static errorResponse(err, callback) {
        const body = {
            result: false,
            error: err.message
        };
        this.failureResponse(body, callback);
    }
}
