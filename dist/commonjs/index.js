"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.configure = configure;

var _handlersFileHandler = require("./handlers/file-handler");

function configure(aurelia) {
    aurelia.globalizeResources("./attributes/files-attribute");
}