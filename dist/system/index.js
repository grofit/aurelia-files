System.register([], function (_export) {
    "use strict";

    _export("configure", configure);

    function configure(aurelia) {
        aurelia.globalResources("./attributes/files-attribute");
    }

    return {
        setters: [],
        execute: function () {}
    };
});