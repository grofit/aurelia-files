define(['exports', 'aurelia-framework', '../generators/template-generator'], function (exports, _aureliaFramework, _generatorsTemplateGenerator) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer.call(target); Object.defineProperty(target, key, descriptor); }

  var GenerateElement = (function () {
    var _instanceInitializers = {};

    function GenerateElement(element, viewSlot, viewCompiler, resourceRegistry, templateGenerator) {
      _classCallCheck(this, _GenerateElement);

      _defineDecoratedPropertyDescriptor(this, 'usingModel', _instanceInitializers);

      this.element = element;
      this.viewSlot = viewSlot;
      this.viewCompiler = viewCompiler;
      this.resourceRegistry = resourceRegistry;
      this.templateGenerator = _generatorsTemplateGenerator.TemplateGenerator;
    }

    var _GenerateElement = GenerateElement;

    _createDecoratedClass(_GenerateElement, [{
      key: 'attached',
      value: function attached() {
        var options = {
          usingModel: this.usingModel
        };

        var generatedElements = templateGenerator.generateTemplate(options);
        var documentFragment = document.createDocumentFragment();
        generatedElements.forEach(function (generatedElement) {
          documentFragment.appendChild(generatedElement);
        });

        console.log('Generated ' + generatedElements.length + ' Elements');
        var resources = new _aureliaFramework.ViewResources(this.resourceRegistry);
        var viewFactory = this.viewCompiler.compile(documentFragment, resources);
        var view = viewFactory.create(this.element, this.usingModel);
        this.viewSlot.add(view);
      }
    }, {
      key: 'usingModel',
      decorators: [_aureliaFramework.bindable],
      initializer: null,
      enumerable: true
    }], null, _instanceInitializers);

    GenerateElement = (0, _aureliaFramework.inject)(Element, _aureliaFramework.ViewSlot, _aureliaFramework.ViewCompiler, _aureliaFramework.ResourceRegistry, _generatorsTemplateGenerator.TemplateGenerator)(GenerateElement) || GenerateElement;
    GenerateElement = (0, _aureliaFramework.noView)(GenerateElement) || GenerateElement;
    GenerateElement = (0, _aureliaFramework.customElement)('generate')(GenerateElement) || GenerateElement;
    return GenerateElement;
  })();

  exports.GenerateElement = GenerateElement;
});