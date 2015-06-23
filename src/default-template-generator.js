export class DefaultTemplateGenerator
{
  generatorType = "default";

  isNumber(obj) {
    return !isNaN(parseFloat(obj)) && isFinite(obj);
  }

  isDate(obj) {
    return obj instanceof Date && !isNaN(obj.valueOf());
  }

  isBoolean(obj) {
    return obj === true || obj === false;
  }

  isFunction(obj) {
    return (typeof(obj) === "function");
  }

  makeTextualName(name) {
    return name.replace(/([A-Z])/g, ' $1')
      .trim()
      .toLowerCase()
      .replace(/\b\w/g, function(match) { return match.toUpperCase() });
  }

  makeSpinalCase(name) {
    return name.replace(/([A-Z])/g, ' $1')
      .trim()
      .replace(" ", "-")
      .toLowerCase();
  }


  createCheckbox = function(property) {
    var inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.setAttribute("checked.bind", property);
    return inputElement;
  };

  createInputType = function(property, type) {
    var inputElement = document.createElement("input");
    inputElement.type = type;
    inputElement.setAttribute("value.bind", property);
    return inputElement;
  };

  createLabelFor = function(element, property) {
    var labelElement = document.createElement("label");
    labelElement.htmlFor = element.id;
    labelElement.innerHTML = this.makeTextualName(property);
    return labelElement;
  };

  createContainer = function() {
    var containerElement = document.createElement("div");
    return containerElement;
  };

  generateId = function(property, idPrefix, idSuffix) {
    var generatedId = "";

    if(idPrefix) { generatedId += (idPrefix + "-"); }
    generatedId += this.makeSpinalCase(property);
    if(idSuffix) { generatedId += ("-" + idSuffix); }

    return generatedId;
  };

  createInputElement = function(property, observable) {
    var observableValue = observable;

    if(this.isBoolean(observableValue))
    { return this.createCheckbox(property); }

    if(this.isNumber(observableValue))
    { return this.createInputType(property, "number"); }

    if(this.isDate(observableValue))
    { return this.createInputType(property, "date")}

    if(observable.rules)
    {
      var rules = [];
      observable.rules().forEach(function(validationRule) {
        rules.push(validationRule.rule);
      });

      if(rules.indexOf("email") >= 0)
      { return this.createInputType(property, "email"); }

      if(rules.indexOf("min") >= 0 || rules.indexOf("max") >= 0 ||
        rules.indexOf("number") >= 0 || rules.indexOf("digits") >= 0)
      { return this.createInputType(property, "number"); }

      if(rules.indexOf("date") >= 0)
      { return this.createInputType(property, "date"); }
    }

    if(property.toLowerCase().indexOf("password") >= 0)
    { return this.createInputType(property, "password"); }

    return this.createInputType(property, "text");
  };

  createForObservable = function(property, observable, idPrefix, idSuffix, withPlaceholders) {
    var inputElement = this.createInputElement(property, observable);

    if(withPlaceholders && inputElement.type != "checkbox") {
      var placeholderText = this.makeTextualName(property);
      inputElement.placeholder = placeholderText;
    }

    return inputElement;
  };

  generateTemplate = function(options) {
    console.log(options);
    var model = options.usingModel;
    var idPrefix = options.idPrefix || "";
    var idSuffix = options.idSuffix || "";
    var withLabels = this.isBoolean(options.withLabels) ? options.withLabels : true;
    var withPlaceholders = this.isBoolean(options.withPlaceholders) ? options.withPlaceholders : true;
    var withContainer = this.isBoolean(options.withContainer) ? options.withContainer : true;

    var generatedElements = [];
    var inputElement, labelElement, containerElement;

    for(var property in model)
    {
      console.log(property, model[property]);
      if(!this.isFunction(model[property])) {
        inputElement = this.createForObservable(property, model[property], idPrefix, idSuffix, withPlaceholders);
        inputElement.id = this.generateId(property, idPrefix, idSuffix) + "-input";

        if(withLabels) {
          labelElement = this.createLabelFor(inputElement, property);
          labelElement.id = this.generateId(property, idPrefix, idSuffix) + "-label";
        }

        if(withContainer){
          containerElement = this.createContainer();
          containerElement.id = this.generateId(property, idPrefix, idSuffix) + "-container";

          if(withLabels) { containerElement.appendChild(labelElement); }
          containerElement.appendChild(inputElement);
          generatedElements.push(containerElement);
        }
        else {
          if(withLabels) { generatedElements.push(labelElement); }
          generatedElements.push(inputElement);
        }
      }
    }
    return generatedElements;
  }
}
