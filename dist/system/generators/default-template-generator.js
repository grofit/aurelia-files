System.register(["./template-generator", "../helpers/element-helper", "../helpers/name-helper", "../helpers/type-helper"], function (_export) {
  "use strict";

  var TemplateGenerator, ElementHelper, NameHelper, TypeHelper, DefaultTemplateGenerator;

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

  return {
    setters: [function (_templateGenerator) {
      TemplateGenerator = _templateGenerator.TemplateGenerator;
    }, function (_helpersElementHelper) {
      ElementHelper = _helpersElementHelper.ElementHelper;
    }, function (_helpersNameHelper) {
      NameHelper = _helpersNameHelper.NameHelper;
    }, function (_helpersTypeHelper) {
      TypeHelper = _helpersTypeHelper.TypeHelper;
    }],
    execute: function () {
      DefaultTemplateGenerator = (function (_TemplateGenerator) {
        function DefaultTemplateGenerator() {
          _classCallCheck(this, DefaultTemplateGenerator);

          _get(Object.getPrototypeOf(DefaultTemplateGenerator.prototype), "constructor", this).apply(this, arguments);

          this.generatorType = "default";

          this.createInputElement = function (property, observable) {
            var observableValue = observable;

            if (TypeHelper.isBoolean(observableValue)) {
              return TypeHelper.createCheckbox(property);
            }

            if (TypeHelper.isNumber(observableValue)) {
              return TypeHelper.createInputType(property, "number");
            }

            if (TypeHelper.isDate(observableValue)) {
              return TypeHelper.createInputType(property, "date");
            }

            if (observable.rules) {
              var rules = [];
              observable.rules().forEach(function (validationRule) {
                rules.push(validationRule.rule);
              });

              if (rules.indexOf("email") >= 0) {
                return ElementHelper.createInputType(property, "email");
              }

              if (rules.indexOf("min") >= 0 || rules.indexOf("max") >= 0 || rules.indexOf("number") >= 0 || rules.indexOf("digits") >= 0) {
                return ElementHelper.createInputType(property, "number");
              }

              if (rules.indexOf("date") >= 0) {
                return ElementHelper.createInputType(property, "date");
              }
            }

            if (property.toLowerCase().indexOf("password") >= 0) {
              return ElementHelper.createInputType(property, "password");
            }

            return ElementHelper.createInputType(property, "text");
          };

          this.createForObservable = function (property, observable, idPrefix, idSuffix, withPlaceholders) {
            var inputElement = ElementHelper.createInputElement(property, observable);

            if (withPlaceholders && inputElement.type != "checkbox") {
              var placeholderText = NameHelper.makeTextualName(property);
              inputElement.placeholder = placeholderText;
            }

            return inputElement;
          };

          this.generateTemplate = function (model, options) {
            var idPrefix = options.idPrefix || "";
            var idSuffix = options.idSuffix || "";
            var withLabels = TypeHelper.isBoolean(options.withLabels) ? options.withLabels : true;
            var withPlaceholders = TypeHelper.isBoolean(options.withPlaceholders) ? options.withPlaceholders : true;
            var withContainer = TypeHelper.isBoolean(options.withContainer) ? options.withContainer : true;

            var generatedElements = [];
            var inputElement, labelElement, containerElement;

            for (var property in model) {
              if (!TypeHelper.isFunction(model[property])) {
                inputElement = this.createForObservable(property, model[property], idPrefix, idSuffix, withPlaceholders);
                inputElement.id = NameHelper.generateId(property, idPrefix, idSuffix) + "-input";

                if (withLabels) {
                  labelElement = ElementHelper.createLabelFor(inputElement, property);
                  labelElement.id = NameHelper.generateId(property, idPrefix, idSuffix) + "-label";
                }

                if (withContainer) {
                  containerElement = ElementHelper.createContainer();
                  containerElement.id = NameHelper.generateId(property, idPrefix, idSuffix) + "-container";

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
      })(TemplateGenerator);

      _export("DefaultTemplateGenerator", DefaultTemplateGenerator);
    }
  };
});