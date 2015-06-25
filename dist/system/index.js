System.register(["./generators/template-generator", "./generators/default-template-generator"], function (_export) {
    "use strict";

    var TemplateGenerator, DefaultTemplateGenerator;

    _export("configure", configure);

    function configure(aurelia) {
        aurelia.container.registerInstance(TemplateGenerator, new DefaultTemplateGenerator());
        aurelia.globalizeResources("./generate-element");
    }

    return {
        setters: [function (_generatorsTemplateGenerator) {
            TemplateGenerator = _generatorsTemplateGenerator.TemplateGenerator;
        }, function (_generatorsDefaultTemplateGenerator) {
            DefaultTemplateGenerator = _generatorsDefaultTemplateGenerator.DefaultTemplateGenerator;
        }],
        execute: function () {}
    };
});