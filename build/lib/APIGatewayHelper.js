"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var APIGatewayHelper = function () {
    function APIGatewayHelper() {
        _classCallCheck(this, APIGatewayHelper);
    }

    _createClass(APIGatewayHelper, null, [{
        key: "response",
        value: function response(body, statusCode, headers, callback) {
            var response = {
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
    }, {
        key: "successResponse",
        value: function successResponse(body, callback) {
            this.response(body, 200, null, callback);
        }
    }, {
        key: "failureResponse",
        value: function failureResponse(body, callback) {
            this.response(body, 500, null, callback);
        }
    }, {
        key: "errorResponse",
        value: function errorResponse(err, callback) {
            var body = {
                result: false,
                error: err.message
            };
            this.failureResponse(body, callback);
        }
    }]);

    return APIGatewayHelper;
}();

exports.default = APIGatewayHelper;