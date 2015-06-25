System.register(["./name-helper"], function (_export) {
    "use strict";

    var NameHelper, ElementHelper;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_nameHelper) {
            NameHelper = _nameHelper.NameHelper;
        }],
        execute: function () {
            ElementHelper = (function () {
                function ElementHelper() {
                    _classCallCheck(this, ElementHelper);
                }

                _createClass(ElementHelper, null, [{
                    key: "createCheckbox",
                    value: function value(property) {
                        var inputElement = document.createElement("input");
                        inputElement.type = "checkbox";
                        inputElement.setAttribute("checked.bind", property);
                        return inputElement;
                    },
                    enumerable: true
                }, {
                    key: "createInputType",
                    value: function value(property, type) {
                        var inputElement = document.createElement("input");
                        inputElement.type = type;
                        inputElement.setAttribute("value.bind", property);
                        return inputElement;
                    },
                    enumerable: true
                }, {
                    key: "createLabelFor",
                    value: function value(element, property) {
                        var labelElement = document.createElement("label");
                        labelElement.htmlFor = element.id;
                        labelElement.innerHTML = NameHelper.makeTextualName(property);
                        return labelElement;
                    },
                    enumerable: true
                }, {
                    key: "createContainer",
                    value: function value() {
                        var containerElement = document.createElement("div");
                        return containerElement;
                    },
                    enumerable: true
                }]);

                return ElementHelper;
            })();

            _export("ElementHelper", ElementHelper);
        }
    };
});