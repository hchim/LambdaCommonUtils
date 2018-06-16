'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MongoClient = require('mongodb').MongoClient;

var MongoDBProxy = function () {
    /**
     * @param uri the uri of the mongodb to connect.
     * @param dbName the name of the database.
     */
    function MongoDBProxy(dbUri, dbName) {
        _classCallCheck(this, MongoDBProxy);

        this.dbUri = dbUri;
        this.dbName = dbName;
        this.cachedDB = null;
    }

    /**
     * If already connected to the database, return the cached connection.
     * Otherwise, create a new connection.
     * @returns {*}
     */


    _createClass(MongoDBProxy, [{
        key: 'connectToDatabase',
        value: function connectToDatabase() {
            var _this = this;

            if (this.isConnected()) {
                console.log('Using cached database instance.');
                return Promise.resolve(cachedDb);
            }

            console.log('Create a new database instance.');
            return MongoClient.connect(this.dbUri).then(function (client) {
                _this.cachedDB = client.db(_this.dbName);
                return _this.cachedDB;
            });
        }

        /**
         * @return whether database is connected or not.
         */

    }, {
        key: 'isConnected',
        value: function isConnected() {
            return this.cachedDB && this.cachedDB.serverConfig.isConnected();
        }
    }]);

    return MongoDBProxy;
}();

exports.default = MongoDBProxy;