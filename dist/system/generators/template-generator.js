System.register([], function (_export) {
  "use strict";

  var TemplateGenerator;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [],
    execute: function () {
      TemplateGenerator = function TemplateGenerator() {
        _classCallCheck(this, TemplateGenerator);

        this.generatorType = "none";

        this.generateTemplate = function (model, options) {
          return [];
        };
      };

      _export("TemplateGenerator", TemplateGenerator);
    }
  };
});