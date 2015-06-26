define(["exports", "./handlers/file-handler"], function (exports, _handlersFileHandler) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.configure = configure;

    function configure(aurelia) {
        aurelia.globalizeResources("./attributes/files-attribute");
    }
});