define(["exports", "./generators/template-generator", "./generators/default-template-generator"], function (exports, _generatorsTemplateGenerator, _generatorsDefaultTemplateGenerator) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.configure = configure;

    function configure(aurelia) {
        aurelia.container.registerInstance(_generatorsTemplateGenerator.TemplateGenerator, new _generatorsDefaultTemplateGenerator.DefaultTemplateGenerator());
        aurelia.globalizeResources("./elements/generate-element");
        console.log("PLUGIN GENERATE ACCEPTED 2");
    }
});