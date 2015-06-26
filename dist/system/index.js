System.register(["./handlers/file-handler"], function (_export) {
    "use strict";

    var FileHandler;

    _export("configure", configure);

    function configure(aurelia) {
        aurelia.globalizeResources("./attributes/files-attribute");
    }

    return {
        setters: [function (_handlersFileHandler) {
            FileHandler = _handlersFileHandler.FileHandler;
        }],
        execute: function () {}
    };
});