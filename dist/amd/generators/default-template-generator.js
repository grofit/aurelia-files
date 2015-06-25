define(["exports", "./template-generator", "../helpers/element-helper", "../helpers/name-helper", "../helpers/type-helper"], function (exports, _templateGenerator, _helpersElementHelper, _helpersNameHelper, _helpersTypeHelper) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  var DefaultTemplateGenerator = (function (_TemplateGenerator) {
    function DefaultTemplateGenerator() {
      _classCallCheck(this, DefaultTemplateGenerator);

      _get(Object.getPrototypeOf(DefaultTemplateGenerator.prototype), "constructor", this).apply(this, arguments);

      this.generatorType = "default";

      this.createInputElement = function (property, observable) {
        var observableValue = observable;

        if (_helpersTypeHelper.TypeHelper.isBoolean(observableValue)) {
          return _helpersTypeHelper.TypeHelper.createCheckbox(property);
        }

        if (_helpersTypeHelper.TypeHelper.isNumber(observableValue)) {
          return _helpersTypeHelper.TypeHelper.createInputType(property, "number");
        }

        if (_helpersTypeHelper.TypeHelper.isDate(observableValue)) {
          return _helpersTypeHelper.TypeHelper.createInputType(property, "date");
        }

        if (property.toLowerCase().indexOf("password") >= 0) {
          return _helpersElementHelper.ElementHelper.createInputType(property, "password");
        }

        return _helpersElementHelper.ElementHelper.createInputType(property, "text");
      };

      this.createForObservable = function (property, observable, idPrefix, idSuffix, withPlaceholders) {
        var inputElement = this.createInputElement(property, observable);

        if (withPlaceholders && inputElement.type != "checkbox") {
          var placeholderText = _helpersNameHelper.NameHelper.makeTextualName(property);
          inputElement.placeholder = placeholderText;
        }

        return inputElement;
      };

      this.generateTemplate = function (model, options) {
        var idPrefix = options.idPrefix || "";
        var idSuffix = options.idSuffix || "";
        var withLabels = _helpersTypeHelper.TypeHelper.isBoolean(options.withLabels) ? options.withLabels : true;
        var withPlaceholders = _helpersTypeHelper.TypeHelper.isBoolean(options.withPlaceholders) ? options.withPlaceholders : true;
        var withContainer = _helpersTypeHelper.TypeHelper.isBoolean(options.withContainer) ? options.withContainer : true;

        console.log("OPTIONS", options);

        var generatedElements = [];
        var inputElement, labelElement, containerElement;

        for (var property in model) {
          if (!_helpersTypeHelper.TypeHelper.isFunction(model[property])) {
            inputElement = this.createForObservable(property, model[property], idPrefix, idSuffix, withPlaceholders);
            inputElement.id = _helpersNameHelper.NameHelper.generateId(property, idPrefix, idSuffix) + "-input";

            if (withLabels) {
              labelElement = _helpersElementHelper.ElementHelper.createLabelFor(inputElement, property);
              labelElement.id = _helpersNameHelper.NameHelper.generateId(property, idPrefix, idSuffix) + "-label";
            }

            if (withContainer) {
              containerElement = _helpersElementHelper.ElementHelper.createContainer();
              containerElement.id = _helpersNameHelper.NameHelper.generateId(property, idPrefix, idSuffix) + "-container";

              if (withLabels) {
                containerElement.appendChild(labelElement);
              }
              containerElement.appendChild(inputElement);
              generatedElements.push(containerElement);
            } else {
              if (withLabels) {
                generatedElements.push(labelElement);
              }
              generatedElements.push(inputElement);
            }
          }
        }
        return generatedElements;
      };
    }

    _inherits(DefaultTemplateGenerator, _TemplateGenerator);

    return DefaultTemplateGenerator;
  })(_templateGenerator.TemplateGenerator);

  exports.DefaultTemplateGenerator = DefaultTemplateGenerator;
});