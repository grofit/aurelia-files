System.config({
    "baseURL": ".",
    "transpiler": "babel",
    "babelOptions": {
        "stage": 0
    },
    "paths": {
        "*": "*.js"
    }
});

System.config({
    "map": {
        "aurelia": "https://rawgit.com/distros/aurelia/0.14.0/aurelia",
        "aurelia-bootstrapper": "github:aurelia/bootstrapper@0.13.0",
        "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.8.1",
        "aurelia-framework": "github:aurelia/framework@0.12.0",
        "aurelia-http-client": "github:aurelia/http-client@0.9.1",
        "aurelia-router": "github:aurelia/router@0.9.0",
        "babel": "npm:babel-core@5.4.7",
        "babel-runtime": "npm:babel-runtime@5.4.7",
        "bootstrap": "github:twbs/bootstrap@3.3.4",
        "core-js": "npm:core-js@0.9.15",
        "css": "github:systemjs/plugin-css@0.1.11",
        "github:aurelia/binding@0.7.0": {
            "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.8.1",
            "aurelia-metadata": "github:aurelia/metadata@0.6.0",
            "aurelia-task-queue": "github:aurelia/task-queue@0.5.0",
            "core-js": "npm:core-js@0.9.15"
        },
        "github:aurelia/bootstrapper@0.13.0": {
            "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.5.0",
            "aurelia-framework": "github:aurelia/framework@0.12.0",
            "aurelia-history": "github:aurelia/history@0.5.0",
            "aurelia-history-browser": "github:aurelia/history-browser@0.5.0",
            "aurelia-loader-default": "github:aurelia/loader-default@0.8.0",
            "aurelia-logging-console": "github:aurelia/logging-console@0.5.0",
            "aurelia-router": "github:aurelia/router@0.9.0",
            "aurelia-templating": "github:aurelia/templating@0.12.0",
            "aurelia-templating-binding": "github:aurelia/templating-binding@0.12.0",
            "aurelia-templating-resources": "github:aurelia/templating-resources@0.12.0",
            "aurelia-templating-router": "github:aurelia/templating-router@0.13.0",
            "core-js": "npm:core-js@0.9.15"
        },
        "github:aurelia/dependency-injection@0.8.1": {
            "aurelia-logging": "github:aurelia/logging@0.5.0",
            "aurelia-metadata": "github:aurelia/metadata@0.6.0",
            "core-js": "npm:core-js@0.9.15"
        },
        "github:aurelia/event-aggregator@0.5.0": {
            "aurelia-logging": "github:aurelia/logging@0.5.0"
        },
        "github:aurelia/framework@0.12.0": {
            "aurelia-binding": "github:aurelia/binding@0.7.0",
            "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.8.1",
            "aurelia-loader": "github:aurelia/loader@0.7.0",
            "aurelia-logging": "github:aurelia/logging@0.5.0",
            "aurelia-metadata": "github:aurelia/metadata@0.6.0",
            "aurelia-path": "github:aurelia/path@0.7.0",
            "aurelia-task-queue": "github:aurelia/task-queue@0.5.0",
            "aurelia-templating": "github:aurelia/templating@0.12.0",
            "core-js": "npm:core-js@0.9.15"
        },
        "github:aurelia/history-browser@0.5.0": {
            "aurelia-history": "github:aurelia/history@0.5.0",
            "core-js": "npm:core-js@0.9.15"
        },
        "github:aurelia/http-client@0.9.1": {
            "aurelia-path": "github:aurelia/path@0.7.0",
            "core-js": "npm:core-js@0.9.15"
        },
        "github:aurelia/loader-default@0.8.0": {
            "aurelia-loader": "github:aurelia/loader@0.7.0",
            "aurelia-metadata": "github:aurelia/metadata@0.6.0"
        },
        "github:aurelia/loader@0.7.0": {
            "aurelia-html-template-element": "github:aurelia/html-template-element@0.2.0",
            "aurelia-path": "github:aurelia/path@0.7.0",
            "core-js": "npm:core-js@0.9.15",
            "webcomponentsjs": "github:webcomponents/webcomponentsjs@0.6.3"
        },
        "github:aurelia/metadata@0.6.0": {
            "core-js": "npm:core-js@0.9.15"
        },
        "github:aurelia/route-recognizer@0.5.0": {
            "core-js": "npm:core-js@0.9.15"
        },
        "github:aurelia/router@0.9.0": {
            "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.8.1",
            "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.5.0",
            "aurelia-history": "github:aurelia/history@0.5.0",
            "aurelia-path": "github:aurelia/path@0.7.0",
            "aurelia-route-recognizer": "github:aurelia/route-recognizer@0.5.0",
            "core-js": "npm:core-js@0.9.15"
        },
        "github:aurelia/templating-binding@0.12.0": {
            "aurelia-binding": "github:aurelia/binding@0.7.0",
            "aurelia-logging": "github:aurelia/logging@0.5.0",
            "aurelia-templating": "github:aurelia/templating@0.12.0"
        },
        "github:aurelia/templating-resources@0.12.0": {
            "aurelia-binding": "github:aurelia/binding@0.7.0",
            "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.8.1",
            "aurelia-logging": "github:aurelia/logging@0.5.0",
            "aurelia-task-queue": "github:aurelia/task-queue@0.5.0",
            "aurelia-templating": "github:aurelia/templating@0.12.0",
            "core-js": "npm:core-js@0.9.15"
        },
        "github:aurelia/templating-router@0.13.0": {
            "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.8.1",
            "aurelia-metadata": "github:aurelia/metadata@0.6.0",
            "aurelia-path": "github:aurelia/path@0.7.0",
            "aurelia-router": "github:aurelia/router@0.9.0",
            "aurelia-templating": "github:aurelia/templating@0.12.0"
        },
        "github:aurelia/templating@0.12.0": {
            "aurelia-binding": "github:aurelia/binding@0.7.0",
            "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.8.1",
            "aurelia-html-template-element": "github:aurelia/html-template-element@0.2.0",
            "aurelia-loader": "github:aurelia/loader@0.7.0",
            "aurelia-logging": "github:aurelia/logging@0.5.0",
            "aurelia-metadata": "github:aurelia/metadata@0.6.0",
            "aurelia-path": "github:aurelia/path@0.7.0",
            "aurelia-task-queue": "github:aurelia/task-queue@0.5.0",
            "core-js": "npm:core-js@0.9.15"
        },
        "github:systemjs/plugin-css@0.1.11": {
            "clean-css": "npm:clean-css@3.1.9",
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "path": "github:jspm/nodelibs-path@0.1.0"
        }
    }
});

