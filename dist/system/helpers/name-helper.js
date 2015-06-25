System.register([], function (_export) {
    'use strict';

    var NameHelper;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [],
        execute: function () {
            NameHelper = (function () {
                function NameHelper() {
                    _classCallCheck(this, NameHelper);
                }

                _createClass(NameHelper, null, [{
                    key: 'makeTextualName',
                    value: function makeTextualName(name) {
                        return name.replace(/([A-Z])/g, ' $1').trim().toLowerCase().replace(/\b\w/g, function (match) {
                            return match.toUpperCase();
                        });
                    }
                }, {
                    key: 'makeSpinalCase',
                    value: function makeSpinalCase(name) {
                        return name.replace(/([A-Z])/g, ' $1').trim().replace(' ', '-').toLowerCase();
                    }
                }, {
                    key: 'generateId',
                    value: function value(property, idPrefix, idSuffix) {
                        var generatedId = '';

                        if (idPrefix) {
                            generatedId += idPrefix + '-';
                        }
                        generatedId += NameHelper.makeSpinalCase(property);
                        if (idSuffix) {
                            generatedId += '-' + idSuffix;
                        }

                        return generatedId;
                    },
                    enumerable: true
                }]);

                return NameHelper;
            })();

            _export('NameHelper', NameHelper);
        }
    };
});