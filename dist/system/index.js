System.register([], function (_export) {
    "use strict";

    _export("configure", configure);

    function configure(aurelia) {
        aurelia.globalizeResources("./generate-element");
    }

    return {
        setters: [],
        execute: function () {}
    };
});