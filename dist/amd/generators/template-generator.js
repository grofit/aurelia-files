define(["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var TemplateGenerator = function TemplateGenerator() {
    _classCallCheck(this, TemplateGenerator);

    this.generatorType = "none";

    this.generateTemplate = function (model, options) {
      return [];
    };
  };

  exports.TemplateGenerator = TemplateGenerator;
});