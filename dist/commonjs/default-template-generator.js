"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DefaultTemplateGenerator = (function () {
  function DefaultTemplateGenerator() {
    _classCallCheck(this, DefaultTemplateGenerator);

    this.generatorType = "default";

    this.createCheckbox = function (property) {
      var inputElement = document.createElement("input");
      inputElement.type = "checkbox";
      inputElement.setAttribute("checked.bind", property);
      return inputElement;
    };

    this.createInputType = function (property, type) {
      var inputElement = document.createElement("input");
      inputElement.type = type;
      inputElement.setAttribute("value.bind", property);
      return inputElement;
    };

    this.createLabelFor = function (element, property) {
      var labelElement = document.createElement("label");
      labelElement.htmlFor = element.id;
      labelElement.innerHTML = this.makeTextualName(property);
      return labelElement;
    };

    this.createContainer = function () {
      var containerElement = document.createElement("div");
      return containerElement;
    };

    this.generateId = function (property, idPrefix, idSuffix) {
      var generatedId = "";

      if (idPrefix) {
        generatedId += idPrefix + "-";
      }
      generatedId += this.makeSpinalCase(property);
      if (idSuffix) {
        generatedId += "-" + idSuffix;
      }

      return generatedId;
    };

    this.createInputElement = function (property, observable) {
      var observableValue = observable;

      if (this.isBoolean(observableValue)) {
        return this.createCheckbox(property);
      }

      if (this.isNumber(observableValue)) {
        return this.createInputType(property, "number");
      }

      if (this.isDate(observableValue)) {
        return this.createInputType(property, "date");
      }

      if (observable.rules) {
        var rules = [];
        observable.rules().forEach(function (validationRule) {
          rules.push(validationRule.rule);
        });

        if (rules.indexOf("email") >= 0) {
          return this.createInputType(property, "email");
        }

        if (rules.indexOf("min") >= 0 || rules.indexOf("max") >= 0 || rules.indexOf("number") >= 0 || rules.indexOf("digits") >= 0) {
          return this.createInputType(property, "number");
        }

        if (rules.indexOf("date") >= 0) {
          return this.createInputType(property, "date");
        }
      }

      if (property.toLowerCase().indexOf("password") >= 0) {
        return this.createInputType(property, "password");
      }

      return this.createInputType(property, "text");
    };

    this.createForObservable = function (property, observable, idPrefix, idSuffix, withPlaceholders) {
      var inputElement = this.createInputElement(property, observable);

      if (withPlaceholders && inputElement.type != "checkbox") {
        var placeholderText = this.makeTextualName(property);
        inputElement.placeholder = placeholderText;
      }

      return inputElement;
    };

    this.generateTemplate = function (options) {
      console.log(options);
      var model = options.usingModel;
      var idPrefix = options.idPrefix || "";
      var idSuffix = options.idSuffix || "";
      var withLabels = this.isBoolean(options.withLabels) ? options.withLabels : true;
      var withPlaceholders = this.isBoolean(options.withPlaceholders) ? options.withPlaceholders : true;
      var withContainer = this.isBoolean(options.withContainer) ? options.withContainer : true;

      var generatedElements = [];
      var inputElement, labelElement, containerElement;

      for (var property in model) {
        console.log(property, model[property]);
        if (!this.isFunction(model[property])) {
          inputElement = this.createForObservable(property, model[property], idPrefix, idSuffix, withPlaceholders);
          inputElement.id = this.generateId(property, idPrefix, idSuffix) + "-input";

          if (withLabels) {
            labelElement = this.createLabelFor(inputElement, property);
            labelElement.id = this.generateId(property, idPrefix, idSuffix) + "-label";
          }

          if (withContainer) {
            containerElement = this.createContainer();
            containerElement.id = this.generateId(property, idPrefix, idSuffix) + "-container";

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

  _createClass(DefaultTemplateGenerator, [{
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
  }, {
    key: "makeTextualName",
    value: function makeTextualName(name) {
      return name.replace(/([A-Z])/g, " $1").trim().toLowerCase().replace(/\b\w/g, function (match) {
        return match.toUpperCase();
      });
    }
  }, {
    key: "makeSpinalCase",
    value: function makeSpinalCase(name) {
      return name.replace(/([A-Z])/g, " $1").trim().replace(" ", "-").toLowerCase();
    }
  }]);

  return DefaultTemplateGenerator;
})();

exports.DefaultTemplateGenerator = DefaultTemplateGenerator;