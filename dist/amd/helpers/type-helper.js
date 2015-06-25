define(["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    var TypeHelper = (function () {
        function TypeHelper() {
            _classCallCheck(this, TypeHelper);
        }

        _createClass(TypeHelper, null, [{
            key: "isNumber",
            value: function isNumber(obj) {
                return !isNaN(parseFloat(obj)) && isFinite(obj);
            }
        }, {
            key: "isDate",
            value: function isDate(obj) {
                return obj instanceof Date && !isNaN(obj.valueOf());
            }
        }, {
            key: "isBoolean",
            value: function isBoolean(obj) {
                return obj === true || obj === false;
            }
        }, {
            key: "isFunction",
            value: function isFunction(obj) {
                return typeof obj === "function";
            }
        }]);

        return TypeHelper;
    })();

    exports.TypeHelper = TypeHelper;
});